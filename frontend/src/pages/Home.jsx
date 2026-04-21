import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  PhoneCall,
  Rocket,
  ShieldCheck,
  Store,
  TrendingUp
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const whatsappUrl = 'https://wa.me/919999999999?text=Hi%20Team%2C%20I%20want%20to%20scale%20my%20marketplace%20sales.';

const heroStats = [
  { label: 'Managed GMV', value: '₹12Cr+' },
  { label: 'Active Brands', value: '70+' },
  { label: 'Avg. ACOS Improvement', value: '27%' }
];

const painPoints = [
  'You launch products but rankings never move beyond page 3.',
  'Ad spend keeps increasing while profit margin keeps shrinking.',
  'Returns, low ratings, and poor creatives kill conversion rates.',
  'You are confused between Amazon, Flipkart, and Meesho growth priorities.'
];

const services = [
  {
    platform: 'Amazon Growth Management',
    icon: Store,
    bullets: [
      'Catalog and listing optimization (SEO, title, bullets, A+ content)',
      'PPC structure setup (auto/manual, harvesting, negatives, scaling)',
      'Brand store strategy, deals calendar, and profitability reporting'
    ]
  },
  {
    platform: 'Flipkart Performance Scaling',
    icon: TrendingUp,
    bullets: [
      'Flipkart listing hygiene and conversion-first merchandising',
      'PLA + keyword ads optimization with bid and budget control',
      'Event-day growth playbooks for BBD and monthly campaign spikes'
    ]
  },
  {
    platform: 'Meesho Launch & Volume Engine',
    icon: Rocket,
    bullets: [
      'Fast onboarding, catalog publishing, and compliant data setup',
      'Price-positioning strategy to balance volume and contribution margin',
      'Daily order velocity tracking and repeatable scale framework'
    ]
  }
];

const caseStudies = [
  {
    brand: 'Home & Kitchen Brand',
    result: '₹3.4L → ₹11.2L / month in 5 months',
    details: 'Reworked keyword map, hero creatives, and ad funnel segmentation across Amazon + Flipkart.'
  },
  {
    brand: 'Fashion Accessories Seller',
    result: '42% lower ACOS with 2.1x revenue growth',
    details: 'Built SKU-level bidding guardrails and event-led listing refresh cycles with weekly optimization.'
  },
  {
    brand: 'D2C Personal Care Launch',
    result: 'Reached 1,850+ monthly orders in 90 days',
    details: 'Executed marketplace entry stack with catalog strategy, offer architecture, and review velocity systems.'
  }
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '₹24,999/mo',
    bestFor: 'New sellers doing up to ₹3L/month',
    features: ['1 marketplace', 'Listing + basic ads', 'Weekly reporting', 'WhatsApp support (business hours)']
  },
  {
    name: 'Growth',
    price: '₹44,999/mo',
    bestFor: 'Scaling brands doing ₹3L–₹15L/month',
    features: ['2 marketplaces', 'Advanced ads + CRO', 'Creative direction', 'Dedicated growth manager'],
    highlighted: true
  },
  {
    name: 'Scale+',
    price: 'Custom',
    bestFor: 'Multi-platform brands with aggressive growth targets',
    features: ['Amazon + Flipkart + Meesho', 'Full-funnel strategy', 'Weekly strategy calls', 'Priority support + custom dashboards']
  }
];

const testimonials = [
  {
    quote:
      'Within 60 days, we finally had clarity on what was driving profit. Sales grew and ad waste dropped dramatically.',
    name: 'Rohit Agarwal',
    role: 'Founder, UrbanShelf'
  },
  {
    quote:
      'Their team fixed our listings, creatives, and ad structure. We now have a repeatable growth system, not random spikes.',
    name: 'Neha S.',
    role: 'Co-founder, KitchMint'
  },
  {
    quote: 'Best decision for our marketplace business. Highly execution-focused and transparent on numbers every week.',
    name: 'Piyush Jain',
    role: 'Director, GlowNest'
  }
];

const Home = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setActiveTestimonial((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setActiveTestimonial((current) => (current + 1) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.25),_transparent_35%),radial-gradient(circle_at_left,_rgba(59,130,246,0.22),_transparent_40%)]" />
        <div className="container relative mx-auto px-4 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">
              <BadgeCheck className="h-4 w-4 text-emerald-300" />
              Built for Amazon & Flipkart Sellers
            </p>
            <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Scale Your Marketplace Revenue Without Burning Profit
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-300 sm:text-xl">
              We help e-commerce brands grow on <span className="font-semibold text-white">Amazon, Flipkart, and Meesho</span> with
              conversion-first listings, smarter ads, and weekly execution.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-full bg-blue-500 px-7 text-base font-semibold hover:bg-blue-400">
                <Link to="/contact">
                  Book Free Growth Call
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-white/30 bg-transparent px-7 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
              >
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  WhatsApp Us Now
                  <MessageCircle className="h-5 w-5" />
                </a>
              </Button>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/15 bg-white/5 p-5">
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Why sellers struggle</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Most new marketplace sellers hit the same roadblocks</h2>
          </div>
          <div className="mx-auto mt-8 grid max-w-5xl gap-4 md:grid-cols-2">
            {painPoints.map((item) => (
              <Card key={item} className="border-slate-200 bg-white shadow-sm">
                <CardContent className="flex items-start gap-3 p-5">
                  <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500" />
                  <p className="text-sm leading-6 text-slate-700 sm:text-base">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Services</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">End-to-end marketplace growth services</h2>
            <p className="mt-4 text-slate-600">A practical execution team for Amazon, Flipkart, and Meesho — from listing quality to ad profitability.</p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.platform} className="h-full border-slate-200 bg-slate-50/70 shadow-sm">
                  <CardContent className="p-6">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">
                      <Icon className="h-6 w-6 text-blue-700" />
                    </div>
                    <h3 className="text-xl font-bold">{service.platform}</h3>
                    <ul className="mt-4 space-y-3">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Case studies</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Proven results across categories</h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <Card key={study.brand} className="h-full border-slate-200 bg-white shadow-sm">
                <CardContent className="p-6">
                  <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">{study.brand}</p>
                  <p className="mt-3 text-2xl font-extrabold text-slate-900">{study.result}</p>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{study.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Pricing</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Simple plans based on your growth stage</h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.name}
                className={`h-full border-slate-200 ${plan.highlighted ? 'border-blue-500 bg-blue-50 shadow-lg shadow-blue-100' : 'bg-white shadow-sm'}`}
              >
                <CardContent className="flex h-full flex-col p-6">
                  <p className="text-lg font-bold">{plan.name}</p>
                  <p className="mt-2 text-3xl font-extrabold text-slate-900">{plan.price}</p>
                  <p className="mt-2 text-sm text-slate-600">{plan.bestFor}</p>
                  <ul className="mt-5 space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-slate-700">
                        <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-6 w-full rounded-full" variant={plan.highlighted ? 'default' : 'outline'}>
                    <a href={whatsappUrl} target="_blank" rel="noreferrer">
                      Choose {plan.name}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Testimonials</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">What clients say after scaling with us</h2>
          </div>
          <Card className="mx-auto mt-10 max-w-3xl border-slate-200 bg-white shadow-sm">
            <CardContent className="p-6 sm:p-8">
              <BarChart3 className="h-8 w-8 text-blue-600" />
              <p className="mt-4 text-lg leading-8 text-slate-700">“{testimonials[activeTestimonial].quote}”</p>
              <p className="mt-5 font-semibold text-slate-900">{testimonials[activeTestimonial].name}</p>
              <p className="text-sm text-slate-500">{testimonials[activeTestimonial].role}</p>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex gap-2">
                  {testimonials.map((item, index) => (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => setActiveTestimonial(index)}
                      className={`h-2.5 w-2.5 rounded-full transition ${index === activeTestimonial ? 'bg-blue-600' : 'bg-slate-300'}`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={goToPrevious}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-700 hover:bg-slate-100"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={goToNext}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-700 hover:bg-slate-100"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Ready to grow?</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Let’s build your next ₹10L/month marketplace growth plan</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">
              Get a focused action plan for your listings, ads, and conversion journey across Amazon, Flipkart, and Meesho.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-full bg-blue-500 px-7 text-base font-semibold hover:bg-blue-400">
                <Link to="/contact">Book Strategy Call</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-white/20 bg-transparent px-7 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
              >
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
