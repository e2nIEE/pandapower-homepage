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

pandapower is tested with up-to-date Python version, as listed at [pypi](https://pypi.org/project/pandapower/). We recommend the [Anaconda Distribution](https://www.anaconda.com/), which provides a Python distribution that already includes a lot of modules for scientific computing that are needed. Simply [download](https://www.anaconda.com/download) and install the newest version of Anaconda and you are all set to run pandapower.

Of course it is also possible to use pandapower with other distributions besides Anaconda. It is however important that the following packages are included:

- numpy
- scipy
- pandas
- networkx
- packaging
- tqdm
- deepdiff

Since some of these packages depend on C-libraries, they cannot be easily installed through pip on Windows systems.
If you use a distribution that does not include one of these packages, you either have to build these libraries yourself or switch to a different distribution.

<h2 id="install">Installing pandapower</h2>

<h3 id="pip">Through pip</h3>

The easiest way to install pandapower is through pip:

1. Open a command prompt (e.g. start-->cmd on windows systems)

2. Install pandapower by running: 

    ```
pip install pandapower[all]
    ```

<h3 id="nopip">Without internet connection</h3>

If you don't have internet access on your system, pandapower can also be installed from local files:

1.  Download and unzip the current pandapower distribution from [PyPi](https://pypi.org/project/pandapower/) under "Download files".
2.  Open a command prompt (e.g. Start\--\>cmd on Windows) and navigate to the folder that contains the pandapower code with the command cd
    \<folder\>: 

    ```
cd %path_to_pandapower%\pandapower-x.x.x\
    ```

3.  Install pandapower by running: 

    ```
pip install -e .[all]
    ```

The option "-e" means that pip will provide an editable environment. In other words, the changes in the files in the directory with pandapower code will be considered. In case this is not necessary, an installation without the option -e will install the files in the environment as a copy, and the downloaded folder can be safely removed.

The option "all" means that not only the strictly required dependencies are installed, but also all the optional packages. Other options are: "docs", "plotting", "test", "performance" (includes ortools for faster state estimation, numba and lightsim2grid that substantially improve the performance of power flow calculations), "fileio", "converter", "pgm" (includes the interface to power-grid-model as a power flow calculation engine). Most users can use the version "all" unless there are resons to avoid certain depemdencies.

<h3 id="develop">Development Version</h3>

To install the latest development version of pandapower from [github](https://github.com/e2nIEE/pandapower), simply follow these steps:

1. Download and install [git](https://git-scm.com).

2. Open a git shell and navigate to the directory where you want to keep your pandapower files.

3. Run the following git command: 

    ```
git clone https://github.com/e2nIEE/pandapower.git
    ```

4. Navigate inside the repository and check out the develop branch: 

    ```
cd pandapower
git checkout develop
    ```

5. Open a command prompt (cmd or anaconda command prompt) and navigate to the folder where the pandapower files are located. Run: 

    ```
pip install -e .[all]
    ```

   This registers your local pandapower installation with pip, the option -e ensures the edits in the files have a direct impact on the pandapower installation, and "all" installs all the optional dependencies.


## Test your installation <a name="test"></a>

A first basic way to test your installation is to import all pandapower submodules to see if all dependencies are available: 

```python
import pandapower
import pandapower.networks
import pandapower.topology
import pandapower.plotting
import pandapower.converter
import pandapower.estimation
```

If you want to be really sure that everything works fine, run the pandapower test suite:

1.  Install pytest if it is not yet installed on your system: 

    ```
pip install pytest
    ```

2. Run the pandapower test suite: 

    ```python
import pandapower.test
pandapower.test.run_all_tests()
    ```

If everything is installed correctly, all tests should pass or xfail (expected to fail).


## A short introduction <a name="intro"></a>

A network in pandapower is represented in a pandapowerNet object, which
is a collection of pandas Dataframes. Each dataframe in a pandapowerNet
contains the information about one pandapower element, such as line,
load transformer etc.

We consider the following simple 3-bus example network as a minimal
example:

![](/images/getting_started/3bus-system.png)


### Creating a network

The above network can be created in pandapower as follows: 

```python
import pandapower as pp
# create empty net
net = pp.create_empty_network()

# create buses
b1 = pp.create_bus(net, vn_kv=20., name="Bus 1")
b2 = pp.create_bus(net, vn_kv=0.4, name="Bus 2")
b3 = pp.create_bus(net, vn_kv=0.4, name="Bus 3")

# create bus elements
pp.create_ext_grid(net, bus=b1, vm_pu=1.02, name="Grid Connection")
pp.create_load(net, bus=b3, p_mw=0.1, q_mvar=0.05, name="Load")

# create branch elements
pp.create_transformer(net, hv_bus=b1, lv_bus=b2, std_type="0.4 MVA 20/0.4 kV", name="Trafo")
pp.create_line(net, from_bus=b2, to_bus=b3, length_km=0.1, name="Line",std_type="NAYY 4x50 SE")
```

Note that you do not have to calculate any impedances or tap ratio for
the equivalent circuit, this is handled internally by pandapower
according to the pandapower [transformer model]. The [standard type
library] allows comfortable creation of line and transformer elements.

The pandapower representation now looks like this:

![image](/images/getting_started/pandapower_datastructure.png)

### Running a Power Flow

A powerflow can be carried out with the [runpp function][]:

```python
pp.runpp(net)
```

When a power flow is run, pandapower combines the information of all
element tables into one pypower case file and uses pypower to run the
power flow. The results are then processed and written back into
pandapower:

![image](http://pandapower.readthedocs.io/en/latest/_images/pandapower_powerflow.png)

For the 3-bus example network, the result tables look like this:

![image](/images/getting_started/pandapower_results.png)

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

Basic introduction:

   -   [Minimal example](https://github.com/panda-power/pandapower/blob/master/tutorials/minimal_example.ipynb)
   -   [Creating a simple network](https://github.com/panda-power/pandapower/blob/master/tutorials/create_simple.ipynb)
   -   [Running a power flow](https://github.com/panda-power/pandapower/blob/master/tutorials/powerflow.ipynb)
   -   [Creating an advanced network](https://github.com/panda-power/pandapower/blob/master/tutorials/create_advanced.ipynb)
   -   [Working with the pandapower standard type library](https://github.com/panda-power/pandapower/blob/master/tutorials/std_types.ipynb)
   -   [Application example: calculate hosting capacity with pandapower](https://github.com/e2nIEE/pandapower/blob/develop/tutorials/hosting_capacity.ipynb)

Data analysis and modelling error diagnostic:

   -   [Analysing data in pandapower tables](https://github.com/panda-power/pandapower/blob/master/tutorials/data_analysis.ipynb)
   -   [Diagnosing inconsistent or incorrect data](https://github.com/panda-power/pandapower/blob/master/tutorials/diagnostic.ipynb)
   -   [About the internal data structure of pandapower](https://github.com/panda-power/pandapower/blob/master/tutorials/internal_datastructure.ipynb)

Optimal power flow:

   -   [Configuring and running an optimal power flow](https://github.com/panda-power/pandapower/blob/master/tutorials/opf_basic.ipynb)
   -   [Calculate power curtailment with an OPF](https://github.com/panda-power/pandapower/blob/master/tutorials/opf_curtail.ipynb)
   -   [Calculate DC line dispatch with an OPF](https://github.com/panda-power/pandapower/blob/master/tutorials/opf_dcline.ipynb)
   -   [Using PowerModels.jl to carry out an OPF](https://github.com/panda-power/pandapower/blob/master/tutorials/opf_powermodels.ipynb)
   -   [Using PowerModels.jl TNEP (transmission network expansion planning) interface](https://github.com/e2nIEE/pandapower/blob/develop/tutorials/tnep_powermodels.ipynb)
   -   [Using PowerModels.jl OTS (optimal transmission switching) interface](https://github.com/e2nIEE/pandapower/blob/develop/tutorials/ost_powermodels.ipynb)
   -   [Using PowerModels.jl storage interface](https://github.com/e2nIEE/pandapower/blob/develop/tutorials/storage_powermodels.ipynb)

State estimation:

   -   [Configure and run a state estimation](https://github.com/panda-power/pandapower/blob/master/tutorials/state_estimation.ipynb)

Short-circuits:

   -   [Run a short-circuit calculation according to IEC 60909](https://github.com/e2nIEE/pandapower/blob/develop/tutorials/shortcircuit.ipynb)
   -   [Short-circuit calculations considering renewable energy (2016 revision)](https://github.com/e2nIEE/pandapower/blob/develop/tutorials/shortcircuit_renewables.ipynb)

Topology package:

   -   [Running topological graph searches](https://github.com/panda-power/pandapower/blob/master/tutorials/topology.ipynb)

Plotting pandapower networks (static with matplotlib):

   -   [Plotting geographic network plans](https://github.com/panda-power/pandapower/blob/master/tutorials/plotting_basic.ipynb)
   -   [Plotting network plans with colormaps](https://github.com/panda-power/pandapower/blob/master/tutorials/plotting_colormaps.ipynb)
   -   [Plotting structural plans without geographical data](https://github.com/panda-power/pandapower/blob/master/tutorials/plotting_structural.ipynb)
   -   [Embedding matplotlib colormaps in PyQt](https://github.com/panda-power/pandapower/blob/master/tutorials/plotting_pyqt.ipynb)


Plotting pandapower networks (interactive with plotly)

   -   [Creating interactive plots with plotly](http://nbviewer.jupyter.org/github/e2nIEE/pandapower/blob/develop/tutorials/plotly_built-in.ipynb)
   -   [Customize plotly plots](http://nbviewer.jupyter.org/github/e2nIEE/pandapower/blob/develop/tutorials/plotly_traces.ipynb)
   -   [Include interactive maps as background](http://nbviewer.jupyter.org/github/e2nIEE/pandapower/blob/develop/tutorials/plotly_maps.ipynb)

Time series calculation with the pandapower control module

   -   [Basic time series calculation](https://github.com/e2nIEE/pandapower/blob/develop/tutorials/time_series.ipynb)
   -   [Advanced time series calculation](https://github.com/e2nIEE/pandapower/blob/develop/tutorials/time_series_advanced_output.ipynb)

## YouTube Tutorials <a name="youtube_tutorials"></a>

You can also find some tutorials about the basics of pandapower on YouTube:

[pandapower on YouTube](https://www.youtube.com/channel/UC0iZbJpDu5--fa8A2GWCa0Q?view_as=subscriber)
