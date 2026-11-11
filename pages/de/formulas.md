---
ref: formulas
title: Formeln & Diagramme
permalink: /de/formulas/
mermaid: true
---
Inline-Formeln schreibt man als `\( ... \)`, abgesetzte Formeln als `$$ ... $$` (MathJax 3, LaTeX-Syntax).

Die komplexe Leistungseinspeisung am Knoten \\(i\\) ist

$$
S_i = V_i \sum_{k=1}^{n} Y_{ik}^{*}\, V_k^{*}
$$

Getrennt nach Real- und Imaginärteil ergeben sich die Lastflussgleichungen

$$
\begin{aligned}
P_i &= \sum_{k=1}^{n} |V_i||V_k| \left( G_{ik}\cos\theta_{ik} + B_{ik}\sin\theta_{ik} \right) \\
Q_i &= \sum_{k=1}^{n} |V_i||V_k| \left( G_{ik}\sin\theta_{ik} - B_{ik}\cos\theta_{ik} \right)
\end{aligned}
$$

Auch Matrizen funktionieren:

$$
\begin{bmatrix} \Delta P \\ \Delta Q \end{bmatrix} =
\begin{bmatrix} J_{11} & J_{12} \\ J_{21} & J_{22} \end{bmatrix}
\begin{bmatrix} \Delta\theta \\ \Delta |V| \end{bmatrix}
$$

Chemie (mhchem): \\( \ce{CO2 + H2O <=> H2CO3} \\)

Diagramme (Mermaid):

```mermaid
flowchart LR
  A[Netz erstellen] --> B[runpp]
  B --> C{Konvergiert?}
  C -- ja --> D[res_bus, res_line]
  C -- nein --> E[Eingaben prüfen]
```
