export const projects = [
  {
    slug: 'lenditout',
    type: 'mobile',
    title: 'LendItOut',
    shortDescription: 'A peer-to-peer lending platform for everyday items.',
    description:
      'Full-stack web app that lets users list items to lend and borrow from their community. Built with JavaScript, MongoDB, Sass, and Clerk for authentication.',
    tags: ['JavaScript', 'MongoDB', 'Sass', 'Clerk'],
    year: 2024,
    liveUrl: 'https://lenditout.onrender.com/',
    githubUrl: 'https://github.com/IDSP-LendItOut/LendItOut',
    prototypeUrl: 'https://www.figma.com/proto/BbH0d5NCDlGcSfjOKpvij0/LendItOut?node-id=1-8195&t=y4crY3YEUUnpG4gp-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A8195&show-proto-sidebar=1',
    wireframeUrl: 'https://www.figma.com/design/BbH0d5NCDlGcSfjOKpvij0/LendItOut?node-id=0-1&t=1FTBWlzQxPZsSiWy-1',
    myRole: 'Scrum Master & Full-Stack Developer',
    team: 'Team of 4',
    contribution: 'I owned the homepage, chat system, notifications, and product detail pages — handling frontend, backend, and database design for each. As Scrum Master I ran sprints, coordinated daily standups, and kept the team unblocked. I was responsible for both shipping features and making sure the team stayed on track.',
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
    technicalDecisions: [],
    challenges: [
      {
        problem: 'Constant merge conflicts on our first ever group project',
        solution: 'Mid-project we introduced a proper branching strategy — feature branches per ticket, mandatory PR reviews before merging. It slowed us down for a day to set up but eliminated the chaos. It was the session that taught the whole team how to actually collaborate on shared code.',
      },
    ],
    highlights: [
      'Scrum Master across full project lifecycle',
      'Mobile-first responsive design',
      'Real-time availability tracking',
    ],
    images: [
      { src: '/projects/lenditout-home.png', caption: 'Home screen — browse available items in your community.' },
      { src: '/projects/lenditout-login.png', caption: 'Login flow with secure authentication.' },
      { src: '/projects/lenditout-post1.png', caption: 'Create a listing — add photos, description, and availability.' },
      { src: '/projects/lenditout-post2.png', caption: 'Item detail page with borrowing request flow.' },
      { src: '/projects/lenditout-post3.png', caption: 'Manage your active listings and incoming requests.' },
      { src: '/projects/lendotout-post.png', caption: 'Request confirmation and borrower messaging.' },
    ],
  },
  {
    slug: 'dew',
    type: 'web',
    title: 'Dew',
    shortDescription: 'Embeddable AI front-desk assistant for small businesses.',
    description:
      'An AI-powered assistant that handles client FAQs, bookings, and inquiries. Embeds on any site via a script tag.',
    tags: ['Next.js', 'OpenAI', 'Supabase', 'Auth0'],
    year: 2025,
    liveUrl: 'https://ai-client-seven.vercel.app',
    githubUrl: '',
    prototypeUrl: '',
    wireframeUrl: '',
    myRole: 'Full-Stack Developer',
    team: 'Solo project',
    contribution: 'I designed and built Dew entirely solo — from the AI context system and multi-tenant backend to the embeddable widget and business dashboard. The goal was to make it so simple that any small business could deploy it with one line of HTML, and so smart that it could handle real client questions without a human in the loop.',
    rationaleProblem:
      'Small businesses miss leads after hours because no one is available to respond.',
    rationaleChallenge:
      'Built a context-aware AI that serves multiple businesses from one system — each with isolated context, zero config for the client, and no CSS conflicts with their existing site.',
    rationaleSolution:
      'Deployed for Elika Beauty — 40% traffic increase, zero manual confirmations, handles FAQs 24/7 with one script tag.',
    whatItDoes: [
      'Answers business-specific FAQs instantly using a plain-text knowledge file injected into the system prompt',
      'Handles booking requests and inquiries without any human intervention',
      'Embeds on any site — Next.js, Webflow, Squarespace, plain HTML — via a single script tag',
      'Renders as a sandboxed iframe so it never conflicts with the client\'s existing styles',
      'Routes each request to the correct business context using a biz query parameter',
    ],
    technicalDecisions: [
      {
        choice: 'Prompt engineering + plain-text knowledge file instead of a vector DB',
        reason: 'Each business gets a .txt file with their services, prices, hours, and policies. That file is injected into the system prompt on every conversation start. No fine-tuning, no embeddings, no infrastructure cost — just fast, accurate answers from a well-structured context.',
      },
      {
        choice: 'Sandboxed iframe for the embed widget',
        reason: 'Injecting a widget directly into a client\'s site risks CSS conflicts and JS collisions. The iframe approach gives full style isolation — the widget looks identical on every host site regardless of their stack.',
      },
    ],
    challenges: [
      {
        problem: 'Multi-tenant routing — serving multiple businesses from one system without mixing up their context',
        solution: 'The biz query parameter in the embed script tag tells the backend exactly which knowledge file to load. Each request is isolated at the API level, so there\'s no risk of one business\'s context leaking into another\'s conversation.',
      },
    ],
    highlights: [
      'Deployed in production — Elika Beauty',
      '40% traffic increase post-launch',
      'Zero manual confirmations',
      'One script tag embed — zero dependencies',
      'Multi-tenant with full context isolation',
    ],
    images: [
      { src: '/projects/dew-home.png', caption: 'Dashboard — manage your AI assistant configuration and business info.' },
      { src: '/projects/dew-chat.png', caption: 'Live chat widget embedded on a client site, handling real inquiries.' },
    ],
  },
  {
    slug: 'community-of-guardians',
    type: 'web',
    title: 'Community of Guardians',
    shortDescription: 'A community platform for neighbourhood safety and coordination.',
    description:
      'Version 2 of a live platform connecting neighbours to coordinate safety, share alerts, and organize local responses. Built within a professional team environment with a full engineering workflow.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    year: 2026,
    liveUrl: 'https://www.communityofguardians.com/superheroes',
    githubUrl: '',
    prototypeUrl: '',
    wireframeUrl: 'https://www.figma.com/design/RIPj2psTnm1ouDYSpIRUJG/COGs-Web-application-2025?node-id=0-1&t=ayvfrltFjDinIawC-1',
    myRole: 'Frontend Developer',
    team: 'Professional team',
    contribution: 'I joined Community of Guardians as a Frontend Developer in 2026 — working on version 2 of a live product inside a real company with multiple employees. The workflow mirrors industry standards: tickets assigned via Taiga, weekly team syncs to review progress and plan new features, pull requests reviewed before anything merges, and a CI/CD pipeline that keeps deployments consistent. I build from ticket to PR, waiting for review before merge — the same rhythm as a professional engineering team.',
    rationaleProblem:
      'Neighbourhood safety apps are either too corporate or too informal — Facebook groups miss structure, enterprise tools miss approachability.',
    rationaleChallenge:
      'Contributing to an existing codebase at version 2 — understanding conventions, fitting into the team workflow, and shipping features without breaking what already works.',
    rationaleSolution:
      'Shipping production features in a structured team environment with real review cycles, CI/CD, and ticket-based planning.',
    whatItDoes: [
      'Post and receive neighbourhood alerts',
      'Coordinate community responses',
      'Manage local safety events and user roles',
    ],
    technicalDecisions: [
      {
        choice: 'Ticket-based workflow with Taiga',
        reason: 'Every feature starts as a ticket — scoped, assigned, and tracked. This keeps the team aligned and makes it easy to review what changed and why in every PR.',
      },
    ],
    challenges: [
      {
        problem: 'Joining an existing codebase mid-product on version 2',
        solution: 'I spent time reading the existing code and conventions before writing anything. Weekly syncs helped me stay aligned with the team\'s direction, and the PR review process meant my work was always checked before it touched production.',
      },
    ],
    highlights: [
      'Production work in a professional team',
      'CI/CD pipeline',
      'Ticket-based with Taiga',
      'Weekly syncs + PR reviews',
      'Version 2 of a live product',
    ],
    images: [
      { src: '/projects/cog-home.png', caption: 'Home feed — neighbourhood alerts and recent activity.' },
      { src: '/projects/cog-1.png', caption: 'Post an alert with location tagging and priority level.' },
      { src: '/projects/cog-2.png', caption: 'Community coordination view with role-based access.' },
    ],
  },
  {
    slug: 'forge',
    type: 'mobile',
    title: 'Forge',
    shortDescription: 'A mobile simulation app introducing high school students to skilled trades through interactive career exploration.',
    description:
      'Forge is a mobile application that transforms trade career discovery into a guided, hands-on digital experience. Students simulate real-world workflows in electrical, plumbing, carpentry and more — powered by AI explanations and personalized recommendations.',
    tags: ['React Native', 'TypeScript', 'Hono', 'Drizzle ORM', 'Postgres', 'Clerk', 'Redis', 'Google GenAI SDK', 'TanStack'],
    year: 2025,
    liveUrl: 'https://www.forgecareers.ca/',
    githubUrl: 'https://github.com/Forge-IDSP',
    prototypeUrl: 'https://www.figma.com/design/4bcvUcR7TsEdN3LVpessog/',
    demoUrl: 'https://www.youtube.com/shorts/_G6BLGK4BmU?themeRefresh=1',
    myRole: 'Technical Manager & Full-Stack Developer',
    team: 'Team of 4',
    contribution: 'I acted as the bridge between design and development — translating Figma specs into engineering requirements, reviewing all pull requests, and owning the deployment pipeline. I personally built the My Pathways and Explore Careers screens end-to-end. I also led the final presentation, coordinating across the team to make sure every feature was connected and working before demo day.',
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
    technicalDecisions: [
      {
        choice: 'Hono + Bun for the backend',
        reason: 'We chose Hono with Bun as the runtime for its speed and modern DX. Bun is significantly faster than Node.js at startup and runtime — important for keeping the mobile experience responsive. It was a deliberate bet on a newer, faster stack.',
      },
    ],
    challenges: [
      {
        problem: 'We chose React Native without fully accounting for App Store publishing constraints',
        solution: 'When we realised we could not launch through the App Store in time, we pivoted the demo to Expo Go. This let us showcase the full working experience without the publishing bottleneck — and it became a lesson in validating deployment paths early in the project.',
      },
    ],
    highlights: [
      'Technical Manager across design & dev',
      'AI-powered trade recommendations',
      'Owned deployment pipeline',
      'Redis-backed performance',
    ],
    images: [
      { src: '/projects/forge-home.png', caption: 'Home screen — trade career discovery with guided paths.' },
      { src: '/projects/forge-pathway.png', caption: 'My Pathways — personalized trade recommendations.' },
      { src: '/projects/forge-sim.png', caption: 'Simulation — interactive step-by-step trade workflow.' },
      { src: '/projects/forge-sim1.png', caption: 'Simulation detail — AI-explained tools and safety rules.' },
      { src: '/projects/forge-sim2.png', caption: 'Simulation progress — tracking skill familiarity.' },
      { src: '/projects/forge-sim3.png', caption: 'Explore Careers — browse all available trade paths.' },
    ],
  },
];
