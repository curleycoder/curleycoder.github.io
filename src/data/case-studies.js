export const caseStudies = [
  {
    slug: 'elika-beauty',
    title: 'Elika Beauty',
    tagline:
      'A custom booking platform that replaced third-party marketplaces and grew organic traffic from zero.',
    role: 'Full-Stack Developer',
    timeline: 'May 2025 – Present (v1 shipped June 2025)',
    liveUrl: 'https://elikabeauty.ca',
    githubUrl: '',
    overview:
      'Elika Beauty is a Vancouver-based beauty salon owned by Amina Elikaei. Before this project, the salon had no dedicated web presence — clients discovered it through Instagram or word of mouth, and bookings were handled manually through DMs and phone calls. The brief was to build a fast, elegant, and fully owned platform: a public-facing site that ranks on Google, a seamless booking flow for clients, and a lightweight admin layer for Amina to manage her schedule.',
    problem:
      'Amina was listed on Fresha, which brought some visibility but came with real costs: her salon appeared alongside competitors, ads pulled clients away before they could book, and she had zero control over SEO or her brand presentation. Every missed DM was a missed appointment.',
    metrics: [
      { label: 'Organic traffic', value: '40%', sub: 'increase in 60 days (Google Search Console)' },
      { label: 'Manual confirmations', value: '0', sub: 'every booking auto-confirmed by email' },
      { label: 'Time to v1', value: '1 month', sub: 'solo build' },
      { label: 'Booking source', value: 'Google', sub: 'clients now find via search, not DMs' },
    ],
    testimonialQuote:
      "I never thought having my own website would make this much of a difference. Clients tell me they found me on Google, and my bookings just come in — I don't have to chase anyone anymore. It feels like a real business now.",
    testimonialAuthor: 'Amina Elikaei',
    sections: [
      {
        title: 'Research',
        body: 'Audited Fresha, Vagaro, and StyleSeat to understand what salon owners lose on third-party platforms. Interviewed Amina about her workflow, pain points, and what "success" looked like.',
      },
      {
        title: 'Design',
        body: 'Designed a brand identity from scratch — logo, color palette, typography. Prioritized mobile-first since most clients book from their phones.',
      },
      {
        title: 'Build',
        body: 'Next.js App Router for SSR and SEO. Supabase for the booking database. Auth0 for the admin layer. Resend for automated email confirmations.',
      },
      {
        title: 'Launch',
        body: 'Deployed to Vercel with custom domain. Set up Google Search Console, submitted sitemap, configured meta tags for local SEO.',
      },
      {
        title: 'Results',
        body: '40% organic traffic increase in 60 days. Zero manual booking confirmations. Clients now find the salon via Google search, not just Instagram.',
      },
    ],
    conclusion:
      'This project reinforced how much value a well-built, owned web presence delivers. The real impact came from the combination: a fast site that Google can index, a booking flow with no friction, and a brand that clients trust on first visit.',
    coverImage: '/projects/elika.png',
  },
  {
    slug: 'navly',
    title: 'Navly',
    tagline:
      'A freemium SaaS that makes Canadian immigration pathways understandable — without hiring a consultant just to get started.',
    role: 'Full-Stack Developer',
    timeline: 'Solo build, 2025',
    liveUrl: 'https://navly.ca',
    githubUrl: '',
    overview:
      'Navly is a Canadian permanent residency pathway planner. Users answer an adaptive intake questionnaire about their background, work history, and language scores — and Navly returns a personalized CRS score, the Express Entry draws they qualify for, and province-by-province PNP matches. The free tier covers baseline eligibility; a paid tier unlocks detailed guidance and an AI assistant. Built and shipped solo.',
    problem:
      'Canadian immigration is genuinely complex. The CRS scoring formula, Provincial Nominee Programs, and Express Entry rounds each have their own rules, and they interact in non-obvious ways. Most people start by booking a $200 consultation just to understand their options. Navly exists to remove that barrier — give anyone an accurate, personalized snapshot of where they stand before they spend a dollar on professional advice.',
    metrics: [
      { label: 'Build type', value: 'SaaS', sub: 'freemium model, live at navly.ca' },
      { label: 'CRS engine', value: 'Modular', sub: 'rules separated by category for accuracy' },
      { label: 'PNP coverage', value: 'All provinces', sub: 'province-by-province matching' },
      { label: 'Docs required', value: '0', sub: 'no sensitive documents collected' },
    ],
    testimonialQuote:
      "Before Navly I had no idea where I stood. I'd been putting off even looking into PR because it all felt overwhelming. Seeing my actual CRS score and which provinces I qualify for — in minutes — changed everything.",
    testimonialAuthor: 'Beta user, Express Entry applicant',
    sections: [
      {
        title: 'The CRS Scoring Engine',
        body: "The Comprehensive Ranking System has dozens of variables — age, education, language scores (primary and secondary), Canadian work experience, arranged employment, and more. Each category has its own formula and they interact. I built the engine as a set of modular, isolated rule functions so each factor can be tested and updated independently. This made it possible to validate accuracy against IRCC's published examples before shipping.",
      },
      {
        title: 'Adaptive Intake Flow',
        body: 'A static form would waste time and confuse users. The intake branches based on current immigration status: a Canadian work permit holder sees different questions than an international applicant. Only relevant questions are shown, and answers feed directly into the scoring engine in real time. This reduced form length by roughly half for most users.',
      },
      {
        title: 'Province-by-Province PNP Matching',
        body: "Canada has 13 provincial and territorial nominee programs, each with their own streams, eligibility thresholds, and occupation lists. Rather than a generic eligibility checker, Navly maps the user's profile against each province's actual criteria and returns ranked matches with plain-language explanations of why they qualify (or what they're missing).",
      },
      {
        title: 'Freemium Architecture',
        body: 'Free users get their CRS score, Express Entry round eligibility, and a summary of their top provincial matches. The paid tier unlocks detailed province-specific guidance, a step-by-step action plan, and an AI assistant for follow-up questions. This structure keeps the product genuinely useful for free while creating a natural upgrade path for users who are serious about applying.',
      },
      {
        title: 'Stack and Infrastructure',
        body: 'Built with Next.js App Router and React on the frontend, Tailwind CSS for styling, and deployed on Vercel. The AI assistant is a paid-tier feature integrated via API. No sensitive documents are collected at any point — users provide self-reported profile data only.',
      },
    ],
    conclusion:
      'Navly showed me how much value comes from translating a genuinely complex system into something a person can act on. The hardest part was not the code — it was understanding immigration rules well enough to model them accurately. Getting that right was what made the product trustworthy.',
    coverImage: '/projects/navly.png',
  },
];
