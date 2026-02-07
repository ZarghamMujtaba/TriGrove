---
layout: base.njk
title: Home
---

{% include "hero.njk" %}

<img src="/assets/logo-mark.svg" class="bg-logo-watermark" alt="" aria-hidden="true">

<!-- Features Section (Light) -->
<section class="section-light">
    <div class="container">
        <div class="section-header mb-8">
            <h2>What we help you achieve</h2>
            <p>Outcomes-first work that supports leadership decisions and operational delivery.</p>
        </div>

        <div class="grid grid-3">
            <div class="card">
                <h3>Assessments & roadmaps</h3>
                <p>Know where you stand and what to do next. Prioritized and scoped to your team.</p>
                <a href="/services/#assessments" class="card-link">View details &rarr;</a>
            </div>
            <div class="card">
                <h3>GRC / audit readiness</h3>
                <p>Evidence planning and control alignment for SOC 2, ISO 27001, and customer assurance.</p>
                <a href="/services/#grc" class="card-link">View details &rarr;</a>
            </div>
            <div class="card">
                <h3>Operations advisory</h3>
                <p>Bookkeeping workflow, close cadence, AP/AR support, and management reporting.</p>
                <a href="/services/#operations-advisory" class="card-link">View details &rarr;</a>
            </div>
        </div>
    </div>
</section>

<!-- Process Section (White) -->
<section class="section-white">
    <div class="container">
        <div class="section-header mb-8">
            <h2>How engagements work</h2>
        </div>

        <div class="grid grid-3">
            <div class="card" style="background-color: var(--color-slate-50); border:none;">
                <h3>1) Discovery</h3>
                <p>A short call to understand objectives, constraints, and urgency.</p>
            </div>
            <div class="card" style="background-color: var(--color-slate-50); border:none;">
                <h3>2) Scope & plan</h3>
                <p>We propose deliverables, timeline, and the right advisor mix.</p>
            </div>
            <div class="card" style="background-color: var(--color-slate-50); border:none;">
                <h3>3) Delivery</h3>
                <p>Actionable outputs and repeatable systems—built for real teams.</p>
            </div>
        </div>

        <div style="margin-top: 4rem; background: var(--color-slate-100); padding: 2rem; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
            <div>
                <h3 style="font-size: 1.1rem; margin-bottom: 0.25rem; font-weight: 700;">Not sure where to start?</h3>
                <p style="color: var(--text-muted); font-size: 0.9rem;">We'll recommend a first engagement that fits your timelines.</p>
            </div>
            <a href="/contact/" class="btn btn-primary">Request a consult</a>
        </div>
    </div>
</section>

<!-- Advisors Preview (Light) -->
<section class="section-light">
    <div class="container">
        <div class="section-header mb-8">
            <h2>Featured advisors</h2>
            <p>A curated network of independent specialists available for consultation.</p>
        </div>

        <div class="grid grid-3">
            <div class="card" style="display: flex; gap: 1rem; align-items: start;">
                 <div style="background: #a8d5ed; color: #1E5E87; font-weight: 700; width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; border-radius: 8px; flex-shrink: 0;">AR</div>
                 <div>
                    <h3 style="margin-bottom: 0.25rem; font-size: 1rem;">Advisor (Sample)</h3>
                    <p style="font-size: 0.75rem; margin-bottom: 0.5rem;">GRC • SOC 2 • ISO 27001</p>
                    <div class="tags" style="margin-bottom: 0.75rem;">
                        <span class="tag">GRC</span>
                        <span class="tag">SOC2</span>
                        <span class="tag">ISO</span>
                    </div>
                    <a href="/advisors/" class="card-link" style="margin-top: 0.5rem; font-size: 0.8rem;">Meet advisors</a>
                 </div>
            </div>
             <div class="card" style="display: flex; gap: 1rem; align-items: start;">
                 <div style="background: #a8d5ed; color: #1E5E87; font-weight: 700; width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; border-radius: 8px; flex-shrink: 0;">CS</div>
                 <div>
                    <h3 style="margin-bottom: 0.25rem; font-size: 1rem;">Advisor (Sample)</h3>
                    <p style="font-size: 0.75rem; margin-bottom: 0.5rem;">Cloud • Architecture • IAM</p>
                    <div class="tags" style="margin-bottom: 0.75rem;">
                        <span class="tag">Cloud</span>
                        <span class="tag">Architecture</span>
                    </div>
                    <a href="/advisors/" class="card-link" style="margin-top: 0.5rem; font-size: 0.8rem;">Meet advisors</a>
                 </div>
            </div>
             <div class="card" style="display: flex; gap: 1rem; align-items: start;">
                 <div style="background: #a8d5ed; color: #1E5E87; font-weight: 700; width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; border-radius: 8px; flex-shrink: 0;">OP</div>
                 <div>
                    <h3 style="margin-bottom: 0.25rem; font-size: 1rem;">Advisor (Sample)</h3>
                    <p style="font-size: 0.75rem; margin-bottom: 0.5rem;">Operations • Reporting • Business</p>
                    <div class="tags" style="margin-bottom: 0.75rem;">
                        <span class="tag">Ops</span>
                        <span class="tag">Reporting</span>
                    </div>
                    <a href="/advisors/" class="card-link" style="margin-top: 0.5rem; font-size: 0.8rem;">Meet advisors</a>
                 </div>
            </div>
        </div>
    </div>
</section>
