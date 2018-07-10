---
layout: single
permalink: /about/
title: About pandapower
author_profile: false
toc: true
toc_sticky: true
toc_label: <a href="#site-nav">About pandapower</a>
classes:
  - wide   
gallery:
  - url:        /images/about/validation/test_trafo3w.png
    image_path: /images/about/validation/test_trafo3w_tn.png
    title:      "Three-winding transformer test network"
  - url:        /images/about/validation/test_ward.png
    image_path: /images/about/validation/test_ward_tn.png
    title:      "Ward equivalent test network"
  - url:        /images/about/validation/test_gen.png
    image_path: /images/about/validation/test_gen_tn.png
    title:      "Generator test network"
  - url:        /images/about/validation/test_ext_grid.png
    image_path: /images/about/validation/test_ext_grid_tn.png
    title:      "External grid test network"
  - url:        /images/about/validation/test_line.png
    image_path: /images/about/validation/test_line_tn.png
    title:      "Line test network"
  - url:        /images/about/validation/test_bus_bus_switch.png
    image_path: /images/about/validation/test_bus_bus_switch_tn.png
    title:      "Bus-bus switch test network"
  - url:        /images/about/validation/test_load_sgen.png
    image_path: /images/about/validation/test_load_sgen_tn.png
    title:      "Static generator test network"
  - url:        /images/about/validation/test_impedance.png
    image_path: /images/about/validation/test_impedance_tn.png
    title:      "Impedance test network"    
  - url:        /images/about/validation/test_shunt.png
    image_path: /images/about/validation/test_shunt_tn.png
    title:      "Shunt test network"
  - url:        /images/about/validation/test_trafo.png
    image_path: /images/about/validation/test_trafo_tn.png
    title:      "Two-winding transformer test network"    
  - url:        /images/about/validation/test_xward.png
    image_path: /images/about/validation/test_xward_tn.png
    title:      "Extended ward equivalent test network"    
---


pandapower combines the data analysis library pandas and the power flow solver PYPOWER to create an easy to use network calculation program aimed at automation of analysis and optimization in power systems.

## Why another tool?

**Motivation**<br>

pandapower was developed to close the gap between commercial and open source power systems analysis tools.
While open source power systems tools are flexible and can easily be customized, they often lack the detailed model libraries and
comfortable usage of commercial power system analysis tools.

|                                                      | Electric Models                                                                                                                                | Automation                                                                                                               | Customization                                                                                           |
|------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| Commercial Tools (e.g. Sincal, PowerFactory, NEPLAN) | <span style="color:green">Thoroughly validated and easy to parametrize electric models of lines, transformers, switches etc.</span>            | <span style="color:red">Graphical User Interface applications that are difficult to automate.</span>                     | <span style="color:red">Restricted possibilities for customization due to proprietary code base.</span> |
| Open Source Tools (e.g. MATPOWER, PYPOWER)           | <span style="color:red">Basic models that require parametrization by the user with expert knowledge.</span>                                    | <span style="color:green">Console application that are designed for automated evaluations.</span>                        | <span style="color:green">Open Source code base that can be freely modified and customized.</span>      |
| **pandapower**                                       | <span style="color:green">**Thoroughly validated and easy to parametrize electric models of lines, transformers, switches etc.**</span>        | <span style="color:green">**Console application that is designed for automated evaluations.**</span>                     | <span style="color:green">**Open source code base that can be freely modified and customized.**</span>  |

This is of course a very broad classification of tools that is only supposed to illustrate the focus of pandapower without
considering the diverse landscape of existing tools. A more detailed analysis of existing open source tools and 
the gap that pandapower closes can be found in <a href="https://doi.org/10.1109/TPWRS.2018.2829021" title="L. Thurner, A. Scheidler, F. Schäfer et al, pandapower - an Open Source Python Tool for Convenient Modeling, Analysis and Optimization of Electric Power Systems, IEEE Transactions on Power Systems, 2018.">[1]</a>.
Overviews over existing open source tools can also be found in <a href="https://doi.org/10.1016/j.esr.2017.12.002" title="S. Pfenninger, L. Hirth, I. Schlecht et. al - Opening the black box of energy modelling: Strategies and lessons learned, Energy Strategy Reviews, Volume 19, Pages 63-71, 2018">[2]</a>
 or <a href="https://doi.org/10.1109/PES.2009.5275920" title="F. Milano, L. Vanfretti - State of the Art and Future of OSS for Power Systems, 2009 IEEE Power & Energy Society General Meeting, Calgary, AB, 2009">[3]</a>
.

**Scope**<br>

pandapower is aimed at **static** analysis of **balanced** power systems. This allows analysis of:
- **transmission** and **subtransmission systems**, which are typically operated symmetrically.
- **symmetric distribution systems**, which are commonly found in Europe.

Distribution grids with unbalanced power flows, such as the feeder design common in North America, can currently not be
analysed with pandapower.


<h2 id="modeling">Power System Modeling</h2>

**Equivalent Circuit Models**<br>
pandapower is an element based network calculation tool that supports a wide variety of electric components. 
The following table shows that the pandapower model library goes beyond of that of most existing open source tools:

<img src="{{"/images/about/open_source_models.png" | relative_url }}" alt=""/>
<figcaption>Comparison of open source electric model libraries <a href="https://doi.org/10.1109/TPWRS.2018.2829021" title="L. Thurner, A. Scheidler, F. Schäfer et al, pandapower - an Open Source Python Tool for Convenient Modeling, Analysis and Optimization of Electric Power Systems, IEEE Transactions on Power Systems, 2018.">[1]</a></figcaption>

All equivalent circuit models are [thoroughly validated](#tests) against commercial software tools and therefore allow industry level modeling of electric power systems.

**Tabular Data Structure**<br>

pandapower is based on a tabular data structure, where every element type is represented by a table that holds all parameters for a specific
element and a result table which contains the element specific results of the different analysis methods. The tabular data structure is
based on the Python library pandas. It allows storing variables of any data type, so that electrical parameters can be stored
together with status variables and meta-data, such as names or descriptions. The tables can be easily expanded and customized by adding new
columns without influencing the pandapower functionality. All inherent pandas methods can be used to efficiently read, write and
analyze the network and results data.


**Standard Type Libraries**<br>
pandapower includes a standard type library that allows the creation of lines and transformers using predefined basic standard type parameters. The user can either define individual standard types or use the predefined pandapower basic standard types for convenient definition of networks.

   
<h2 id="analysis">Power System Analysis</h2>

pandapower supports the following power systems analysis functions:

- [Power Flow](#pf)
- [Optimal Power Flow](#opf)
- [State Estimation](#se)
- [Short-Circuit Calculation](#sc)
- [Topological Graph Searches](#topology)

<h3 id="pf">Power Flow</h3>

The pandapower power flow solver is based on the Newton-Raphson method.
The implementation was originally based on PYPOWER, but has been improved with respect to
robustness, runtime and usability.
<br><small>[Learn more](http://pandapower.readthedocs.io/en/stable/powerflow/ac.html)</small>

#### Initialization

pandapower offers three different methods to initialize the complex voltage
vector for the AC power flow calculation:
   - flat start
   - voltage vector of a previous calculation
   - initialization with a DC power flow
   

#### Performance
Some parts of the pandapower solver have been accelerated using the
JIT compiler [numba](https://numba.pydata.org/). This makes the pandapower Newton-Raphson significantly faster
than the PYPOWER solver from which it was originally derived.
To outline the difference in computational time, the convergence times for different standard MATPOWER
case files are shown here for MATPOWER, PYPOWER and pandapower:

<img src="{{"/images/about/speed_comparison.png" | relative_url }}" alt=""/>
<figcaption>Power flow speed convergence time comparison of different open source tools <a href="https://doi.org/10.1109/TPWRS.2018.2829021" title="L. Thurner, A. Scheidler, F. Schäfer et al, pandapower - an Open Source Python Tool for Convenient Modeling, Analysis and Optimization of Electric Power Systems, IEEE Transactions on Power Systems, 2018.">[1]</a></figcaption>

While PYPOWER and MATPOWER operate directly on the bus-branch model of the grid, the element based power system model in pandapower
requires mappings and conversions of grid data and results into the tabular data structure. The graph shows that this
conversion can take a significant amount of time in smaller networks, but its share decreases in larger networks. Even with 
the conversion overhead, pandapower is the fastest of the three tools in large grids with >1000 nodes.

#### Other solvers
In addition to the default Newton-Raphson solver, pandapower also
provides an implementation of a backward/forward sweep. pandapower also includes an Iwamoto variant of the Newton-Raphson,
which includes a damping factor that can help convergence in ill-conditioned problems. It is also possible to use the fast
decoupled as well as the Gauss-Seidel power flow algorithms through an interface to PYPOWER, although some features, such as ZIP loads
or unsymmetrical impedances will only work with the pandapower solvers.

#### Unbalanced Power Flow
An unbalanced power flow is currently being implemented and a first version will hopefully be released soon. Follow the progress
or join the implementation efforts on [github](https://github.com/lthurner/pandapower/issues/96), or subscribe to the [pandapower
mailing list](contact.md) for updates.

<h3 id="opf">Optimal Power Flow<br> </h3>
pandapower allows solving AC and DC optimal power flow (OPF) problems through interfacing
PYPOWER. The interior point solver provided by PYPOWER is used to solve the problem, while
costs, flexibilities and constraints are configured through the element-based pandapower
data structure. Static loads can be used as flexibilities in the OPF, which allows optimization dispatch of static generators as well 
as load shedding. The cost function for each power injection or load can either be defined by a piecewise linear or a n-polynomial
cost function of the active and reactive power output of the respective elements.
<br><small>[Learn more](http://pandapower.readthedocs.io/en/stable/powerflow/opf.html)</small>

<h3 id="se">State Estimation<br></h3>
pandapower includes a state estimation module that allows to estimate the electrical state of a network by dealing with inaccuracies
and errors from measurement data. pandapower supports measurement of voltages, active and reactive power or currents at bus, lines and
transformers. The state estimation is solved with a weighted-least-square method. It also includes a bad-data detection method based
on a Chi-squared and a normalized residuals test.
<br><small>[Learn more](http://pandapower.readthedocs.io/en/stable/estimation.html)</small>

<h3 id="sc">Short-Circuit Calculation<br></h3>
pandapower includes a short-circuit calculation that allows to calculate fault currents for three-phase, two-phase and single phase 
short-circuits according to the IEC 60909 standard. The implementation also allows modeling power converter elements, such as 
PV plants or wind parks, according to the 2016 revision of the standard.
<br><small>[Learn more](http://pandapower.readthedocs.io/en/stable/shortcircuit.html)</small>

<h3 id="topology">Graph Searches<br></h3>
pandapower provides the possibility of graph searches using the Python library [NetworkX](https://networkx.github.io/) by providing a
possibility to translate pandapower networks into NetworkX graphs.
Once a network is translated into an abstract graph, all graph searches implemented in the NetworkX library can be used to analyze
the network structure. Additionally, pandapower also provides some predefined search algorithms to tackle common graph search problems
in electric networks, such as finding unsupplied buses or identifying buses on main or 
secondary network feeders.
<br><small>[Learn more](http://pandapower.readthedocs.io/en/stable/topology.html)</small>

<h2 id="tests">Tests and Validation</h2>

pandapower is tested with [pytest](https://docs.pytest.org/en/latest/). There are currently over 250 tests testing all kinds of pandapower functionality. The tests also include
automatic validation of pandapower results from power flow or short circuit calculations against commercial software, to ensure that the
implementation is correct.

**Continous Integration**<br>

The tests are continuously carried out with Travis CI <a href="https://travis-ci.org/lthurner/pandapower"><img src="https://travis-ci.org/lthurner/pandapower.svg?branch=develop"></a>
in Python 2.7, 3.4, 3.5 and 3.6 <a href="https://pypi.python.org/pypi/pandapower"><img src="{{"/images/home/shield_python_versions.svg"|relative_url}}"></a>.
The test coverage rate is checked with codecov <a href="https://codecov.io/github/lthurner/pandapower?branch=master"><img src="https://codecov.io/github/lthurner/pandapower/coverage.svg?branch=develop"></a>
, code quality with codacy <a href="https://www.codacy.com/app/lthurner/pandapower/dashboard"><img src="https://api.codacy.com/project/badge/Grade/5d749ed6772e47f6b84fb9afb83903d3"></a>.

**Model Validation**<br>

To ensure that pandapower loadflow results are correct, all pandapower element behaviour is tested against DIgSILENT PowerFactory or PSS Sincal. 

There is a result test for each of the pandapower elements that checks loadflow results in pandapower against results from a commercial tools. 

Here is an overview of all test networks that are used to validate the electric models:

{% include gallery caption="The pandapower test grids for validation of the electric models." %}

These minimal networks are used to compare power flow results with commercial tools. The tests ensure deviation
do not surpass the following tolerances:

| **Parameter**     | **Max. Deviation**  | 
|-------------------|---------------------| 
| Voltage Magnitude | 0.000001 pu         | 
| Voltage Angle     | 0.01°               | 
| Current           | 0.000001 kA         | 
| Power             | 0.005 kW            | 
| Element Loading   | 0.001%              | 

The validation process is explained in the following for the transformer as an example.

**Example: Transformer**<br>

To validate the pandapower transformer model, a transformer is created with the same parameters in pandapower and PowerFactory.
To test all aspects of the model we use a transformer with:

 <ul>
 <small>
   <li>both iron and copper losses > 0</li>
   <li>nominal voltages that deviate from the nominal bus voltages at both sides</li>
   <li>an active tap changer</li>
   <li>a voltage angle shift > 0</li>
   <li>more than one parallel transformer</li>
  </small>
  </ul> 

We use a transformer with the following parameters:

 <ul>
 <small>
  <li>vsc_percent= 5.0</li>
  <li>vscr_percent = 2.0</li>
  <li>i0_percent = 0.4</li>
  <li>pfe_kw = 2.0</li>
  <li>sn_kva = 400</li>
  <li>vn_hv_kv = 22</li>
  <li>vn_lv_kv = 0.42</li>
  <li>tp_max = 10</li>
  <li>tp_mid = 5</li>
  <li>tp_min = 0</li>
  <li>tp_st_percent = 1.25</li>
  <li>tp_side = "hv"</li>
  <li>tp_pos = 3</li>
  <li>shift_degree = 150</li>
  </small>
  </ul> 

To validate the in_service parameter as well as the transformer switch element, we create three transformers in parallel: one in service, on out of service and one with an open switch in open loop operation.
All three transformers are connected to a 20kV / 0.4 kV bus network. The test network then looks like this:

<img src="{{"/images/about/validation/test_trafo.png" | relative_url }}" alt=""/>
   
The loadflow result for the exact same network are now compared in pandapower and PowerFactory. It can be seen that both bus voltages:

<img src="{{"/images/about/validation/validation_bus.png" | relative_url }}" alt=""/>
    
and transformer results:

<img src="{{"/images/about/validation/validation_trafo.png" | relative_url }}" alt=""/>

match within the margins defined above.

<h2 id="cite">Citing pandapower</h2>
A paper describing pandapower has been accepted for publication in IEEE Transaction on Power Systems, a preprint of this paper is available on [arXiv](https://arxiv.org/abs/1709.06743). Please acknowledge the usage of pandapower by citing the Paper as follows:

- **L. Thurner, A. Scheidler, F. Schäfer et al**, [pandapower - an Open Source Python Tool for Convenient Modeling, Analysis and Optimization of Electric Power Systems](https://arxiv.org/abs/1709.06743), IEEE Transactions on Power Systems, [DOI:10.1109/TPWRS.2018.2829021](https://doi.org/10.1109/TPWRS.2018.2829021), 2018.

You can use the following BibTex entry:

	@ARTICLE{pandapower.2018,
	author={L. Thurner and A. Scheidler and F. Schafer and J. H. Menke and J. Dollichon and F. Meier and S. Meinecke and M. Braun},
	journal={IEEE Transactions on Power Systems},
	title={pandapower - an Open Source Python Tool for Convenient Modeling, Analysis and Optimization of Electric Power Systems},
	year={2018},
	doi={10.1109/TPWRS.2018.2829021},
	url={https://arxiv.org/abs/1709.06743},
	ISSN={0885-8950}
	}
   
<h2 id="license">License</h2>

pandapower is published under the following 3-clause BSD license: 

> Copyright (c) 2018 by University of Kassel and Fraunhofer Institute for Fraunhofer Institute for Energy Economics and Energy System Technology (IEE) Kassel and individual contributors (see AUTHORS file for details). All rights reserved.
> Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
>      
> 1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
>     
> 2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
>     
> 3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
>     
> THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS \"AS IS\" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, NCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


