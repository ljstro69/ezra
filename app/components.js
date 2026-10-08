import Link from 'next/link';

export const leaders = [
  { name: 'Jordan Weatherford', role: 'Real Estate & Construction', email: 'jordan@ezrarealestatesolutions.com', img: '/images/jordan-weatherford.png', serve: 'I have benefited from others creating opportunities for me. I want to pass that gift forward and make a positive difference for others.' },
  { name: 'Tanya Weatherford', role: 'Financial Operations', email: 'tanya@ezrarealestatesolutions.com', img: '/images/tanya-weatherford.png', serve: 'My God asks me to serve. When I serve others with humility and compassion, I am serving God the Father.' },
  { name: 'Ken Strocsher', role: 'Strategy & Risk Management', email: 'ken@ezrarealestatesolutions.com', img: '/images/ken-strocsher.png', serve: 'I care, and I want the work I do to make a meaningful impact in this world for God.' },
  { name: 'Leslie Strocsher', role: 'Real Estate & Contracts', email: 'leslie@ezrarealestatesolutions.com', img: '/images/leslie-strocsher.png', serve: 'Service to others is not simply something we do for God; it is what God does through us. Serving others fills my heart and makes me feel fruitful.' },
];

export function Header() {
  const links = [
    ['About Ezra', '/about'], ['How We Help', '/how-we-help'], ['Stories of Restoration', '/stories'], ['Meet the Stewards', '/stewards'], ['The Ezra Promise', '/promise']
  ];
  return <header className="site-header"><Link href="/" className="brand"><img src="/images/ezra-logo.png" alt="Ezra Real Estate Solutions logo" /></Link><nav>{links.map(([l,h]) => <Link key={h} href={h}>{l}</Link>)}<Link className="nav-cta" href="/contact">Contact Us</Link></nav></header>;
}

export function Footer() {
  return <footer className="site-footer"><div className="footer-brand"><img src="/images/ezra-logo.png" alt="Ezra Real Estate Solutions" /><p>Building Legacies. Restoring Hope. Honoring God.</p></div><div><h4>Company</h4><Link href="/about">About Ezra</Link><Link href="/stewards">Meet the Stewards</Link><Link href="/promise">The Ezra Promise</Link></div><div><h4>Solutions</h4><Link href="/how-we-help">How We Help</Link><Link href="/stories">Stories of Restoration</Link></div><div><h4>Get in touch</h4><p>{process.env.NEXT_PUBLIC_PHONE || '520-399-6570'}</p><p>{process.env.NEXT_PUBLIC_EMAIL || 'info@ezrarealestatesolutions.com'}</p><p>Serving Arizona</p></div></footer>;
}

export function PageShell({ children }) { return <><Header />{children}<Footer /></>; }

export function LeaderCards() {
  return <div className="leader-grid">{leaders.map(p => <article className="leader-card" key={p.name}><img src={p.img} alt={p.name} /><div><h3>{p.name}</h3><p className="gold-text">{p.role}</p><p>{p.serve}</p></div></article>)}</div>;
}
