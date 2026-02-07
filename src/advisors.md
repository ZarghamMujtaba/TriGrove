---
layout: base.njk
title: Advisors
---

<!-- Watermark Logo -->
<img src="/assets/logo-mark.svg" class="bg-logo-watermark" alt="" aria-hidden="true">

<!-- Advisors Page Content -->
<section class="advisors-section">
  <div class="container">
    <!-- Header Section -->
    <div class="advisors-header">
      <div class="header-content">
        <h1>Advisors available for consultation</h1>
        <p class="subtitle">A curated network of independent specialists engaged on a per-engagement basis.</p>
        <p class="disclaimer">Advisors are not employees. Availability may vary by engagement and schedule.</p>
      </div>
      <div class="filter-dropdown">
        <label for="expertise-filter">Filter</label>
        <select id="expertise-filter">
          <option value="all">All expertise</option>
          <option value="grc">GRC</option>
          <option value="security">Security</option>
          <option value="incident">Incident Response</option>
          <option value="operations">Operations</option>
        </select>
      </div>
    </div>

<!-- Advisors Grid -->
<div class="advisors-grid">
{% for advisor in advisors %}
<div class="advisor-card" data-category="{{ advisor.filter_category }}">
<div class="card-header">
<div class="avatar">{{ advisor.initials }}</div>
<div class="advisor-info">
<h3>{{ advisor.name }}</h3>
<p class="specialty">{{ advisor.specialty_line }}</p>
</div>
</div>
<p class="bio">{{ advisor.bio }}</p>
<div class="tags">
{% for tag in advisor.tags %}<span class="tag">{{ tag }}</span>{% endfor %}
</div>
<button class="btn-consult">Request consult</button>
<a href="{{ advisor.related_services_link }}" class="related-services">Related services</a>
</div>
{% endfor %}
</div>

<!-- Call to Action Section -->
<div class="cta-section">
<div class="cta-content">
<h2>Need a specific specialty?</h2>
<p>Describe your situation and we'll match the right advisor(s).</p>
</div>
<button class="btn-consult-cta">Request a consult</button>
</div>
  </div>
</section>

