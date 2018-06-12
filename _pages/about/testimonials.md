---
layout: single
permalink: /testimonial/
author_profile: false
sidebar:
   nav: "about" 
testimonials:
  - message: We use Justice Law in all our endeavours. They offer an unparalleled service when it comes to running a business.
    image: "/images/joice.jpeg"
    name: Joice Carmold
    institution: University A
  - message: Justice Law are the best of the best. Being local, they care about people and have strong ties to the community.
    image: "/images/peter.jpeg"
    name: Peter Rottenburg
    institution: University B
  - message: Justice Law were everything we could have hoped for when buying our first home. Highly recommended to all.
    image: "/images/gibblesto.jpeg"
    name: D. and G. Gibbleston
    institution: University C
---
<p>Justice Law is professional representation. Practicing for over 50 years, our team have the knowledge and skills to get you results.</p>

<div class="testimonials">
  {% for testimonial in page.testimonials %}
    <blockquote class="testimonial">
      <p class="testimonial-message">{{ testimonial.message }}</p>
      <p class="testimonial-author">
        <img src="{{ testimonial.image }}" alt=""> {{ testimonial.name }}, {{ testimonial.institution}}
      </p>
    </blockquote>
  {% endfor %}
</div>