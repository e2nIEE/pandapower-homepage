---
layout: single
permalink: /about/
author_profile: false
sidebar:
   nav: "about"
classes:
  - wide   
---
{% capture to_the_top %}<div style="text-align: right"> <font size="4"><a href="{{ "/about/#" | relative_url }}">Back to the top</a></font></div>{% endcapture %}

# Electric Models <a name="models"></a>

pandapower combines the data analysis library pandas and the power flow solver PYPOWER to create an easy to use network calculation program aimed at automation of analysis and optimization in power systems.

pandapower is an element based network calculation tool that supports the following components:

	- lines
	- two-winding and three-winding transformers
	- ideal bus-bus and bus-branch switches
	- static generators
	- ZIP loads
	- shunts
	- external grid connections
	- synchronous generators
	- DC lines
	- unsymmetric impedances
	- ward equivalents

{{ to_the_top }}
    
# Power System Analysis <a name="analysis"></a>

pandapower supports the following network analysis functions:

	- power flow
	- optimal power flow
	- state estimation
	- short-circuit calculation according to IEC 60909
	- topological graph searches

{{ to_the_top }}
    
# License <a name="license"></a>

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

{{ to_the_top }}
