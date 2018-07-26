---
layout: single
title: Contact
permalink: /contact/
author_profile: true
classes:
  - wide
developers:
  - name: "Leon Thurner"
    nickname: Leon
    email: leon.thurner@uni-kassel.de
    image: "/images/contact/Thurner.jpg"
    text: "accompanied and shaped the journey of pandapower from a few scripts in a folder to the fully fledged open source power system analysis tool it is today."
  - name: "Alexander Scheidler"
    nickname: Alex
    email: alexander.scheidler@iee.fraunhofer.de
    image: "/images/contact/Scheidler.jpg"
    text: "came up with the idea to pandapower in 2013 and never looked back. Has been coordinating and shaping the development of pandapower ever since."
  - name: "Florian Schäfer"
    nickname: Florian
    email: florian.schaefer@uni-kassel.de
    image: "/images/contact/Schaefer.jpg"
    text: "was tasked with accelerating the power flow when he joined the team in 2016 and used the power of numba to make pandapower one of the fastest power flow solvers out there."
  - name: "Jan-Hendrik Menke"
    nickname: Jan-Hendrik
    email: jan-hendrik.menke@uni-kassel.de
    image: "/images/contact/Menke.jpg"
    text: ""
  - name: "Julian Dollichon"
    nickname: Julian
    email: julian.dollichon@iee.fraunhofer.de
    image: "/images/contact/Dollichon.jpg"
    text: ""
  - name: "Friederike Meier"
    nickname: Friederike
    email: friederike.meier@iee.fraunhofer.de
    image: "/images/contact/Meier.jpg"
    text: ""
  - name: "Steffen Meinecke"
    nickname: Steffen
    email: steffen.meinecke@uni-kassel.de
    image: "/images/contact/Meinecke.jpg"
    text: ""    
---
<p></p>

## Mailing List <a name="list"></a>
If you want to receive updates about new versions and other news about pandapower, you can subscribe to the pandapower mailing list:

[<i class='fas fa-envelope'></i> Subscribe](mailto:sympa@fraunhofer.de?subject=subscribe%20pandapower){: .btn .btn--success .btn--large}<br>
<small>If you no longer want to receive updates, <a href="mailto:sympa@fraunhofer.de?subject=unsubscribe%20pandapower">unsubscribe here</a>.</small>

## About us

pandapower is a joint development of the research group Energy Management and Power System Operation, University of Kassel and the Department for Distribution System Operation at the Fraunhofer Institute for Energy Economics and Energy System Technology (IEE), Kassel.

[<img src="https://www.uni-kassel.de/eecs/fileadmin/datas/fb16/Fachgebiete/energiemanagement/e2n.png">](https://www.uni-kassel.de/eecs/en/fachgebiete/e2n/home.html)
[<img src="https://www.uni-kassel.de/eecs/fileadmin/datas/fb16/Fachgebiete/energiemanagement/iee.png">](https://www.iee.fraunhofer.de/en.html)
 

## Who we are

And these are some of the people behind pandapower:

<div class="authors">
  {% for developer in page.developers %}
    <p>
    <img style="padding:2px 2px 2px 2px; border:2px solid black; margin-right: 15px" src="{{ developer.image | relative_url }}" width="120" align="left"/> 
    <span style="margin-top: -5px; display:inline-block; max-width:500px;">
        <b>{{ developer.name }}</b> {{ developer.text }} <br>
        <a href="mailto:{{developer.email}}">Contact {{developer.nickname}}</a> 
    </span>
    <BR CLEAR="left"/> 
    </p>
  {% endfor %}
</div>

[See Full List of authors and contributors](http://pandapower.readthedocs.io/en/stable/about/authors.html){: .btn .btn--success .btn--large}


