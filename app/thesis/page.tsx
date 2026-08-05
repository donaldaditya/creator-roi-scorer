import type { Metadata } from "next";
import { ThesisNav } from "@/components/ThesisNav";
import {
  ChartAdoptionStage,
  ChartBarriers,
  ChartCapexRevenue,
  ChartConsumerSurplus,
  ChartEbitEffect,
  ChartFunctionAdoption,
  ChartOrgImpact,
} from "@/components/ThesisCharts";

const SITE_URL = "https://www.da-system.ai";
const TITLE = "The AI race moved from capability to commercialization";
const DESCRIPTION =
  "Donald Aditya, commercial operator across nine Asian markets, on why the constraint on AI value is no longer the model but the work of getting one into a business and keeping it there.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/thesis` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/thesis`,
    type: "article",
    images: [{ url: `${SITE_URL}/thesis/opengraph-image`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/thesis/opengraph-image`],
  },
};

const ext = { target: "_blank", rel: "noopener" as const };

export default function ThesisPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 thesis-page">
      <ThesisNav />
      <article className="thesis-doc">
        <h1>The AI race moved from capability to commercialization</h1>
        <p className="td-byline">
          <strong>Donald Aditya</strong> · commercial operator, nine markets across
          <br />
          Southeast Asia and Greater China
        </p>
        <p className="td-meta">Last updated August 2026</p>

        <h2>The argument, in brief</h2>
        <p>
          People do pay for these tools, and they still capture far more value than they hand over in fees.{" "}
          <a href="https://www.forbes.com/sites/siladityaray/2026/06/16/claude-makes-more-money-per-user-than-market-leader-chatgpt-report-finds/" {...ext}>
            Revenue per user is climbing
          </a>
          , but it sits far below the surplus that users report, so most of the value never converts. Companies buy at scale
          and cannot find the return in gross margin, headcount or cycle time. The infrastructure spend now has a repayment
          schedule, so the scarce skill is getting a model into a business and keeping it there. That is commercial work.
          The region I operate in has the widest version of the problem: companies here bought licences fast and left the
          process untouched.
        </p>

        <h2>The deadline</h2>
        <p>
          Capability was the story for years, and rightly: if the model could not do the thing, nothing else mattered. It is
          not the constraint now.{" "}
          <a href="https://hai.stanford.edu/ai-index/2026-ai-index-report" {...ext}>
            Generative AI reached 53% adoption in three years
          </a>
          , faster than the PC or the internet, counting open-weight tools alongside the frontier APIs. US consumer surplus
          hit an estimated $172 billion a year by early 2026, up from $112 billion, with most of those tools still free.
        </p>
        <figure className="td-chart">
          <p className="td-ct">Estimated annual US consumer surplus from generative AI</p>
          <p className="td-cs">$ billion per year</p>
          <div className="td-cw">
            <ChartConsumerSurplus />
          </div>
        </figure>
        <p className="td-cap">
          Figure 1. Estimated annual US consumer surplus from generative AI. Up 54% in a year; median value per user roughly
          tripled. Source:{" "}
          <a href="https://hai.stanford.edu/ai-index/2026-ai-index-report" {...ext}>
            Stanford AI Index 2026
          </a>
          , Economy chapter.
        </p>
        <p>
          Since 2023 David Cahn of Sequoia has tracked what the ecosystem must earn to justify what it builds: Nvidia&apos;s
          projected fourth-quarter data centre run rate, doubled for non-chip cost, doubled again for margin across the
          cloud provider and the AI company.{" "}
          <a href="https://sequoiacap.com/article/follow-the-gpus-perspective/" {...ext}>
            September 2023, $200 billion
          </a>
          .{" "}
          <a href="https://www.sequoiacap.com/article/ais-600b-question/" {...ext}>
            June 2024, $600 billion
          </a>
          .{" "}
          <a href="https://dcahn.substack.com/p/ais-15t-question" {...ext}>
            July 2026, $1.5 trillion
          </a>
          , roughly $3 trillion cumulatively since ChatGPT launched. Open weights do not escape this: they run on the same
          fleet, and self-hosting moves the bill rather than removing it.
        </p>
        <figure className="td-chart">
          <p className="td-ct">Annual end-customer revenue required to justify AI capex</p>
          <p className="td-cs">$ billion per year, revenue required against hyperscaler data centre capex</p>
          <div className="td-cw">
            <ChartCapexRevenue />
          </div>
        </figure>
        <p className="td-cap">
          Figure 2. Revenue required against the capex driving it. Cahn&apos;s second derivation doubles 2026 hyperscaler
          data centre capex of about $764 billion and lands on the same $1.5 trillion. He expects the chip-based version to{" "}
          <em>understate</em> the requirement over time, since it misses TPU and ASIC spend and rising memory and
          construction cost. Revenue-required figures:{" "}
          <a href="https://sequoiacap.com/article/ais-600b-question/" {...ext}>
            Sequoia and Cahn
          </a>
          . Capex series:{" "}
          <a href="https://fourweekmba.com/ai-goldman-sachs-hyperscaler-capex-trillion-ai-supercycle/" {...ext}>
            Goldman Sachs Global Investment Research
          </a>
          , combined hyperscaler data centre capex ($156B 2022, $254B 2024, $443B 2025, $764B 2026E). Source:{" "}
          <a href="https://dcahn.substack.com/p/ais-15t-question" {...ext}>
            David Cahn, July 2026
          </a>
          .
        </p>
        <p>
          Cahn points at the one place the money has arrived.{" "}
          <a href="https://dcahn.substack.com/p/ais-15t-question" {...ext}>
            AI coding has a far clearer path to revenue
          </a>{" "}
          than three years ago, and{" "}
          <a href="https://newsletter.semianalysis.com/p/anthropic-3q26-profit-over-1b-the" {...ext}>
            Anthropic has gone from a standing start to annualized revenue in the tens of billions, with quarterly profit
            above $1 billion
          </a>
          . Then commercialization has not failed. It worked completely in the one market where the buyer needed no
          persuading. Everywhere else sits an organization full of people who did not ask for this.
        </p>

        <h2>The evidence, and what is wrong with it</h2>
        <p>
          The number everyone quotes comes from MIT&apos;s Project NANDA:{" "}
          <a href="https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/" {...ext}>
            roughly 95% of enterprise AI pilots show zero measurable P&amp;L effect
          </a>
          . I used it and stopped. Futuriom{" "}
          <a href="https://www.futuriom.com/articles/news/why-we-dont-believe-mit-nandas-werid-ai-study/2025/08" {...ext}>
            could not reproduce it from the report&apos;s own exhibits
          </a>{" "}
          and asked for the data or a retraction. The report then offers NANDA, which runs a paid corporate membership, as
          the way across the gap it describes.
        </p>
        <p>
          There is a better number, from April this year. Stanford&apos;s{" "}
          <a href="https://hai.stanford.edu/ai-index/2026-ai-index-report" {...ext}>
            2026 AI Index
          </a>{" "}
          has 64% of organizations reporting improved innovation. On profitability, 36% improved against 36% no effect; on
          revenue growth, 33% against 39%.
        </p>
        <figure className="td-chart">
          <p className="td-ct">AI impact on organizational measures over the past year, 2025</p>
          <p className="td-cs">% of respondents</p>
          <div className="td-cw">
            <ChartOrgImpact />
          </div>
        </figure>
        <p className="td-cap">
          Figure 3. Self-reported effect of AI, 2025. Respondents already using AI in at least one function.
          &quot;Worsened&quot; never exceeds 2% on any measure, so this is stalling, not damage. Source:{" "}
          <a href="https://hai.stanford.edu/ai-index/2026-ai-index-report" {...ext}>
            Stanford AI Index 2026
          </a>
          , fig 4.3.5, charting McKinsey survey data, 2025. Three of nine measures shown.
        </p>
        <p>
          Companies are getting better at inventing things and no better at earning from them.{" "}
          <a href="https://www.spglobal.com/market-intelligence/en/news-insights/research/2025/10/generative-ai-shows-rapid-growth-but-yields-mixed-results" {...ext}>
            S&amp;P Global
          </a>{" "}
          agrees: the share of companies abandoning most of their AI work rose from 17% to 42% in a year. The figures are
          contested. The pattern is not.
        </p>

        <h2>The five gates</h2>
        <p>
          Pilots rarely fail because the model underperformed.{" "}
          <a href="https://www.gartner.com/en/articles/hype-cycle-for-agentic-ai" {...ext}>
            Gartner&apos;s April 2026 Hype Cycle
          </a>{" "}
          puts agentic AI at the Peak of Inflated Expectations, with only 17% of organizations actually running agents, and
          cost, security and governance controls maturing fastest. Its{" "}
          <a href="https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027" {...ext}>
            standing forecast of over 40% of agentic projects cancelled by end-2027
          </a>{" "}
          names escalating cost, unclear business value and inadequate risk controls. Only one of the three touches the
          technology, and on the chart below technical limits rank second at 38%, well behind security and risk at 62%.
          Five gates, roughly in the order they surface.
        </p>

        <div className="td-gate">
          <div className="td-g-head">
            <span className="td-g-num">1</span>
            <span className="td-g-title">Someone owns the number, and closes the old road.</span>
          </div>
          <p>
            In{" "}
            <a href="https://www.edb.gov.sg/content/dam/edb-en/business-insights/market-and-industry-reports/ai-in-southeast-asia-an-era-of-opportunity/State_of_Ai_SEA_Digital.pdf" {...ext}>
              McKinsey&apos;s Southeast Asia survey
            </a>{" "}
            of 330 companies, lack of executive sponsorship ranks last of nine barriers at 3%; globally it also ranks last,
            at 9%. Yet 55% of high performers say senior leaders take real ownership, against 29% of everyone else.{" "}
            <a href="https://www.bcg.com/publications/2026/ai-transformation-is-a-workforce-transformation" {...ext}>
              BCG puts 70% of AI value in people and process
            </a>
            , and tells leaders to back three or four priorities, not a hundred use cases.
          </p>
        </div>
        <figure className="td-chart">
          <p className="td-ct">Main obstacles to reaching fully scaled agentic AI, 2025</p>
          <p className="td-cs">% of respondents, global</p>
          <div className="td-cw tall">
            <ChartBarriers />
          </div>
        </figure>
        <p className="td-cap">
          Figure 4. Barriers to scaling agentic AI, global. Chart source:{" "}
          <a href="https://hai.stanford.edu/ai-index/2026-ai-index-report" {...ext}>
            Stanford AI Index 2026
          </a>
          , fig 3.3.10, charting McKinsey survey data. &quot;Other&quot; (2%) and &quot;None&quot; (1%) omitted. The regional
          barrier ranking and the high-performer split quoted above come from{" "}
          <a href="https://www.edb.gov.sg/content/dam/edb-en/business-insights/market-and-industry-reports/ai-in-southeast-asia-an-era-of-opportunity/State_of_Ai_SEA_Digital.pdf" {...ext}>
            McKinsey, EDB and Tech in Asia
          </a>
          . Exhibit 3 gives the regional ranking, where lack of executive sponsorship is last at 3%. The high-performer
          exhibit defines high performers as companies above US$250M revenue attributing more than 5% of EBIT to AI (n=29
          against 184, a small base).
        </p>
        <p>
          The barrier ranked last is what separates the winners. That is distance, not hypocrisy: budget was approved;
          words were said at the offsite; nobody checked whether it was still in use six months later. Permission changes
          nothing while the old way works. The sponsor&apos;s job is to close the old way.
        </p>

        <div className="td-gate">
          <div className="td-g-head">
            <span className="td-g-num">2</span>
            <span className="td-g-title">A narrow, frequent workflow with a number already attached.</span>
          </div>
          <p>
            If you cannot say what the task costs today, you cannot show it costs less tomorrow. Anthropic&apos;s{" "}
            <a href="https://www.anthropic.com/engineering/building-effective-agents" {...ext}>
              guidance on building agents
            </a>{" "}
            starts in the same place: check that the task is worth the run, that its error cost is tolerable, and that the
            model can do it at all before building a loop around it.{" "}
            <a href="https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/" {...ext}>
              OpenAI&apos;s field guide
            </a>{" "}
            adds the sequencing: set evals to establish a baseline first, then choose the model against it. Broad scope
            with no baseline makes a pilot impossible to disprove and impossible to fund.
          </p>
        </div>

        <div className="td-gate">
          <div className="td-g-head">
            <span className="td-g-num">3</span>
            <span className="td-g-title">Decide what a human still decides.</span>
          </div>
          <p>
            This is the one I got wrong. We ran a trial producing short-form video for public figures with large followings
            and no clear point of view. Each video was fine alone; in sequence they fell apart, because nothing carried
            across. We had automated the making and never settled who owned the judgement. The fix: build the persona
            first, make the content plan an output of it, and keep a person in between.{" "}
            <a href="https://www.bcg.com/publications/2026/how-ai-leaders-create-competitive-advantage" {...ext}>
              BCG
            </a>{" "}
            says the same at company scale: rethink workflows end to end rather than bolting a model on.
          </p>
        </div>

        <div className="td-gate">
          <div className="td-g-head">
            <span className="td-g-num">4</span>
            <span className="td-g-title">A named check before anything ships.</span>
          </div>
          <p>
            Not review in general: a specific test, run before output leaves the team, with a defined response when it
            fails. That is an eval, and{" "}
            <a href="https://anthropic.com/engineering/demystifying-evals-for-ai-agents" {...ext}>
              Anthropic&apos;s engineering team
            </a>{" "}
            describes the alternative precisely: flying blind, debugging reactively, unable to separate a real regression
            from noise. OpenAI treats guardrails as layered rather than singular, with a defined human handover when the
            system cannot finish. Enterprises rank the same thing first among barriers:{" "}
            <a href="https://hai.stanford.edu/ai-index/2026-ai-index-report" {...ext}>
              62% name security and risk
            </a>
            . Most often skipped, most often fatal: trust breaks on the first bad output and does not come back.
          </p>
        </div>

        <div className="td-gate">
          <div className="td-g-head">
            <span className="td-g-num">5</span>
            <span className="td-g-title">An expansion path agreed before the pilot starts.</span>
          </div>
          <p>
            Success criteria set at signing, pricing that lets the pilot convert, and a rollout where each stage earns the
            next: yourself, the team, the company, customers. Claude Code was{" "}
            <a href="https://anthropic.com/engineering/demystifying-evals-for-ai-agents" {...ext}>
              built in that order
            </a>
            : narrow evals first, harder behaviours later, monitoring and A/B tests added as it scaled.{" "}
            <a href="https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/" {...ext}>
              OpenAI says the same
            </a>
            : start small, validate with real users, add capability only once the earlier stage holds. Escalating cost,
            Gartner&apos;s first cause, is what happens when a pilot scales before anyone agreed what scaling meant.
          </p>
        </div>

        <h2>The regional part</h2>
        <p>
          Most of the good writing comes out of the US, for sound reasons: that is where the models and the largest
          budgets sit. Evidence from markets where adoption ran ahead of redesign is thinner on the ground, and that is the
          part I can add.
        </p>
        <p>
          Southeast Asia is{" "}
          <a href="https://www.edb.gov.sg/content/dam/edb-en/business-insights/market-and-industry-reports/ai-in-southeast-asia-an-era-of-opportunity/State_of_Ai_SEA_Digital.pdf" {...ext}>
            the region where everyone has started and almost nobody has finished
          </a>
          . It has the widest piloting band anywhere at 35%, and not a single firm reporting no use, against 6% globally
          and 14% across the rest of Asia Pacific. Yet six in ten report under 5% effect on operating profit despite
          putting 11% to 40% of technology budget into AI.
        </p>
        <figure className="td-chart">
          <p className="td-ct">Adoption against reported profit effect</p>
          <p className="td-cs">% of respondents</p>
          <div className="td-pair">
            <div>
              <p className="td-ph">Adoption stage by region</p>
              <div className="td-cw">
                <ChartAdoptionStage />
              </div>
            </div>
            <div>
              <p className="td-ph">Effect on EBIT, Southeast Asia (n=330)</p>
              <div className="td-cw">
                <ChartEbitEffect />
              </div>
            </div>
          </div>
        </figure>
        <p className="td-cap">
          Figure 5. Adoption against money. Bases: global n=2,084, US n=701, Southeast Asia n=330, Asia Pacific ex China
          and India n=187. Regional figures are composite, weighted by enterprise size and GDP share across six economies.
          Source:{" "}
          <a href="https://www.edb.gov.sg/content/dam/edb-en/business-insights/market-and-industry-reports/ai-in-southeast-asia-an-era-of-opportunity/State_of_Ai_SEA_Digital.pdf" {...ext}>
            McKinsey, EDB and Tech in Asia, February 2026
          </a>
          , exhibits 2 and 6. Two separate exhibits, placed side by side here.
        </p>
        <p>
          So the gap here is not smaller because adoption is faster. It is wider. Two facts from the same report, usually
          read apart, explain it: less legacy technology, so layering something new on top is cheap, and more
          family-owned businesses, where direction comes from the owner. Buying is fast, and nobody below the owner can
          authorize changing a process that works. Adoption without redesign: gate three failing because gate one never
          closed, since nobody below the owner can close the old road.
        </p>
        <p>
          The consumer side rhymes. Work by{" "}
          <a href="https://cube.asia/e-commerce-influencer-marketing-in-southeast-asia-2026/" {...ext}>
            Cube with impact.com and dentsu
          </a>{" "}
          across 2,400 shoppers found 24% use AI to discover products and 28% to research them, but influencers drove 67%
          of purchases and family or friends score highest on influence. AI is where people look, not where they decide.
          Deciding runs through creators and affiliates, worth about $70 billion, or 32% of regional e-commerce in 2026. So
          the commercial lever here is not AI-generated content competing with creators; it is AI put behind creators,
          amplifying the manual judgement that already converts. That is the gap the persona system was built for, and it
          is where consumer AI actually gets paid for.
        </p>
        <figure className="td-chart">
          <p className="td-ct">Agentic AI adoption across business functions, Southeast Asia</p>
          <p className="td-cs">% of respondents scaling or fully scaled, n=330</p>
          <div className="td-cw tall">
            <ChartFunctionAdoption />
          </div>
        </figure>
        <p className="td-cap">
          Figure 6. Agentic adoption by function, Southeast Asia, % scaling or fully scaled. The functions closest to
          revenue sit at the bottom. Global figures run far lower: scaling plus fully scaled reaches roughly 14% in IT and
          single digits nearly everywhere else, and 68% of firms report no agent use at all in marketing and sales.
          Regional numbers are self-reported and the report says executives may be overstating maturity. Nearly nine in
          ten regional companies plan to experiment with agents during 2026. Sources:{" "}
          <a href="https://www.edb.gov.sg/content/dam/edb-en/business-insights/market-and-industry-reports/ai-in-southeast-asia-an-era-of-opportunity/State_of_Ai_SEA_Digital.pdf" {...ext}>
            McKinsey, EDB and Tech in Asia
          </a>
          , exhibit 5;{" "}
          <a href="https://hai.stanford.edu/ai-index/2026-ai-index-report" {...ext}>
            Stanford AI Index 2026
          </a>
          , figs 4.3.7 and 4.3.8.
        </p>

        <h2>What I am doing about it</h2>
        <p>
          Find the problem where it sits, read it from the commercial side rather than the model side, then build.{" "}
          <a href="https://www.da-system.ai/" {...ext}>
            da-system.ai
          </a>{" "}
          is six working tools on the Anthropic API, built inside a P&amp;L I own. The{" "}
          <a href="https://www.da-system.ai/writing/persona-system" {...ext}>
            persona system
          </a>{" "}
          shows the clearest before and after: from two or three days of a manager&apos;s time down to about two and a half
          hours, across ten-plus managers and a hundred-plus creators, with that cohort&apos;s followership up 17% in three
          months. No control group on the last figure, so treat it as directional.
        </p>
        <p>
          Before that I built commercial teams across nine markets and started the key account enterprise business from
          nothing in six of them.
        </p>
        <p>
          If you are building the commercial side of an AI company in Asia Pacific, or you think part of this argument is
          wrong, <a href="mailto:donald.aditya@gmail.com">email me</a> or find me on{" "}
          <a href="https://www.linkedin.com/in/donaldaditya/" {...ext}>
            LinkedIn
          </a>
          . I would like to hear it.
        </p>
      </article>
    </main>
  );
}
