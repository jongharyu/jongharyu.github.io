---
layout: page
title: probabilistic and generative modeling
description: 
img: 
importance: 2
category: research
related_publications: true
---

## overview

Probabilistic and generative modeling are core components of statistical inference and modern machine learning, supporting tasks such as representation learning, scientific data modeling, and structured prediction. I develop probabilistic and generative modeling methods grounded in first principles, including divergence minimization and density-ratio estimation with statistical guarantees. The goal is to design learning objectives that are stable, interpretable, and effective in high-dimensional scientific settings, while offering a unified view of methods that are often studied separately.

Below are some recent works in this direction.

### score-of-mixture training for one-step generative models {% cite Jayashankar--Ryu--Wornell2025 %}

Recent advances in diffusion modeling aim to reduce sampling complexity while maintaining high sample quality. In {% cite Jayashankar--Ryu--Wornell2025 %}, we introduce the Score-of-Mixture framework, a new formulation for training one-step score-based generative models based on statistical divergence minimization. The method uses score estimation for gradient evaluation during training, and achieves stable optimization and state-of-the-art sample quality.

<div class="text-center">
  {% include figure.liquid
      loading="eager"
      path="assets/img/research/smt_overview.png"
      class="img-fluid rounded z-depth-1 w-75"
  %}
</div>

### unifying and improving contrastive learning principles

#### (1) unified learning principles for energy-based models {% cite Ryu--Shah--Wornell2025 %}
Energy-based models are expressive and broadly used in generative modeling, causal inference, and computational physics, but are difficult to train due to the unknown partition function. In {% cite Ryu--Shah--Wornell2025 %}, we provide a unified analysis of many existing estimators through noise contrastive estimation within a Bregman divergence framework. This perspective clarifies connections among methods, provides statistical consistency guarantees, and identifies common failure modes.

<div class="text-center">
  {% include figure.liquid
      loading="eager"
      path="assets/img/publication_preview/icml2025b.png"
      class="img-fluid rounded z-depth-1 w-50"
  %}
</div>

#### (2) consistent neural density-ratio estimation {% cite Ryu--Yeddanapudi--Xu--Wornell2025 %}
InfoNCE is widely used for representation learning, yet its relationship to mutual information has remained unclear.  
In {% cite Ryu--Yeddanapudi--Xu--Wornell2025 %}, we demystify the InfoNCE objective by providing the sharp information-theoretic characterization of the objective, and introduce a simple correction that resolves this issue, yielding consistent density-ratio and mutual-information estimation. This provides a principled basis for ratio-based learning across various downstream tasks in machine learning.

<div class="text-center">
  {% include figure.liquid
      loading="eager"
      path="assets/img/publication_preview/infonce.png"
      class="img-fluid rounded z-depth-1 w-75"
  %}
</div>

## broader perspective

These probabilistic tools support a range of modeling tasks, including score-based generative modeling for scientific data, energy-based formulations for structured prediction, and ratio-based training for representation learning and distribution estimation.

Probabilistic and generative modeling connect modern deep learning with classical ideas in **statistics**, **information theory**, and **stochastic processes**. Ongoing work includes:

- developing score-based models aligned with operator and spectral structure,  
- integrating ratio-based learning with uncertainty quantification,  
- and applying these methods to scientific inverse problems and simulation pipelines.
