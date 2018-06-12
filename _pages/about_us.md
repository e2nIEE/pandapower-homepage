---
layout: single
permalink: /about_us/
author_profile: true
classes:
  - wide
testimonials:
  - message: We use Justice Law in all our endeavours. They offer an unparalleled service when it comes to running a business.
    image: "/images/joice.jpeg"
    name: Joice Carmold
  - message: Justice Law are the best of the best. Being local, they care about people and have strong ties to the community.
    image: "/images/peter.jpeg"
    name: Peter Rottenburg
developers:
  - name: "Leon Thurner"
    image: "/assets/images/leon.jpg"
    text: "..."
  - name: "Alexander Scheidler"
    image: "/assets/images/alex.jpg"
    text: "came up with the idea to pandapower ..."
  - name: "Florian Schäfer"
    image: "/assets/images/flo.jpg"
    text: "..."
---
{% capture to_the_top %}<div style="text-align: right"> <font size="4"><a href="{{ "/about_us/#" | relative_url }}">Back to the top</a></font></div>{% endcapture %}

# About us

pandapower is a joint development of the research group Energy Management and Power System Operation, University of Kassel and the Department for Distribution System Operation at the Fraunhofer Institute for Energy Economics and Energy System Technology (IEE), Kassel.

[<img src="https://www.uni-kassel.de/eecs/fileadmin/datas/fb16/Fachgebiete/energiemanagement/e2n.png">](https://www.uni-kassel.de/eecs/en/fachgebiete/e2n/home.html)
[<img src="https://www.uni-kassel.de/eecs/fileadmin/datas/fb16/Fachgebiete/energiemanagement/iee.png">](https://www.iee.fraunhofer.de/en.html)

And these are some of the people behind pandapower:

<div class="authors">
  {% for developer in page.developers %}
    <p>
    <img style="padding:2px 2px 2px 2px; border:2px solid black;" src="{{ developer.image | relative_url }}" width="120" align="left"/> 
    <span style="margin-left: 15px; margin-top: -5px; display:inline-block; max-width:500px;">
        <b>{{ developer.name }}</b> {{ developer.text }}
    </span>
    <BR CLEAR="left"/> 
    </p>
  {% endfor %}
</div>

[See Full List of authors and contributors](http://pandapower.readthedocs.io/en/stable/about/authors.html){: .btn .btn--success .btn--large}

{{ to_the_top }}

