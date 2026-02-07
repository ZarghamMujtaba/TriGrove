---
layout: base.njk
title: Contact
---

<!-- Watermark Logo -->
<img src="/assets/logo-mark.svg" class="bg-logo-watermark" alt="" aria-hidden="true">

<section class="section-light">
    <div class="container" style="padding: 4rem 0;">
        <!-- Page Header -->
        <div style="text-align: center; margin-bottom: 3rem;">
            <h1 style="font-size: 2.5rem; font-weight: 700; margin-bottom: 0.75rem;">Contact</h1>
            <p style="color: var(--text-muted); font-size: 1.125rem;">Tell us what you're trying to solve. We'll respond with next steps.</p>
        </div>
        <!-- Two Column Layout -->
        <div class="contact-grid">
            <!-- Left Column: Book a consult -->
            <div>
                <div style="background-color: white; border: 1px solid var(--color-slate-200); border-radius: var(--radius-lg); padding: 2rem;">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;">Book a consult</h2>
                    <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.5rem;">Use the form and include your preferred times. If you have a booking link (Calendly), you can add it here later.</p>
                    <div style="background-color: var(--color-slate-50); border-radius: var(--radius-md); padding: 1.5rem;">
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
                <div style="background-color: white; border: 1px solid var(--color-slate-200); border-radius: var(--radius-lg); padding: 2.5rem; box-shadow: var(--shadow-sm);">
                    <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 2rem;">Request an assessment</h2>
                    <form action="https://formspree.io/f/mjgevoda" method="POST" class="contact-form">
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
                        <!-- Topic Dropdown -->
                        <div class="form-group">
                            <label for="topic" class="form-label">What do you need help with?</label>
                            <select id="topic" name="topic" class="form-input">
                                <option value="">Select one...</option>
                                <option value="Security Assessment">Security Assessment + Roadmap</option>
                                <option value="SOC 2 Readiness">SOC 2 / ISO readiness support</option>
                                <option value="Vendor Risk">Vendor risk program (TPRM)</option>
                                <option value="vCISO Support">vCISO monthly support</option>
                                <option value="Incident Response">Incident response planning</option>
                                <option value="Operations Advisory">Operations advisory</option>
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
                </div>
            </div>
        </div>
    </div>
</section>
