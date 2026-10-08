import Link from 'next/link';
import { PageShell, LeaderCards } from './components';

const help = [
  ['Facing Foreclosure', 'We evaluate the whole situation, explain options clearly, and work as a partner toward the right path forward.'],
  ['Need to Sell Quickly', 'Flexible, creative alternatives for situations where time matters.'],
  ['Senior Housing Solutions', 'Creative solutions designed around stability, dignity, financial access, and quality of life.'],
  ['Downsizing & Long-Term Stability', 'Housing solutions that can reduce maintenance burdens without sacrificing a true sense of home.'],
  ['A Path to Homeownership', 'Responsible pathways for buyers who are not yet able to qualify for traditional financing.'],
  ['Veterans Housing Solutions', 'Creative ways to help veterans pursue the home they want while honoring the benefits they earned.'],
];

export default function Home() {
  return <PageShell><main>
    <section className="hero">
      <div className="hero-copy"><p className="eyebrow">REAL SOLUTIONS. REAL PEOPLE. REAL HOPE.</p><h1>Every Family Has a <em>Story.</em><br/>Every Home Holds <em>Hope.</em><br/>Every Community Is Worth <em>Restoring.</em></h1><p>We help homeowners, homebuyers, veterans, and seniors navigate life's real estate transitions with faith, integrity, and creative solutions that put people before properties.</p><div className="button-row"><Link className="btn primary" href="/how-we-help">How We Can Help You</Link><Link className="btn secondary" href="/stories">Read Our Stories</Link></div></div>
      <div className="desert-art" aria-label="Southwestern Arizona neighborhood illustration"><div className="sun"></div><div className="mountain m1"></div><div className="mountain m2"></div><div className="home-shape h1"></div><div className="home-shape h2"></div><div className="cactus c1"></div><div className="cactus c2"></div></div>
    </section>
    <section className="section center"><p className="eyebrow">WHY WE EXIST</p><h2>We Believe in People.</h2><p className="lede">Life brings unexpected challenges. We listen first, understand what matters, and create thoughtful solutions that honor your goals and your future.</p><div className="pillars"><div><b>We Listen</b><span>We take time to understand your situation, concerns, and goals.</span></div><div><b>We Serve</b><span>We treat every person with respect, compassion, and dignity.</span></div><div><b>We Create Solutions</b><span>We offer creative options designed for your unique circumstances.</span></div><div><b>We Restore Hope</b><span>We help bring clarity, stability, and peace of mind.</span></div><div><b>We Strengthen Communities</b><span>Stronger families create stronger neighborhoods.</span></div></div></section>
    <section className="section soft"><p className="eyebrow center">WHEN LIFE CHANGES, WE'RE HERE</p><h2 className="center">How We Help</h2><div className="help-grid">{help.map(([t,d]) => <article key={t}><h3>{t}</h3><p>{d}</p><Link href="/how-we-help">Learn more →</Link></article>)}</div></section>
    <section className="section split-story"><div><p className="eyebrow">STORIES OF RESTORATION</p><h2>A Forever Home</h2><p>An older couple facing nearly $5,000 in monthly rent found a long-term solution in a 55+ community. Their new housing cost is less than half of what they were paying, while giving them stability, community, and freedom from the maintenance burden of homeownership.</p><Link className="text-link" href="/stories">Read the full story →</Link></div><blockquote>“People before properties.”<cite>— The Ezra Promise</cite></blockquote></section>
    <section className="section"><p className="eyebrow">MEET THE STEWARDS BEHIND EZRA</p><h2>Different Experiences. One Shared Calling.</h2><p className="lede">Our leadership team is united by faith, integrity, and a shared commitment to serving others with wisdom, compassion, and professional excellence.</p><LeaderCards /></section>
    <section className="scripture"><p>“Commit to the Lord whatever you do, and he will establish your plans.”</p><span>Proverbs 16:3</span></section>
  </main></PageShell>;
}
