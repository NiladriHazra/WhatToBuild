/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  FaPlay, FaChevronRight, FaRocket, FaCode,
  FaEye, FaSearch, FaUsers, FaFileAlt
} from 'react-icons/fa';
import { GlowingEffect } from "@/components/ui/glowing-effect";
import Glow from "@/components/ui/glow";
import { GoodText1 } from './GoodText';

const Features = ({ forceDarkMode = true }) => {
  const [activeFeature, setActiveFeature] = useState('idea-to-repo');
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const videoRef = useRef(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const premiumFeatures = [
    {
      id: 'idea-to-repo',
      title: "Your Random Idea to GitHub Repo",
      description: "Transform your creative ideas into structured GitHub repositories with AI-powered project scaffolding",
      icon: <FaRocket />,
      vimeoId: "1120052922",
      posterSrc: "https://www.solidbackgrounds.com/images/1280x720/1280x720-black-solid-color-background.jpg"
    },
    {
      id: 'analyze-repo',
      title: "Analyze GitHub Repository",
      description: "Deep dive into repository structure, analyze code quality, dependencies, and get comprehensive insights",
      icon: <FaCode />,
      vimeoId: "1120052838",
      posterSrc: "https://www.solidbackgrounds.com/images/1280x720/1280x720-black-solid-color-background.jpg"
    },
    {
      id: 'generate-readme',
      title: "Generate a Great README",
      description: "Paste a repo URL, analyze the codebase, and draft a polished README with live edit and preview.",
      icon: <FaFileAlt />,
      vimeoId: "1120052922",
      posterSrc: "https://www.solidbackgrounds.com/images/1280x720/1280x720-black-solid-color-background.jpg"
    },
    {
      id: 'visualize-repo',
      title: "Visualize GitHub Repository",
      description: "Generate interactive flow diagrams and visual representations of repository architecture",
      icon: <FaEye />,
      vimeoId: "1120052965",
      posterSrc: "https://www.solidbackgrounds.com/images/1280x720/1280x720-black-solid-color-background.jpg"
    },
    {
      id: 'find-repos',
      title: "Find Best Open Source Repos to Contribute",
      description: "Discover good first issues, bounty issues, and major contributions across different programming languages",
      icon: <FaSearch />,
      vimeoId: "1120052950",
      posterSrc: "https://www.solidbackgrounds.com/images/1280x720/1280x720-black-solid-color-background.jpg"
    },
    {
      id: 'compare-devs',
      title: "Compare GitHub Devs and See Who Wins",
      description: "Compare GitHub profiles, analyze contribution patterns, and visualize developer statistics side by side",
      icon: <FaUsers />,
      vimeoId: "1120052867",
      posterSrc: "https://www.solidbackgrounds.com/images/1280x720/1280x720-black-solid-color-background.jpg"
    }
  ];

  const handleFeatureClick = (id: string) => {
    setActiveFeature(id);
    setVideoLoaded(false);
    setIframeLoading(true);
  };

  const handleIframeLoad = () => {
    setVideoLoaded(true);
    setIframeLoading(false);
  };

  const activeFeatureData = premiumFeatures.find(f => f.id === activeFeature);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Glow Effect */}
      <Glow variant="center" className="opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white transform-gpu">
                EXPLORE{' '}
                <span className="inline-block align-middle"><GoodText1 /></span>
              </h2>
            </div>
          </div>
          <p className="max-w-3xl mx-auto text-lg text-white/70 leading-relaxed">
            Discover powerful tools to transform your GitHub workflow and unlock your development potential
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {/* Feature List - Mobile (icons + inline video) */}
          <div className="order-1 lg:order-1 grid grid-cols-2 gap-3 sm:gap-4 lg:hidden">
            {premiumFeatures.map((feature) => (
              <React.Fragment key={feature.id}>
                <button
                  onClick={() => handleFeatureClick(feature.id)}
                  aria-label={feature.title}
                  className={`group relative aspect-square rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
                    activeFeature === feature.id ? 'ring-1 ring-blue-400/40 shadow-[0_0_16px_2px_rgba(80,180,255,0.18)]' : 'hover:border-white/20'
                  }`}
                >
                  <div className="text-white text-2xl">{feature.icon}</div>
                </button>
                {activeFeature === feature.id && (
                  <div className="col-span-2 -mt-1">
                    <div 
                      className="relative rounded-2xl border border-white/10 p-2 transition-all duration-300 hover:border-white/20 group"
                    >
                      <GlowingEffect
                        blur={0}
                        borderWidth={2}
                        spread={60}
                        glow={true}
                        disabled={false}
                        proximity={48}
                        inactiveZone={0.01}
                      />
                      <div className="relative overflow-hidden rounded-xl bg-black/40 backdrop-blur-sm border border-white/5">
                        <div className="relative aspect-video w-full">
                          {feature.vimeoId ? (
                            <>
                              <iframe 
                                key={feature.vimeoId}
                                src={`https://player.vimeo.com/video/${feature.vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1`}
                                className="w-full h-full"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                title={feature.title}
                                onLoad={handleIframeLoad}
                              />
                              {iframeLoading && activeFeature === feature.id && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                                  <div className="flex flex-col items-center gap-3">
                                    <div className="w-8 h-8 border-2 border-white/20 border-t-white/80 rounded-full animate-spin"></div>
                                    <span className="text-white/70 text-sm">Loading video...</span>
                                  </div>
                                </div>
                              )}
                            </>
                          ) : null}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        </div>
                        <div className="p-4 bg-black/40 backdrop-blur-sm">
                          <div className="flex items-center mb-2">
                            <div className="w-fit rounded-lg border border-white/20 bg-white/5 p-2 backdrop-blur-sm mr-3">
                              <div className="h-4 w-4 text-white">
                                {feature.icon}
                              </div>
                            </div>
                            <h3 className="font-sans text-lg font-semibold text-white">{feature.title}</h3>
                          </div>
                          <p className="text-sm text-white/70 leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Feature List - Desktop (full cards) */}
          <div className="hidden lg:flex lg:flex-col lg:gap-4">
            {premiumFeatures.map((feature) => (
              <div
                key={feature.id}
                className={`group relative cursor-pointer transition-all duration-300 rounded-2xl md:rounded-3xl overflow-hidden ${
                  activeFeature === feature.id 
                    ? 'scale-105 z-20 border-blue-400/30 -translate-y-1 shadow-[0_0_16px_2px_rgba(80,180,255,0.18)] bg-black/60' 
                    : 'hover:scale-105 hover:border-white/20'
                }`}
                style={
                  activeFeature === feature.id
                    ? {
                        borderColor: 'rgba(80,180,255,0.30)',
                        background: 'rgba(10,20,40,0.85)',
                        transform: 'scale(1.05) translateY(-4px)'
                      }
                    : undefined
                }
                onClick={() => handleFeatureClick(feature.id)}
              >
                <div className="relative rounded-2xl border border-white/10 p-2 transition-all duration-300 hover:border-white/20 md:rounded-3xl md:p-3">
                  <GlowingEffect
                    blur={0}
                    borderWidth={2}
                    spread={60}
                    glow={true}
                    disabled={false}
                    proximity={48}
                    inactiveZone={0.01}
                  />
                  <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl bg-black/40 backdrop-blur-sm p-6 border border-white/5 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
                    <div className="flex items-center">
                      <div className="w-fit rounded-lg border border-white/20 bg-white/5 p-2 backdrop-blur-sm mr-4">
                        <div className="h-4 w-4 text-white">
                          {feature.icon}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-white">
                          {feature.title}
                        </h3>
                      </div>
                      <div className={`transition-all duration-300 transform ${
                        activeFeature === feature.id 
                          ? 'text-white translate-x-2' 
                          : 'text-white/50 group-hover:text-white/70 group-hover:translate-x-1'
                      }`}>
                        <FaChevronRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Video Section - Desktop/Tablet only */}
          <div className="hidden lg:block lg:order-2 col-span-1 lg:col-span-2">
            <div 
              className="relative rounded-2xl border border-white/10 p-2 transition-all duration-300 hover:border-white/20 md:rounded-3xl md:p-3 group"
              style={{
                transform: 'perspective(1000px) rotateX(2deg) rotateY(-2deg)',
              }}
            >
              <GlowingEffect
                blur={0}
                borderWidth={2}
                spread={60}
                glow={true}
                disabled={false}
                proximity={48}
                inactiveZone={0.01}
              />
              <div className="relative overflow-hidden rounded-xl bg-black/40 backdrop-blur-sm border border-white/5 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
              <div className="relative aspect-video w-full">
                {activeFeatureData?.vimeoId ? (
                  <>
                    <iframe 
                      key={activeFeatureData?.vimeoId}
                      src={`https://player.vimeo.com/video/${activeFeatureData.vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1`}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      title={activeFeatureData.title}
                      onLoad={handleIframeLoad}
                    />
                    {iframeLoading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm border border-white/10 rounded-xl">
                        <div className="flex flex-col items-center gap-4">
                          <div className="relative">
                            <div className="w-12 h-12 border-2 border-white/20 border-t-blue-400/80 rounded-full animate-spin"></div>
                            <div className="absolute inset-0 w-12 h-12 border-2 border-transparent border-r-cyan-400/60 rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
                          </div>
                          <div className="text-center">
                            <span className="text-white/90 text-base font-medium">Loading {activeFeatureData.title}</span>
                            <div className="text-white/60 text-sm mt-1">Please wait...</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[url('https://www.solidbackgrounds.com/images/1280x720/1280x720-black-solid-color-background.jpg')] bg-cover">
                    <div className="flex items-center gap-3 text-white/80">
                      <FaFileAlt className="w-6 h-6" />
                      <span className="text-sm">Preview coming soon</span>
                    </div>
                  </div>
                )}
                {/* Video overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

                <div className="p-6 bg-black/40 backdrop-blur-sm">
                  <div className="flex items-center mb-3">
                    <div className="w-fit rounded-lg border border-white/20 bg-white/5 p-2 backdrop-blur-sm mr-3">
                      <div className="h-4 w-4 text-white">
                        {activeFeatureData?.icon}
                      </div>
                    </div>
                    <h3 className="-tracking-4 pt-0.5 font-sans text-2xl/[1.875rem] font-semibold text-balance text-white">{activeFeatureData?.title}</h3>
                  </div>
                  <p className="font-sans text-base/[1.375rem] text-white/70 leading-relaxed">{activeFeatureData?.description}</p>
                  {activeFeatureData?.id === 'generate-readme' && (
                    <div className="mt-5">
                      <Link href="/readme" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/20 bg-white/5 text-white hover:bg-white/10 transition-all">
                        <FaPlay className="w-4 h-4" /> Try README Generator
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        
      </div>
    </section>
  );
};

export default Features;