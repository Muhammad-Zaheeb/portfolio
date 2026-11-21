export const site = {
  name: 'Muhammad Zaheeb',
  tagline: 'I build fast, reliable websites and web apps for small businesses.',
  support:
    'Mobile-friendly sites and custom web apps for cafes, clinics, shops and other local businesses. Clear quotes, weekly previews, quick replies.',
  whatsappNumber: '923024010502',
  whatsappDisplay: '+92 302 4010502',
  whatsappMessage: 'Hi Zaheeb, I saw your portfolio and would like to talk about a website.',
  email: 'zaheeb.qureshi@gmail.com',
  linkedin: 'https://www.linkedin.com/in/zaheeb-qureshi-22814b190/',
  github: 'https://github.com/Muhammad-Zaheeb',
};

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`;
export const mailUrl = `mailto:${site.email}`;

export const nav = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const projects = [
  {
    title: 'NovaChat',
    summary: 'Real-time chat app with friend requests, groups, media and voice messages.',
    tech: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'WebSockets'],
    result: 'Live on free hosting, 94 backend tests, automated CI.',
    live: 'https://novachat-v022.onrender.com',
    github: 'https://github.com/Muhammad-Zaheeb/NovaChat',
  },
  {
    title: 'CampusFlow',
    summary: 'Student task manager with a React front end and a FastAPI back end.',
    tech: ['React', 'FastAPI', 'Vercel', 'Render'],
    result: 'Deployed as two separate apps with public API docs.',
    live: 'https://campusflow-frontend-blond.vercel.app',
    github: 'https://github.com/Muhammad-Zaheeb/campusflow-frontend',
  },
];

export const services = [
  {
    title: 'Business website',
    price: 'from PKR 25,000 / $90',
    time: '1-2 weeks',
    points: [
      'Up to 5 pages, mobile-first',
      'Contact and WhatsApp buttons',
      'Basic SEO',
      'Examples: cafe, restaurant, clinic, shop',
    ],
  },
  {
    title: 'Website with menu, booking or service info',
    price: 'from PKR 40,000 / $150',
    time: '2 weeks',
    points: ['Everything in Business website', 'Menu, price list or service pages', 'Booking or enquiry details'],
  },
  {
    title: 'Custom web app',
    price: 'from PKR 100,000 / $350',
    time: '3-6 weeks',
    points: ['Login and dashboard', 'Bookings and admin tools', 'Database and API'],
  },
];

export const process = [
  { title: 'Talk', text: 'A short chat on WhatsApp or a call about what you need.' },
  { title: 'Plan and quote', text: 'A written plan with a fixed price before any work starts.' },
  { title: 'Build with previews', text: 'A live preview every week so you can steer early.' },
  { title: 'Launch and support', text: 'I put it online and stay available for fixes and changes.' },
];
