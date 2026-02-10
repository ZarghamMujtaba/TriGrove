---
layout: base.njk
title: Advisors
---

<!-- Watermark Logo -->
<img src="{{ '/assets/logo-mark.svg' | url }}" class="bg-logo-watermark" alt="" aria-hidden="true">

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
          <option value="all" selected>All expertise</option>
          <option value="architecture">Architecture</option>
          <option value="cloud">Cloud</option>
          <option value="due diligence">Due diligence</option>
          <option value="grc">GRC</option>
          <option value="iam">IAM</option>
          <option value="incident response">Incident Response</option>
          <option value="iso 27001">ISO 27001</option>
          <option value="operations">Operations</option>
          <option value="process">Process</option>
          <option value="recovery">Recovery</option>
          <option value="reporting">Reporting</option>
          <option value="soc 2">SOC 2</option>
          <option value="tabletop">Tabletop</option>
          <option value="tprm">TPRM</option>
          <option value="vendor risk">Vendor Risk</option>
        </select>
      </div>
    </div>

<!-- Advisors Grid -->
<div class="advisors-grid">
{% for advisor in advisors %}
<div class="advisor-card" data-specialty="{{ advisor.specialty_line | lower }}">
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
<a href="{{ '/contact/' | url }}" class="btn-consult">Request consult</a>
<a href="{{ advisor.related_services_link | url }}" class="related-services">Related services</a>
</div>
{% endfor %}
</div>

<!-- Call to Action Section -->
<div class="cta-section">
<div class="cta-content">
<h2>Need a specific specialty?</h2>
<p>Describe your situation and we'll match the right advisor(s).</p>
</div>
<a href="{{ '/contact/' | url }}" class="btn-consult-cta">Request a consult</a>
</div>
  </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const filterSelect = document.getElementById('expertise-filter');
  const advisorCards = document.querySelectorAll('.advisor-card');
  
  filterSelect.addEventListener('change', function() {
    const selectedValue = this.value.toLowerCase();
    
    advisorCards.forEach(card => {
      const specialtyLine = card.getAttribute('data-specialty');
      
      if (selectedValue === 'all') {
        card.style.display = '';
      } else {
        // Check if the specialty line contains the selected specialty
        if (specialtyLine.includes(selectedValue)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      }
    });
  });
});
</script>
