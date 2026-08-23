---
title: "The Five Times I Stopped My AI System From Shipping"
description: "What alignment looks like when you run a P&L"
cardDescription: "Five moments where I overrode my own AI system, and what they taught me about who actually owns alignment in a commercial workflow."
date: 2026-08-06
ogImage: /og/alignment-in-practice.png
---

**Donald Aditya** · commercial operator, nine markets across Southeast Asia and Greater China

August 2026

*Five production decisions where a human overrode the model, and the two thesis gates that came out of them.*

---

## In short

- **What happened:** a creator's video shipped that was well made and not hers. The script came from a model, the editor followed it exactly, and nobody owned the judgment in between.
- **Why it wasn't a one-off:** four more in the same period. A trial where every video passed and the sequence failed. A persona system optimizing for the platform over the person. A brand assignment that ignored what the creator believes. A score that was accurate and an intervention that was not.
- **What I built:** gate three, decide what a human still decides. Gate four, name the check before anything ships. Model proposes, manager reviews, creator approves.
- **The reframe:** deciding what a model does autonomously and what needs a human signature is an alignment decision. It happens in commercial workflows every day and nobody in the room uses the word.
- **Still open:** the check is a human proxy that holds at a hundred creators. I don't know what replaces it at a thousand, or how to write an eval for whether an output sounds like a specific person.

---

One of my creators is a gadget person. She is bubbly and positive, and honest enough to tell her followers she buys Apple for how it looks even though she knows the features do not justify the price. She posts two or three videos a day. There are more than a hundred creators on my team, so every week I sample.

That week I found a video of hers where the storyline and script came from an AI model, prompted by her creator manager, and the editor shot and cut it exactly as written. The video looked good. It did not look like anything she would make. The color grade, the fonts, the pacing and the effects all belonged to someone else's account. It sold pragmatically and structurally. She had been uncomfortable with it and posted it anyway, because she assumed we were thinking about what was best for her.

## The pattern

That was the first of five, and the only one I found by accident. Here are the other four.

**Two. A trial that passed every check and still failed.** An earlier short-form run used different creators, ones with large followings and no clear point of view. Each video held up on its own. The sequence fell apart, because nothing carried across and nobody owned the judgment that would have caught it.

**Three. The persona system optimizing for the platform instead of the person.** Early versions kept proposing positioning that read like what the algorithm rewards. A creator manager caught it pushing the gadget creator toward simple, effortless beauty, because beauty converts. That is a fine output for a creator who likes beauty. It is the wrong one for someone whose thing is being geeky about hardware.

**Four. A brand assignment that ignored what the creator believes.** The model wanted to put a public figure into cheap mass-market beauty, including a global brand under active pro-Palestinian boycott. She is pro-Palestinian. The model had no way to know that mattered.

**Five. The one where the model was right.** Our livestream analyzer scores every creator against the same benchmark, beginner through expert. A celebrity did her first livestream after three nights of almost no sleep, between a film shoot and her foundation work. Engagement was weak and the analyzer graded it accordingly. We gave her the score. What we held back were the recommended actions, which came out pragmatic and robotic and assumed a person with time she did not have. Delivering those would have told someone who showed up exhausted that she had underperformed. We framed it as the start of a long run where all of us are still learning, and asked her for a second one.

## What I built

Two of the five gates in [my thesis](/thesis) came out of this, not out of a framework designed in advance.

Gate three: decide what a human still own. In the short-form trial we automated the video creator and never settled who owned the evaluation. The fix was to build the persona first, make the content plan an output of it, and keep a person in between.

Gate four: name the check before anything ships. A specific person, with a specific question to answer. In the persona system the checker is the creator manager, and the question is: if you were this creator, what would you respond to here, and what would you change? That puts a human inside the position the model is writing for.

Then the rule the whole system runs on. Model proposes, manager reviews, creator approves. Nothing publishes without the creator's explicit sign-off.

That step was a safety decision rather than a quality one, and it was deliberate. A creator is worth following because she is a particular person. If the model builds her persona only out of what the platform rewards, her followers get content optimized for engagement rather than for them, and she drifts toward the version of herself the algorithm likes. Nobody files a complaint about that. It does not appear in any dashboard.

## Nobody calls this alignment

Every one of those decisions was about what the model gets to do on its own and what a human has to sign. That is an alignment decision. It happens in a commercial workflow, run by a commercial team, with revenue attached, and nobody in the room uses the word.

The five gates are an alignment framework wearing commercial clothes. Gate three is scope of autonomy. Gate four is human oversight with a named owner. It is not for theory purposes but because things shipped that should not have.

The people actually responsible for AI alignment in enterprise aren't researchers. They're every single stakeholder in the workflow. The one prompting, the one building the data source, the one gating or filtering, and the user. Everyone in that chain has an obligation to raise anything that could move the AI from amplifier to risk, including the qualitative reasons. Including a feeling that something is off.

## What I still don't know

The check that works for me is a human proxy. A manager asking what the creator would change. It holds at a hundred creators. I do not know what it becomes at a thousand, and I do not know how to write an eval for whether an output sounds like a specific person rather than like the platform.

The harder one is from the opening. The creator was uncomfortable and published anyway, because she trusted us. So the gate was there, it was staffed, and it passed. How do you design a check that catches deference? If the named human agrees for the wrong reason, what did the gate actually measure?

---

*Built and deployed inside a live P&L. Part of a set of production tools at [da-system.ai](https://www.da-system.ai/). Full argument in the [thesis](/thesis).*
