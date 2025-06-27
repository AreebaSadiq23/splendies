'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart, Search, User, ChevronDown, Truck } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currency, setCurrency] = useState('USD');
  const [language, setLanguage] = useState('EN');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b border-charcoal shadow-[0_2px_12px_0_rgba(54,69,79,0.12)] ${
        scrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      } text-white font-inter`}
    >
      {/* Top Bar with Refined Marquee */}
      <div className="text-xs py-2 px-3 sm:px-6 border-b border-white/10 flex justify-between items-center tracking-wide uppercase overflow-hidden relative bg-[#0A0A0A]/80 backdrop-blur-sm">
        <div className="relative flex items-center overflow-hidden w-full min-w-0">
          <Truck className="w-4 h-4 text-[#e6d4cb] mr-2 shrink-0" />
          <div className="overflow-hidden whitespace-nowrap min-w-0">
            <div className="marquee-track">
              <span className="marquee-text">Free shipping on orders over $100 &nbsp; • &nbsp; Free returns within 30 days &nbsp; • &nbsp; Exclusive online deals &nbsp; • &nbsp;</span>
              <span className="marquee-text">Free shipping on orders over $100 &nbsp; • &nbsp; Free returns within 30 days &nbsp; • &nbsp; Exclusive online deals &nbsp; • &nbsp;</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2 sm:gap-4 text-white/60 ml-auto pl-2 sm:pl-4">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-transparent appearance-none cursor-pointer hover:text-white focus:outline-none text-xs sm:text-sm"
          >
            <option className="text-black" value="EN">EN</option>
            <option className="text-black" value="FR">FR</option>
            <option className="text-black" value="DE">DE</option>
          </select>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="bg-transparent appearance-none cursor-pointer hover:text-white focus:outline-none text-xs sm:text-sm"
          >
            <option className="text-black" value="USD">USD</option>
            <option className="text-black" value="EUR">EUR</option>
            <option className="text-black" value="GBP">GBP</option>
          </select>
        </div>
      </div>

      {/* Main Header */}
      <motion.div className="px-3 sm:px-6 py-3 sm:py-5 flex justify-between items-center relative z-10">
        {/* Logo */}
        <motion.div whileHover={{ textShadow: '0px 0px 8px #e6d4cb', skewX: -5 }} transition={{ duration: 0.4 }} className="font-libertinus text-2xl sm:text-4xl tracking-wider italic text-[#e6d4cb] select-none cursor-pointer mx-auto lg:mx-0">
          SPLENDIES
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8 xl:gap-12 text-xs xl:text-sm">
          {[{ label: 'Home', href: '/' },  { label: 'Product', href: '/product' }, { label: 'Contact', href: '/contact' }].map((item, idx) => (
            <motion.div
              key={item.label}
              whileHover={{ scale: 1.1, x: 2 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="group relative cursor-pointer tracking-wide text-white/80 hover:text-[#e6d4cb] transition"
            >
              <Link href={item.href}>
                {item.label}
              </Link>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-[#7b1e30] to-[#e6d4cb] rounded-full transition-all duration-500" />
            </motion.div>
          ))}
        </nav>
        {/* Icons */}
        <div className="flex items-center gap-4 sm:gap-6 ml-auto lg:ml-0">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Search className="w-5 h-5 text-white/70 hover:text-white transition duration-300 cursor-pointer" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="relative cursor-pointer" onClick={() => setIsCartOpen(true)}>
            <ShoppingCart className="w-5 h-5 text-white/70 hover:text-white transition duration-300" />
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="absolute -top-1 -right-2 bg-[#7b1e30] text-[10px] w-4 h-4 flex items-center justify-center rounded-full"
            >2</motion.span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="hidden lg:block">
            <Link href="/register">
              <User className="w-5 h-5 text-white/70 hover:text-white transition duration-300 cursor-pointer" />
            </Link>
          </motion.div>
          <motion.button
            onClick={() => setIsMobileMenuOpen(true)}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden ml-2"
          >
            <Menu className="w-6 h-6 text-white" />
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-sm p-4 sm:p-6 flex flex-col overflow-y-auto"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
            <motion.div className="mt-8 sm:mt-12 space-y-6 sm:space-y-8 text-xl sm:text-2xl font-playfair text-[#e6d4cb]">
              {[
                { label: 'Home', href: '/' },
                { label: 'Product', href: '/product' },
                { label: 'Contact', href: '/contact' }
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="border-b border-white/10 pb-2"
                >
                  <Link href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 sm:mt-12 flex items-center gap-3 sm:gap-4 text-white text-base"
              >
                <Link href="/login" className="flex items-center gap-2">
                  <User className="w-5 h-5" /> <span>Login / Signup</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4 }}
            className="fixed right-0 top-0 h-full w-full max-w-xs sm:max-w-md bg-[#0A0A0A] z-50 p-4 sm:p-6 backdrop-blur-lg shadow-xl overflow-y-auto"
          >
            <div className="flex justify-between items-center text-white text-lg mb-4">
              <span>My Cart</span>
              <button onClick={() => setIsCartOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4 text-white/80 text-sm">
              <div className="border-b border-white/10 pb-4">
                <p>Lace Bra Set</p>
                <p>$89.00</p>
              </div>
              <div className="border-b border-white/10 pb-4">
                <p>Velvet Robe</p>
                <p>$120.00</p>
              </div>
              <div className="pt-6">
                <button className="w-full py-3 bg-[#7b1e30] hover:bg-[#a82941] transition rounded text-white uppercase tracking-wider">
                  Checkout
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <style jsx global>{`
        .marquee-track {
          display: flex;
          animation: scroll-left 30s linear infinite;
          min-width: 100vw;
        }
        .marquee-text {
          font-size: 0.75rem;
          color: #e6d4cb;
          white-space: nowrap;
          padding-right: 4rem;
        }
        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

    </header>
  );
}
