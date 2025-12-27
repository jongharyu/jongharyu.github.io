---
layout: page
title: uncertainty quantification
description: 
img: 
importance: 3
category: research
related_publications: true
---

## overview

To apply ML techniques to scientific and engineering systems, we require reliable uncertainty estimates. Models must quantify uncertainty, detect distribution shift, and support adaptive decision making, yet many uncertainty quantification (UQ) techniques in deep learning remain ad hoc. Often, classical methods do not scale, and heuristic approaches behave unpredictably in safety-critical environments such as control, robotics, and adaptive sensing.

My work approaches UQ along two complementary fronts:
1. **theoretical tools for anytime-valid and sequential decision making**, and  
2. **practical diagnostics and corrections for empirical UQ methods in large models**.

## information-theoretic anytime-valid inference

Many scientific and engineering tasks operate in sequential or adaptive settings where fixed-time uncertainty bounds fail. Using ideas from universal coding and gambling, I develop **confidence sequences** (CSs) that provide time-uniform uncertainty guarantees. These results strengthen classical concentration bounds and support sequential decision making problems such as A/B testing and contextual bandits.

This line of work establishes the power of information-theoretic constructions of confidence sequences, including:
- confidence sequences for bounded variables {% cite Ryu--Bhatt2024 %},  
- confidence sequences for bounded vectors {% cite Ryu--Wornell2024 %}, and  
- confidence sequences for semi-unbounded variables {% cite Ryu--Kwon--Koppe--Jun2025 %}, which have applications in offline bandit problems.

## diagnosing empirical UQ

There are many proposals for scalable uncertainty quantification in large neural predictive models, yet their statistical meanings and failure modes often remain unclear. In {% cite Shen--Ryu--Ghosh--Bu--Sattigeri--Das--Wornell2024 %}, we analyze **evidential deep learning** and show that its uncertainty targets do not correspond to the underlying data distribution, contrary to the original interpretation. This explains its inconsistent empirical behavior and highlights structural issues in commonly used heuristic UQ pipelines. These findings motivate the need for uncertainty quantification methods that remain meaningful and reliable even in large-scale or misspecified regimes.


## broader perspective

These theoretical and empirical perspectives support reliable decision making in systems such as data-driven control, safe autonomy, adaptive sensing, and scientific inference. Ongoing work includes:

- extending confidence sequence techniques to operator-valued settings such as streaming PCA,  
- integrating time-uniform UQ with operator learning and generative modeling,  
- and designing UQ frameworks that scale to large models with provable reliability guarantees.

These tools aim to provide the foundations for uncertainty-aware scientific and engineering workflows, where reliable decisions depend on trustworthy uncertainty estimates.
