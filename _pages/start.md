---
layout: single
title: Getting Started
permalink: /start/
author_profile: false
toc: true
toc_sticky: true
toc_label: <a href="#site-nav">Getting Started</a>
classes:
   - wide
---

## Installing Python

pandapower is tested with Python 2.7, 3.4, 3.5 and 3.6. We recommend installing the [Anaconda Distribution](https://www.anaconda.com/download/), which provides a Python installation with a lot of modules for scientific computing that are needed for working with pandapower.

pandapower can of course also be used with other distributions besides Anaconda. It is however important that the following packages are included:

- numpy
- scipy
- numba
- matplotlib

Since these packages depend on C-libraries, they cannot be easily installed through pip on Windows systems.
If you use a distribution that does not include one of these packages, you either have to build these libraries yourself or switch to a different distribution.

<h2 id="install">Installing pandapower</h2>
        
<h3 id="pip">Through pip</h3>

The easiest way to install pandapower is through pip:

1. Open a command prompt (e.g. start-->cmd on windows systems)

2. Install pandapower by running:

        pip install pandapower

<h3 id="nopip">Without pip</h3>

If you don't have internet access on your system or don't want to use pip for some other reason, pandapower can also be installed without using pip:

1.  Download and unzip the current pandapower distribution from [PyPi](https://pypi.org/project/pandapower/) under "Download files".
2.  Open a command prompt (e.g. Start\--\>cmd on Windows) and navigate to the folder that contains the setup.py file with the command cd
    \<folder\> :

        cd %path_to_pandapower%\pandapower-x.x.x\

3.  Install pandapower by running :

        python setup.py install

<h3 id="develop">Development Version</h3>

To install the latest development version of pandapower from [github](https://github.com/e2nIEE/pandapower), simply follow these steps:

1. Download and install [git](https://git-scm.com). 

2. Open a git shell and navigate to the directory where you want to keep your pandapower files.

3. Run the following git command:

        git clone https://github.com/e2nIEE/pandapower.git

4. Navigate inside the repository and check out the develop branch:

        cd pandapower
        git checkout develop
       
3. Set your python path to the outer pandapower folder (/pandapower, NOT pandapower/pandapower). 

4. If necessary, install missing dependencies via pip install:

        pip install pypower
        
## Test your installation <a name="test"></a>

A first basic way to test your installation is to import all pandapower submodules to see if all dependencies are available:

    import pandapower
    import pandapower.networks
    import pandapower.topology
    import pandapower.plotting
    import pandapower.converter
    import pandapower.estimation

If you want to be really sure that everything works fine, run the pandapower test suite:

1.  Install pytest if it is not yet installed on your system:

        pip install pytest

2. Run the pandapower test suite:

        import pandapower.test
        pandapower.test.run_all_tests()

If everything is installed correctly, all tests should pass or xfail (expected to fail).


## A short introduction <a name="intro"></a>

A network in pandapower is represented in a pandapowerNet object, which
is a collection of pandas Dataframes. Each dataframe in a pandapowerNet
contains the information about one pandapower element, such as line,
load transformer etc.

We consider the following simple 3-bus example network as a minimal
example:

![](http://pandapower.readthedocs.io/en/latest/_images/3bus-system.png)


### Creating a network

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
  [jupyter notebook]: https://github.com/e2nIEE/pandapower/blob/develop/tutorials/minimal_example.ipynb


  
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
  [short-circuit calculation]: https://github.com/e2nIEE/pandapower/blob/develop/tutorials/shortcircuit.ipynb
  [considering renewable energy (2016 revision)]: https://github.com/e2nIEE/pandapower/blob/develop/tutorials/shortcircuit_renewables.ipynb
  [standard types]: https://github.com/panda-power/pandapower/blob/master/tutorials/std_types.ipynb
  [topologic searches]: https://github.com/panda-power/pandapower/blob/master/tutorials/topology.ipynb
  [basic plotting]: https://github.com/panda-power/pandapower/blob/master/tutorials/plotting_basic.ipynb
  [plotting with colormaps]: https://github.com/panda-power/pandapower/blob/master/tutorials/plotting_colormaps.ipynb
  [plotting without geographical data]: https://github.com/panda-power/pandapower/blob/master/tutorials/plotting_structural.ipynb
  [built-in plots]: http://nbviewer.jupyter.org/github/e2nIEE/pandapower/blob/develop/tutorials/plotly_built-in.ipynb
  [custom plots]: http://nbviewer.jupyter.org/github/e2nIEE/pandapower/blob/develop/tutorials/plotly_traces.ipynb
  [interactive plots on maps]: http://nbviewer.jupyter.org/github/e2nIEE/pandapower/blob/develop/tutorials/plotly_maps.ipynb
  [hosting capacity]: https://github.com/e2nIEE/pandapower/blob/develop/tutorials/hosting_capacity.ipynb
