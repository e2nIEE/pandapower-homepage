---
layout: single
title: Getting Started
permalink: /start/
author_profile: false
toc: true
toc_sticky: true
toc_label: <a href="">Getting Started</a>
classes:
   - wide
---

## Installation <a name="install"></a>

pandapower is tested with Python 2.7, 3.4, 3.5 and 3.6. We recommend the [Anaconda Distribution], which already contains a lot of modules for scientific computing that are needed for working with pandapower.

Here are the installation instructions depending on what your system looks like or which version of pandapower you want to install:

Once you have installed pandapower, be sure to [test if it works]({{ "/start/#test" | relative_url }}).

### Installing from Scratch

If you want to use pandapower but don\'t yet have python installed on
your computer, simply follow these steps:

1.  Go to the [Anaconda Website](https://www.continuum.io/downloads), download Anaconda for your OS and install it

2.  Open a command prompt (e.g. Start\--\>cmd on windows systems) and install pandapower by running :

        pip install pandapower

### Test your installation <a name="test"></a>

The easiest way to test your installation is to import all pandapower
submodules to see if all dependencies are available:

    import pandapower
    import pandapower.networks
    import pandapower.topology
    import pandapower.plotting
    import pandapower.converter
    import pandapower.estimation

If you want to be really sure that everything works fine, you can run
the pandapower test suite (pytest module is needed): :

    import pandapower.test
    pandapower.test.run_all_tests()

If everything is installed correctly, all tests should pass or xfail (expected to fail).

  [Anaconda Distribution]: https://www.continuum.io/downloads

  
## A short introduction <a name="intro"></a>

A network in pandapower is represented in a pandapowerNet object, which
is a collection of pandas Dataframes. Each dataframe in a pandapowerNet
contains the information about one pandapower element, such as line,
load transformer etc.

We consider the following simple 3-bus example network as a minimal
example:

![](http://pandapower.readthedocs.io/en/latest/_images/3bus-system.png)


### Creating a Network

The above network can be created in pandapower as follows:

    import pandapower as pp
    #create empty net
    net = pp.create_empty_network() 

    #create buses
    b1 = pp.create_bus(net, vn_kv=20., name="Bus 1")
    b2 = pp.create_bus(net, vn_kv=0.4, name="Bus 2")
    b3 = pp.create_bus(net, vn_kv=0.4, name="Bus 3")

    #create bus elements
    pp.create_ext_grid(net, bus=b1, vm_pu=1.02, name="Grid Connection")
    pp.create_load(net, bus=b3, p_kw=100, q_kvar=50, name="Load")

    #create branch elements
    tid = pp.create_transformer(net, hv_bus=b1, lv_bus=b2, std_type="0.4 MVA 20/0.4 kV", name="Trafo")
    pp.create_line(net, from_bus=b2, to_bus=b3, length_km=0.1, name="Line",std_type="NAYY 4x50 SE")   

Note that you do not have to calculate any impedances or tap ratio for
the equivalent circuit, this is handled internally by pandapower
according to the pandapower [transformer model]. The [standard type
library] allows comfortable creation of line and transformer elements.

The pandapower representation now looks like this:

![image](http://pandapower.readthedocs.io/en/latest/_images/pandapower_datastructure.png)

### Running a Power Flow

A powerflow can be carried out with the [runpp function][]: 

    pp.runpp(net)

When a power flow is run, pandapower combines the information of all
element tables into one pypower case file and uses pypower to run the
power flow. The results are then processed and written back into
pandapower:

![image](http://pandapower.readthedocs.io/en/latest/_images/pandapower_powerflow.png)

For the 3-bus example network, the result tables look like this:

![image](http://pandapower.readthedocs.io/en/latest/_images/pandapower_results.png)

All other pandapower elements and network analysis functionality (e.g.
optimal power flow, state estimation or short-circuit calculation) is
also fully integrated into the tabular pandapower datastructure.

This minimal example is also available as a [jupyter notebook].

  [transformer model]: http://pandapower.readthedocs.io/en/latest/elements/trafo.html#electric-model
  [standard type library]: http://pandapower.readthedocs.io/en/latest/std_types.html
  [runpp function]: http://pandapower.readthedocs.io/en/latest/powerflow/ac.html
  [jupyter notebook]: https://github.com/lthurner/pandapower/blob/develop/tutorials/minimal_example.ipynb


  
## Documentation <a name="docs"></a>

The pandapower documentation is hosted on [readthedocs](http://pandapower.readthedocs.io).



## Interactive Tutorials <a name="tutorials"></a>

There are jupyter notebook tutorials on different functionalities of pandapower:

Minimal Example introduction:

:   -   [minimal example]

Creating networks:

:   -   [simple network]
    -   [advanced network]

Running (optimal) power flows:

:   -   [power flow]
    -   [optimal power flow]
    -   [active power curtailment with OPF]
    -   [DC line dispatch with OPF]

Data analysis and modelling error diagnostic:

:   -   [data_analysis]
    -   [diagnostic]

Configure and run a state estimation:

:   -   [state estimation]

Run a short-circuit calculation according to IEC 60909:

:   -   [short-circuit calculation]
    -   [considering renewable energy (2016 revision)]

Working with the pandapower standard type library:

:   -   [standard types]

Running topological searches:

:   -   [topologic searches]

Plotting pandapower networks (static with matplotlib):

:   -   [basic plotting]
    -   [plotting with colormaps]
    -   [plotting without geographical data]


Plotting pandapower networks (interactive with plotly)

:   -   [built-in plots]
    -   [custom plots]
    -   [interactive plots on maps]

Hosting Capacity:

:   -   [hosting capacity]

  [minimal example]: https://github.com/panda-power/pandapower/blob/master/tutorials/minimal_example.ipynb
  [simple network]: https://github.com/panda-power/pandapower/blob/master/tutorials/create_simple.ipynb
  [advanced network]: https://github.com/panda-power/pandapower/blob/master/tutorials/create_advanced.ipynb
  [power flow]: https://github.com/panda-power/pandapower/blob/master/tutorials/powerflow.ipynb
  [optimal power flow]: https://github.com/panda-power/pandapower/blob/master/tutorials/opf_basic.ipynb
  [active power curtailment with OPF]: https://github.com/panda-power/pandapower/blob/master/tutorials/opf_curtail.ipynb
  [DC line dispatch with OPF]: https://github.com/panda-power/pandapower/blob/master/tutorials/opf_dcline.ipynb
  [data_analysis]: https://github.com/panda-power/pandapower/blob/master/tutorials/data_analysis.ipynb
  [diagnostic]: https://github.com/panda-power/pandapower/blob/master/tutorials/diagnostic.ipynb
  [state estimation]: https://github.com/panda-power/pandapower/blob/master/tutorials/state_estimation.ipynb
  [short-circuit calculation]: https://github.com/lthurner/pandapower/blob/develop/tutorials/shortcircuit.ipynb
  [considering renewable energy (2016 revision)]: https://github.com/lthurner/pandapower/blob/develop/tutorials/shortcircuit_renewables.ipynb
  [standard types]: https://github.com/panda-power/pandapower/blob/master/tutorials/std_types.ipynb
  [topologic searches]: https://github.com/panda-power/pandapower/blob/master/tutorials/topology.ipynb
  [basic plotting]: https://github.com/panda-power/pandapower/blob/master/tutorials/plotting_basic.ipynb
  [plotting with colormaps]: https://github.com/panda-power/pandapower/blob/master/tutorials/plotting_colormaps.ipynb
  [plotting without geographical data]: https://github.com/panda-power/pandapower/blob/master/tutorials/plotting_structural.ipynb
  [built-in plots]: http://nbviewer.jupyter.org/github/lthurner/pandapower/blob/develop/tutorials/plotly_built-in.ipynb
  [custom plots]: http://nbviewer.jupyter.org/github/lthurner/pandapower/blob/develop/tutorials/plotly_traces.ipynb
  [interactive plots on maps]: http://nbviewer.jupyter.org/github/lthurner/pandapower/blob/develop/tutorials/plotly_maps.ipynb
  [hosting capacity]: https://github.com/lthurner/pandapower/blob/develop/tutorials/hosting_capacity.ipynb


