---
layout: splash
title: ""
permalink: /
header:
  overlay_image: /images/home/background.png
  cta_label: "<i class='fas fa-download'></i> Install Now"
  cta_label2: "<i class='fas fa-envelope'></i> Get Updates"
  cta_url: "/start/#install/"
  cta_url2: "/contact/#list/"
  subtitle: <a href='https://pypi.python.org/pypi/pandapower'> <img src='{{"/images/home/shield_python_versions.svg" | relative_url}}'></a>
  
shields:
  - icon: 'https://badge.fury.io/py/pandapower.svg'
    url: https://pypi.python.org/pypi/pandapower
  - icon: 'images/home/shield_python_versions.svg'
    url: https://pypi.python.org/pypi/pandapower
  - icon: https://readthedocs.org/projects/pandapower/badge/
    url: http://pandapower.readthedocs.io/
  - icon: 'https://codecov.io/github/lthurner/pandapower/coverage.svg?branch=develop'
    url: https://codecov.io/github/lthurner/pandapower?branch=master
  - icon: 'https://api.codacy.com/project/badge/Grade/5d749ed6772e47f6b84fb9afb83903d3'
    url: 'https://www.codacy.com/app/lthurner/pandapower/dashboard'
  - icon: 'images/home/shield_bsd.svg'
    url: https://github.com/lthurner/pandapower/blob/master/LICENSE
    
excerpt: An easy to use open source tool for power system modeling, analysis and optimization with a high degree of automation.
feature_row:
  - image_path: /images/home/electric_modeling.png
    title: "Electric Modeling"
    excerpt: "Includes thoroughly validated equivalent circuit models for lines, transformers, switches and more."
    url: "about/#models"
    btn_class: "btn--primary"
    btn_label: "Learn More"
  - image_path: /images/home/power_flow.png
    title: "Power System Analysis"
    excerpt: "Supports power flow, optimal power flow, state estimation, short-circuit calculation and topological graph searches."
    url: "about/#analysis"
    btn_class: "btn--primary"
    btn_label: "Learn More"
  - image_path: /images/home/osi_symbol.png
    title: "Free and Open"
    excerpt: "Published under a BSD License and therefore free to use, modify and share however you want."
    url: "https://github.com/lthurner/pandapower"
    btn_class: "btn--primary"
    btn_label: "Explore on github"
---

To get started with pandapower, just

1. Install pandapower through pip:

        pip install pandapower

2. Create a simple network:

        import pandapower as pp
        net = pp.create_empty_network() 
        b1 = pp.create_bus(net, vn_kv=20.)
        b2 = pp.create_bus(net, vn_kv=20.)
        pp.create_line(net, from_bus=b1, to_bus=b2, length_km=2.5, std_type="NAYY 4x50 SE")   
        pp.create_ext_grid(net, bus=b1)
        pp.create_load(net, bus=b2, p_kw=1000)

3. Run a power flow:

        pp.runpp(net)
        
4. And check the results:

        print(net.res_bus.vm_pu)
        print(net.res_line.loading_percent)

But of course pandapower can do much more than that - find out what on this page!

{% include feature_row id="intro" type="center" %}
    
{% include feature_row %}
