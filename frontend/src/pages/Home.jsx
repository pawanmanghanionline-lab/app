import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  CheckCircle2,
  MessageCircle,
  PhoneCall,
  ShoppingCart,
  Sparkles,
  Target,
  TrendingDown,
  TrendingUp
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';

const trustStats = [
  {
    label: 'Revenue generated',
    value: '₹75+ Lakhs',
    note: 'Marketplace growth delivered across Amazon & Flipkart accounts.'
  },
  {
    label: 'Brands worked',
    value: '20+ Brands',
    note: 'From early-stage sellers to growth-focused consumer brands.'
  },
  {
    label: 'Average ACOS reduction',
    value: '32% Reduced',
    note: 'Campaign restructuring built to improve profit, not vanity revenue.'
  }
];

const caseStudies = [
  {
    title: 'Home decor brand',
    problem: 'Flat sales, weak listing SEO, and ads spending without consistent conversions.',
    action: 'Rebuilt hero listings, improved keyword coverage, and restructured PPC around profitable search terms.',
    result: 'Scaled from ₹2.8L to ₹8.6L/month in 90 days while reducing ACOS from 41% to 24%.',
    metric: '3.1x monthly sales'
  },
  {
    title: 'Kitchen essentials seller',
    problem: 'Great products but low discoverability on Flipkart and poor repeat order momentum.',
    action: 'Created conversion-led creatives, refreshed catalog structure, and optimized deals calendar execution.',
    result: 'Lifted conversion rate by 38% and added ₹4.2L in incremental monthly revenue within one quarter.',
    metric: '+38% conversion rate'
  },
  {
    title: 'Emerging D2C personal care brand',
    problem: 'Launching on marketplaces with no clear ad strategy and unpredictable profitability.',
    action: 'Built launch playbooks, brand store assets, retention offers, and a tighter ad budget allocation model.',
    result: 'Reached ₹5.4L/month in 120 days with TACOS stabilized below 14%.',
    metric: '₹5.4L/month in 120 days'
  }
];

const reasons = [
  {
    icon: Target,
    title: 'Profit-first strategy',
    description: 'Every listing, ad, and growth system is designed to improve contribution margin, not just top-line GMV.'
  },
  {
    icon: Sparkles,
    title: 'Conversion-focused creatives',
    description: 'Sharper offer positioning, trust-building visuals, and better PDP structure that converts more traffic.'
  },
  {
    icon: BarChart3,
    title: 'Weekly optimization rhythm',
    description: 'We actively review search terms, placement performance, bids, and listing bottlenecks every week.'
  }
];

const initialFormState = {
  name: '',
  phone: '',
  business: '',
  monthlySales: ''
};

const whatsappUrl = 'https://wa.me/919999999999?text=Hi%20SoloScale%2C%20I%20want%20a%20free%20audit%20for%20my%20brand.';

const Home = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    setFormData(initialFormState);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.28),_transparent_35%),radial-gradient(circle_at_left,_rgba(14,165,233,0.18),_transparent_30%)]" />
        <div className="container relative mx-auto px-4 py-16 md:py-24 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-blue-100 backdrop-blur-sm">
                <BadgeCheck className="h-4 w-4 text-emerald-300" />
                Amazon & Flipkart growth systems for brands ready to scale
              </div>
              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                We Help Brands Scale to ₹0–₹10L/Month on Amazon & Flipkart
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Listings, Ads & Growth Systems focused on profit, not just sales
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-full bg-blue-500 px-7 text-base font-semibold text-white shadow-lg shadow-blue-500/30 hover:bg-blue-400"
                >
                  <Link to="/contact">
                    Get Free Audit
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full border-white/25 bg-white/5 px-7 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
                >
                  <a href={whatsappUrl} target="_blank" rel="noreferrer">
                    Chat on WhatsApp
                    <MessageCircle className="h-5 w-5" />
                  </a>
                </Button>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {trustStats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="mt-1 text-sm font-medium text-slate-200">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <Card className="border-white/10 bg-white text-slate-900 shadow-2xl shadow-slate-950/20">
              <CardContent className="p-6 sm:p-8">
                <p className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                  Free Growth Audit
                </p>
                <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
                  Get a custom plan to grow profitably
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Tell us about your business and we’ll share the biggest listing, ads, and growth opportunities we see.
                </p>

                {isSubmitted && (
                  <div className="mt-6 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <p>Thanks! Your request has been captured. We’ll reach out with your audit details soon.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-800" htmlFor="name">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="h-11 rounded-xl border-slate-200 bg-slate-50"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-800" htmlFor="phone">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="h-11 rounded-xl border-slate-200 bg-slate-50"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-800" htmlFor="business">
                      Business
                    </label>
                    <Input
                      id="business"
                      name="business"
                      type="text"
                      required
                      value={formData.business}
                      onChange={handleInputChange}
                      placeholder="Brand or business name"
                      className="h-11 rounded-xl border-slate-200 bg-slate-50"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-800" htmlFor="monthlySales">
                      Monthly Sales
                    </label>
                    <Input
                      id="monthlySales"
                      name="monthlySales"
                      type="text"
                      required
                      value={formData.monthlySales}
                      onChange={handleInputChange}
                      placeholder="e.g. ₹2L / month"
                      className="h-11 rounded-xl border-slate-200 bg-slate-50"
                    />
                  </div>
                  <Button type="submit" size="lg" className="h-12 w-full rounded-xl bg-slate-950 text-base font-semibold text-white hover:bg-slate-800">
                    Get Free Audit
                    <ArrowUpRight className="h-5 w-5" />
                  </Button>
                </form>
                <p className="mt-4 text-xs text-slate-500">
                  Best for brands selling on Amazon, Flipkart, or preparing to launch on both.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">Trust & traction</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Built for founders who want predictable marketplace growth
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              We combine strong listing fundamentals, performance marketing, and reporting systems that reveal where profit actually comes from.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {trustStats.map((stat, index) => (
              <Card key={stat.label} className="border-slate-200 bg-slate-50/80 shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                    {index === 0 && <TrendingUp className="h-6 w-6 text-blue-600" />}
                    {index === 1 && <ShoppingCart className="h-6 w-6 text-blue-600" />}
                    {index === 2 && <TrendingDown className="h-6 w-6 text-blue-600" />}
                  </div>
                  <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                  <p className="mt-2 text-base font-semibold text-slate-800">{stat.label}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{stat.note}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-10 flex max-w-4xl flex-col gap-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">Case studies</p>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Real marketplace wins from focused execution
            </h2>
            <p className="text-lg text-slate-600">
              Here’s how a profit-first growth system translates into stronger revenue, healthier ad efficiency, and better conversion rates.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <Card key={study.title} className="h-full border-slate-200 bg-white shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <h3 className="text-xl font-bold text-slate-900">{study.title}</h3>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                      {study.metric}
                    </span>
                  </div>
                  <div className="space-y-5 text-sm leading-6 text-slate-600">
                    <div>
                      <p className="font-semibold uppercase tracking-wide text-slate-900">Problem</p>
                      <p className="mt-1">{study.problem}</p>
                    </div>
                    <div>
                      <p className="font-semibold uppercase tracking-wide text-slate-900">Action</p>
                      <p className="mt-1">{study.action}</p>
                    </div>
                    <div className="rounded-2xl bg-slate-950 p-4 text-slate-50">
                      <p className="font-semibold uppercase tracking-wide text-blue-200">Result</p>
                      <p className="mt-2 text-sm leading-6 text-slate-200">{study.result}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">Why this homepage converts</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                Clear offer. Strong proof. Frictionless next step.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Visitors instantly understand what you do, who you help, and why they should trust you—then they have two fast ways to convert: form submission or WhatsApp.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <Card key={reason.title} className="border-slate-200 shadow-sm">
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900">{reason.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{reason.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">Final CTA</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Ready to scale your Amazon or Flipkart business profitably?
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Get your free audit and uncover the fastest path to stronger listings, lower ACOS, and better monthly revenue.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-full bg-blue-500 px-7 text-base font-semibold text-white hover:bg-blue-400">
                <Link to="/contact">Get Free Audit</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 rounded-full border-white/20 bg-transparent px-7 text-base font-semibold text-white hover:bg-white/10 hover:text-white">
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  Chat on WhatsApp
                  <PhoneCall className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-500/30 transition-transform duration-200 hover:scale-105 hover:bg-emerald-400"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
};

export default Home;
