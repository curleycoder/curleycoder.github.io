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
    images: [
      '/projects/lenditout-home.png',
      '/projects/lenditout-login.png',
      '/projects/lenditout-post1.png',
      '/projects/lenditout-post2.png',
      '/projects/lenditout-post3.png',
      '/projects/lendotout-post.png',
    ],
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
    images: [
      '/projects/dew-home.png',
      '/projects/dew-chat.png',
    ],
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
    images: [
      '/projects/cog-home.png',
      '/projects/cog-1.png',
      '/projects/cog-2.png',
    ],
  },
  {
    slug: 'forge',
    title: 'Forge',
    shortDescription: 'A mobile simulation app introducing high school students to skilled trades through interactive career exploration.',
    description:
      'Forge is a mobile application that transforms trade career discovery into a guided, hands-on digital experience. Students simulate real-world workflows in electrical, plumbing, carpentry and more — powered by AI explanations and personalized recommendations.',
    tags: ['React Native', 'TypeScript', 'Hono', 'Drizzle ORM', 'Postgres', 'Clerk', 'Redis', 'Google GenAI SDK', 'TanStack'],
    year: 2025,
    liveUrl: 'https://www.forgecareers.ca/',
    githubUrl: 'https://github.com/Forge-IDSP',
    prototypeUrl: 'https://www.figma.com/design/4bcvUcR7TsEdN3LVpessog/',
    demoUrl: 'https://www.youtube.com/shorts/_G6BLGK4BmU',
    rationaleProblem:
      'Many students lack exposure to trade careers and rely on passive research methods like videos or brochures.',
    rationaleChallenge:
      'Present trade paths in a clear, structured format with secure auth, scalable backend, AI integration, and minimal friction for non-technical users.',
    rationaleSolution:
      'Delivered an interactive simulation-based experience with guided workflows, AI-driven explanations, and a structured backend — making career discovery practical and engaging.',
    whatItDoes: [
      'Simulates real trade workflows (electrical, plumbing, carpentry, etc.)',
      'Provides interactive, step-by-step project scenarios',
      'Uses AI to explain tools, safety rules, and procedures',
      'Recommends trade paths based on user interests',
      'Tracks progress and skill familiarity',
    ],
    highlights: [
      'Mobile-first with React Native',
      'AI-powered trade recommendations',
      'Secure auth via Clerk',
      'Redis-backed performance',
    ],
    images: [],
  },
];
