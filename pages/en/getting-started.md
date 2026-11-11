---
ref: getting-started
title: Getting Started
permalink: /getting-started/
math: false
---
## 1. Install

```bash
pip install pandapower
```

## 2. Create a network

```python
import pandapower as pp
net = pp.create_empty_network()
b1 = pp.create_bus(net, vn_kv=20.)
b2 = pp.create_bus(net, vn_kv=20.)
pp.create_ext_grid(net, bus=b1)
pp.create_line(net, b1, b2, length_km=5., std_type="NAYY 4x50 SE")
pp.create_load(net, bus=b2, p_mw=1.)
```

## 3. Run a power flow and read results

```python
pp.runpp(net)
print(net.res_bus)
```

See the [documentation](https://pandapower.readthedocs.io) for more.
