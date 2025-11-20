---
layout: page
title: neural spectral methods
description: 
img:
importance: 1
category: research
related_publications: true
---

## overview

Neural spectral methods aim to learn the dominant spectral structure of linear operators that arise across scientific and machine learning applications, including solving PDEs, analyzing nonlinear dynamics, and learning compact representations. These methods parameterize eigenfunctions with neural networks and train them using variational principles, offering scalability and flexibility beyond classical Galerkin and finite-element approaches.

My work develops neural spectral methods through two complementary variational frameworks:

1. **Low-rank approximation (NestedLoRA / NeuralSVD)** for compact operators {% cite Ryu--Xu--Erol--Bu--Zheng--Wornell2024 %}.
2. **Orbital minimization methods (NestedOMM)** for positive-semidefinite operators {% cite Ryu--Zhou--Wornell2025 %}.

Both proposals use a simple *nesting* strategy to learn ordered eigenfunctions during training, removing the need for explicit orthogonality constraints and enabling stable optimization. These methods provide improved spectral accuracy, stronger sample efficiency, and robustness across operator learning tasks.

{% include figure.liquid loading="eager" path="assets/img/research/neural_spectral_method.png" class="img-fluid rounded z-depth-1" %}

## applications

These tools can be applied to solving PDEs as well as representation learning for reinforcement learning and graph data as demonstrated in {% cite Ryu--Xu--Erol--Bu--Zheng--Wornell2024 %} and {% cite Ryu--Zhou--Wornell2025 %}.

<div class="text-center">
  {% include figure.liquid
      loading="eager"
      path="assets/img/research/neuralsvd_hydrogen_all.png"
      class="img-fluid rounded z-depth-1 w-75"
  %}
</div>
<div class="caption">
    NestedLoRA learns the eigenfunctions of the Hamiltonian of the 2D hydrogen atom.
</div>

<div class="text-center">
  {% include figure.liquid
      loading="eager"
      path="assets/img/research/neuralsvd_sketchy_all.png"
      class="img-fluid rounded z-depth-1 w-75"
  %}
</div>
<div class="caption">
    NestedLoRA can learn structured representations for complex datasets.
</div>


Another important application is **Koopman operator learning** for nonlinear dynamical systems. In {% cite Jeong--Ryu--Yun--Wornell2025 %}, we demonstrate that NestedLoRA (a.k.a. NeuralSVD) learns compact Koopman approximations more accurately and efficiently than VAMPnet and DPNet, enabling better long-horizon prediction and interpretable dynamical modes.


<div class="text-center">
  {% include figure.liquid
      loading="eager"
      path="assets/img/research/neuralsvd_koopman_multistep.png"
      class="img-fluid rounded z-depth-1 w-75"
  %}
</div>
<div class="caption">
    NestedLoRA achieves improved long-horizon prediction for stochastic dynamical systems.
</div>


<div class="text-center">
  {% include figure.liquid
      loading="eager"
      path="assets/img/research/neuralsvd_koopman_langevin.png"
      class="img-fluid rounded z-depth-1 w-75"
  %}
</div>
<div class="caption">
    NestedLoRA learns eigenfunctions of continuous-time Langevin dynamics.
</div>

## broader perspective

Neural spectral methods sit at the interface of **operator theory**, **numerical linear algebra**, **information theory**, and **deep learning**.  
They provide a structured approach for learning operators in scientific machine learning, and open directions include:
- extensions to higher-dimensional problems;
- convergence analysis of neural spectral methods;
- integration with uncertainty quantification;
- and spectral methods for generative and inverse modeling.
