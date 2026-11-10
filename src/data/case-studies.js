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
    logo: '/projects/elika-logo.png',
    sections: [
      {
        title: 'Research',
        body: 'Audited Fresha, Vagaro, and StyleSeat to understand what salon owners lose on third-party platforms. Interviewed Amina about her workflow, pain points, and what "success" looked like.',
      },
      {
        title: 'First Impression',
        body: 'This is the homepage Amina\'s clients land on: a hero section built around a single "Book an appointment" CTA. The gold-on-maroon brand identity — logo, color palette, typography — was designed from scratch and carried through every page, so the first thing a visitor sees looks like a real, owned business, not a third-party listing.',
        image: '/projects/elika-home.png',
      },
      {
        title: 'The Booking Flow',
        body: 'This is the first step of the booking flow: service selection, grouped by category with pricing shown upfront. Built on Next.js App Router with Supabase handling the booking database, this screen is where conflict-prevention logic kicks in — each service has a set duration, so the system already knows what time slots to block before the client even picks a date.',
        image: '/projects/elika-booking.png',
      },
      {
        title: 'Running the Business',
        body: 'This is the admin "Today" view I shipped so Amina could run her day without touching code: today\'s appointment count, how many clients have checked out, and estimated revenue at a glance, with reschedule/no-show/cancel actions on each booking. Deployed to Vercel with Google Search Console configured for local SEO alongside it.',
        image: '/projects/elika-today.png',
      },
      {
        title: 'Real Numbers',
        body: 'This is the admin Bookings calendar, filtered by status — and the numbers are real production data, not a demo: 369 completed bookings, 93 cancelled, 8 no-shows. Combined with the 40% organic traffic increase in 60 days, this is what "clients now find via Google, not DMs" actually looks like from the owner\'s side.',
        image: '/projects/elika-calendar.png',
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
    logo: '/projects/navly-logo.png',
    sections: [
      {
        title: 'Your CRS Score',
        body: "This is the Tracker screen: your estimated CRS score alongside pathway strength and what to improve next. Behind it, the Comprehensive Ranking System has dozens of interacting variables — age, education, language scores, Canadian work experience, arranged employment. I built the engine as modular, isolated rule functions so each factor could be tested and validated against IRCC's published examples independently.",
        image: '/projects/navly-3.png',
      },
      {
        title: 'The Adaptive Intake',
        body: 'This is step one of the intake: "What do you need help with today?" The question set that follows branches from this single answer — someone tracking a permit deadline sees different questions than someone planning their PR options. The step counter in the corner visibly changes length depending on the path, because a static form would waste time and confuse users.',
        image: '/projects/navly-onboard1.png',
      },
      {
        title: 'Province Matching',
        body: "Canada has 13 provincial and territorial nominee programs, each with their own streams, eligibility thresholds, and occupation lists. Rather than a generic eligibility checker, Navly maps the user's profile against each province's actual criteria and returns ranked matches with plain-language explanations of why they qualify (or what they're missing).",
      },
      {
        title: 'The Paywall Moment',
        body: 'This is the end of the intake flow: a rough CRS range is shown immediately, but the exact score is blurred out behind "Sign up to reveal your exact score." That\'s the whole model in one screen — enough value shown upfront to earn trust, the precise number held back to create a natural signup moment for users who are serious about applying.',
        image: '/projects/navly-onboard4.png',
      },
      {
        title: 'Under the Hood',
        body: 'Built with Next.js App Router and React on the frontend, Tailwind CSS for styling, and deployed on Vercel. The AI assistant is a paid-tier feature integrated via API. No sensitive documents are collected at any point — users provide self-reported profile data only.',
      },
    ],
    conclusion:
      'Navly showed me how much value comes from translating a genuinely complex system into something a person can act on. The hardest part was not the code — it was understanding immigration rules well enough to model them accurately. Getting that right was what made the product trustworthy.',
    coverImage: '/projects/navly.png',
  },
];
