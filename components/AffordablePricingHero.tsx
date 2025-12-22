'use client'

import { useState, useEffect } from 'react'
import { 
  Heart, 
  DollarSign, 
  Users, 
  Zap, 
  CheckCircle2, 
  XCircle,
  ArrowRight,
  Sparkles,
  TrendingDown,
  Shield,
  Globe
} from 'lucide-react'

export default function AffordablePricingHero() {
  const [isVisible, setIsVisible] = useState(false)
  const [priceValue, setPriceValue] = useState(2)
  const [isAnimating, setIsAnimating] = useState(false)
  const [priceKey, setPriceKey] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    
    // Animate price counter from $2 to $5
    const interval = setInterval(() => {
      setIsAnimating(true)
      setPriceKey(k => k + 1) // Trigger animation start
      
      setTimeout(() => {
        setPriceValue((prev) => {
          if (prev >= 5) {
            return 2
          }
          return prev + 0.5
        })
        
        // End animation after transition completes
        setTimeout(() => {
          setIsAnimating(false)
        }, 400)
      }, 100)
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  const bigTechFeatures = [
    { text: 'Hidden fees everywhere', icon: XCircle },
    { text: 'Lock you into subscriptions', icon: XCircle },
    { text: 'Raise prices without notice', icon: XCircle },
    { text: 'Complex pricing tiers', icon: XCircle },
  ]

  const ourBrandFeatures = [
    { text: 'Transparent $2-$5 pricing', icon: CheckCircle2 },
    { text: 'No hidden fees ever', icon: CheckCircle2 },
    { text: 'Apps accessible to everyone', icon: CheckCircle2 },
    { text: 'Simple, fair pricing', icon: CheckCircle2 },
  ]

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-[#1a1925] dark:via-[#1a1a2e] dark:to-[#1a1925] py-20 md:py-32 group/section hover:via-blue-50/50 dark:hover:via-[#1a1a3e] transition-all duration-1000">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-300/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 z-10 group/section">
        {/* Main Hero Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6 animate-fade-in group cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all duration-300 hover:scale-110 hover:shadow-lg">
            <Heart className="w-4 h-4 text-red-500 fill-red-500 group-hover:scale-125 group-hover:animate-pulse transition-transform duration-300" />
            <span className="text-sm font-semibold text-blue-900 dark:text-blue-200 group-hover:text-blue-950 dark:group-hover:text-blue-100 transition-colors duration-300">
              Apps Available to All Users
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gray-900 dark:text-white">Affordable for </span>
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient">
                Everyone
              </span>
              <Sparkles className="absolute -top-2 -right-8 w-6 h-6 text-yellow-400 animate-spin-slow" />
            </span>
          </h1>

          {/* Price Display */}
          <div className="flex flex-col items-center justify-center mb-8 group cursor-pointer">
            <div className="flex items-baseline justify-center gap-3 relative">
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-20 blur-3xl rounded-full transition-opacity duration-500 scale-150" />
              
              <div className="relative w-[200px] md:w-[280px] lg:w-[360px] h-[80px] md:h-[120px] lg:h-[160px] flex items-center justify-center">
                <div 
                  key={priceKey}
                  className={`absolute inset-0 flex items-center justify-center text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_200%] group-hover:scale-110 group-hover:animate-gradient ${
                    isAnimating 
                      ? 'animate-price-change' 
                      : ''
                  }`}
                >
                  ${priceValue.toFixed(priceValue % 1 === 0 ? 0 : 1)}
                </div>
                
                <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 group-hover:scale-125 transition-transform duration-300">
                  <TrendingDown className="w-6 h-6 md:w-8 md:h-8 text-green-500 animate-bounce" />
                </div>
                
                {/* Animated ring on hover */}
                <div className="absolute inset-0 rounded-full border-4 border-blue-400 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 blur-sm" />
              </div>
              
              <span className="text-2xl md:text-4xl text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                /month
              </span>
            </div>
            
            {/* Starting price text - positioned below with proper spacing */}
            <div className="mt-3 text-base md:text-lg font-semibold text-blue-600 dark:text-blue-400 whitespace-nowrap group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-all duration-300">
              Starting at just $2
            </div>
          </div>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4 max-w-3xl mx-auto">
            <span className="font-semibold">That's it.</span> No tricks. No hidden fees.
          </p>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            While big tech charges premium prices, we believe powerful apps should be accessible to everyone.
          </p>
        </div>

        {/* Comparison Section */}
        <div className={`grid md:grid-cols-2 gap-6 md:gap-8 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Big Tech Card */}
          <div className="relative group cursor-pointer">
            {/* Enhanced glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-3xl blur-xl group-hover:blur-2xl group-hover:from-red-500/20 group-hover:to-orange-500/20 transition-all duration-500" />
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            
          </div>

          {/* Our Brand Card - Enhanced */}
          <div className="relative group cursor-pointer">
            {/* Enhanced glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-500" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Animated border on hover */}
            <div className="absolute inset-0 rounded-3xl border-4 border-transparent group-hover:border-blue-400/50 dark:group-hover:border-blue-600/50 transition-all duration-500 blur-sm" />
            
            
          </div>
        </div>

        {/* Value Proposition Section */}
        <div className={`text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex flex-wrap items-center justify-center gap-6 md:gap-12 p-8 md:p-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-3xl border-2 border-blue-200 dark:border-blue-800 shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-2 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-500 cursor-pointer group">
            {/* Background glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Shine effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine transition-opacity duration-500" />
            
            <div className="flex items-center gap-3 group/item relative z-10">
              <div className="relative p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl group-hover/item:scale-125 group-hover/item:rotate-12 group-hover/item:bg-blue-200 dark:group-hover/item:bg-blue-900/50 transition-all duration-500 group-hover/item:shadow-lg">
                <Shield className="w-6 h-6 md:w-8 md:h-8 text-blue-600 dark:text-blue-400 group-hover/item:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 rounded-xl bg-blue-400/20 opacity-0 group-hover/item:opacity-100 group-hover/item:animate-ping" />
              </div>
              <div className="text-left">
                <div className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors duration-300">$2-$5</div>
                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 group-hover/item:text-gray-800 dark:group-hover/item:text-gray-200 transition-colors duration-300">Fair Pricing</div>
              </div>
            </div>
            
            <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-700 to-transparent group-hover:via-blue-400 dark:group-hover:via-blue-600 transition-colors duration-500 relative z-10" />
            
            <div className="flex items-center gap-3 group/item relative z-10">
              <div className="relative p-2 bg-purple-100 dark:bg-purple-900/30 rounded-xl group-hover/item:scale-125 group-hover/item:rotate-12 group-hover/item:bg-purple-200 dark:group-hover/item:bg-purple-900/50 transition-all duration-500 group-hover/item:shadow-lg">
                <Users className="w-6 h-6 md:w-8 md:h-8 text-purple-600 dark:text-purple-400 group-hover/item:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 rounded-xl bg-purple-400/20 opacity-0 group-hover/item:opacity-100 group-hover/item:animate-ping" />
              </div>
              <div className="text-left">
                <div className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover/item:text-purple-600 dark:group-hover/item:text-purple-400 transition-colors duration-300">Everyone</div>
                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 group-hover/item:text-gray-800 dark:group-hover/item:text-gray-200 transition-colors duration-300">Can Access</div>
              </div>
            </div>
            
            <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-700 to-transparent group-hover:via-purple-400 dark:group-hover:via-purple-600 transition-colors duration-500 relative z-10" />
            
            <div className="flex items-center gap-3 group/item relative z-10">
              <div className="relative p-2 bg-green-100 dark:bg-green-900/30 rounded-xl group-hover/item:scale-125 group-hover/item:rotate-12 group-hover/item:bg-green-200 dark:group-hover/item:bg-green-900/50 transition-all duration-500 group-hover/item:shadow-lg">
                <Globe className="w-6 h-6 md:w-8 md:h-8 text-green-600 dark:text-green-400 group-hover/item:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 rounded-xl bg-green-400/20 opacity-0 group-hover/item:opacity-100 group-hover/item:animate-ping" />
              </div>
              <div className="text-left">
                <div className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover/item:text-green-600 dark:group-hover/item:text-green-400 transition-colors duration-300">No Limits</div>
                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 group-hover/item:text-gray-800 dark:group-hover/item:text-gray-200 transition-colors duration-300">Full Features</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-110 hover:-translate-y-1 transition-all duration-500 overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine transition-opacity duration-500" />
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500 -z-10" />
            
            <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">Start Your Journey</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300 relative z-10" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.5s ease-out forwards;
          opacity: 0;
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.5s ease-out forwards;
          opacity: 0;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }
        .animate-shine {
          animation: shine 1.5s ease-in-out;
        }
        @keyframes price-change {
          0% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0px);
          }
          20% {
            opacity: 0;
            transform: translateY(-20px) scale(0.9);
            filter: blur(2px);
          }
          50% {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
            filter: blur(2px);
          }
          80% {
            opacity: 0.8;
            transform: translateY(0) scale(1.08);
            filter: blur(0px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0px);
          }
        }
        .animate-price-change {
          animation: price-change 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>
    </section>
  )
}

