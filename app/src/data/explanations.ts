export type ExplanationSection = {
  title: string
  paragraphs: string[]
  bullets?: string[]
}

export type ExplanationArticle = {
  slug: string
  title: string
  excerpt: string
  category: string
  sections: ExplanationSection[]
}

export type ExplanationCategory = {
  slug: string
  title: string
  description: string
}

export const explanationCategories: ExplanationCategory[] = [
  {
    slug: 'start-here',
    title: 'Start Here',
    description:
      'Foundational reading for understanding what NotTaxAdvice is, how the system works, and what boundaries it keeps.',
  },
  {
    slug: 'roth-conversions',
    title: 'Roth Conversions',
    description:
      'How conversions are taxed, why timing matters, and where the tradeoffs usually come from.',
  },
  {
    slug: 'tax-brackets',
    title: 'Tax Brackets & Income',
    description:
      'How marginal tax rates work, how income layers stack together, and why bracket room matters.',
  },
  {
    slug: 'irmaa',
    title: 'IRMAA & Medicare',
    description:
      'Why Medicare premiums can jump in steps and how additional income can trigger those changes.',
  },
  {
    slug: 'capital-gains',
    title: 'Capital Gains',
    description:
      'How gains interact with ordinary income and why the order of those layers changes the result.',
  },
  {
    slug: 'rmds',
    title: 'RMDs',
    description:
      'How required distributions create forced income and reshape tax decisions later in retirement.',
  },
  {
    slug: 'glossary',
    title: 'Glossary',
    description:
      'Plain-English definitions for common retirement and tax terms that are often used without explanation.',
  },
  {
    slug: 'methodology',
    title: 'Methodology',
    description:
      'How the explanations simplify the system, what assumptions they make, and where the model intentionally stops.',
  },
]

export const fallbackExplanations: ExplanationArticle[] = [
  {
    slug: 'what-is-nottaxadvice',
    title: 'What Is NotTaxAdvice?',
    excerpt:
      'What problem this system is trying to solve, what it helps make legible, and what it deliberately refuses to do.',
    category: 'start-here',
    sections: [
      {
        title: 'The problem is not calculation alone',
        paragraphs: [
          'Most people do not struggle because tax software cannot produce a number. They struggle because the number arrives without a usable explanation. The output may be technically correct, but it is not legible. You are left asking why this happened, what changed, and what would happen if one input moved.',
          'NotTaxAdvice exists to make those interactions understandable. The goal is not to replace a CPA, financial planner, or attorney. The goal is to expose the mechanics that usually stay buried under forms, worksheets, and compliance-oriented software.',
        ],
      },
      {
        title: 'What the system is designed to do',
        paragraphs: [
          'The system focuses on explanation, not recommendation. It shows how a tax result can emerge from a sequence of rules: income stacking, bracket thresholds, phaseouts, capital-gains treatment, IRMAA cliffs, and required distributions.',
          'A good explanation should let you inspect the chain of cause and effect. If ordinary income rises, you should be able to see what threshold it crossed. If a Roth conversion changes Medicare premiums two years later, that connection should be explicit rather than implied.',
        ],
        bullets: [
          'Translate tax mechanics into plain English',
          'Show rule interactions instead of only final outputs',
          'Make assumptions visible so users know what they are looking at',
          'Support understanding of tradeoffs over time rather than one isolated year',
        ],
      },
      {
        title: 'What the system is not designed to do',
        paragraphs: [
          'NotTaxAdvice does not tell you what you should do. It does not know your full legal, financial, family, or planning context. It cannot weigh the non-tax considerations that often matter just as much as the tax result.',
          'That limitation is not a bug. It is part of the product boundary. Once a system starts acting like a personalized advisor, it becomes tempting to hide uncertainty behind confident language. This product does the opposite: it narrows scope so the explanation can stay honest.',
        ],
      },
      {
        title: 'Why that boundary matters',
        paragraphs: [
          'People often hear “this is not advice” as legal boilerplate. Here it is also a design principle. Advice compresses complexity into a recommendation. Explanation expands the system so you can inspect it. Those are different jobs.',
          'If the product is doing its job well, you leave with clearer questions, a better grasp of tradeoffs, and a more informed conversation to have with a qualified human advisor when needed.',
        ],
      },
    ],
  },
  {
    slug: 'how-calculations-work',
    title: 'How the Calculations Work',
    excerpt:
      'A high-level walkthrough of how the model turns inputs into tax explanations without pretending that every unknown can be eliminated.',
    category: 'start-here',
    sections: [
      {
        title: 'The model starts with inputs, not recommendations',
        paragraphs: [
          'Every explanation begins with a set of stated facts: filing status, income components, ages, account balances, and any simulated actions such as a Roth conversion or capital-gain realization. The model cannot explain results clearly if the starting assumptions are ambiguous.',
          'That is why the system favors explicit inputs and visible assumptions over hidden defaults. The point is not to create an illusion of precision. The point is to show what the result depends on.',
        ],
      },
      {
        title: 'Income is layered in order',
        paragraphs: [
          'Many tax misunderstandings come from thinking all income is taxed the same way. It is not. Ordinary income, qualified dividends, long-term capital gains, Social Security, and conversion income do different things and often interact asymmetrically.',
          'The model therefore layers income categories the way the tax system generally treats them. That makes it possible to explain not just the total tax, but which layer caused which effect.',
        ],
        bullets: [
          'Ordinary income fills ordinary brackets first',
          'Capital gains are evaluated on top of ordinary income',
          'Threshold-based rules are checked after the relevant income measure is built',
          'Future-year effects are shown separately from same-year tax effects',
        ],
      },
      {
        title: 'Thresholds matter because systems are not linear',
        paragraphs: [
          'The tax system often behaves smoothly until it suddenly does not. A marginal rate bracket can create one kind of jump. IRMAA thresholds create another. Credit phaseouts and deduction limits can create others still.',
          'A useful model therefore pays close attention to boundaries. When a result changes, the explanation should show whether the change came from a simple increase in taxable income or from crossing a line that triggered a different rule set.',
        ],
      },
      {
        title: 'The output is an explanation, not only a number',
        paragraphs: [
          'After the underlying calculations run, the system translates the result into plain language. That translation is not decoration. It is the product. The explanation should identify the dominant drivers, the relevant thresholds, and the tradeoffs created by changing one input.',
          'If a number is correct but the user cannot tell why it changed, the explanation is incomplete. The model is built around the opposite standard: every meaningful result should have an inspectable story behind it.',
        ],
      },
    ],
  },
  {
    slug: 'limitations',
    title: 'Limitations & Assumptions',
    excerpt:
      'The model is designed to be transparent, but transparency only helps if the boundaries are stated clearly.',
    category: 'methodology',
    sections: [
      {
        title: 'Every model simplifies',
        paragraphs: [
          'A retirement tax model has to simplify somewhere. The real system contains thousands of pages of law, agency guidance, exceptions, edge cases, and fact-specific interpretations. Pretending otherwise would create false confidence.',
          'The more useful approach is to simplify deliberately and say where the simplification occurs. That lets users understand both what the model can illuminate and where professional review is still necessary.',
        ],
      },
      {
        title: 'The model is strongest when the rules are inspectable',
        paragraphs: [
          'The explanations are best at showing structured interactions: how bracket room gets used, how a conversion increases ordinary income, how capital gains stack, or how IRMAA responds to MAGI thresholds. Those are systems where cause and effect can be traced.',
          'The model is weaker when the answer depends on facts that are highly personal, rapidly changing, or legally ambiguous. In those situations, the right outcome may depend less on arithmetic and more on context the system does not have.',
        ],
      },
      {
        title: 'Common sources of simplification',
        paragraphs: [
          'Some assumptions exist so the explanation can stay readable. Others exist because future law, market performance, and personal behavior cannot be known in advance. The important thing is that these assumptions are constraints, not hidden truths.',
        ],
        bullets: [
          'Current-law framing rather than prediction of future legislation',
          'Illustrative investment and inflation assumptions where projections are shown',
          'Reduced treatment of edge-case exceptions unless they drive the main result',
          'Federal emphasis first, with state rules treated separately or omitted when not modeled',
        ],
      },
      {
        title: 'Why the limitations are stated directly',
        paragraphs: [
          'A system becomes more trustworthy when it tells you where it stops. The goal here is not to sound definitive at all costs. The goal is to make the explanation useful without encouraging overreach.',
          'When you know what has been simplified, you can treat the output appropriately: as a structured explanation of how the system behaves under stated conditions, not as a substitute for individualized professional judgment.',
        ],
      },
    ],
  },
  {
    slug: 'roth-conversion-timing',
    title: 'Roth Conversions: Why Timing Drives the Outcome',
    excerpt:
      'A Roth conversion is not just a tax event. It is a timing decision about when income is recognized and which future pressures you are trying to reduce.',
    category: 'roth-conversions',
    sections: [
      {
        title: 'A conversion moves income across time',
        paragraphs: [
          'A Roth conversion generally takes dollars that would have been taxed later and pulls that taxable event into the current year. That is the core tradeoff. You are voluntarily accelerating income recognition in exchange for changing what later years may look like.',
          'Because of that, the right framing is usually not “Is a conversion good?” but “Compared with what later income pattern?” Without the future comparison, the present-year tax bill looks isolated when it is actually part of a longer timeline.',
        ],
      },
      {
        title: 'The key question is often bracket management',
        paragraphs: [
          'Many retirees hear phrases like “fill up your bracket” without being shown what that means. In practice, the idea is simple: if this year’s ordinary income is relatively low, there may be room to recognize additional income before the next marginal rate applies.',
          'That does not automatically make conversion income attractive. It simply means the current-year tax cost may be lower than it would be after RMDs, Social Security, or other income sources begin to stack on top of one another.',
        ],
      },
      {
        title: 'Second-order effects can matter as much as the tax itself',
        paragraphs: [
          'A conversion can change more than the line labeled federal income tax. It may alter Medicare premiums later through IRMAA, affect the taxation of Social Security, or reduce future RMD pressure. Those interactions are why the explanation has to cover multiple systems at once.',
          'This is also why a conversion can feel confusing. A move that looks sensible in one frame can look expensive in another if the explanation stops too early.',
        ],
      },
      {
        title: 'The useful way to read the result',
        paragraphs: [
          'The point of modeling a conversion is not to produce a blanket yes or no. It is to reveal the structure of the tradeoff. How much tax are you paying now? Which threshold are you approaching? What future income pressure might you be reducing?',
          'Once those pieces are visible, the decision becomes more legible. It may still be hard. But it is no longer mysterious.',
        ],
      },
    ],
  },
  {
    slug: 'room-left-in-bracket',
    title: 'What “Room Left in Your Bracket” Actually Means',
    excerpt:
      'Bracket room is one of the most repeated phrases in retirement planning, and one of the least clearly explained.',
    category: 'tax-brackets',
    sections: [
      {
        title: 'A bracket is marginal, not average',
        paragraphs: [
          'When people hear “you are in the 22 percent bracket,” they often assume every additional dollar is taxed exactly the same way or that all income is taxed at that rate. Neither is true. The U.S. system is layered. Different slices of ordinary income are taxed at different marginal rates.',
          'That means “room left” refers to the amount of additional ordinary income you could recognize before the next marginal rate begins to apply to the next dollar.',
        ],
      },
      {
        title: 'Why the phrase matters in retirement planning',
        paragraphs: [
          'Retirement often creates years when income is temporarily lower than it was during peak earnings. Before RMDs arrive, before Social Security fully layers in, or in years with unusually low realized income, there may be more space in a lower bracket than people expect.',
          'That is why planners watch bracket room so closely. It can affect whether additional income this year is relatively cheap or whether it starts pushing into a more expensive layer.',
        ],
      },
      {
        title: 'Room is not permission',
        paragraphs: [
          'Having bracket room does not mean you should always use it. That is where explanations often become too simplistic. Bracket room tells you something about the marginal tax cost of extra income this year. It does not by itself answer whether recognizing that income improves the larger plan.',
          'For example, the same amount of additional income might look acceptable under bracket analysis but become less attractive once IRMAA or capital-gains interactions are included.',
        ],
      },
      {
        title: 'A better way to think about it',
        paragraphs: [
          'Bracket room is best treated as a diagnostic. It tells you where you are in the structure right now. It helps explain why a conversion of one size behaves differently from a conversion of a larger size.',
          'That diagnostic becomes truly useful when it is paired with other layers of the system. On its own, it is a map. It is not yet a decision.',
        ],
      },
    ],
  },
  {
    slug: 'irmaa-why-one-dollar-matters',
    title: 'IRMAA: Why $1 Can Matter',
    excerpt:
      'IRMAA is one of the clearest examples of how a tax-adjacent system can behave in cliffs rather than smooth gradients.',
    category: 'irmaa',
    sections: [
      {
        title: 'IRMAA is a threshold system',
        paragraphs: [
          'IRMAA, the income-related adjustment for Medicare premiums, does not rise smoothly with every additional dollar. It generally moves in bands. If income stays below a threshold, premiums remain in one tier. If income crosses the line, the premium can jump into the next tier.',
          'That structure is why people say a single dollar can matter. The phrase is shorthand for crossing a threshold, not for one dollar carrying magical significance by itself.',
        ],
      },
      {
        title: 'The timing catches people off guard',
        paragraphs: [
          'IRMAA is especially confusing because the premium effect usually shows up later than the tax event that caused it. A Roth conversion or other income increase can happen in one year and influence Medicare premiums in a later year because the system looks back.',
          'That time lag makes the connection easy to miss. If the explanation does not tie those years together, the premium jump can feel arbitrary when it is actually traceable.',
        ],
      },
      {
        title: 'This is why marginal analysis is not enough',
        paragraphs: [
          'A conversion might still fit inside a marginal tax bracket you are comfortable with while simultaneously pushing MAGI across an IRMAA threshold. In that case, the tax bracket analysis alone understates the total cost of the move.',
          'That does not mean the conversion is automatically wrong. It means the explanation has to be broad enough to capture both systems at once.',
        ],
      },
      {
        title: 'The practical lesson',
        paragraphs: [
          'When a system has cliffs, precision around thresholds matters more than intuition suggests. A move that seems only slightly larger may not be slightly more expensive. It may change tiers.',
          'That is the real lesson behind the “one dollar” phrase: in threshold systems, boundaries matter disproportionately, and good explanations make those boundaries visible before they are crossed.',
        ],
      },
    ],
  },
  {
    slug: 'how-rothmax-calculates-taxes',
    title: 'How RothMax Calculates Taxes',
    excerpt:
      'A clearer look at how ordinary income, gains, thresholds, and projections are combined into one inspectable model.',
    category: 'methodology',
    sections: [
      {
        title: 'The model is rule-based before it is explanatory',
        paragraphs: [
          'A readable explanation still needs disciplined structure underneath it. The system first applies tax logic to the stated inputs, then converts the result into plain language. If the rules are not explicit first, the narrative layer becomes too easy to hand-wave.',
          'That is why the system is organized around recognizably separate components: ordinary income treatment, gains treatment, threshold checks, and longer-term projection logic.',
        ],
      },
      {
        title: 'Different income types are handled separately on purpose',
        paragraphs: [
          'One of the most common sources of confusion is treating all income as interchangeable. The model resists that. It keeps track of which dollars are being treated as ordinary income, which are capital gains, and which interactions depend on a MAGI-style threshold rather than taxable income alone.',
          'That separation is what allows the explanation to say not only that the bill changed, but which category of income caused it to change.',
        ],
      },
      {
        title: 'Long-term projections are scenario tools, not predictions',
        paragraphs: [
          'When future-year comparisons are shown, they should be read as scenario analysis under stated assumptions. They are not claims about exactly what Congress, markets, inflation, or personal spending will do.',
          'The value of a projection is not prophecy. The value is comparative structure. It helps reveal how one income path may create more pressure later than another path under the same assumptions.',
        ],
      },
      {
        title: 'Why explanation quality matters',
        paragraphs: [
          'A strong model is not only numerically disciplined. It is communicatively disciplined. The output should preserve the logic of the underlying rules, not flatten them into marketing language or generic summaries.',
          'That is the real promise of the system: inspectable reasoning, translated into language that people can actually use.',
        ],
      },
    ],
  },
  {
    slug: 'methodology',
    title: 'Methodology',
    excerpt:
      'The methodology is built around explicit rules, visible assumptions, and outputs that can be inspected instead of merely trusted.',
    category: 'methodology',
    sections: [
      {
        title: 'The methodology favors legibility',
        paragraphs: [
          'Many financial tools optimize for speed of output. This one optimizes for clarity of explanation. That means the system has to preserve enough structure for a user to see how one variable affects another rather than collapsing everything into a single recommendation.',
          'Legibility requires discipline. Inputs must be stated, assumptions must be bounded, and outputs must be tied back to the rules that generated them.',
        ],
      },
      {
        title: 'Current-law analysis is a deliberate constraint',
        paragraphs: [
          'The methodology generally uses a current-law framing because that is the only stable basis for a reproducible explanation. Future law can change. Forecasting legislative outcomes may be tempting, but it quickly mixes explanation with speculation.',
          'That does not mean long-term scenarios are useless. It means their value comes from illustrating structure under assumptions, not claiming certainty about the future.',
        ],
      },
      {
        title: 'The system is explicit about what it does not model',
        paragraphs: [
          'Methodology is not just about the rules that are included. It is also about the rules that are excluded or simplified. When the system omits a niche exception or state-specific rule, that should be treated as an intentional scope decision, not an invisible omission.',
          'This makes the results easier to interpret correctly. Users can see what the explanation covers and where further review is appropriate.',
        ],
      },
      {
        title: 'The standard is inspectability',
        paragraphs: [
          'A useful explanation should let a thoughtful reader reconstruct the logic at a high level. You should be able to understand the drivers, the thresholds, and the reasons a result changed without appealing to a black box.',
          'That standard is demanding, but it is also the point. The methodology exists to earn understanding, not merely attention.',
        ],
      },
    ],
  },
  {
    slug: 'assumptions',
    title: 'Assumptions',
    excerpt:
      'Assumptions are not hidden defaults to be ignored. They are part of the explanation and part of the interpretation.',
    category: 'methodology',
    sections: [
      {
        title: 'Every explanation stands on assumptions',
        paragraphs: [
          'Any system that compares years, models future pressure, or explains tradeoffs has to assume something about the surrounding conditions. The problem is not that assumptions exist. The problem is when they are left invisible and mistaken for certainty.',
          'A transparent model therefore treats assumptions as first-class inputs to interpretation rather than background noise.',
        ],
      },
      {
        title: 'Some assumptions are structural',
        paragraphs: [
          'Structural assumptions include things like filing status, account type, age-based rules, and whether current law is treated as continuing. These assumptions define the framework in which the explanation operates.',
          'If one of those assumptions changes, the explanation may change in kind, not only in degree.',
        ],
      },
      {
        title: 'Some assumptions are illustrative',
        paragraphs: [
          'Illustrative assumptions are often used for scenario comparisons: estimated future growth, timing of withdrawals, or the order in which events are modeled. These assumptions are not claims about what will definitely happen. They are tools for making tradeoffs visible.',
          'That distinction matters because people often over-read projections. The explanation becomes more useful when the user sees which parts are rule-driven and which parts are scenario-dependent.',
        ],
      },
      {
        title: 'Why assumptions should stay visible',
        paragraphs: [
          'When assumptions are visible, disagreement becomes productive. You can ask whether the structure is wrong or whether a specific assumption should change. Without that visibility, all disagreement collapses into whether the output feels believable.',
          'Good explanatory systems are designed so the user can interrogate the assumptions rather than merely absorb the conclusion.',
        ],
      },
    ],
  },
  {
    slug: 'disclaimer',
    title: 'Simulation Disclaimer',
    excerpt:
      'These explanations are simulations of rule interactions under stated assumptions. They are not advice, guarantees, or individualized planning conclusions.',
    category: 'methodology',
    sections: [
      {
        title: 'A simulation is a model of behavior under conditions',
        paragraphs: [
          'When the system shows how taxes, premiums, or thresholds may respond to a given income pattern, it is modeling what the rules would do under stated assumptions. It is not declaring what any individual should do in response.',
          'That distinction matters because a simulation can be useful and still incomplete. It can clarify mechanics without capturing every fact that affects a real-world decision.',
        ],
      },
      {
        title: 'Advice requires context the model does not fully have',
        paragraphs: [
          'A personalized recommendation would require legal context, cash-flow constraints, estate goals, state-tax treatment, household preferences, and risk tolerance, among other factors. A simulation can illuminate tax structure without claiming access to all of that.',
          'The system is therefore designed to stop short of recommendation. Its role is explanatory: to help users see the mechanics they may want to discuss with a qualified professional.',
        ],
      },
      {
        title: 'No guarantee of future outcomes',
        paragraphs: [
          'Future law may change. Income may change. Markets may change. Personal circumstances may change. A simulation should therefore be read as conditional rather than prophetic.',
          'The right way to use it is as a clearer map of system behavior, not as a promise about what will happen in the future.',
        ],
      },
      {
        title: 'Why the disclaimer is part of the product',
        paragraphs: [
          'This disclaimer is not an awkward legal add-on. It reflects the actual design philosophy of the system. The product is strongest when it helps users understand mechanisms while being explicit about where judgment, context, and professional advice still belong.',
        ],
      },
    ],
  },
  {
    slug: 'capital-gains-stacking',
    title: 'How Capital Gains Stack on Top of Ordinary Income',
    excerpt:
      'Capital gains can look simple until they interact with ordinary income, bracket thresholds, and other income-based systems.',
    category: 'capital-gains',
    sections: [
      {
        title: 'Gains do not live in isolation',
        paragraphs: [
          'People often hear a capital-gains rate quoted as though it applies in a vacuum. In practice, long-term capital gains are evaluated in the context of the rest of your income. That is why the same realized gain can produce very different outcomes across different years.',
          'Understanding gains requires looking at the stack, not just the gains line by itself.',
        ],
      },
      {
        title: 'Ordinary income fills space first',
        paragraphs: [
          'A useful mental model is that ordinary income tends to occupy the lower layers first, and capital gains are evaluated on top of that structure. As ordinary income rises, it can push gains into different treatment zones even when the gains themselves have not changed.',
          'That is why conversions, wages, distributions, and gains often need to be evaluated together rather than one by one.',
        ],
      },
      {
        title: 'The interaction can change planning timing',
        paragraphs: [
          'A year that looks attractive for a Roth conversion may look less attractive once a large gain is added. The reverse can also be true: a low-income year may create flexibility for realizing gains at a lower effective cost than a later, higher-income year.',
          'The important point is that these are interactions, not separate silos.',
        ],
      },
      {
        title: 'Why explanations need to show the stack',
        paragraphs: [
          'If a model hides the stacking logic, the result feels arbitrary. If it shows the order of the layers, the user can understand why one extra source of income changes the treatment of another.',
          'That visibility is what turns a confusing tax outcome into an understandable one.',
        ],
      },
    ],
  },
  {
    slug: 'understanding-rmd-pressure',
    title: 'Understanding RMD Pressure',
    excerpt:
      'RMDs are not just mandatory withdrawals. They are a source of forced income that can compress future flexibility.',
    category: 'rmds',
    sections: [
      {
        title: 'RMDs create income whether you want it or not',
        paragraphs: [
          'Required minimum distributions are easy to describe but easy to underestimate. They do not ask whether a withdrawal is tax-efficient in that year. They require income recognition according to the rules governing the account and your age.',
          'That is why RMDs matter long before they begin. They can shape what later retirement years will look like by adding ordinary income on a schedule you do not fully control.',
        ],
      },
      {
        title: 'The pressure comes from stacking',
        paragraphs: [
          'An RMD by itself may be manageable. The problem is usually the combination. Social Security, interest, dividends, gains, and withdrawals can all accumulate on top of one another, leaving less room to manage taxes intentionally.',
          'This is why some earlier-year moves, including Roth conversions, are often discussed in relation to future RMD pressure. The connection is about future income layering, not just account type preference.',
        ],
      },
      {
        title: 'Why future-year modeling helps',
        paragraphs: [
          'RMD pressure is hard to see in a single-year snapshot because its significance comes from how it narrows later choices. A projection or scenario analysis can make that visible by showing the contrast between a future with more forced income and one with less.',
          'Again, that does not create an automatic answer. It simply makes the structure of the tradeoff easier to inspect.',
        ],
      },
      {
        title: 'The real value of the explanation',
        paragraphs: [
          'People rarely need to be told that required withdrawals exist. They need help seeing how those withdrawals interact with everything else. Once that interaction is visible, later-year tax pressure stops feeling random and starts looking like a system that can be understood.',
        ],
      },
    ],
  },
  {
    slug: 'retirement-tax-glossary',
    title: 'Retirement Tax Glossary',
    excerpt:
      'A short glossary of terms that are frequently used as if everyone already understands them.',
    category: 'glossary',
    sections: [
      {
        title: 'Marginal tax rate',
        paragraphs: [
          'The tax rate applied to the next dollar of ordinary income, not the rate applied to every dollar you earned during the year.',
        ],
      },
      {
        title: 'Effective tax rate',
        paragraphs: [
          'A broader average measure of tax paid relative to income. It is useful, but it does not answer the same question as the marginal rate.',
        ],
      },
      {
        title: 'Roth conversion',
        paragraphs: [
          'A movement of dollars from a pre-tax retirement account into a Roth account, generally creating taxable ordinary income in the year of conversion.',
        ],
      },
      {
        title: 'IRMAA',
        paragraphs: [
          'An income-related Medicare premium adjustment that can increase premiums when income crosses specified thresholds.',
        ],
      },
      {
        title: 'RMD',
        paragraphs: [
          'A required minimum distribution: the minimum amount that generally must be withdrawn from certain retirement accounts once the rules require it.',
        ],
      },
      {
        title: 'Capital-gains stacking',
        paragraphs: [
          'The idea that long-term capital gains are evaluated in the context of other income, especially ordinary income that occupies lower layers first.',
        ],
      },
      {
        title: 'MAGI',
        paragraphs: [
          'Modified adjusted gross income. The exact definition depends on the rule being applied, which is why it should never be assumed to mean the same thing everywhere.',
        ],
      },
      {
        title: 'Bracket room',
        paragraphs: [
          'The amount of additional ordinary income that can be recognized before the next marginal bracket begins to apply to the next dollar.',
        ],
      },
    ],
  },
]

export function getFallbackExplanation(slug: string) {
  return fallbackExplanations.find((article) => article.slug === slug)
}

export function getFallbackExplanationsByCategory(category: string) {
  return fallbackExplanations.filter((article) => article.category === category)
}

export function getExplanationCategory(slug: string) {
  return explanationCategories.find((category) => category.slug === slug)
}
