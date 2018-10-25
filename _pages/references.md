---
layout: single
title: References
permalink: /references/
author_profile: false
toc: true
toc_sticky: true
toc_label: <a href="#site-nav">References</a>
classes:
  - wide
testimonials:
  - quote: I see pandapower as a big upgrade for making pypower much more user friendly, efficient and even providing some great new features that were earlier only provided by the commercial software. Thank you for making our lives easier with pandapower!
    name: Jakov Krstulovic
    affiliation: Postdoctoral Researcher at University of Split, Croatia
  - quote: I am working on the development of software for power systems research for 7 years, and pandapower is one of the most useful things developed by the community. Brilliant idea, amazing implementation and very easy to use. Congratulations!
    name: Miguel Heleno
    affiliation: Postdoctoral Fellow at Lawrence Berkeley National Laboratory, USA
  - quote: Firstly, congratulations to the pandapower team for developing such an easy to use the tool. I  have introduced pandapower to my final year project students. Many of them start with no background in power system analysis as they take the courses in this subject concurrently. I find that they are able to easily pick up working the with pandapower and carry out projects in renewable energy integration and electric vehicle integration. I too use pandapower to carry out preliminary studies on renewables in the grid. Pandapower has been a very useful tool. I would encourage the pandapower team to add new features such as modal analysis, electricity market engine and if possible RMS dynamics to the package. It will make pandapower the preferred open source tool.
    name: Ashwin M Khambadkone
    affiliation: Associate Professor at National University of Singapore
---

## Citing pandapower <a name="citing"></a>

A paper describing pandapower has been published in [IEEE Transaction on Power Systems](https://doi.org/10.1109/TPWRS.2018.2829021), a preprint of the paper is also available on [arXiv](https://arxiv.org/abs/1709.06743). Please acknowledge the usage of pandapower by citing this paper:

- **L. Thurner, A. Scheidler, F. Schäfer et al**, [pandapower - an Open Source Python Tool for Convenient Modeling, Analysis and Optimization of Electric Power Systems](https://doi.org/10.1109/TPWRS.2018.2829021), in IEEE Transactions on Power Systems, vol. 33, no. 6, pp. 6510-6521, Nov. 2018.

You can use the following BibTex entry:

```
@ARTICLE{pandapower.2018,
    author={L. Thurner and A. Scheidler and F. Sch{\"a}fer and J. Menke and J. Dollichon and F. Meier and S. Meinecke and M. Braun},
    journal={IEEE Transactions on Power Systems},
    title={pandapower — An Open-Source Python Tool for Convenient Modeling, Analysis, and Optimization of Electric Power Systems},
    year={2018},
    month={Nov},
    volume={33},
    number={6},
    pages={6510-6521},
    doi={10.1109/TPWRS.2018.2829021},
    ISSN={0885-8950}}
```

## What users say

<div class="testimonials">
  {% for testimonial in page.testimonials %}
    <blockquote>
    {{testimonial.quote}} <br>
    <div style="font-style: normal"><small>{{testimonial.name}}, {{testimonial.affiliation}}</small></div> 
    </blockquote>
  {% endfor %}
</div>


## Publications


### About pandapower

The following publications discuss the tool itself and implementation details:

- **L. Thurner, A. Scheidler, F. Schäfer et al**, [pandapower - an Open Source Python Tool for Convenient Modeling, Analysis and Optimization of Electric Power Systems](https://arxiv.org/abs/1709.06743), IEEE Transactions on Power Systems, 2018.
- **L. Thurner, M. Braun**, Vectorized calculation of short circuit currents considering distributed generation - an open source implementation of IEC 60909, ISGT Europe 2018, Sarajevo, Bosnia and Herzegovina, October 2018
- **F. Schäfer, M. Braun**, An efficient open-source implementation to compute the Jacobian matrix for the Newton-Raphson power flow algorithm, ISGT Europe 2018, Sarajevo, Bosnia and Herzegovina, October 2018
- **L. Thurner, A. Scheidler, M. Braun**, pandapower – an Open Source Framework for Automated Evaluations of Future Power Systems, 1st International Conference on Large-Scale Grid Integration of Renewable Energy in India, New-Delhi, India, September 2017


### Using pandapower

Publications using pandapower as a tool for power system calculations:

- **L. Thurner**, ["Structural Optimizations in Strategic Medium Voltage Power System Planning"](http://www.upress.uni-kassel.de/katalog/abstract.php?978-3-7376-0538-0), Dissertation, University of Kassel, 2018.

- **BearingPoint GmbH, Fraunhofer IEE**, [Verteilnetzstudie Hessen](https://www.house-of-energy.org/mm/2018_Verteilnetzstudie_Hessen_2024_bis_2034.pdf), *(German)*

- **A. Scheidler, L. Thurner, M. Braun**, [Heuristic Optimization for Automated Distribution System Planning in Network Integration Studies](https://arxiv.org/abs/1711.03331), IET Renewable Power Generation, vol. 12, no. 5, pp. 530–538, 2018
- **L. Thurner, A. Scheidler, A. Probst, M. Braun**, [Heuristic Optimization for Network Restoration and Expansion in Compliance with the Single Contingency Policy](https://ieeexplore.ieee.org/document/8128873/), IET Generation, Transmission and Distribution, vol. 11, no. 17, pp. 4264–4273, 2017
- **J.-H. Menke, J. Hegemann, S. Gehler, M. Braun**, [Heuristic Monitoring Method for Sparsely Measured Distribution Grids](https://www.sciencedirect.com/science/article/pii/S0142061517310311), International Journal of Electrical Power and Energy Systems 95C, pp. 146-155, 2018

- **D. Büchner, L. Thurner, T. Kneiske, M. Braun**, [Automated Network Reinforcement including a Model for an Asset Management Strategy](https://ieeexplore.ieee.org/document/8278724/), International ETG Congress 2017, Bonn, Germany, November 2017
- **A. Scheidler, L. Thurner, M. Kraiczy, M. Braun**, [Automated Grid Planning for Distribution Grids with Increasing PV Penetration](https://www.uni-kassel.de/eecs/fileadmin/datas/fb16/Fachgebiete/energiemanagement/Mitarbeitende/Scheidler__Thurner__Kraiczy__Braun_-_Automated_Grid_Planning_for_Distribution_Grids_with_Increasing_PV_Penetration.pdf), 6th International Workshop on Integration of Solar Power into Power Systems, Vienna, Austria, November 2016
- **D. Pesendorfer, E. Widl, W. Gawlik, R. Hofmann**, [Co-simulation and control of power-to-heat units in coupled electrical and thermal distribution networks](https://ieeexplore.ieee.org/document/8405396/),  Workshop on Modeling and Simulation of Cyber-Physical Energy Systems, Porto, Portugal, April 2018
- **M. Jamieson, G. Strbac, S. Tindemans, K. Bell**, [A Simulation Framework to Analyse Dependent Weather-Induced Faults](http://digital-library.theiet.org/content/conferences/10.1049/cp.2017.0346;jsessionid=2ac5o0buao25d.x-iet-live-01), IET International Conference on Resilience of Transmission and Distribution Networks (RTDN 2017)

- **D. Hölker**, ["Qualitätsbewertung von Energiemanagement-Algorithmen unter Berücksichtigung eingeschränkter Kommunikationsparameter"](https://www.uni-oldenburg.de/fileadmin/user_upload/informatik/hoequa18.pdf), Dissertation, University of Oldenburg, 2018.

- **P. Ahlgren, E. Handberg**, [System performance analysis of an isolated microgrid with renewable energy sources and a battery and hydrogen storage system](http://lup.lub.lu.se/luur/download?func=downloadFile&recordOId=8937880&fileOId=8937884), Masters Thesis, Lund University, 2018.

- **G. Cardoso, M. Heleno, S. Mashayekh et. al**, [Integrated Modeling Tool for Regulators - Proof of Concept and Prototype](https://www.districtenergy.org/HigherLogic/System/DownloadDocumentFile.ashx?DocumentFileKey=c7b57d8f-13ad-9bd7-1361-8a21a8a72a50&forceDialog=0), Lawrence Berkeley National Laboratory, 2017.

### Further Publications

Other papers mentioning or referencing pandapower that might be of interest:

- **M. Vogt, F. Marten, M. Braun**, [A survey and statistical analysis of smart grid co-simulations](https://doi.org/10.1016/j.apenergy.2018.03.123), Applied Energy, Volume 222,Pages 67-78, 2018
- **S. Pfenninger, L. Hirth, I. Schlecht et. al**, [Opening the black box of energy modelling: Strategies and lessons learned](https://doi.org/10.1016/j.esr.2017.12.002), Energy Strategy Reviews, Volume 19, Pages 63-71, 2018

