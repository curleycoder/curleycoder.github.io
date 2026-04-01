export const projects = [
  {
    slug: 'lenditout',
    title: 'LendItOut',
    shortDescription: 'A peer-to-peer lending platform for everyday items.',
    description:
      'Full-stack web app that lets users list items to lend and borrow from their community. Built with Next.js, Supabase, and Drizzle ORM.',
    tags: ['Next.js', 'Supabase', 'Drizzle ORM', 'Tailwind CSS'],
    year: 2024,
    liveUrl: '',
    githubUrl: '',
    prototypeUrl: '',
    rationaleProblem:
      'People own things they rarely use while others need them temporarily.',
    rationaleChallenge:
      'Designed a trust-based borrowing flow with availability tracking and user profiles.',
    rationaleSolution:
      'Shipped a working MVP with listings, requests, and a clean mobile-first UI.',
    whatItDoes: [
      'Browse and search available items',
      'Request to borrow with date range',
      'Manage your listings and requests',
    ],
    highlights: [
      'Built solo in 3 weeks',
      'Mobile-first responsive design',
      'Real-time availability tracking',
    ],
    images: [],
  },
  {
    slug: 'dew',
    title: 'Dew',
    shortDescription: 'Embeddable AI front-desk assistant for small businesses.',
    description:
      'An AI-powered assistant that handles client FAQs, bookings, and inquiries. Embeds on any site via a script tag.',
    tags: ['Next.js', 'OpenAI', 'Supabase', 'Auth0'],
    year: 2025,
    liveUrl: 'https://ai-client-seven.vercel.app',
    githubUrl: '',
    prototypeUrl: '',
    rationaleProblem:
      'Small businesses miss leads after hours because no one is available to respond.',
    rationaleChallenge:
      'Built a context-aware AI that understands business-specific information and handles real booking requests.',
    rationaleSolution:
      'Deployed for Elika Beauty — handles inquiries 24/7, zero manual confirmations.',
    whatItDoes: [
      'Answers business FAQs instantly',
      'Handles booking requests',
      'Embeds on any website',
    ],
    highlights: [
      'Used in production by real client',
      'Handles real bookings',
      '24/7 availability',
    ],
    images: [],
  },
  {
    slug: 'community-of-guardians',
    title: 'Community of Guardians',
    shortDescription: 'A community platform for neighbourhood safety and coordination.',
    description:
      'Web platform connecting neighbours to coordinate safety, share alerts, and organize local responses.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    year: 2024,
    liveUrl: '',
    githubUrl: '',
    prototypeUrl: '',
    rationaleProblem:
      'Neighbourhood safety apps are either too corporate or too informal (Facebook groups).',
    rationaleChallenge:
      'Designed a structured but approachable platform that encourages real participation.',
    rationaleSolution:
      'Built a full-stack platform with alerts, community posts, and user roles.',
    whatItDoes: [
      'Post and receive neighbourhood alerts',
      'Coordinate community responses',
      'Manage local safety events',
    ],
    highlights: [
      'Role-based access control',
      'Real-time alert system',
      'Mobile responsive',
    ],
    images: [],
  },
];
