import { site, stack, services, faqs, type Project } from './site';

/** Structured data for search engines. Only facts that appear on the site; no ratings or reviews. */
const at = (base: URL | undefined, path: string) => (base ? new URL(path, base).href : undefined);

export function personLd(base?: URL) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': at(base, '/#person'),
    name: site.name,
    url: at(base, '/'),
    jobTitle: site.jobTitle,
    email: `mailto:${site.email}`,
    affiliation: { '@type': 'CollegeOrUniversity', name: site.university },
    knowsAbout: stack,
    sameAs: [site.linkedin, site.github],
  };
}

export function serviceLd(base?: URL) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `${site.name}, web development`,
    url: at(base, '/'),
    description: site.description,
    founder: base ? { '@id': at(base, '/#person') } : { '@type': 'Person', name: site.name },
    email: site.email,
    telephone: `+${site.whatsappNumber}`,
    priceRange: '$100+',
    makesOffer: services.map((s) => ({
      '@type': 'Offer',
      name: s.title,
      description: s.summary,
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: s.price,
        priceCurrency: 'USD',
      },
    })),
  };
}

export function faqLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function projectLd(p: Project, base?: URL) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: p.title,
    description: p.summary,
    url: at(base, `/work/${p.slug}/`),
    author: { '@type': 'Person', name: site.name, url: at(base, '/') },
    ...(p.credit ? { creditText: p.credit } : {}),
    workExample: { '@type': 'WebApplication', name: p.title, url: p.live },
    hasPart: p.repos.map((r) => ({
      '@type': 'SoftwareSourceCode',
      name: `${p.title}: ${r.label}`,
      codeRepository: r.href,
    })),
    keywords: p.stackShort,
  };
}
