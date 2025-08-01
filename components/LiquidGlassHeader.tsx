'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Home, Search, BarChart3, Eye, Github, Zap } from 'lucide-react';

export default function LiquidGlassHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    let ticking = false;
    
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY < 50) {
          // Always show at top
          setIsVisible(true);
          setIsScrollingDown(false);
        } else if (currentScrollY > lastScrollY && currentScrollY > 150) {
          // Scrolling down - hide with animation
          setIsVisible(false);
          setIsScrollingDown(true);
        } else if (currentScrollY < lastScrollY - 10) {
          // Scrolling up - show with animation
          setIsVisible(true);
          setIsScrollingDown(false);
        }
        
        setLastScrollY(currentScrollY);
        ticking = false;
      }
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(controlNavbar);
        ticking = true;
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', requestTick, { passive: true });
      return () => {
        window.removeEventListener('scroll', requestTick);
      };
    }
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-[9999] transition-all duration-500 ease-out transform-gpu ${
        isVisible 
          ? 'translate-y-0 opacity-100 scale-100' 
          : isScrollingDown 
            ? '-translate-y-28 opacity-0 scale-95' 
            : 'translate-y-0 opacity-100 scale-100'
      }`}
      style={{
        filter: isVisible ? 'blur(0px)' : 'blur(4px)',
        willChange: 'transform, opacity, filter'
      }}
    >
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6 px-8 py-4 bg-black/50 backdrop-blur-2xl border border-white/30 rounded-full shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 hover:border-white/40">
        {/* Enhanced Liquid glass effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-white/15 pointer-events-none rounded-full opacity-80" />
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/10 via-purple-500/20 to-pink-500/10 blur-2xl opacity-40 -z-10 rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none rounded-full" />
        
        <Link href="/" className="flex items-center gap-2 text-white font-bold text-lg hover:scale-110 transition-all duration-300 relative z-10 hover:drop-shadow-lg">
          <Home className="w-5 h-5" />
         
        </Link>
        
        <div className="w-px h-6 bg-gradient-to-b from-transparent via-white/30 to-transparent relative z-10" />
        
        <div className="flex items-center gap-2 text-white/80 text-sm relative z-10">
          <Link href="/search" className="flex items-center gap-2 hover:text-white hover:scale-110 transition-all duration-300 px-4 py-2 rounded-full hover:bg-white/15 hover:shadow-lg hover:shadow-white/10">
            <Search className="w-4 h-4" />
            Search
          </Link>
          <Link href="/analyze" className="flex items-center gap-2 hover:text-white hover:scale-110 transition-all duration-300 px-4 py-2 rounded-full hover:bg-white/15 hover:shadow-lg hover:shadow-white/10">
            <BarChart3 className="w-4 h-4" />
            Analyze
          </Link>
          <Link href="/compare" className="flex items-center gap-2 hover:text-white hover:scale-110 transition-all duration-300 px-4 py-2 rounded-full hover:bg-white/15 hover:shadow-lg hover:shadow-white/10">
            <Zap className="w-4 h-4" />
            Compare
          </Link>
          <Link href="/visualize" className="flex items-center gap-2 hover:text-white hover:scale-110 transition-all duration-300 px-4 py-2 rounded-full hover:bg-white/15 hover:shadow-lg hover:shadow-white/10">
            <Eye className="w-4 h-4" />
            Visualize
          </Link>
          <a 
            href="https://github.com/NiladriHazra/WhatToBuild" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 hover:text-white hover:scale-110 transition-all duration-300 px-4 py-2 rounded-full hover:bg-white/15 hover:shadow-lg hover:shadow-white/10"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden relative">
        <div className="flex items-center gap-4 px-5 py-3 bg-black/50 backdrop-blur-2xl border border-white/30 rounded-full shadow-2xl">
          {/* Enhanced Liquid glass effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-white/15 pointer-events-none rounded-full opacity-80" />
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/10 via-purple-500/20 to-pink-500/10 blur-2xl opacity-40 -z-10 rounded-full" />
          
          <Link href="/" className="flex items-center gap-2 text-white font-bold text-lg relative z-10">
            <Home className="w-5 h-5" />
           
          </Link>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="ml-auto text-white hover:text-white/80 transition-all duration-300 relative z-10 p-1 rounded-full hover:bg-white/20"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown with enhanced animations */}
        <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[90vw] max-w-xs sm:max-w-sm transition-all duration-500 ease-out ${
          isMobileMenuOpen 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
        }`}>
          <div className="p-4 bg-black/80 backdrop-blur-3xl border border-white/40 rounded-2xl shadow-2xl w-full">
            {/* Enhanced Liquid glass effect for dropdown */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/20 pointer-events-none rounded-2xl opacity-90" />
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 via-purple-500/30 to-pink-500/20 blur-2xl opacity-60 -z-10 rounded-2xl" />
            
            <div className="flex flex-col gap-2 relative z-10 text-base sm:text-lg">
              <Link 
                href="/search" 
                className="flex items-center gap-3 text-white hover:text-white transition-all duration-300 p-4 rounded-xl hover:bg-white/20 hover:scale-105 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Search className="w-5 h-5" />
                Search Repositories
              </Link>
              <Link 
                href="/analyze" 
                className="flex items-center gap-3 text-white hover:text-white transition-all duration-300 p-4 rounded-xl hover:bg-white/20 hover:scale-105 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <BarChart3 className="w-5 h-5" />
                Analyze Repository
              </Link>
              <Link 
                href="/compare" 
                className="flex items-center gap-3 text-white hover:text-white transition-all duration-300 p-4 rounded-xl hover:bg-white/20 hover:scale-105 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Zap className="w-5 h-5" />
                Compare Users
              </Link>
              <Link 
                href="/visualize" 
                className="flex items-center gap-3 text-white hover:text-white transition-all duration-300 p-4 rounded-xl hover:bg-white/20 hover:scale-105 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Eye className="w-5 h-5" />
                Visualize Project
              </Link>
              <a 
                href="https://github.com/NiladriHazra/WhatToBuild" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-white hover:text-white transition-all duration-300 p-4 rounded-xl hover:bg-white/20 hover:scale-105 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
