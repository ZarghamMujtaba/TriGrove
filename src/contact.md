---
layout: base.njk
title: Contact
eleventyNavigation:
  key: Request a consult
  order: 5
---

<!-- Watermark Logo -->
<img src="{{ '/assets/logo-mark.svg' | url }}" class="bg-logo-watermark" alt="" aria-hidden="true">

<section class="section-light contact-section">
    <div class="container" style="padding: 1rem 0;">
        <!-- Page Header -->
        <div style="text-align: center; margin-bottom: 2rem;">
            <h1 style="font-size: 2.5rem; font-weight: 700; margin-bottom: 0.75rem;">Contact</h1>
            <p class="contact-subtitle" style="color: var(--text-muted); font-size: 1.125rem;">Tell us what you're trying to solve. We'll respond with next steps.</p>
        </div>
        <!-- Two Column Layout -->
        <div class="contact-grid">
            <!-- Left Column: Book a consult -->
            <div>
                <div style="background-color: white; border: 1px solid var(--color-slate-200); border-radius: var(--radius-lg); padding: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;">Book a consult</h2>
                    <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.5rem;">Use the form and include your preferred times. If you have a booking link (Calendly), you can add it here later.</p>
                    <div class="typical-engagements-box" style="background-color: var(--color-slate-50); border-radius: var(--radius-md); padding: 1.5rem;">
                        <h3 style="font-size: 1rem; font-weight: 600; margin-bottom: 1rem; color: var(--color-slate-900);">Typical engagements</h3>
                        <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.5rem;">
                            <li style="padding-left: 1.5rem; position: relative; color: var(--text-muted); font-size: 0.95rem;"><span style="position: absolute; left: 0; color: var(--color-brand-primary);">•</span>Security Assessment + Roadmap</li>
                            <li style="padding-left: 1.5rem; position: relative; color: var(--text-muted); font-size: 0.95rem;"><span style="position: absolute; left: 0; color: var(--color-brand-primary);">•</span>SOC 2 / ISO readiness support</li>
                            <li style="padding-left: 1.5rem; position: relative; color: var(--text-muted); font-size: 0.95rem;"><span style="position: absolute; left: 0; color: var(--color-brand-primary);">•</span>Vendor risk program (TPRM)</li>
                            <li style="padding-left: 1.5rem; position: relative; color: var(--text-muted); font-size: 0.95rem;"><span style="position: absolute; left: 0; color: var(--color-brand-primary);">•</span>vCISO monthly support</li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- Right Column: Request an assessment form -->
            <div>
                <div id="contact-form-container" style="background-color: white; border: 1px solid var(--color-slate-200); border-radius: var(--radius-lg); padding: 2.5rem; box-shadow: var(--shadow-sm);">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 2rem;">Request an assessment</h2>
                    <form id="contact-form" action="https://formspree.io/f/mjgevoda" method="POST" class="contact-form">
                        <!-- Name Field -->
                        <div class="form-group">
                            <label for="name" class="form-label">Your name</label>
                            <input type="text" id="name" name="name" class="form-input" required>
                        </div>
                        <!-- Email Field -->
                        <div class="form-group">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" id="email" name="_replyto" class="form-input" required>
                        </div>
                        <div class="form-group">
                            <label for="topic" class="form-label">What do you need help with?</label>
                            <select id="topic" name="topic" class="form-input">
                                <option value="">Select one...</option>
{%- for category in services.categories -%}
{%- for service in category.services %}
                                <option value="{{ service.contact_topic }}">{{ service.title }}</option>
{%- endfor -%}
{%- endfor %}
                                <option value="Other">Other / Not sure</option>
                            </select>
                        </div>
                        <!-- Message Field -->
                        <div class="form-group">
                            <label for="message" class="form-label">Message</label>
                            <textarea id="message" name="message" rows="5" class="form-textarea" placeholder="Briefly describe your environment, timeline, and goals..." required></textarea>
                        </div>
                        <!-- Honeypot Spam Protection -->
                        <input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off">
                        <!-- Hidden Fields for Formspree -->
                        <input type="hidden" name="_subject" value="New Contact Request from TriGrove Website">
                        <!-- Submit Button -->
                        <button type="submit" class="btn btn-primary" style="width: 100%;">Send</button>
                        <p style="font-size: 0.8rem; color: var(--color-slate-500); margin-top: 1rem; text-align: center;">
                            Form submissions will be sent to your business email via Formspree.
                        </p>
                    </form>

                    <!-- Success Message (Hidden by default) -->
                    <div id="success-message" style="display: none; text-align: center; padding: 2rem;">
                        <div style="width: 64px; height: 64px; margin: 0 auto 1.5rem; background-color: #10b981; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                        <h3 style="font-size: 1.5rem; font-weight: 700; color: var(--color-slate-900); margin-bottom: 0.5rem;">Message sent successfully!</h3>
                        <p style="color: var(--color-slate-600); margin-bottom: 2rem;">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                        <button id="back-button" class="btn btn-primary" style="width: auto; padding: 0.75rem 2rem;">Go back to form</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const formContainer = document.getElementById('contact-form-container');
    const successMessage = document.getElementById('success-message');
    const backButton = document.getElementById('back-button');

    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        
        // Submit to Formspree
        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                // Show success message
                form.style.display = 'none';
                successMessage.style.display = 'block';
            } else {
                alert('Oops! There was a problem submitting your form. Please try again.');
            }
        }).catch(error => {
            alert('Oops! There was a problem submitting your form. Please try again.');
        });
    });

    // Handle back button click
    backButton.addEventListener('click', function() {
        // Hide success message
        successMessage.style.display = 'none';
        // Show form
        form.style.display = 'block';
        // Reset/clear the form
        form.reset();
        // Scroll to top of form
        formContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    // Auto-fill topic from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const topic = urlParams.get('topic');
    if (topic) {
        const topicSelect = document.getElementById('topic');
        for (let option of topicSelect.options) {
            if (option.value === topic) {
                option.selected = true;
                break;
            }
        }
    }
});
</script>
