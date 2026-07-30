---
title: "Cutting persona production from days to 2.5 hours"
description: "A ten-step workflow, four quality gates, and what broke on the way."
date: 2026-07-29
ogImage: /og/persona-system.png
---

**A ten-step workflow, four quality gates, and what broke on the way.**

---

## The time was going to the wrong place

Nielsen Norman Group [surveyed 216 companies](https://www.nngroup.com/articles/persona-budgets/) on how long it takes to build a persona. The answer came back at 23 to 103 staff hours. Small companies land between 22.5 and 72.5. Large ones between 55 and 102.5. One phase eats the biggest share of that, and it's the same one every time: gathering the data.

That research covers UX personas, which is a different discipline, so treat the comparison as directional rather than like-for-like. The shape still holds. In a creator network the same work takes two to three days per creator, and the same phase eats it. Pulling content history. Audience demographics. Comment sentiment. Competitive positioning.

I had 100+ creators to onboard. At two to three days each that's roughly a year of manager time before anyone posts anything.

The obvious move is to point a language model at it. That move fails, and why it fails determined everything about how I built this.

---

## What happens when you just use an LLM

Give ten creator managers a model and a blank prompt and you get ten methods. Different data sources, different angles, different implicit weightings between brand-building, follower growth and monetization capability.

Individually the outputs look fine. In aggregate they're unusable. You can't compare two creators against each other. You can't staff against a persona. You can't hand one manager's creator to another manager and expect anything to transfer.

And they get adjusted. Repeatedly, over the following months, because nothing anchored them in the first place. That quietly costs more than the two to three days you saved.

Which told me the bottleneck was never drafting speed. It was consistency of input, and clarity about where judgment belongs.

So the design question changed. Not "how do I generate personas faster" but "which parts of this are retrievable, which parts need a human in a room, and where exactly does the model sit between them."

---

## The workflow: ten steps, three phases, 2.5 hours

<svg viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;border-radius:12px;margin:24px 0;">
  <rect width="1200" height="630" fill="#0b1a2e"/>
  <text x="60" y="64" fill="#ffffff" font-family="system-ui,sans-serif" font-size="28" font-weight="600">Persona production, end to end</text>
  <text x="60" y="94" fill="#85B7EB" font-family="system-ui,sans-serif" font-size="15">Ten steps · three phases · 2.5 hours</text>
  <!-- Phase A -->
  <rect x="60" y="130" width="330" height="440" rx="10" fill="none" stroke="#1c3a5e" stroke-width="1.5"/>
  <text x="80" y="162" fill="#85B7EB" font-family="system-ui,sans-serif" font-size="13" letter-spacing="1.5" font-weight="600">PHASE A — DATA WORK</text>
  <text x="80" y="182" fill="#6f8caf" font-family="system-ui,sans-serif" font-size="12">~55 min · manager solo</text>
  <g font-family="system-ui,sans-serif">
    <rect x="80" y="200" width="290" height="56" rx="6" fill="#122641"/>
    <text x="96" y="222" fill="#ffffff" font-size="13" font-weight="600">1. Surface scan of the account</text>
    <text x="96" y="240" fill="#6f8caf" font-size="11">Retrieval</text>
    <rect x="80" y="266" width="290" height="56" rx="6" fill="#122641"/>
    <text x="96" y="288" fill="#ffffff" font-size="13" font-weight="600">2. Top-20 post audit, 11 dimensions</text>
    <text x="96" y="306" fill="#6f8caf" font-size="11">Retrieval</text>
    <rect x="80" y="332" width="290" height="56" rx="6" fill="#122641"/>
    <text x="96" y="354" fill="#ffffff" font-size="13" font-weight="600">3. Audience pull — demo, interests, hours</text>
    <text x="96" y="372" fill="#6f8caf" font-size="11">Retrieval</text>
    <rect x="80" y="398" width="290" height="56" rx="6" fill="#122641"/>
    <text x="96" y="420" fill="#ffffff" font-size="13" font-weight="600">4. Comment mining, fixed sample</text>
    <text x="96" y="438" fill="#6f8caf" font-size="11">Retrieval</text>
    <rect x="80" y="464" width="290" height="46" rx="6" fill="#0e1e34" stroke="#1c3a5e"/>
    <text x="96" y="484" fill="#6f8caf" font-size="12">+ cross-platform / competitor map</text>
    <text x="96" y="500" fill="#6f8caf" font-size="11" fill-opacity="0.7">Scale-tier only — skipped at entry</text>
  </g>
  <!-- Phase B -->
  <rect x="435" y="130" width="330" height="200" rx="10" fill="none" stroke="#1c3a5e" stroke-width="1.5"/>
  <text x="455" y="162" fill="#85B7EB" font-family="system-ui,sans-serif" font-size="13" letter-spacing="1.5" font-weight="600">PHASE B — ENGAGEMENT</text>
  <text x="455" y="182" fill="#6f8caf" font-family="system-ui,sans-serif" font-size="12">~45 min · human only</text>
  <g font-family="system-ui,sans-serif">
    <rect x="455" y="200" width="290" height="100" rx="6" fill="#122641"/>
    <text x="471" y="228" fill="#ffffff" font-size="13" font-weight="600">5. Twelve questions, verbatim notes</text>
    <text x="471" y="248" fill="#6f8caf" font-size="11">Surfaces ambition + red lines.</text>
    <text x="471" y="264" fill="#6f8caf" font-size="11">Cannot be automated.</text>
  </g>
  <!-- Phase C -->
  <rect x="810" y="130" width="330" height="440" rx="10" fill="none" stroke="#1c3a5e" stroke-width="1.5"/>
  <text x="830" y="162" fill="#85B7EB" font-family="system-ui,sans-serif" font-size="13" letter-spacing="1.5" font-weight="600">PHASE C — PRODUCTION</text>
  <text x="830" y="182" fill="#6f8caf" font-family="system-ui,sans-serif" font-size="12">~85 min</text>
  <g font-family="system-ui,sans-serif">
    <rect x="830" y="200" width="290" height="70" rx="6" fill="#122641"/>
    <text x="846" y="222" fill="#ffffff" font-size="13" font-weight="600">8. Synthesis — 8-field brief</text>
    <text x="846" y="240" fill="#6f8caf" font-size="11">15 min · manager's hypothesis</text>
    <text x="846" y="256" fill="#6f8caf" font-size="11">is the field that matters most</text>
    <rect x="830" y="282" width="290" height="70" rx="6" fill="#122641"/>
    <text x="846" y="304" fill="#ffffff" font-size="13" font-weight="600">9. AI drafting + edit</text>
    <text x="846" y="322" fill="#6f8caf" font-size="11">10 min · two distinct directions</text>
    <text x="846" y="338" fill="#6f8caf" font-size="11">never raw data to the model</text>
    <rect x="830" y="364" width="290" height="70" rx="6" fill="#122641"/>
    <text x="846" y="386" fill="#ffffff" font-size="13" font-weight="600">10. Lock with the creator</text>
    <text x="846" y="404" fill="#6f8caf" font-size="11">60 min · force a choice,</text>
    <text x="846" y="420" fill="#6f8caf" font-size="11">no combining</text>
    <rect x="830" y="450" width="290" height="60" rx="6" fill="#0e1e34" stroke="#85B7EB" stroke-opacity="0.4"/>
    <text x="846" y="474" fill="#85B7EB" font-size="12" font-weight="600">4 quality gates before a creator</text>
    <text x="846" y="492" fill="#6f8caf" font-size="11">sees a draft →</text>
  </g>
  <!-- arrows -->
  <path d="M370 300 L435 230" stroke="#1c3a5e" stroke-width="2" fill="none" marker-end="url(#arrow)"/>
  <path d="M765 250 L810 300" stroke="#1c3a5e" stroke-width="2" fill="none" marker-end="url(#arrow)"/>
  <defs>
    <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#1c3a5e"/>
    </marker>
  </defs>
  <text x="60" y="600" fill="#6f8caf" fill-opacity="0.6" font-family="system-ui,sans-serif" font-size="12">da-system.ai</text>
</svg>

### Phase A — Data work (~55 min, manager solo)

Four steps, all retrieval. A surface scan of the account. A structured audit of the creator's top 20 posts across eleven dimensions. An audience pull covering demographics, interests and active hours. Comment mining across a fixed sample of recent videos.

All four are scrapable, structured and repeatable. This is the phase NN/g identifies as the time sink, and it's the phase that responds best to tooling.

Two further steps, cross-platform and competitor mapping, get skipped at the entry tier. They only run for creators being scaled.

### Phase B — Creator engagement (~45 min, human only)

One step. Twelve questions, verbatim notes.

This part can't be automated and shouldn't be. It surfaces stated ambition and personal red lines, and both are load-bearing. If the persona contradicts what the creator actually wants, they abandon it inside a month and drift back to what they were doing before. Better data doesn't fix that.

### Phase C — Persona production (~85 min)

**Step 8, synthesis, 15 minutes.** The manager compresses everything into an eight-field briefing: account snapshot, what's working, what's not working, audience reality, competitive gap, the creator's stated ambition, risks and sensitivities, and the manager's own hypothesis.

That last field matters more than it looks. Without a stated direction from the manager, the model generates safer and blander options. Put neutrality in, get mush out.

**Step 9, AI drafting and edit, 10 minutes.** The model gets the structured briefing. Never the raw data. It returns two genuinely distinct directions, not two variations, each covering niche, audience, voice, content pillars, product mix and endorsement fit.

**Step 10, lock with the creator, 60 minutes.** Present both. Force a choice. No combining, which sounds harsh until you've seen what a blended persona does to a content calendar.

Total: 2.5 hours.

---

## Two layers of quality control

These operate at different levels and both are necessary.

### Gates on the output

Four tests every draft has to pass before it reaches a creator.

**Can a brand rep act on it?** Read the persona, name a specific brand, decide yes or no on the pitch. If you can't decide immediately the persona is too vague to be commercially useful. This test catches most of the failures.

**Is the language generic?** A kill-list: "lifestyle content," "engaging videos," "premium audience," "authentic creator." These are what a model produces when the briefing was thin, so they're diagnostic as well as ugly.

**Does the audience match the data?** If the draft says "young women 18–35" and the audience pull showed a specific cohort in a specific city with a specific income band, the draft loses. Every claim traces back to a step.

**Does the voice match the creator?** Compare against verbatim interview quotes. A creator who speaks casually and a persona that says "sophisticated and refined" will never be adopted, and the manager will spend three months wondering why.

The rule underneath all four: every adjective in the persona has to be backed by data from an earlier step.

### Validation on the system

Output tests catch bad drafts. They tell you nothing about whether the system works.

**Split the cohort.** Run it on creators with deep posting history and on creators who are effectively new to social. The first group gives the data-driven path a fair test. The second exposes how much of the system depends on history existing at all, which is where you find out whether you built a tool or a crutch.

**Adjust for the person.** Two creators with near-identical audience profiles can need different personas because they want different things. Preference is an input.

**Treat rejection as a prompt problem first.** When a creator refuses a direction, the first question is what the briefing failed to surface. Most rejections traced back to a thin field 6 or field 7, not to a difficult creator.

**Track at two weeks and two months.** Two weeks tells you whether the creator is executing the persona. Two months tells you whether it's working. Different questions, different fixes, and neither is visible on day one.

---

## Rollout, and where it stalled

Me, then 10+ managers, then 100+ creators.

It stalled at the managers, and the objection was fair. The system looked more complex than what they were already doing. Ten steps, three phases, a template and a test suite, versus experience and a blank document.

The creators raised something sharper: less human touch.

Both dissolve the same way, and not by arguing. The system pulls human effort out of data gathering and first drafts, where it was adding nothing, and puts it into the interview and the lock session, where the human is the product. Forty-five minutes and sixty minutes respectively. That's longer than most managers were spending on those steps before.

One principle made it legible: the model drafts, the manager reviews, the creator sees. Model to creator direct, never. Once that was written down and repeated, the "less human" objection stopped coming up.

---

## Results

- Cycle time: **two to three days → 2.5 hours** per creator
- Adoption: **10+ managers, 100+ creators**
- Onboarded cohort: **+17% followership within three months**
- Conversion uplift: directional only. We didn't instrument that rigorously.

I'm leaving the last line in. The first three are measured against a baseline that existed before the system. The fourth isn't, and dressing it up would make the first three worth less.

---

## What I'd do differently

**Solve for 80/20 earlier.** The full ten-step build doesn't pay off equally at every step. Some creators need all of it. Most need a subset. I built the complete version first and then spent months finding out which parts carried the weight. Starting from a minimum viable persona and adding steps only where they demonstrably moved the outcome would have been faster and would have hit less resistance.

**Simplify before scaling.** Manager resistance was a design signal. I treated it as a change-management problem for too long, which meant I spent effort on persuasion that should have gone into the workflow.

**Bring creators in earlier.** The ones who engaged during construction found variety that worked faster than anything the process surfaced on its own. I had them as the approver at step 10. They should have been contributors from step 7.

---

## Why this generalizes

The pattern holds well beyond creators. MIT Media Lab's Project NANDA [put around 95% of enterprise GenAI pilots at zero measurable P&L impact](https://virtualizationreview.com/articles/2025/08/19/mit-report-finds-most-ai-business-investments-fail-reveals-genai-divide.aspx) in its 2025 study, *The GenAI Divide*. That figure is contested, and fairly: the report was preliminary, not peer-reviewed, and [drew criticism for its sample and its short measurement window](https://behindthesla.com.au/resources/guides/genai-95-percent-problem). The direction survives the criticism though. S&P has AI-initiative abandonment rising sharply year on year, and Gartner forecasts over 40% of agentic projects cancelled by end-2027. What separates the pilots that land from the ones that don't looks roughly like this.

A narrow, high-frequency workflow with a baseline metric that already existed. A P&L owner as sponsor, not a technology function. The workflow redesigned around the model rather than a model bolted onto the existing process. A human quality floor with explicit tests. A rollout sequenced so each stage has to earn the next.

The model was the least interesting part of this. What made it work was deciding, step by step, where judgment belonged, and then keeping the model away from those steps.

---

## Sources

- Kim Flaherty, [How Much Time Does It Take to Create Personas?](https://www.nngroup.com/articles/persona-budgets/), Nielsen Norman Group — survey of 216 companies, 2015.
- MIT Media Lab / Project NANDA, *The GenAI Divide: State of AI in Business 2025* — [summary coverage](https://virtualizationreview.com/articles/2025/08/19/mit-report-finds-most-ai-business-investments-fail-reveals-genai-divide.aspx), and a [methodological critique](https://behindthesla.com.au/resources/guides/genai-95-percent-problem) worth reading alongside it.

---

*Built and deployed inside a live P&L. Part of a set of production tools at [da-system.ai](https://www.da-system.ai/).*
