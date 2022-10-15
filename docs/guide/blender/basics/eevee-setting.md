---
title: EEVEE 设定
lang: zh-CN
---

# {{ $frontmatter.title }}

EEVEE 是一个实时渲染引擎，虽然 EEVEE 使用和 Cycles 一样的着色器节点，但与 Cycles 不同的是，EEVEE 基于光栅化的多种算法来估算光线和物体材质，并不像 Cycles 基于物理光线追踪来计算每个光线的反弹。

EEVEE 相比于 Cycles 有很多的弊端，包括但不限于：

- 显存管理由显卡驱动完成，庞大的场景不适合 EEVEE 进行，因为显卡驱动会一直交换资产，以保证所有需要渲染的物体正确渲染，显存溢出会导致驱动崩溃、程序冻结乃至闪退。
- 不支持多个显卡交火，即不支持多显卡渲染。
- 基于光栅化，没有计划设计给 CPU 使用，CPU 渲染效率低下。
- 活动光源，光照探头，着色器节点皆有限制。

更多弊端请参考 [Limitations - Blender Manual](https://docs.blender.org/manual/en/3.3/render/eevee/limitations.html)。