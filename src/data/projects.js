export const projects = [
  {
    slug: 'elika-beauty',
    type: 'web',
    title: 'Elika Beauty',
    shortDescription: 'A custom booking platform for a Vancouver beauty salon — replaced Instagram DMs with an automated booking system and a direct web presence.',
    description:
      'Elika Beauty is a Vancouver beauty salon with no web presence. Clients discovered it through Instagram and booked through DMs and phone calls — every missed message was a missed appointment. I built a full booking platform with automated email confirmations, an admin dashboard, and local SEO foundations. Shipped solo in one month.',
    tags: ['Next.js', 'React', 'Supabase', 'Auth0', 'Resend', 'Vercel'],
    year: 2025,
    liveUrl: 'https://elikabeauty.ca',
    githubUrl: '',
    prototypeUrl: '',
    wireframeUrl: '',
    myRole: 'Full-Stack Developer',
    team: 'Solo project',
    contribution:
      'Built the entire platform solo — brand identity, mobile-first booking flow with conflict prevention, automated email confirmations, admin dashboard, and local SEO setup. Deployed to Vercel with a custom domain in under one month.',
    rationaleProblem:
      'Bookings were handled through Instagram DMs and phone calls, making it easy to miss clients and difficult to manage availability. The salon appeared on Fresha alongside competitors with no control over branding or SEO.',
    rationaleChallenge:
      'Build a fast, fully owned platform that ranks on Google, handles bookings without manual follow-up, and gives the owner a lightweight admin layer for her schedule.',
    rationaleSolution:
      'A mobile-first booking platform with scheduling conflict prevention, automated email confirmations via Resend, an admin dashboard, and Google Search Console setup — all live in one month.',
    whatItDoes: [
      'Mobile-first booking flow with scheduling rules and conflict prevention',
      'Automated email confirmations — zero manual follow-up needed',
      'Admin dashboard for managing appointments and availability',
      'Google Search Console setup and local SEO foundations',
      'Embeddable AI assistant (Dew) for FAQs and booking routing',
    ],
    technicalDecisions: [
      {
        choice: 'Next.js App Router for SSR and SEO',
        reason: 'Server-side rendering means Google can index every page immediately. Fast page loads on mobile matter for local search ranking.',
      },
      {
        choice: 'Supabase for the bookings database',
        reason: 'Managed Postgres with real-time capabilities. Handles booking queries and availability checks without custom infrastructure.',
      },
      {
        choice: 'Auth0 for the admin layer',
        reason: 'The salon owner needed a secure login to manage bookings. Auth0 handles this reliably without building custom auth.',
      },
      {
        choice: 'Resend for automated email confirmations',
        reason: 'Every booking triggers an automated confirmation email to the client — zero manual follow-up from the salon owner.',
      },
    ],
    challenges: [
      {
        problem: 'Preventing double bookings across multiple service types with different durations',
        solution: 'Built a conflict detection query in Supabase that checks time overlap against existing bookings before confirming. Each service has a defined duration, so the system calculates end time and blocks overlapping slots.',
      },
    ],
    highlights: [
      'Live client project — elikabeauty.ca',
      '40% organic traffic increase in 60 days',
      'Zero manual booking confirmations',
      'Solo build — shipped in 1 month',
      'Full brand identity + local SEO setup',
    ],
    images: [
      { src: '/projects/elika-home.png', caption: 'Homepage — hero section with book an appointment CTA.' },
      { src: '/projects/elika-booking.png', caption: 'Booking flow — service selection with categories and pricing.' },
      { src: '/projects/elika-booking1.png', caption: 'Booking flow — date and time picker with availability.' },
      { src: '/projects/elika-booking2.png', caption: 'Booking flow — client details and additional questions.' },
      { src: '/projects/elika-booking3.png', caption: 'Booking flow — confirmation dialog before finalising.' },
    ],
    caseStudySlug: 'elika-beauty',
  },
  {
    slug: 'navly',
    type: 'mobile',
    title: 'Navly',
    shortDescription: 'A Canadian PR pathway planner that gives immigrants a personalized CRS score estimate and matching pathways — without asking for sensitive documents.',
    description:
      'Navly helps prospective immigrants understand their pathway to Canadian permanent residence. Users answer a short profile questionnaire and receive estimated CRS scores, matched pathways (CEC, FSW, FST, PNP, study-to-PR), identified gaps, and province-by-province PNP options — no passport or SIN required. The paid tier adds an AI immigration assistant, permit expiry reminders, and full score breakdowns.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'AI', 'Vercel'],
    year: 2025,
    liveUrl: 'https://navly.ca',
    githubUrl: '',
    prototypeUrl: '',
    wireframeUrl: '',
    myRole: 'Full-Stack Developer',
    team: 'Solo project',
    contribution:
      'Designed and built Navly from scratch — adaptive intake flow, CRS scoring logic, pathway matching engine, and the freemium SaaS structure. Built the AI assistant for general immigration guidance and the province-by-province PNP matching for the paid tier.',
    rationaleProblem:
      'Canadian immigration pathways are genuinely complex. Most people don\'t know their CRS score, which pathway applies to them, or what gaps they need to close — and hiring a consultant just to get a baseline understanding is expensive.',
    rationaleChallenge:
      'Build a tool that gives accurate, personalized pathway assessments without collecting sensitive documents, and structure it as a sustainable freemium product.',
    rationaleSolution:
      'An adaptive intake flow that asks only the questions relevant to each user\'s situation, a CRS scoring engine, and pathway matching logic — free to screen, paid to go deeper with AI guidance and PNP matching.',
    whatItDoes: [
      'Adaptive profile questionnaire — different questions based on user status (student, worker, visitor)',
      'Estimated CRS score and matched pathways (CEC, FSW, FST, PNP, study-to-PR)',
      'Province-by-province PNP matching for the paid tier',
      'AI assistant for general immigration guidance',
      'Permit expiry reminders and full score breakdowns (paid)',
      'No passport, SIN, or government documents required',
    ],
    technicalDecisions: [
      {
        choice: 'Adaptive intake — questions change based on user status',
        reason: 'A worker, student, and visitor have completely different pathways. Showing all questions to everyone creates noise. Branching logic keeps the flow focused and the results accurate.',
      },
      {
        choice: 'Freemium model — free screening, paid depth',
        reason: 'The free tier gives enough value to build trust. The paid tier (PNP matching, AI assistant, reminders) serves users who are serious about their application.',
      },
    ],
    challenges: [
      {
        problem: 'CRS scoring rules are complex and change with policy updates',
        solution: 'Built the scoring logic as a modular engine with clearly separated rules — easy to update individual components when IRCC changes thresholds without touching the rest of the system.',
      },
    ],
    highlights: [
      'Live SaaS product — navly.ca',
      'Freemium model with AI-powered paid tier',
      'CRS scoring and pathway matching engine',
      'Province-by-province PNP matching',
      'No sensitive documents required',
    ],
    images: [
      { src: '/projects/navly.png', caption: 'Landing page — check your PR pathway without uploading any documents.' },
      { src: '/projects/navly-1.png', caption: 'Home dashboard — personalized CRS score, urgent alerts, and next steps at a glance.' },
      { src: '/projects/navly-2.png', caption: 'Tasks — step-by-step checklist generated from your profile to move you closer to PR readiness.' },
      { src: '/projects/navly-3.png', caption: 'Tracker — estimated CRS score, pathway strength, and what to improve next.' },
      { src: '/projects/navly-4.png', caption: 'Express Entry draw history — compare your score against recent cutoffs across all pools.' },
      { src: '/projects/navly-5.png', caption: 'AI Assistant — personalized immigration guidance based on your profile and pathway.' },
      { src: '/projects/navly-6.png', caption: 'Important Dates — key permit expiry dates and deadlines tracked from your profile.' },
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
    slug: 'dew',
    type: 'web',
    title: 'Meet Dew',
    shortDescription: 'An embeddable AI front-desk assistant for small businesses and portfolios.',
    description:
      'An embeddable AI front-desk assistant for small businesses and portfolios. Drop one script tag on any website and your visitors get instant answers.',
    tags: ['Next.js 16', 'React 19', 'Neon Postgres', 'Groq', 'Google Gemini', 'Vercel'],
    year: 2025,
    liveUrl: 'https://dew-rho-ten.vercel.app/',
    githubUrl: '',
    prototypeUrl: '',
    wireframeUrl: '',
    myRole: 'Full-Stack Developer',
    team: 'Solo project',
    contribution: 'I designed and built Dew entirely solo — from the AI context system and multi-tenant backend to the embeddable widget and business dashboard. The goal was to make it so simple that any small business could deploy it with one line of HTML, and so smart that it could handle real client questions without a human in the loop.',
    rationaleProblem:
      'Every project deserves a voice. Most websites make visitors hunt for basic information — hours, services, how to book. I wanted a way to give any project or business an instant, always-on assistant that answers questions in plain language, without requiring a support team or a complex setup.',
    rationaleChallenge:
      'Each business gets a plain-text knowledge file describing their services, hours, and FAQs. That file becomes the system prompt context for every conversation. No model training, no database of embeddings — just a well-structured prompt and Google Gemini doing the rest. New business? Add two files and embed the script. Done in minutes.',
    rationaleSolution:
      'Deployed for Elika Beauty — 40% traffic increase, zero manual confirmations, handles FAQs 24/7 with one script tag.',
    whatItDoes: [
      'Answers business-specific FAQs instantly using a plain-text knowledge file injected into the system prompt',
      'Handles booking requests and inquiries without any human intervention',
      'Embeds on any site — Next.js, plain HTML, Webflow, Squarespace — with a single script tag',
      'Renders as a sandboxed iframe so it never conflicts with the client\'s existing styles',
      'Routes each request to the correct business context using a biz query parameter',
      'Admin dashboard captures every lead — name, phone, email, and the full conversation that led to it — with CSV export in one click',
      'Browse full chat histories to understand what visitors are asking and where they drop off',
    ],
    technicalDecisions: [
      {
        choice: 'Knowledge files, not fine-tuning',
        reason: 'Each business gets a .txt file with their services, prices, hours, and policies. That file is injected into the system prompt on every conversation start. No fine-tuning, no embeddings, no infrastructure cost — just fast, accurate answers from a well-structured context.',
      },
      {
        choice: 'Groq for speed, Gemini as fallback',
        reason: 'Groq powers near-instant AI replies — latency matters in a chat widget. Google Gemini serves as fallback to keep the service up even if one provider has an outage.',
      },
      {
        choice: 'Built-in admin dashboard — every lead, every conversation in one place',
        reason: 'Business owners need visibility into what\'s happening. The dashboard shows every lead captured across all businesses — name, phone, email, and the conversation that led to it. Full chat histories reveal what visitors ask and where they drop off. Leads export to CSV in one click. The whole thing is password-protected and built for the business owner, not the end user.',
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
      'Lead capture — name, phone, email',
      'CSV export',
      'Password-protected dashboard',
    ],
    images: [
      { src: '/projects/dew-home.png', caption: 'Dashboard — manage your AI assistant configuration and business info.' },
      { src: '/projects/dew-chat.png', caption: 'Live chat widget embedded on a client site, handling real inquiries.' },
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
];
