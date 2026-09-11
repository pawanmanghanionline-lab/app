import { ArrowRight, ArrowUpRight, BarChart3, CheckCircle2, ChevronRight, Globe2, LineChart, Megaphone, Search, ShoppingBag, Store, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const platforms = ['Amazon', 'Flipkart', 'Meesho', 'JioMart', 'Myntra', 'AJIO', 'Shopify'];

const services = [
  { icon: Search, title: 'Marketplace SEO', text: 'Search-led listings built to improve visibility, relevance and conversion.' },
  { icon: Megaphone, title: 'Advertising & PPC', text: 'Performance campaigns designed around efficient growth and commercial intent.' },
  { icon: Store, title: 'Marketplace Management', text: 'End-to-end account operations across India’s major commerce platforms.' },
  { icon: ShoppingBag, title: 'Shopify & D2C', text: 'Store strategy, conversion optimization and growth systems for D2C brands.' },
  { icon: Zap, title: 'A+ Content & Creatives', text: 'Premium product storytelling that makes listings easier to trust and buy.' },
  { icon: LineChart, title: 'Growth Strategy', text: 'Clear priorities, reporting and optimization built around your business goals.' }
];

const Home = () => (
  <div className="overflow-hidden bg-white text-slate-950">
    <section className="relative border-b border-slate-200 bg-[#f7fafc]">
      <div className="absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full bg-blue-100/70 blur-3xl" />
      <div className="absolute -bottom-48 left-1/3 h-[420px] w-[420px] rounded-full bg-sky-100/60 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-16 lg:grid-cols-[1.02fr_.98fr] lg:px-8 lg:pb-24 lg:pt-24">
        <div className="max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#075B92] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#075B92]" /> Ecommerce growth partner
          </div>
          <h1 className="text-5xl font-black leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-[72px]">
            Turn your <span className="text-[#075B92]">ecommerce</span> into a growth engine.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
            We help brands grow across marketplaces and D2C with sharper listings, smarter advertising and execution that compounds.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="inline-flex h-12 items-center justify-center rounded-full bg-[#075B92] px-7 font-bold text-white shadow-xl shadow-blue-900/15 transition hover:-translate-y-0.5 hover:bg-[#064b78]">
              Get a Free Growth Audit <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link to="/services" className="inline-flex h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-7 font-bold text-slate-800 transition hover:border-[#075B92] hover:text-[#075B92]">
              Explore Services <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-600">
            {['Strategy', 'Execution', 'Optimization', 'Reporting'].map((item) => <span key={item} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#075B92]" />{item}</span>)}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[620px]">
          <div className="rounded-[30px] border border-slate-200 bg-white p-3 shadow-[0_30px_80px_-30px_rgba(7,91,146,.28)]">
            <div className="rounded-[24px] bg-slate-950 p-5 sm:p-7">
              <div className="mb-6 flex items-center justify-between">
                <div><p className="text-xs font-semibold uppercase tracking-[.2em] text-slate-400">Growth dashboard</p><p className="mt-1 text-lg font-bold text-white">Marketplace performance</p></div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">Live view</div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[['Visibility','+42%'],['Conversion','+28%'],['Efficiency','+31%']].map(([a,b]) => <div key={a} className="rounded-2xl border border-white/10 bg-white/[.06] p-4"><p className="text-xs text-slate-400">{a}</p><p className="mt-2 text-2xl font-black text-white">{b}</p></div>)}
              </div>
              <div className="mt-4 rounded-2xl border border-white/10 bg-white/[.04] p-5">
                <div className="flex h-44 items-end gap-2 sm:gap-3">
                  {[32,48,42,65,58,79,72,94,86,100,91,108].map((h, i) => <div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-[#075B92] to-blue-300" style={{height:`${h}%`, opacity: .45 + i/24}} />)}
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-500"><span>Growth trajectory</span><span className="text-blue-300">Optimizing ↑</span></div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[.04] p-4"><p className="text-xs text-slate-400">Revenue focus</p><p className="mt-1 font-bold text-white">Profitable growth</p></div>
                <div className="rounded-2xl border border-white/10 bg-white/[.04] p-4"><p className="text-xs text-slate-400">Coverage</p><p className="mt-1 font-bold text-white">7 commerce channels</p></div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-xl sm:block"><p className="text-xs font-bold uppercase tracking-widest text-slate-400">Built for</p><p className="mt-1 font-bold text-slate-900">Indian ecommerce brands</p></div>
          <div className="absolute -right-3 -top-5 hidden rounded-2xl bg-[#075B92] px-5 py-4 text-white shadow-xl sm:block"><p className="text-xs text-blue-100">From listings</p><p className="font-bold">to long-term growth ↗</p></div>
        </div>
      </div>
    </section>

    <section className="border-b border-slate-200 bg-white py-6">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-3 text-center text-[10px] font-bold uppercase tracking-[.28em] text-slate-400">Platforms we manage</div>
        <div className="logo-marquee overflow-hidden">
          <div className="logo-track flex w-max items-center gap-3">
            {[...platforms, ...platforms].map((platform, i) => <div key={`${platform}-${i}`} className="platform-pill"><span className="platform-dot" />{platform}</div>)}
          </div>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div className="max-w-md">
          <p className="eyebrow">What we do</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">One partner.<br /><span className="text-[#075B92]">Every growth lever.</span></h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">From marketplace visibility to D2C conversion, SoloScale brings strategy and execution into one focused growth system.</p>
          <Link to="/services" className="mt-7 inline-flex items-center font-bold text-[#075B92]">View all services <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map(({icon: Icon, title, text}, index) => <div key={title} className={`group rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 ${index === 0 ? 'sm:translate-y-5' : ''}`}><div className="mb-8 flex items-center justify-between"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#075B92]"><Icon className="h-5 w-5" /></div><ArrowUpRight className="h-5 w-5 text-slate-300 transition group-hover:text-[#075B92]" /></div><h3 className="text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></div>)}
        </div>
      </div>
    </section>

    <section className="bg-[#f7fafc] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Why SoloScale</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Growth should look like a <span className="text-[#075B92]">system.</span></h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">We connect the pieces that are usually handled separately: discovery, content, ads, marketplace operations and conversion.</p>
            <div className="mt-8 space-y-5">{[['01','Understand','We start with your product, customer, economics and current marketplace position.'],['02','Strategize','We identify the highest-impact opportunities and build a focused roadmap.'],['03','Execute','We turn the roadmap into listings, campaigns, creatives and operational improvements.'],['04','Optimize','We continuously learn from performance and improve what matters.']].map(([n,t,d]) => <div key={n} className="flex gap-5"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-blue-200 bg-white text-xs font-black text-[#075B92]">{n}</div><div><h3 className="font-bold">{t}</h3><p className="mt-1 text-sm leading-6 text-slate-600">{d}</p></div></div>)}</div>
          </div>
          <div className="relative rounded-[32px] border border-slate-200 bg-white p-5 shadow-[0_30px_70px_-35px_rgba(15,23,42,.25)] sm:p-7">
            <div className="rounded-[24px] bg-gradient-to-br from-[#075B92] to-[#0a3550] p-7 text-white sm:p-9">
              <div className="flex items-start justify-between"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-blue-200">Growth map</p><h3 className="mt-3 text-3xl font-black">Marketplace → D2C</h3></div><Globe2 className="h-9 w-9 text-blue-200" /></div>
              <div className="mt-10 space-y-3">{['Discover','Convert','Advertise','Retain','Scale'].map((item, i) => <div key={item} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[.07] px-5 py-4"><span className="text-xs font-bold text-blue-200">0{i+1}</span><span className="font-semibold">{item}</span><span className="ml-auto h-2 w-2 rounded-full bg-blue-200" /></div>)}</div>
              <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5 text-sm"><span className="text-blue-100">Built around your economics</span><Target className="h-5 w-5 text-blue-200" /></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <div className="rounded-[32px] bg-[#075B92] px-7 py-12 text-white shadow-2xl shadow-blue-900/20 sm:px-12 lg:px-16 lg:py-16">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end"><div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.25em] text-blue-200">Let’s build the next stage</p><h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Ready to scale your brand?</h2><p className="mt-4 text-lg leading-8 text-blue-100">Tell us where you are today. We’ll show you where the biggest opportunities are.</p></div><Link to="/contact" className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-white px-7 font-bold text-[#075B92] transition hover:bg-blue-50">Get a Free Growth Audit <ArrowRight className="ml-2 h-4 w-4" /></Link></div>
      </div>
    </section>
  </div>
);

export default Home;
