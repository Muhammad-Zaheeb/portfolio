// All site content lives here. Real facts only: nothing is rendered that cannot be backed up.

export const site = {
  name: 'Muhammad Zaheeb',
  title: 'Muhammad Zaheeb | Software that bends to the rules',
  description:
    'Muhammad Zaheeb, BS Computer Science student at FAST-NUCES. Creator of Event Horizon, a live black hole renderer, and builder of web apps and small-business websites from $100.',
  jobTitle: 'Web developer',
  tagline: 'Software that bends to the rules.',
  degree: 'BS Computer Science',
  university: 'FAST-NUCES',
  classOf: 2028,
  whatsappNumber: '923024010502',
  whatsappDisplay: '+92 302 4010502',
  whatsappMessage: 'Hi Zaheeb, I saw your portfolio and would like to talk about a website.',
  email: 'zaheeb.qureshi@gmail.com',
  linkedin: 'https://www.linkedin.com/in/zaheeb-qureshi-22814b190/',
  github: 'https://github.com/Muhammad-Zaheeb',
};

export const stack = ['React', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'C++', 'WebGL2/GLSL'];

// Web3Forms public access key. It is meant to be public and only routes enquiries to the owner's inbox.
export const web3formsKey = '54d2974d-df53-43a2-97c8-4274748feb14';
export const web3formsEndpoint = 'https://api.web3forms.com/submit';

export const budgets = ['Under $250', '$250 to $500', '$500 to $1,000', 'Over $1,000', 'Not sure yet'];

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`;
export const mailUrl = `mailto:${site.email}`;

export const nav = [
  { label: 'Event Horizon', href: '/#story' },
  { label: 'Work', href: '/#work' },
  { label: 'Services', href: '/#services' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

export interface Project {
  slug: 'event-horizon' | 'novachat' | 'campusflow' | 'gali-nau';
  title: string;
  /** Short category shown beside the title. */
  kind: string;
  /** One or two sentences for the case study header and social cards. */
  summary: string;
  /** Line shown on the home page when the project is brought forward. */
  card: string;
  /** Proof and stack line shown on the home page. */
  facts: string;
  type: string;
  role?: string;
  stackShort: string;
  live: string;
  repos: { label: string; href: string }[];
  imageAlt: string;
  /** Shown prominently when the work is not what it might look like. */
  notice?: string;
  /** Who did what, where that needs saying. */
  credit?: string;
  hostNote?: string;
  seoDescription: string;
  problemHeading: string;
  problem: string;
  solution: string;
  stack: [string, string][];
  outcome: string;
}

const freeHostNote = 'Free-hosted apps can take about a minute to wake up on the first visit.';

export const projects: Project[] = [
  {
    slug: 'event-horizon',
    title: 'Event Horizon',
    kind: 'Black hole renderer',
    summary: 'A real-time black hole you can fly around, rendered with general relativity in your browser.',
    card: 'A real-time black hole you can fly around, rendered with general relativity in your browser.',
    facts: 'Live demo and public source. WebGL2 and GLSL.',
    type: 'Personal project',
    role: 'Conceived and directed',
    stackShort: 'WebGL2, GLSL, JavaScript',
    live: 'https://muhammad-zaheeb.github.io/event-horizon/',
    repos: [{ label: 'Source on GitHub', href: 'https://github.com/Muhammad-Zaheeb/event-horizon' }],
    imageAlt: 'Event Horizon render of a black hole, its shadow ringed by light and its disk bent over and under it',
    credit:
      'Idea and direction: Muhammad Zaheeb. The code was written by Claude, Anthropic’s AI model, as the project’s README credits.',
    seoDescription:
      'Case study: Event Horizon, a real-time WebGL2 renderer of a Schwarzschild black hole, conceived and directed by Muhammad Zaheeb.',
    problemHeading: 'Aim',
    problem:
      'A black hole you can fly around in a browser tab, where the strange picture comes out of the physics and nothing is painted on to look right.',
    solution:
      'Every pixel traces a ray of light backwards through the curved spacetime of a Schwarzschild black hole, live on the GPU with WebGL2. Gravitational lensing, the photon ring, Doppler beaming and gravitational redshift all come out of that calculation. A one-minute guided tour switches light bending and Doppler beaming off and on, so you can see what each one does.',
    stack: [
      ['Rendering', 'WebGL2 and GLSL, with Schwarzschild light paths integrated for every pixel'],
      ['Disk', 'A Shakura–Sunyaev temperature profile, differential rotation and animated turbulence'],
      ['Colour', 'Planck spectrum and CIE 1931 colour matching, shifted by the relativistic factor'],
      ['Pipeline', 'HDR bloom, ACES tone mapping and dithering'],
      ['Speed', 'Dynamic resolution to stay smooth on laptops'],
      ['Delivery', 'One self-contained index.html: no dependencies and no build step'],
    ],
    outcome:
      'A live demo anyone can open and fly around, with the source public under the MIT licence. It needs a browser with WebGL2.',
  },
  {
    slug: 'novachat',
    title: 'NovaChat',
    kind: 'Real-time chat',
    summary: 'A real-time chat app with friend requests, group chats, photos, files and voice messages.',
    card: 'Chat with friend requests, groups, photos, files and voice messages, delivered live.',
    facts: '94 backend tests, CI. React, TypeScript, FastAPI, PostgreSQL.',
    type: 'Personal project',
    stackShort: 'React, TypeScript, Python, FastAPI, PostgreSQL, WebSockets',
    live: 'https://novachat-v022.onrender.com',
    repos: [{ label: 'Source on GitHub', href: 'https://github.com/Muhammad-Zaheeb/NovaChat' }],
    imageAlt: 'NovaChat sign-in screen with the line "Conversations with the people you choose."',
    hostNote: freeHostNote,
    seoDescription:
      'Case study: NovaChat, a real-time chat app built with React, TypeScript, FastAPI, PostgreSQL and WebSockets.',
    problemHeading: 'Problem',
    problem:
      'I wanted to build a full chat product end to end: messages that arrive instantly, and accounts that are safe to use. That means real-time delivery, sign-in, and rules about who can message whom.',
    solution:
      'A React and TypeScript front end talks to a FastAPI back end over REST and WebSockets. Friend requests control who can start a chat or join a group. Accounts use email verification, rate-limited sign-in and cookie-based sessions. Chats support photos, files and voice messages.',
    stack: [
      ['Front end', 'React, TypeScript, Vite, Tailwind CSS'],
      ['Back end', 'Python, FastAPI, SQLAlchemy (async), Alembic, PostgreSQL'],
      ['Real-time', 'WebSockets'],
      ['Quality', 'pytest, oxlint, GitHub Actions CI'],
      ['Hosting', 'Docker on Render, Neon Postgres, all on free tiers'],
    ],
    outcome:
      'A working app that anyone can open and try. It has 94 automated backend tests that run in CI, and it is deployed on free hosting.',
  },
  {
    slug: 'campusflow',
    title: 'CampusFlow',
    kind: 'Task manager',
    summary: 'A task manager for students that shows what is due today, what is overdue and what is done.',
    card: 'A task manager for students: what is due today, what is overdue, what is done.',
    facts: '30 backend tests, CI. React, TypeScript, FastAPI, PostgreSQL.',
    type: 'Personal project',
    stackShort: 'React, TypeScript, Python, FastAPI, PostgreSQL',
    live: 'https://campusflow-frontend-blond.vercel.app',
    repos: [
      { label: 'Front end on GitHub', href: 'https://github.com/Muhammad-Zaheeb/campusflow-frontend' },
      { label: 'Back end on GitHub', href: 'https://github.com/Muhammad-Zaheeb/campusflow' },
      { label: 'API docs', href: 'https://campusflow-uoi7.onrender.com/docs' },
    ],
    imageAlt: 'CampusFlow log-in screen with email and password fields',
    hostNote: freeHostNote,
    seoDescription:
      'Case study: CampusFlow, a student task manager with a React front end on Vercel and a FastAPI back end on Render.',
    problemHeading: 'Problem',
    problem:
      'Students juggle assignments, quizzes and projects with different deadlines. I wanted a simple tool that shows what is due today, what is overdue and what is done.',
    solution:
      "A React front end with a dashboard, search, filters and sorting by due date or priority. A separate FastAPI back end handles accounts with JWT sign-in and keeps each user's tasks private to them.",
    stack: [
      ['Front end', 'React, TypeScript, Vite, Tailwind CSS'],
      ['Back end', 'Python, FastAPI, SQLAlchemy, Pydantic'],
      ['Database', 'PostgreSQL on Neon'],
      ['Quality', '30 backend tests with pytest, CI on both repos'],
      ['Hosting', 'Vercel (front end), Render (back end)'],
    ],
    outcome:
      'Two separately deployed apps that work together, with interactive API docs and 30 automated backend tests.',
  },
  {
    slug: 'gali-nau',
    title: 'Gali Nau',
    kind: 'Cafe site concept',
    summary:
      'A loud, playful sample website for a fictional cafe: an illustrated street you can poke, a menu you build an order from, a chai you mix yourself, and the order sent on WhatsApp.',
    card: 'A made-up cafe on Lane Nine. Order from the menu and the tray writes your WhatsApp message.',
    facts: 'Concept demo of a fictional cafe. Astro and original SVG.',
    type: 'Concept demo, fictional cafe',
    stackShort: 'Astro, Tailwind CSS, TypeScript, original SVG',
    live: 'https://gali-nau.vercel.app',
    repos: [{ label: 'Source on GitHub', href: 'https://github.com/Muhammad-Zaheeb/cafe-demo' }],
    imageAlt:
      'Gali Nau concept demo home page: the headline "Chai, coffee & breakfast on Lane Nine" beside an illustrated street at night, with the cafe between a pharmacy and a mechanic, string lights, a kite and a green door',
    notice: 'Concept demo of a fictional cafe. Not a client project.',
    seoDescription:
      'Concept demo: Gali Nau, an interactive sample website for a fictional neighbourhood cafe, with an order tray that sends on WhatsApp. Built with Astro and Tailwind CSS. Not a client project.',
    problemHeading: 'Problem',
    problem:
      'Most small cafes need the same few things online: a menu people can read on a phone, opening hours that are right today, a way to find the place and a quick way to order. I wanted to show what that can look like when it has some personality, so a cafe owner can judge it before talking to me.',
    solution:
      'A single page for an invented cafe, drawn to be played with. The hero is an illustrated street whose layers shift with the mouse, phone tilt and scroll; after 6 pm it turns to evening, and the sun, cat, chai and door respond to a tap. The menu has category tabs and an order tray that totals the order and writes a WhatsApp message from it. A "mix your own chai" lab names and prices each cup, and a scroll story walks past eight shops to the door. A hanging sign flips between open and closed using the opening hours, including a prayer break on Friday. Directions open in the visitor\'s own maps app. The menu, hours, address and colours each live in one file.',
    stack: [
      ['Framework', 'Astro (static output), TypeScript'],
      ['Styling', 'Tailwind CSS, self-hosted open-licence fonts (Shrikhand and Bricolage Grotesque)'],
      ['Script', 'No framework runtime and no animation library; about 21 KB of script, loaded section by section. The page works without it.'],
      ['Look', 'All illustration, including sixteen food drawings, is original inline SVG; no photos or logos'],
      ['Accessibility', 'Keyboard-usable tabs, buttons and tray dialog, and a still version of every animation for reduced motion'],
      ['Sharing', 'Social preview image drawn at build time'],
    ],
    outcome:
      'A demo, not a client result. It shows an interactive menu, order tray, chai lab and story section built without a framework runtime or animation library. The whole thing is a fictional business: the name, menu, prices and address are all made up, and the page says so. It is kept out of search results on purpose.',
  },
];

export const smallProject = {
  text: 'Also: a terminal text editor in C++, built on linked lists.',
  href: 'https://github.com/Muhammad-Zaheeb/linked-list-text-editor',
};

/** The three-part Event Horizon story. Each part lights up one annotation on the render. */
export const story = [
  {
    title: 'The shadow',
    text: 'The dark disc is the black hole’s shadow. It is not drawn in: light that passes too close is captured, so nothing comes back from there.',
    label: 'The shadow',
  },
  {
    title: 'Light that goes around',
    text: 'The disk behind the black hole appears above and below it, because its light is bent on the way to you. Nothing is painted on; it falls out of the physics.',
    label: 'Disk light bent overhead',
  },
  {
    title: 'Live, every frame',
    text: 'Each pixel of each frame traces a ray of light on your GPU with WebGL2 and GLSL, in real time, in the browser.',
    label: 'Every frame traced on the GPU',
  },
];

export const research = {
  title: 'Reported Code-Verification Practices in AI-Assisted Programming: An Exploratory Survey in Pakistan',
  status: 'Working paper, not yet submitted',
  coauthors: [
    'Muqeet Mehmood',
    'Syed Muhammad Hussain Hammad',
    'Arham Ali',
    'Muhammad Hammad Kashif',
    'Najmul Hassan',
  ],
  summary:
    'We surveyed 107 students about how they check code written with AI help. Self-reported trust showed no meaningful correlation with verification (rho = −0.02).',
};

export const recognition = [
  { title: 'Member, IEEE Society and AWS Society', detail: 'FAST-NUCES', when: 'Oct 2024 to present' },
  { title: 'Decoration team and security team', detail: 'NUTEC 2024, FAST-NUCES', when: '2024' },
  { title: 'Flood relief volunteer', detail: 'Al-Khidmat', when: '' },
];

export const services = [
  {
    title: 'Business website',
    price: 100,
    time: '1-2 weeks',
    summary: 'Up to five pages, mobile first, WhatsApp built in.',
  },
  {
    title: 'Menu or booking site',
    price: 150,
    time: '2 weeks',
    summary: 'For cafes, clinics and shops that list prices or take appointments.',
  },
  {
    title: 'Custom web app',
    price: 350,
    time: '3-6 weeks',
    summary: 'Logins, dashboards, bookings and admin tools.',
  },
];

export const process = [
  { title: 'Talk', text: 'Tell me about your business on WhatsApp or email.' },
  { title: 'Plan and quote', text: 'A written plan and a fixed price. 50% upfront to begin.' },
  { title: 'Build and review', text: 'A live preview every week, with two rounds of changes.' },
  { title: 'Launch', text: 'The other 50% at launch, then 30 days of free fixes.' },
];

// Answers confirmed by the owner. Keep this list to real policies only.
export const faqs = [
  {
    q: 'Who owns the website when it is finished?',
    a: 'You do. Once the final payment is made, the site, its code, its content and the domain all belong to you.',
  },
  {
    q: 'Are hosting and the domain included in the price?',
    a: 'No. You pay for them directly, in your own name, so you always stay in control of them. I set everything up for you, and where a free hosting plan is enough, I use it.',
  },
  {
    q: 'How does payment work?',
    a: '50% upfront to start, and the other 50% at launch.',
  },
  {
    q: 'How many changes can I ask for?',
    a: 'Two rounds of changes during the build. You see a live preview every week, so changes come early, while they are still easy to make.',
  },
  {
    q: 'What happens after launch?',
    a: 'If anything breaks in the first 30 days after launch, I fix it for free.',
  },
  {
    q: 'How long does it take?',
    a: 'A business website usually takes 1-2 weeks, a menu or booking site about 2 weeks, and a custom web app 3-6 weeks. You get a firm timeline with the written quote.',
  },
];
