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
      { label: 'Organic traffic', value: '40%', sub: 'increase in 60 days' },
      { label: 'Manual confirmations', value: '0', sub: 'fully automated' },
      { label: 'Time to v1', value: '1 month', sub: 'solo build' },
      { label: 'Booking conversion', value: '3x', sub: 'vs Instagram DMs' },
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
];
