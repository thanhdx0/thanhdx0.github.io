---
title: "Building Scalable Applications"
date: "2024-09-01"
description: "Thoughts on building scalable applications"
---

Scaling a new application is rarely straightforward. Many of the architectural challenges we foresee do not manifest, while others blindside us. This article outlines some key principles on how to design web applications to be reasonably scalable from day one, without entering into premature optimization territory.

One of the easiest ways to handle scaling is to decouple long processes using task queues. Caching data near the edge is also an incredible strategy. As I expand on these topics, I'll be sharing a sequence of technical deep dives into my own recent experiences.
