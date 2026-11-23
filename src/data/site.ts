export const site = {
  name: 'Muhammad Zaheeb',
  shortName: 'Zaheeb',
  title: 'Muhammad Zaheeb | Websites and web apps for small businesses',
  description:
    'I build websites and web apps for small businesses: cafes, clinics, shops and service businesses. Fixed written quotes, prices in USD.',
  jobTitle: 'Web developer',
  whatsappNumber: '923024010502',
  whatsappDisplay: '+92 302 4010502',
  whatsappMessage: 'Hi Zaheeb, I saw your portfolio and would like to talk about a website.',
  email: 'zaheeb.qureshi@gmail.com',
  linkedin: 'https://www.linkedin.com/in/zaheeb-qureshi-22814b190/',
  github: 'https://github.com/Muhammad-Zaheeb',
  education: 'BSCS, FAST-NUCES',
  languages: 'English, Urdu',
  programming: 'TypeScript, Python, C++',

  // Owner to confirm. Anything left empty is not rendered anywhere on the site.
  availability: '', // e.g. 'Taking new projects'
  city: '', // e.g. 'Lahore, Pakistan'
};

// Web3Forms public access key. It is meant to be public and only routes enquiries to the owner's inbox.
export const web3formsKey = '54d2974d-df53-43a2-97c8-4274748feb14';
export const web3formsEndpoint = 'https://api.web3forms.com/submit';

export const budgets = ['Under $250', '$250 to $500', '$500 to $1,000', 'Over $1,000', 'Not sure yet'];

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`;
export const mailUrl = `mailto:${site.email}`;

export const nav = [
  { label: 'Work', href: '/#work' },
  { label: 'Services', href: '/#services' },
  { label: 'Process', href: '/#process' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

/** Gali Nau live address. Fill this in after the Vercel deploy; while empty, no "Live site" link is shown anywhere. */
export const GALI_NAU_LIVE_URL = '';

export const projects = [
  {
    slug: 'novachat',
    title: 'NovaChat',
    summary: 'A real-time chat app with friend requests, group chats, photos, files and voice messages.',
    type: 'Personal project',
    fictional: false,
    freeHosted: true,
    stackShort: 'React, TypeScript, Python, FastAPI, PostgreSQL, WebSockets',
    proof: '94 backend tests, GitHub Actions CI, deployed on Render',
    live: 'https://novachat-v022.onrender.com',
    github: 'https://github.com/Muhammad-Zaheeb/NovaChat',
    repos: [{ label: 'Source on GitHub', href: 'https://github.com/Muhammad-Zaheeb/NovaChat' }],
    seoDescription:
      'Case study: NovaChat, a real-time chat app built with React, TypeScript, FastAPI, PostgreSQL and WebSockets.',
    imageAlt: 'NovaChat sign-in screen in dark mode with the tagline "Conversations with the people you choose."',
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
    summary: 'A task manager for students that shows what is due today, what is overdue and what is done.',
    type: 'Personal project',
    fictional: false,
    freeHosted: true,
    stackShort: 'React, TypeScript, Python, FastAPI, PostgreSQL',
    proof: '30 backend tests, CI on both repos, public API docs',
    live: 'https://campusflow-frontend-blond.vercel.app',
    github: 'https://github.com/Muhammad-Zaheeb/campusflow-frontend',
    repos: [
      { label: 'Front end on GitHub', href: 'https://github.com/Muhammad-Zaheeb/campusflow-frontend' },
      { label: 'Back end on GitHub', href: 'https://github.com/Muhammad-Zaheeb/campusflow' },
      { label: 'API docs', href: 'https://campusflow-uoi7.onrender.com/docs' },
    ],
    seoDescription:
      'Case study: CampusFlow, a student task manager with a React front end on Vercel and a FastAPI back end on Render.',
    imageAlt: 'CampusFlow log-in screen in dark mode with email and password fields.',
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
    title: 'Gali Nau (concept demo)',
    summary:
      'A loud, playful sample website for a fictional cafe: an illustrated street you can poke, a menu you build an order from, a chai you mix yourself, and the order sent on WhatsApp.',
    type: 'Concept demo, fictional cafe',
    fictional: true,
    freeHosted: false,
    notice: 'Concept demo of a fictional cafe. Not a client project.',
    stackShort: 'Astro, Tailwind CSS, TypeScript, original SVG',
    proof: 'Original SVG art, no animation library, works without JavaScript',
    live: GALI_NAU_LIVE_URL,
    github: 'https://github.com/Muhammad-Zaheeb/cafe-demo',
    repos: [{ label: 'Source on GitHub', href: 'https://github.com/Muhammad-Zaheeb/cafe-demo' }],
    seoDescription:
      'Concept demo: Gali Nau, an interactive sample website for a fictional neighbourhood cafe, with an order tray that sends on WhatsApp. Built with Astro and Tailwind CSS. Not a client project.',
    imageAlt:
      'Gali Nau concept demo home page: the headline "Chai, coffee & breakfast on Lane Nine" beside an illustrated street at night, with the cafe between a pharmacy and a mechanic, string lights, a kite and a green door.',
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

export const services = [
  {
    title: 'Business website',
    summary: 'A clear, fast site that tells people what you do and how to reach you.',
    price: 100,
    time: '1-2 weeks',
    points: ['Up to five pages, built for phones first', 'Contact and WhatsApp buttons', 'Basic SEO'],
  },
  {
    title: 'Business website with menu or booking',
    summary: 'For places where people check prices or plan a visit before they come.',
    price: 150,
    time: '2 weeks',
    points: ['Everything in the business website', 'Menu, price list or service pages', 'Booking or enquiry details'],
  },
  {
    title: 'Custom web app',
    summary: 'Software built around how your business actually runs.',
    price: 350,
    time: '3-6 weeks',
    points: ['Login and dashboard', 'Bookings and admin tools', 'Database and API'],
  },
];

export const process = [
  { title: 'Talk', text: 'A short chat on WhatsApp or a call about what you need.' },
  { title: 'Plan and quote', text: 'A written plan and a fixed price before any work starts.' },
  { title: 'Build with previews', text: 'You see a live preview every week, so you can steer early.' },
  { title: 'Launch and support', text: 'I put it online and stay available for fixes and changes.' },
];
