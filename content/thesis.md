---
title: "The AI race moved from capability to commercialization"
description: "The constraint on AI value has shifted. It is no longer the model. It is the operator who converts capability into deployed, expanding revenue."
date: 2026-07-29
ogImage: /og/thesis.png
---

*Last updated July 2026. This page gets revised as the evidence changes.*

---

Every eighteen months for the past four years, the frontier moved and everyone recalibrated. Model capability was the story, and it was the right story, because capability was the binding constraint. If the model couldn't do the thing, nothing downstream mattered.

That constraint has loosened. Not disappeared, loosened. For a very large share of commercial problems, the models available today are already good enough, and have been for a while. The gap between what the technology can do and what companies have actually deployed is now the widest it has been.

Which makes the interesting question a different one. Not what can the model do. What does it take to get a model into a workflow, keep it there, and see it in the numbers.

---

## The evidence, and what's wrong with it

The number everyone cites is MIT Media Lab's Project NANDA study, *The GenAI Divide*, which put roughly 95% of enterprise generative AI pilots at zero measurable P&L impact.

I use that number, and I think it's worth stating plainly what's wrong with it. The study was preliminary and not peer-reviewed. It drew criticism for its sample and for measuring over a window short enough that some pilots hadn't had time to produce a result either way. Anyone who tells you 95% without mentioning that read a headline.

The direction survives the criticism, though, and it's corroborated by sources with no interest in a provocative number. [VERIFY BEFORE PUBLISHING — S&P Global data on rising rates of abandoned AI initiatives year on year. Needs primary source and link.] [VERIFY BEFORE PUBLISHING — Gartner forecast that over 40% of agentic AI projects will be cancelled by end-2027. Needs primary source and link.]

So: the precise figure is contested, and the phenomenon is not. Enterprises are running a great many pilots and converting very few of them into anything that shows up in a financial statement.

---

## Why the failure isn't technical

The pilots that fail rarely fail because the model underperformed.

They fail because a pilot and a business are different objects, and most organizations build the first while assuming it will turn into the second by itself. A pilot needs a demo. A business needs a workflow somebody owns, a metric that existed before you arrived, a quality floor, and a reason for the twelfth person to adopt it after the first eleven did.

None of that is model work. All of it is commercial work. It's the same set of problems as launching any product into an organization that didn't ask for it, which is a thing operators have been doing for a long time and which has almost nothing to do with machine learning.

I've watched this from inside a P&L rather than from a technology function, which changes what you notice. When the cost of a failed deployment lands on your own numbers, you stop being curious about what the model can do and start being interested in whether anyone will use it in March.

---

## The five conditions

From deploying agentic systems into live operations and watching which ones stuck, the pattern that separates a result from a pilot looks like this. It's five conditions, and my current read is that you need all five rather than most of them.

**A narrow, high-frequency workflow with a baseline that already exists.** If you can't say what the thing costs today, you cannot demonstrate that it costs less tomorrow. Most pilots pick a broad workflow with no baseline, which makes them unfalsifiable and therefore unfundable.

**A P&L owner as sponsor, not a technology function.** Technology functions can build. They can't force adoption, and they don't carry the cost of failure, which means they can't credibly prioritise.

**The workflow redesigned around the model.** Bolting a model onto an existing process gets you a faster version of a process that was shaped by human constraints. The gains are real and small. The large gains come from asking which steps only existed because a human was doing them.

**A human quality floor with explicit tests.** Not review in general. Named tests, applied before output reaches anyone, with a defined action on failure. This is the condition most often skipped and most often fatal, because without it trust collapses on the first bad output and never recovers.

**A rollout sequenced so each stage earns the next.** Self, then team, then organization, then external. Each stage is a real gate. Skipping to organization-wide is how you turn one solvable problem into two hundred simultaneous ones.

I'll write each of these up properly. The condition I'm least sure about is the third, because I've seen workflows where the incremental version was the right answer and the redesign would have been over-engineering. It may be that the condition is really about knowing which of the two you're doing.

---

## Why this makes commercial the bottleneck role

If capability is abundant and deployment is scarce, the scarce person is not the one who understands the model. It's the one who can take a capability and turn it into a workflow somebody pays for, repeatedly, at increasing volume, in a market with its own buying behaviour.

That's a go-to-market problem wearing technical clothes. It requires enough technical fluency to know what's actually possible — which is why I build rather than only commission — but the hard part is commercial, and the people who are good at it mostly came up somewhere other than a research lab.

---

## The regional part

Most of the writing about AI commercialization is written from San Francisco about American enterprise buyers. That's a real market and not the one I work in.

Southeast Asian and Chinese enterprise buyers behave differently. Different procurement, different tolerance for pilots, different relationship between the platform and the seller, different economics at the mid-market and long tail. The playbook that works for a US enterprise motion doesn't transfer cleanly, and the companies that assume it does spend a year finding out.

I've built commercial functions in nine markets across this region, on both sides of the West–East line, and a lot of what I know is regionally specific in ways that don't generalize. That's the part I can write about that somebody in San Francisco can't.

---

## What I'm doing about it

Building. [da-system.ai](https://www.da-system.ai/) is six production tools on the Anthropic API, deployed inside a live P&L rather than as a side project. The [persona system](/writing/persona-system) is the one with the clearest before-and-after.

And writing this down, fortnightly, mostly to find out where the argument is weak.

If you're standing up a commercial function for an AI company in this region, I'd like to compare notes.
