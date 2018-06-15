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

## Power System Modeling

### Element Based Modeling

### Equivalent Circuit Models <a name="models"></a>

pandapower is an element based network calculation tool that supports the following components:

	- Lines
	- Two-winding and three-winding transformers
	- Ideal bus-bus and bus-branch switches
	- Static generators
	- PQ and ZIP Loads
	- Shunts
	- External grid connections
	- Synchronous generators
	- DC lines
	- Unsymmetric impedances
	- (Extended) ward equivalents

<img src="{{/assets/images/open_source_models.png | relative_url }} alt=""/>
<figcaption>Comparison of open source electric model libraries <a href="https://doi.org/10.1109/TPWRS.2018.2829021" title="L. Thurner, A. Scheidler, F. Schäfer et al, pandapower - an Open Source Python Tool for Convenient Modeling, Analysis and Optimization of Electric Power Systems, IEEE Transactions on Power Systems, 2018.">[1]</a></figcaption>



### Tabular Data Structure
   
## Power System Analysis <a name="analysis"></a>

pandapower supports the following network analysis functions:

	- power flow
	- optimal power flow
	- state estimation
	- short-circuit calculation according to IEC 60909
	- topological graph searches

### Power Flow

### Optimal Power Flow

### State Estimation

### Short-Circuit Calculation

### Graph Searches

## Tests and Validation

## Publications

A paper describing pandapower has been accepted for publication in IEEE Transaction on Power Systems, a preprint of this paper is available on `arXiv <https://arxiv.org/abs/1709.06743>`_. Please acknowledge the usage of pandapower by citing the Paper as follows:

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


