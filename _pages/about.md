---
layout: single
title: About pandapower
permalink: /about/
author_profile: false
toc: true
toc_sticky: true
toc_label: <a href="">About pandapower</a>
classes:
  - wide
---

pandapower combines the data analysis library pandas and the power flow solver PYPOWER to create an easy to use network calculation program aimed at automation of analysis and optimization in power systems.

## Why another tool?

**Motivation**<br>

pandapower was developed to close the gap between commercial and open source power systems analysis tools.
While open source power systems tools are flexible and can easily be customized, they often lack the detailed model libraries and
comfortable usage of commercial power system analysis tools.

|                                                      | Electric Models                                                                                                                               | Automation                                                                                                               | Customization                                                                                           |
|------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| Commercial Tools (e.g. Sincal, PowerFactory, NEPLAN) | <span style="color:green">Thoroughly validated electric models of lines, transformers, switches etc. that are easy to parametrize.</span>     | <span style="color:red">Graphical Interface Application that are difficult to automate.</span>                           | <span style="color:red">Restricted possibilities for customization due to proprietary code base.</span> |
| Open Source Tools (e.g. MATPOWER, PYPOWER)           | <span style="color:red">Basic models that require parametrization by the user with expert knowledge.</span>                                   | <span style="color:green">Console application that can be freely customized and easily automated.</span>                 | <span style="color:green">Open Source code base that can be freely modified and customized.</span>      |
| **pandapower**                                       | <span style="color:green">**Thoroughly validated electric models of lines, transformers, switches etc. that are easy to parametrize.**</span> | <span style="color:green">**Easy to use console application that can be freely customized and easily automated.**</span> | <span style="color:green">**Open source code base that can be freely modified and customized.**</span>  |

**Scope**<br>

pandapower is aimed at static analysis of balanced power systems. This allows analysis in **transmission** and **subtransmission systems**,
which are typically operated symmetrically. It also allows analysis of **symmetric distribution systems**, which are commonly found
in Europe. Distribution grids with unbalanced power flows, such as the feeder design common in North America, can currently not be
analysed with pandapower.



## Power System Modeling

**Equivalent Circuit Models**<br> <a name="models"></a>
pandapower is an element based network calculation tool that supports a wide variety of electric components. 
The following table shows that the pandapower model library goes beyond of that of most existing open source tools:

<img src="{{"/images/about/open_source_models.png" | relative_url }}" alt=""/>
<figcaption>Comparison of open source electric model libraries <a href="https://doi.org/10.1109/TPWRS.2018.2829021" title="L. Thurner, A. Scheidler, F. Schäfer et al, pandapower - an Open Source Python Tool for Convenient Modeling, Analysis and Optimization of Electric Power Systems, IEEE Transactions on Power Systems, 2018.">[1]</a></figcaption>

All equivalent circuit models are [thoroughly validated]() against commercial software tools and therefore allow industry level modeling of electric power systems.

**Tabular Data Structure**<br>


**Standard Type Libraries**<br>
pandapower includes a standard type library that allows the creation of lines and transformers using predefined basic standard type parameters. The user can either define individual standard types or use the predefined pandapower basic standard types for convenient definition of networks.

   
## Power System Analysis <a name="analysis"></a>

pandapower supports the following network analysis functions:
   - power flow
   - optimal power flow
   - state estimation
   - short-circuit calculation according to IEC 60909
   - topological graph searches

**Power Flow**<br>

The pandapower power flow solver is based on the Newton-Raphson method.
The implementation was originally based on PYPOWER, but has been improved with respect to
robustness, runtime and usability.

#### Initialization

pandapower offers three different methods to initialize the complex voltage
vector for the AC power flow calculation:
   - flat start
   - voltage vector of a previous calculation
   - initialization with a DC power flow

#### Performance

Some parts of the pandapower solver have been accelerated using the
JIT compiler [numba](https://numba.pydata.org/). This makes the pandapower Newton-Raphson
To outline the difference in computational time, the convergence times for different standard MATPOWER
case files are shown here:

<img src="{{"/images/about/speed_comparison.png" | relative_url }}" alt=""/>
<figcaption>Power flow speed convergence time comparison of different open source tools <a href="https://doi.org/10.1109/TPWRS.2018.2829021" title="L. Thurner, A. Scheidler, F. Schäfer et al, pandapower - an Open Source Python Tool for Convenient Modeling, Analysis and Optimization of Electric Power Systems, IEEE Transactions on Power Systems, 2018.">[1]</a></figcaption>

The pandapower timings distinguish between power flow solver and conversion overhead, 
which includes BBM conversion as well as result extraction. It can be seen that pandapower
is faster than PYPOWER in all cases due to the jit accelerated building of the Jacobian
matrix and other aspects of the Newton-Raphson solver. It can also be seen that while the
conversion overhead takes up more than half of the calculation time for small networks,
its share decreases significantly for larger networks. While pandapower is slower than
MATPOWER for small networks, it is faster for medium sized and large networks, even
including the conversion overhead for the BBM.

#### Timeseries Simulations

By default, the BBM conversion is carried out before every power flow.
However, if multiple subsequent power flows are performed for the
same network that only differ in the nodal power injections, the conversion into a BBM
becomes redundant. For this reason, pandapower offers the possibility to reuse the BBM
and the nodal point admittance matrix from previous power flow calculations. This feature
can speed up applications like quasi-static time series simulations or heuristic power set
point optimizations.

#### Other solvers

In addition to the default Newton-Raphson solver, pandapower also
provides an implementation of a backward/forward sweep. It is also possible to use the fast
decoupled as well as the Gauss-Seidel power flow algorithms through an interface to PYPOWER.

#### Unbalanced Power Flow

An unbalanced power flow is currently being implemented and a first version will hopefully be released soon. Follow the progress
or join the implementation efforts on [github](https://github.com/lthurner/pandapower/issues/96), or subscribe to the [pandapower
mailing list]({{/contact/ | relative_url}}) for updates.

**Optimal Power Flow**<br>

pandapower allows solving AC and DC optimal power flow (OPF) problems through interfacing
PYPOWER. The interior point solver provided by PYPOWER is used to solve the problem, while
costs, flexibilities and constraints are configured through the element-based pandapower
data structure. Static loads can be used as flexibilities in the OPF, so that tion of static generators in dispatch optimizations as well as the consideration of
load shedding. The cost function for each power injection or load can either be defined by a piecewise linear or a n-polynomial
cost function of the active and reactive power output of the respective elements.


**State Estimation**<br>

pandapower includes a state estimation module that allows to estimate the electrical state of a network by dealing with inaccuracies
and errors from measurement data. pandapower supports measurement of voltages, active and reactive power or currents at bus, lines and
transformers. The state estimation is solved with a weighted-least-square method. It also includes a bad-data detection method based
on a chi2 and a normalized residuals test.

**Short-Circuit Calculation**<br>

pandapower includes a short-circuit calculation that allows to calculate fault currents for three-phase, two-phase and single phase 
short-circuits according to the IEC 60909 standard. The implementation also allows modeling power converter elements, such as 
PV plants or wind parks, according to the 2016 revision of the standard.

**Graph Searches**<br>

pandapower provides the possibility of graph searches using the Python library [NetworkX](https://networkx.github.io/) by providing a
possibility to translate pandapower networks into NetworkX graphs.
Once a network is translated into an abstract graph, all graph searches implemented in the NetworkX library can be used to analyze
the network structure. Additionally, pandapower also provides some predefined search algorithms to tackle common graph search problems
in electric networks, such as finding unsupplied buses or identifying buses on main or 
secondary network feeders.

## Tests and Validation

pandapower is tested with [pytest](https://docs.pytest.org/en/latest/). There are currently over 250 tests testing all kinds of pandapower functionality. The tests also include
automatic validation of pandapower results from power flow or short circuit calculations against commercial software, to ensure that the
implementation is correct.

**Continous Integration**<br>

The tests are continously carried out with Travis CI in Python 2.7, 3.4, 3.5 and 3.6:

[<img src="https://travis-ci.org/lthurner/pandapower.svg?branch=develop">](https://travis-ci.org/lthurner/pandapower)
[<img src="https://img.shields.io/pypi/pyversions/pandapower.svg">](https://pypi.python.org/pypi/pandapower)

The test coverage rate is checked with codecov, code quality with codacy:

[<img src="https://codecov.io/github/lthurner/pandapower/coverage.svg?branch=develop">](https://codecov.io/github/lthurner/pandapower?branch=master)
[<img src="https://api.codacy.com/project/badge/Grade/5d749ed6772e47f6b84fb9afb83903d3">](https://www.codacy.com/app/lthurner/pandapower/dashboard)

**Model Validation**<br>

To ensure that pandapower loadflow results are correct, all pandapower element behaviour is tested against DIgSILENT PowerFactory or PSS Sincal. 

There is a result test for each of the pandapower elements that checks loadflow results in pandapower against results from a commercial tools. 
The results are compared with the following tolerances:

| **Parameter**     | **Max. Deviation**  | 
|-------------------|---------------------| 
| Voltage Magnitude | 0.000001 pu         | 
| Voltage Angle     | 0.01°               | 
| Current           | 0.000001 kA         | 
| Power             | 0.005 kW            | 
| Element Loading   | 0.001%              | 

<figure class="third">
    <a href="{{"/images/about/validation/test_bus_bus_switch.PNG" | relative_url }}"><img src="{{"/images/about/validation/test_bus_bus_switch_thumbnail.PNG" | relative_url }}"></a>
    <a href="{{"/images/about/validation/test_bus_bus_switch.PNG" | relative_url }}"><img src="{{"/images/about/validation/test_bus_bus_switch_thumbnail.PNG" | relative_url }}"></a>
	<figcaption>Caption describing these three images.</figcaption>
</figure>


**Example: Transformer**<br>

To validate the pandapower transformer model, a transformer is created with the same parameters in pandapower and PowerFactory. To test all aspects of the model we use a transformer with

 <ul>
 <small>
   <li>both iron and copper losses > 0</li>
   <li>nominal voltages that deviate from the nominal bus voltages at both sides</li>
   <li>an active tap changer</li>
   <li>a voltage angle shift > 0</li>
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

## Citing pandapower
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
   
## License <a name="license"></a>

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


