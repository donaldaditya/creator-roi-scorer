---
title: "Cutting persona production from days to 2.5 hours"
description: "A ten-step workflow, four quality gates, and what broke on the way."
date: 2026-07-29
ogImage: /og/persona-system.png
---

**Donald Aditya** · commercial operator, nine markets across Southeast Asia and Greater China

July 2026

*The persona system referenced in the [thesis](/thesis): the ten-step workflow, the quality gates, and where it stalled.*

---

## In short

- **The problem:** onboarding a persona took two to three days per creator — close to a year of manager time across 100+ creators. Industry benchmarks put persona work at [six to eight weeks](https://www.thestarrconspiracy.com/insights/benchmarks/buyer-persona-creation-benchmarks) or [120–180 hours](https://www.marketingmary.ai/blog/best-buyer-persona-tools) each.
- **Why a raw LLM failed:** ten managers with a blank prompt produced ten incompatible methods. The bottleneck was never drafting speed — it was consistency of input and clarity about where judgement belongs.
- **The fix:** a ten-step, three-phase workflow. Retrieval is tooled; the interview and the final lock stay human; the model drafts only from a structured brief, never raw data.
- **Result:** cycle time from **two to three days to 2.5 hours**, adopted by **10+ managers across 100+ creators**, with a directional **+17% followership** in the onboarded cohort (no control group).
- **Why it generalises:** the system clears all five gates from the [thesis](/thesis). The lesson holds across enterprise AI — the constraint is deciding where judgement belongs, not the model.

---

## The time was going to the wrong place

Building a usable persona takes weeks, and most of the time goes to one phase. [Zendesk puts the average at six to eight weeks](https://www.thestarrconspiracy.com/insights/benchmarks/buyer-persona-creation-benchmarks); other estimates put it at [120 to 180 hours each](https://www.marketingmary.ai/blog/best-buyer-persona-tools). Nielsen Norman Group's [2015 survey of 216 companies](https://www.nngroup.com/articles/persona-budgets/) found 23 to 103 staff hours, with data gathering the largest share every time. Those cover B2B and UX personas, so treat them as directional — but the shape holds. In a creator network the same work runs two to three days per creator, and the same phase eats it.

I had 100+ creators to onboard. At two to three days each, that is close to a year of manager time before anyone posts.

The obvious move is to point a language model at it. That move failed, and why it failed shaped the whole system.

---

## Why the timing matters now

The creator base is growing far faster than the skill to work with it — [more than 207 million creators worldwide](https://fungies.io/creator-economy-statistics), the professional tier growing 10 to 20% a year. Earnings are barbell-shaped: [roughly 3% of YouTubers take about 90% of net creator earnings](https://www.digitalapplied.com/blog/creator-economy-statistics-2026-data-points), and 76% of TikTok posts draw fewer than 1,000 views. So the scarce thing is not more creators. It is the work that turns a creator into one who converts — and that work is the manual, judgement-heavy bottleneck a persona system exists to clear. The tooling does not replace the judgement; it stops the judgement being spent on data collection.

---

## What happens when you just use an LLM

Give ten creator managers a model and a blank prompt and you get ten methods, with different implicit weightings between brand-building, follower growth and monetisation. Individually, and at the start, each output looks fine. As a set they are unusable. It is not only that you cannot compare two creators against each other — you cannot even measure them the same way, because the logic underneath each one differs. And they drift, because nothing anchored them at the start.

The bottleneck was never drafting speed. It was consistency of input, and clarity about where judgement belongs. So the design question changed: not "how do I generate personas faster" but "which parts are retrievable, which need a human in a room, and where does the model sit between them."

---

## The workflow: ten steps, three phases, 2.5 hours

<svg viewBox="0 0 1200 720" xmlns="http://www.w3.org/2000/svg" font-family="ui-sans-serif, system-ui, -apple-system, Helvetica, Arial, sans-serif" role="img" style="width:100%;height:auto;margin:24px 0;"><title>Persona production workflow: ten steps, three phases, four quality gates</title><desc>Phase A data work (four retrieval steps, manager solo, 55 minutes), Phase B engagement (twelve-question interview, human only, 45 minutes), Phase C production (synthesis, AI drafting, lock with creator, 85 minutes), with four quality gates before a creator sees a draft.</desc><rect x="0" y="0" width="1200" height="720" rx="12" fill="#FAFAF9"/><text x="44" y="52" fill="#0F1115" font-size="26" font-weight="600" letter-spacing="-0.02em">Persona production, end to end</text><text x="44" y="80" fill="#6B7280" font-size="14">Ten steps · three phases · 2.5 hours · four quality gates before a creator sees a draft</text><rect x="770" y="38" width="12" height="12" rx="2" fill="#EAEFF9" stroke="#C7D6F0"/><text x="790" y="48" fill="#6B7280" font-size="12">Retrieval / tooled</text><rect x="905" y="38" width="12" height="12" rx="2" fill="#1D4ED8" stroke="#1E3A8A"/><text x="925" y="48" fill="#6B7280" font-size="12">Human only</text><rect x="1010" y="38" width="12" height="12" rx="2" fill="#EDE9FB" stroke="#B7A9EC"/><text x="1030" y="48" fill="#6B7280" font-size="12">AI drafts</text><rect x="44" y="116" width="340" height="512" rx="10" fill="#FFFFFF" stroke="#E5E7EB"/><text x="68" y="150" fill="#1D4ED8" font-size="12" font-weight="600" letter-spacing="0.08em">PHASE A · DATA WORK</text><text x="68" y="170" fill="#9CA3AF" font-size="12">~55 min · manager solo · all retrievable</text><rect x="68" y="188" width="292" height="58" rx="7" fill="#EAEFF9" stroke="#C7D6F0"/><circle cx="92" cy="217" r="11" fill="#FFFFFF" stroke="#1D4ED8"/><text x="92" y="221" fill="#1D4ED8" font-size="12" font-weight="600" text-anchor="middle">1</text><text x="114" y="212" fill="#1E3A8A" font-size="13.5" font-weight="600">Surface scan of the account</text><text x="114" y="230" fill="#5B6472" font-size="11.5">Baseline read of where it stands</text><rect x="68" y="256" width="292" height="58" rx="7" fill="#EAEFF9" stroke="#C7D6F0"/><circle cx="92" cy="285" r="11" fill="#FFFFFF" stroke="#1D4ED8"/><text x="92" y="289" fill="#1D4ED8" font-size="12" font-weight="600" text-anchor="middle">2</text><text x="114" y="280" fill="#1E3A8A" font-size="13.5" font-weight="600">Top-20 post audit</text><text x="114" y="298" fill="#5B6472" font-size="11.5">Eleven dimensions, scored the same way</text><rect x="68" y="324" width="292" height="58" rx="7" fill="#EAEFF9" stroke="#C7D6F0"/><circle cx="92" cy="353" r="11" fill="#FFFFFF" stroke="#1D4ED8"/><text x="92" y="357" fill="#1D4ED8" font-size="12" font-weight="600" text-anchor="middle">3</text><text x="114" y="348" fill="#1E3A8A" font-size="13.5" font-weight="600">Audience pull</text><text x="114" y="366" fill="#5B6472" font-size="11.5">Demographics · interests · active hours</text><rect x="68" y="392" width="292" height="58" rx="7" fill="#EAEFF9" stroke="#C7D6F0"/><circle cx="92" cy="421" r="11" fill="#FFFFFF" stroke="#1D4ED8"/><text x="92" y="425" fill="#1D4ED8" font-size="12" font-weight="600" text-anchor="middle">4</text><text x="114" y="416" fill="#1E3A8A" font-size="13.5" font-weight="600">Comment mining</text><text x="114" y="434" fill="#5B6472" font-size="11.5">Fixed sample of recent videos</text><rect x="68" y="466" width="292" height="52" rx="7" fill="#FAFAF9" stroke="#E5E7EB" stroke-dasharray="4 3"/><text x="84" y="490" fill="#6B7280" font-size="12.5" font-weight="600">+ Cross-platform / competitor map</text><text x="84" y="507" fill="#9CA3AF" font-size="11">Scale-tier only — skipped at entry</text><text x="68" y="552" fill="#9CA3AF" font-size="11.5" font-style="italic">The phase the research calls the time sink.</text><text x="68" y="570" fill="#9CA3AF" font-size="11.5" font-style="italic">Also the phase that responds best to tooling.</text><path d="M384 350 C 404 350, 408 300, 428 300" fill="none" stroke="#B8BEC9" stroke-width="1.5"/><polygon points="428,296 436,300 428,304" fill="#B8BEC9"/><rect x="428" y="116" width="344" height="512" rx="10" fill="#FFFFFF" stroke="#C7D6F0"/><text x="452" y="150" fill="#1D4ED8" font-size="12" font-weight="600" letter-spacing="0.08em">PHASE B · ENGAGEMENT</text><text x="452" y="170" fill="#9CA3AF" font-size="12">~45 min · human only · cannot be automated</text><rect x="452" y="196" width="296" height="196" rx="9" fill="#1D4ED8"/><circle cx="480" cy="228" r="13" fill="#FFFFFF"/><text x="480" y="233" fill="#1D4ED8" font-size="14" font-weight="600" text-anchor="middle">5</text><text x="504" y="226" fill="#FFFFFF" font-size="16" font-weight="600">Twelve questions</text><text x="504" y="247" fill="#C7D6F0" font-size="12">Verbatim notes, no paraphrase</text><line x1="476" y1="268" x2="724" y2="268" stroke="#3B63DC"/><text x="476" y="296" fill="#EAEFF9" font-size="12.5" font-weight="600">Surfaces ambition + red lines.</text><text x="476" y="320" fill="#B9C9F0" font-size="11.5">If the persona fights what the creator</text><text x="476" y="337" fill="#B9C9F0" font-size="11.5">wants, they drop it inside a month.</text><text x="476" y="362" fill="#DCE6FA" font-size="11.5" font-weight="600" font-style="italic">Better data does not fix this.</text><text x="476" y="379" fill="#DCE6FA" font-size="11.5" font-weight="600" font-style="italic">Only asking does.</text><text x="452" y="430" fill="#6B7280" font-size="12" font-weight="600">The human floor of the system.</text><text x="452" y="450" fill="#9CA3AF" font-size="11.5">The model never enters this room. Deciding what</text><text x="452" y="467" fill="#9CA3AF" font-size="11.5">a human still decides is the whole design.</text><text x="452" y="492" fill="#1D4ED8" font-size="11.5" font-style="italic">Gate 3 in the thesis, made concrete.</text><path d="M772 268 C 778 268, 782 268, 786 268" fill="none" stroke="#B8BEC9" stroke-width="1.5"/><polygon points="786,264 794,268 786,272" fill="#B8BEC9"/><rect x="786" y="116" width="370" height="512" rx="10" fill="#FFFFFF" stroke="#E5E7EB"/><text x="810" y="150" fill="#1D4ED8" font-size="12" font-weight="600" letter-spacing="0.08em">PHASE C · PRODUCTION</text><text x="810" y="170" fill="#9CA3AF" font-size="12">~85 min · manager + model + creator</text><rect x="810" y="188" width="322" height="80" rx="8" fill="#EAEFF9" stroke="#C7D6F0"/><circle cx="834" cy="214" r="11" fill="#FFFFFF" stroke="#1D4ED8"/><text x="834" y="218" fill="#1D4ED8" font-size="12" font-weight="600" text-anchor="middle">8</text><text x="856" y="209" fill="#1E3A8A" font-size="13.5" font-weight="600">Synthesis — 8-field brief</text><text x="856" y="227" fill="#5B6472" font-size="11.5">15 min · manager compresses everything</text><rect x="834" y="238" width="286" height="22" rx="5" fill="#FCF3E2"/><text x="847" y="253" fill="#8A5A0B" font-size="11" font-weight="600">★ Field 8 · manager's hypothesis · carries the draft</text><rect x="810" y="280" width="322" height="80" rx="8" fill="#EDE9FB" stroke="#B7A9EC"/><circle cx="834" cy="306" r="11" fill="#FFFFFF" stroke="#6B52A8"/><text x="834" y="310" fill="#6B52A8" font-size="12" font-weight="600" text-anchor="middle">9</text><text x="856" y="301" fill="#3C3489" font-size="13.5" font-weight="600">AI drafting + edit</text><text x="856" y="319" fill="#6B5CA0" font-size="11.5">10 min · two genuinely distinct directions</text><rect x="834" y="330" width="286" height="22" rx="5" fill="#FFFFFF"/><text x="847" y="345" fill="#3C3489" font-size="11" font-weight="600">Structured brief in — never raw data</text><rect x="810" y="372" width="322" height="80" rx="8" fill="#1D4ED8"/><circle cx="834" cy="398" r="11" fill="#FFFFFF"/><text x="834" y="402" fill="#1D4ED8" font-size="12" font-weight="600" text-anchor="middle">10</text><text x="856" y="393" fill="#FFFFFF" font-size="13.5" font-weight="600">Lock with the creator</text><text x="856" y="411" fill="#C7D6F0" font-size="11.5">60 min · present both, force one choice</text><rect x="834" y="422" width="286" height="22" rx="5" fill="#3B63DC"/><text x="847" y="437" fill="#EAEFF9" font-size="11" font-weight="600">No combining · blends break the calendar</text><rect x="810" y="466" width="322" height="126" rx="8" fill="#FAFAF9" stroke="#E5E7EB"/><text x="830" y="492" fill="#374151" font-size="13" font-weight="600">4 quality gates before the creator sees a draft</text><text x="830" y="516" fill="#5B6472" font-size="11.5">① Brand rep can act on it?</text><text x="990" y="516" fill="#5B6472" font-size="11.5">② Language generic?</text><text x="830" y="538" fill="#5B6472" font-size="11.5">③ Audience matches data?</text><text x="990" y="538" fill="#5B6472" font-size="11.5">④ Voice matches creator?</text><text x="830" y="566" fill="#9CA3AF" font-size="11" font-style="italic">Every adjective traces back to data from an earlier step.</text><text x="44" y="664" fill="#9CA3AF" font-size="11.5">Steps 6–7 (cross-platform, competitor) run at scale tier only. Retrieval steps are tooled; the two human steps and the lock are where judgement lives.</text><text x="44" y="698" fill="#B8BEC9" font-size="11.5" font-weight="600">da-system.ai</text></svg>

The diagram carries the detail. Three things are load-bearing.

**Phase A is all retrieval.** The four data steps — account scan, top-20 post audit, audience pull, comment mining — are scrapable and repeatable. This is the phase the research calls the sink, and the one that responds best to tooling.

**Phase B cannot be automated, and shouldn't be.** One step: twelve questions, verbatim notes. It surfaces stated ambition and personal red lines, and both are load-bearing. If the persona contradicts what the creator actually wants, they abandon it inside a month. Better data does not fix that. Only asking does.

**Phase C is where the model finally writes — from the brief, never the raw data.** The manager compresses everything into an eight-field brief; the last field, the manager's own hypothesis, is what stops the model returning safe, bland options. The model returns two genuinely distinct directions. The creator picks one at the lock. No combining — a blended persona reintroduces the variance the system exists to remove, and does it quietly, in the content calendar, weeks later.

---

## Two layers of quality control

**Gates on each draft, before a creator sees it.** Can a brand rep name a brand and act on it? Is the language generic ("lifestyle content," "premium audience" — what a model produces from a thin brief)? Does the audience claim match the data pull? Does the voice match the verbatim interview quotes? The rule underneath all four: every adjective has to trace back to data from an earlier step.

**Validation on the system, which is a different question.** Split the cohort between creators with deep history and creators new to social, to see how much depends on history existing at all. Treat every rejection as a prompt problem first — most traced back to a thin ambition or risks field, not a difficult creator. Track at two weeks (is the creator executing it) and two months (is it working) — different questions, different fixes.

---

## Rollout

Me, then 10+ managers, then 100+ creators.

Managers pushed back first: the system looked more complex than a blank document. Creators pushed back harder, on a sharper point — less human touch. Both objections came apart the same way, and not by arguing. The system pulls human effort out of data gathering and first drafts, where it was adding nothing, and puts it into the interview and the lock, where the human is doing work only a human can do.

One principle made it legible:

- the model drafts, using inputs from the system, the manager and the creator
- the manager reviews
- the creator sees it, and approves it

The model never goes direct to the creator. Once that was written down, the "less human" objection stopped coming up.

---

## Results

- Cycle time: **two to three days → 2.5 hours** per creator
- Adoption: **10+ managers, 100+ creators**
- Onboarded cohort: **+17% followership within three months**. No control group, so directional.
- Conversion uplift: directional only; not instrumented rigorously.

I am leaving the last two lines in. The first two are measured against a real baseline. The last two are not, and dressing them up would make the first two worth less.

---

## What I would do differently

**Bring creators in earlier** — as contributors from step 7, not just approvers at step 10. The ones who engaged during construction found angles faster than the process did.

**Simplify the sell before scaling.** Manager resistance was a signal about how I explained the system, not about the workflow. I treated it as a change-management problem for too long, when a clearer one-line principle upfront would have removed most of it.

---

## A parallel worth noting

Emily Steele built Hummingbirds on an instinct that runs through this system. She [started in influencer marketing feeling social media celebrities barely moved her own buying — what moved her was what friends shared](https://www.inc.com/annabel-burba/how-this-founder-took-her-creator-economy-startup-from-a-google-doc-to-8-figures-in-revenue/91362539). She ran the first version out of a Google Doc, matched local creators to brands by hand, and only systematised once it was clearly working — growing revenue 350% from 2024 to 2025, projecting eight figures this year. Two things carry across: the thing that converts is a trusted person with a specific point of view, not reach or polish; and the winning move is to systematise a manual process that works, not automate the judgement out of it. That is the order the [thesis](/thesis) argues for.

---

## Why this generalises

The [thesis](/thesis) sets out five gates that separate enterprise AI pilots that land from those that stall. The persona system passed each one, which is why I use it as the case study.

1. **Someone owns the number, and closes the old road.** I owned the P&L. The blank-document road closed the moment the eight-field brief became the only input the model would take.
2. **A narrow, frequent workflow with a number attached.** Persona production, hundreds of times a year, against a known cost. Baseline first, then build.
3. **Decide what a human still decides.** The interview and the lock stay human by design; everything else is model or retrieval. That decision is the system.
4. **A named check before anything ships.** Four output gates, each with a defined failure mode. Without them, the system produces faster mush.
5. **An expansion path agreed before the pilot.** Me → managers → creators, each stage holding before the next.

The wider direction is the same. [Stanford's 2026 AI Index](https://hai.stanford.edu/ai-index/2026-ai-index-report) has 36% of organisations reporting improved profitability from AI against 36% reporting none. [S&P Global](https://www.spglobal.com/market-intelligence/en/news-insights/research/2025/10/generative-ai-shows-rapid-growth-but-yields-mixed-results) has the share abandoning most of their AI work rising from 17% to 42% in a year. [Gartner forecasts over 40% of agentic projects cancelled by end-2027](https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027). One of the three is a technology problem.

The model was the least interesting part of this system. What made it work was deciding, step by step, where judgement belonged — and keeping the model away from those steps.

---

## What comes next

The 2.5 hours is not the floor. The next cut is the posting itself: building the content plan and cadence into the engine, so the work after the lock stops being manual too.

One rule carries over, and it is not negotiable: the model can draft the plan, but the creator approves it before anything finalises. A persona is not a config file — it is something the creator has to live, in public, day after day. The engine can watch, compare and suggest; the human owns the lock and every change to it, and nothing auto-applies. That is Gate 3 again, one layer deeper.

---

## Sources

- [Zendesk / Salesforce B2B persona benchmarks](https://www.thestarrconspiracy.com/insights/benchmarks/buyer-persona-creation-benchmarks), 2024 — build time and budget. B2B, directional.
- [Traditional vs. AI-assisted persona cost](https://www.marketingmary.ai/blog/best-buyer-persona-tools), 2026 — 120–180 hours per persona.
- Kim Flaherty, [How Much Time Does It Take to Create Personas?](https://www.nngroup.com/articles/persona-budgets/), Nielsen Norman Group, 2015 — 216-company survey. UX personas.
- [Creator economy statistics 2026](https://fungies.io/creator-economy-statistics) · [Goldman Sachs earnings distribution](https://www.digitalapplied.com/blog/creator-economy-statistics-2026-data-points).
- Annabel Burba, [From a Google Doc to 8 Figures](https://www.inc.com/annabel-burba/how-this-founder-took-her-creator-economy-startup-from-a-google-doc-to-8-figures-in-revenue/91362539), Inc, 2026.
- [Stanford AI Index 2026](https://hai.stanford.edu/ai-index/2026-ai-index-report) · [S&P Global](https://www.spglobal.com/market-intelligence/en/news-insights/research/2025/10/generative-ai-shows-rapid-growth-but-yields-mixed-results), 2025 · [Gartner](https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027), 2025.

---

*Built and deployed inside a live P&L. Part of a set of production tools at [da-system.ai](https://www.da-system.ai/). Full argument in the [thesis](/thesis).*
