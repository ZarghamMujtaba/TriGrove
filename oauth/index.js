const { AuthorizationCode } = require('simple-oauth2');
const http = require('http');
const url = require('url');

const client = new AuthorizationCode({
    client: {
        id: process.env.OAUTH_CLIENT_ID,
        secret: process.env.OAUTH_CLIENT_SECRET,
    },
    auth: {
        tokenHost: 'https://github.com',
        tokenPath: '/login/oauth/access_token',
        authorizePath: '/login/oauth/authorize',
    },
});

// Netlify CMS expects a specific response format
const server = http.createServer(async (req, res) => {
    const { query, pathname } = url.parse(req.url, true);

    // 1. Redirect to GitHub
    if (pathname === '/auth') {
        const authorizationUri = client.authorizeURL({
            redirect_uri: `https://${req.headers.host}/callback`,
            scope: 'repo,user',
        });
        res.writeHead(302, { Location: authorizationUri });
        res.end();
        return;
    }

    // 2. Handle Callback
    if (pathname === '/callback') {
        const { code } = query;
        const options = {
            code,
            redirect_uri: `https://${req.headers.host}/callback`,
        };

        try {
            const accessToken = await client.getToken(options);
            const token = accessToken.token.access_token;

            // Return HTML with postMessage to close the popup
            const script = `
        <script>
          (function() {
            function receiveMessage(e) {
              console.log("receiveMessage %o", e);
              // Send handshake to the window that opened this popup
              window.opener.postMessage(
                'authorization:github:success:{"token":"${token}","provider":"github"}',
                e.origin
              );
            }
            window.addEventListener("message", receiveMessage, false);
            // Notify opener that we are ready
            window.opener.postMessage("authorizing:github", "*");
          })();
        </script>
      `;

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(script);
        } catch (error) {
            console.error('Access Token Error', error.message);
            res.writeHead(500);
            res.end('Authentication failed');
        }
    } else {
        res.writeHead(404);
        res.end('Not found');
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
