---
layout: splash
title: "pandapower"
permalink: /
header:
  overlay_color: "#2980B9"
  cta_label: "<i class='fas fa-download'></i> Install Now"
  cta_url: "http://pandapower.readthedocs.io/en/v1.5.1/getting_started/installation.html"
excerpt: "An easy to use open source tool for power system modeling, analysis and optimization with a high degree of automation."
feature_row:
  - image_path: /assets/images/mm-customizable-feature.png
    title: "Electric Modeling"
    excerpt: "Includes thoroughly validated equivalent circuit models for lines, transformers, switches and more."
    url: "http://pandapower.readthedocs.io/en/stable/elements.html"
    btn_class: "btn--primary"
    btn_label: "Learn More"
  - image_path: /assets/images/mm-responsive-feature.png
    title: "Power System Analysis"
    excerpt: "Supports power flow, optimal power flow, state estimation, short-circuit calculation and topological graph searches."
    url: "http://pandapower.readthedocs.io/en/v1.5.1/powerflow.html"
    btn_class: "btn--primary"
    btn_label: "Learn More"
  - image_path: /assets/images/mm-free-feature.png
    title: "Free and Open"
    excerpt: "Published under a BSD License and therefore free to use, modify and share however you want."
    url: "http://pandapower.readthedocs.io/en/v1.5.1/about/license.html"
    btn_class: "btn--primary"
    btn_label: "View License"
slider:
  text_color: white
  shadow_color: black
  slides: 
    - image: "/assets/images/mm-responsive-feature.png"
      slide_html:
    - image: "/assets/images/mm-responsive-feature.png"
      slide_html: "Shirley, do you own a Ferrari?"
    - image: "/assets/images/mm-responsive-feature.png"
      slide_html: "Yes, my life is your dream."
---

{% include feature_row id="intro" type="center" %}

{% include feature_row %}

{% include carousel.html name="Example" data=site.data.carousel %}

{% include slider.html height="50" unit="%" transition="slide" duration="7" %}