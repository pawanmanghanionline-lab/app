import { ArrowRight, BarChart3, Globe2, Megaphone, Search, ShoppingBag, Store, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const platforms = [
  ['Amazon', 'Marketplace management, listing SEO, catalog, advertising and growth.'],
  ['Flipkart', 'Catalog optimization, visibility, advertising and marketplace operations.'],
  ['Meesho', 'Catalog, pricing, discoverability and performance-led marketplace growth.'],
  ['JioMart', 'Marketplace setup, product optimization and ongoing growth management.'],
  ['Myntra', 'Fashion marketplace operations, catalog, content and growth support.'],
  ['AJIO', 'Marketplace execution, product presentation and performance optimization.'],
  ['Shopify', 'D2C store strategy, conversion optimization and ecommerce growth systems.']
];

const Platforms = () => (
  <div className="bg-white text-slate-950">
    <section className="border-b border-slate-200 bg-[#f7fafc] py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
        <p className="eyebrow">Marketplace + D2C</p>
        <h1 className="mt-4 text-5xl font-black tracking-[-.04em] sm:text-6xl">One growth partner.<br /><span className="text-[#075B92]">Everywhere your brand sells.</span></h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">SoloScale brings platform-specific execution together with one clear commercial strategy for your brand.</p>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {platforms.map(([name, description], index) => <article key={name} className={`group rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 ${index === 6 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
          <div className="mb-10 flex items-center justify-between"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#075B92]"><Store className="h-5 w-5" /></div><span className="text-xs font-bold uppercase tracking-widest text-slate-400">0{index + 1}</span></div>
          <h2 className="text-2xl font-black">{name}</h2><p className="mt-3 leading-7 text-slate-600">{description}</p>
          <div className="mt-7 flex items-center text-sm font-bold text-[#075B92]">Explore growth opportunities <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" /></div>
        </article>)}
      </div>
    </section>

    <section className="bg-[#f7fafc] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-10 lg:grid-cols-2 lg:items-center"><div><p className="eyebrow">How we think</p><h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Same business goal.<br /><span className="text-[#075B92]">Different platform playbooks.</span></h2><p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">Every channel has different shoppers, algorithms, economics and operating rules. We adapt the execution without losing the bigger strategy.</p></div><div className="grid gap-4 sm:grid-cols-2">{[[Search,'Discoverability','Improve how customers find your products.'],[Megaphone,'Performance','Put spend behind the opportunities that matter.'],[BarChart3,'Optimization','Use performance data to improve decisions.'],[Globe2,'Expansion','Build a stronger presence across channels.']].map(([Icon,title,text]) => <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6"><Icon className="h-5 w-5 text-[#075B92]" /><h3 className="mt-6 font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></div>)}</div></div></div>
    </section>

    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><div className="rounded-[32px] bg-[#075B92] px-7 py-12 text-white sm:px-12 lg:px-16"><div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[.25em] text-blue-200">Build your channel strategy</p><h2 className="mt-3 text-4xl font-black">Ready to grow across more channels?</h2></div><Link to="/contact" className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 font-bold text-[#075B92]">Talk to SoloScale <ArrowRight className="ml-2 h-4 w-4" /></Link></div></div></section>
  </div>
);

export default Platforms;
