---
layout: base.njk
title: Services
eleventyNavigation:
  key: Services
  order: 2
---

<!-- Watermark Logo -->
<img src="{{ '/assets/logo-mark.svg' | url }}" class="bg-logo-watermark" alt="" aria-hidden="true">

<!-- Header (White) -->
<section class="section-white">
    <div class="container">
        <!-- Header -->
        <div class="service-header animate-entry" style="margin-bottom: 0;">
            <h1>Services</h1>
            <p style="color: var(--text-muted); margin-bottom: 1.5rem; max-width: 600px;">
                Choose a starting point. Most clients begin with an assessment or advisory retainer.
            </p>
            <div class="service-cta-button" style="gap: 0.75rem;">
                <a href="{{ '/contact/' | url }}" class="btn btn-primary btn-sm">Request a consult</a>

            </div>
            <div class="tag-pills">
                 <a href="#assessments" class="tag-pill">Assessments</a>
                 <a href="#grc" class="tag-pill">GRC</a>
                 <a href="#incident-readiness" class="tag-pill">Incident readiness</a>
                 <a href="#strategic-advisory" class="tag-pill">Strategic advisory</a>
                 <a href="#operations-advisory" class="tag-pill">Operations advisory</a>
            </div>
        </div>
    </div>
</section>

{% for category in collections.services -%}
<!-- {{ category.title }} -->
{% set section_class = "section-white" if loop.index0 % 2 == 0 else "section-light" %}
<section id="{{ category.id }}" class="{{ section_class }}">
    <div class="container">
        <div class="service-section animate-entry delay-{{ loop.index }}"{% if category.id != 'operations-advisory' %} style="margin-bottom: 0;"{% endif %}> 
            <h2>{{ category.title }}</h2>
            <p>{{ category.description }}</p>
            {% set grid_class = "grid-2" %}
            {% if category.services | length == 3 %}
                {% set grid_class = "grid-3" %}
            {% elif category.services | length == 4 %}
                {% set grid_class = "grid-4" %}
            {% endif %}
            <div class="grid {{ grid_class }}">
{%- for service in category.services -%}
                <div class="service-card">
                    <h3>{{ service.title }}</h3>
                    <div class="service-meta">
                        <strong>Who it's for:</strong> {{ service.who_for }}
                    </div>
                    <ul class="check-list">
{%- for deliverable in service.deliverables %}
                        <li>{{ deliverable }}</li>
{%- endfor %}
                    </ul>
                    <div style="margin-top: auto;">
                        <a href="{{ ('/contact/?topic=' + (service.contact_topic | urlencode)) | url }}" class="btn btn-primary btn-sm">{{ service.button_text }}</a>
                    </div>
                </div>
{%- endfor %}
            </div>
        </div>

        {%- if category.id == 'operations-advisory' %}
        <!-- Margin separating ops from bottom content -->
        <div style="margin-bottom: 4rem;"></div>

        <!-- Important Note Box -->
        <div class="animate-entry delay-6" style="margin-bottom: 2rem; background-color: white; border: 1px solid var(--color-slate-200); border-radius: var(--radius-lg); padding: 1.5rem;">
            <h3 style="font-size: 0.9rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--color-slate-900);">Important note</h3>
            <p style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.5;">These services are operational consulting and coordination. We do not provide legal or tax advice. If needed, we can collaborate with your CPA or accounting firm.</p>
        </div>

        <!-- Monthly Financials CTA -->
        <div class="animate-entry approach-cta delay-6" style="background-color: var(--color-slate-100); border: 1px solid var(--color-slate-200);border-radius: var(--radius-lg); padding: 2rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
             <div>
                <h3 style="font-weight: 700; font-size: 1rem; color: var(--color-slate-900); margin-bottom: 0.25rem;">Want monthly financials you can trust?</h3>
                <p style="font-size: 0.9rem; color: var(--color-slate-600);">We'll help you build a repeatable close process and reporting cadence.</p>
            </div>
            <a href="{{ '/contact/?topic=Operations%20Advisory' | url }}" class="btn btn-primary btn-sm">Request a consult</a>
        </div>
        {%- endif %}
    </div>
</section>
{%- endfor %}
