---
ref: getting-started
title: Erste Schritte
permalink: /de/getting-started/
math: false
---
## 1. Installation

```bash
pip install pandapower
```

## 2. Netz erstellen

```python
import pandapower as pp
net = pp.create_empty_network()
b1 = pp.create_bus(net, vn_kv=20.)
b2 = pp.create_bus(net, vn_kv=20.)
pp.create_ext_grid(net, bus=b1)
pp.create_line(net, b1, b2, length_km=5., std_type="NAYY 4x50 SE")
pp.create_load(net, bus=b2, p_mw=1.)
```

## 3. Lastfluss berechnen und Ergebnisse lesen

```python
pp.runpp(net)
print(net.res_bus)
```

Mehr dazu in der [Dokumentation](https://pandapower.readthedocs.io).
