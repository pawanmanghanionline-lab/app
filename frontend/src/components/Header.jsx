import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navItems = [
    { label: 'Services', path: '/services' },
    { label: 'Platforms', path: '/platforms' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];
  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" className="shrink-0" aria-label="SoloScale home">
          <img src="/soloscale-logo.svg" alt="SoloScale — Your eCommerce Growth Partner" className="h-12 w-auto" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" className={`text-sm font-semibold transition-colors ${location.pathname === '/' ? 'text-[#075B92]' : 'text-slate-700 hover:text-[#075B92]'}`}>Home</Link>
          {navItems.map((item) => <Link key={item.path} to={item.path} className={`text-sm font-semibold transition-colors ${isActive(item.path) ? 'text-[#075B92]' : 'text-slate-700 hover:text-[#075B92]'}`}>{item.label}</Link>)}
        </nav>
        <div className="hidden md:block">
          <Link to="/contact"><Button className="h-11 rounded-full bg-[#075B92] px-6 font-semibold text-white shadow-lg shadow-blue-900/15 hover:bg-[#064b78]">Start a Conversation <ArrowUpRight className="ml-1 h-4 w-4" /></Button></Link>
        </div>
        <button className="rounded-xl p-2 md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle navigation">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {mobileMenuOpen && <div className="border-t border-slate-200 bg-white px-5 py-5 md:hidden"><nav className="flex flex-col gap-4"><Link to="/" onClick={() => setMobileMenuOpen(false)} className="font-semibold">Home</Link>{navItems.map((item) => <Link key={item.path} to={item.path} onClick={() => setMobileMenuOpen(false)} className="font-semibold">{item.label}</Link>)}<Link to="/contact" onClick={() => setMobileMenuOpen(false)}><Button className="w-full bg-[#075B92] text-white">Start a Conversation</Button></Link></nav></div>}
    </header>
  );
};
