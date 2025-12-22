'use client'

import { useState } from 'react'
import { 
  Users, 
  Badge, 
  PenTool, 
  Briefcase, 
  BarChart3, 
  ShieldCheck, 
  Layers, 
  MessageCircle, 
  Megaphone,
  Lock,
  BadgeCheck,
  ArrowUpRight
} from 'lucide-react'
import Image from 'next/image'

interface PricingFeature {
  icon: React.ReactNode
  text: string
}

interface PricingPlan {
  name: string
  description: string
  price: string
  buttonText: string
  buttonClass: string
  cardClass: string
  headerClass: string
  headerBg: string
  textColor: string
  features: PricingFeature[]
}

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true)
  const [selectedProduct, setSelectedProduct] = useState('worksuite')

  const plans: PricingPlan[] = [
    {
      name: 'Freelancer',
      description: 'Invite up to 3 clients',
      price: '$7.5',
      buttonText: 'Start With Freelancer',
      buttonClass: 'bg-[#272631] dark:bg-black border border-gray-300 dark:border-[#ffffff33] hover:bg-[#272631] text-white',
      cardClass: 'border-gray-300 dark:border-[#5e5e69] bg-gray-100 dark:bg-[#2d2c39]',
      headerClass: 'bg-gray-50 dark:bg-black',
      headerBg: 'bg-gray-50 dark:bg-black',
      textColor: 'text-gray-900 dark:text-white',
      features: [
        { icon: <Users className="!w-[15px] dark:text-[#d7d7de]" />, text: 'No contributors.' },
        { icon: <Badge className="!w-[15px] dark:text-[#d7d7de]" />, text: 'White-label (add-on).' },
        { icon: <PenTool className="!w-[15px] dark:text-[#d7d7de]" />, text: 'Clikkle eSign (Basic)' },
        { icon: <Briefcase className="!w-[15px] dark:text-[#d7d7de]" />, text: 'Clikkle CRM (Basic)' },
        { icon: <BarChart3 className="!w-[15px] dark:text-[#d7d7de]" />, text: 'Clikkle Projects (Standard)' },
        { icon: <ShieldCheck className="!w-[15px] dark:text-[#d7d7de]" />, text: 'Clikkle Files (Pro)' },
        { icon: <Layers className="!w-[15px] dark:text-[#d7d7de]" />, text: 'Clikkle Hr (Private)' },
        { icon: <MessageCircle className="!w-[15px] dark:text-[#d7d7de]" />, text: 'Clikkle Chat (Starter)' },
        { icon: <Megaphone className="!w-[15px] dark:text-[#d7d7de]" />, text: 'Clikkle Campaigns (Lite)' },
      ]
    },
    {
      name: 'Teams',
      description: 'Invite unlimited clients',
      price: '$12.5',
      buttonText: 'Start With Teams',
      buttonClass: 'bg-[#2563EB] hover:bg-blue-600 text-white',
      cardClass: 'border-[3px] border-gray-300 dark:border-white bg-[#1a1925] dark:bg-black shadow-[0px_10px_60.5px_rgba(0,0,0,0.25),0px_10px_60.5px_rgba(0,0,0,0.1)] dark:shadow-[0px_10px_60.5px_#ffffff40,0px_10px_60.5px_#ffffff1c] -my-7 mt-2',
      headerClass: 'bg-[#2d2c38] dark:bg-[#2d2c38]',
      headerBg: 'bg-[#2d2c38] dark:bg-[#2d2c38]',
      textColor: 'text-white',
      features: [
        { icon: <Users className="!w-[15px] text-white" />, text: 'Min 10 contributers.' },
        { icon: <Badge className="!w-[15px] text-white" />, text: 'White-label (add-on).' },
        { icon: <Lock className="!w-[15px] text-white" />, text: 'Single Sign-on (add-on).' },
        { icon: <PenTool className="!w-[15px] text-white" />, text: 'Clikkle eSign (Professional)' },
        { icon: <Briefcase className="!w-[15px] text-white" />, text: 'Clikkle CRM (Professional)' },
        { icon: <BarChart3 className="!w-[15px] text-white" />, text: 'Clikkle Projects (Team)' },
        { icon: <ShieldCheck className="!w-[15px] text-white" />, text: 'Clikkle Files (Teams)' },
        { icon: <Layers className="!w-[15px] text-white" />, text: 'Clikkle Hr (Business)' },
        { icon: <MessageCircle className="!w-[15px] text-white" />, text: 'Clikkle Chat (Basic)' },
        { icon: <Megaphone className="!w-[15px] text-white" />, text: 'Clikkle Campaigns (Standard)' },
      ]
    },
    {
      name: 'Agency',
      description: 'Invite unlimited clients',
      price: '$17.5',
      buttonText: 'Start With Agency',
      buttonClass: 'bg-[#272631] dark:bg-black border border-gray-300 dark:border-[#ffffff33] hover:bg-[#272631] text-white',
      cardClass: 'border-gray-300 dark:border-[#5e5e69] bg-gray-100 dark:bg-[#2d2c39]',
      headerClass: 'bg-gray-50 dark:bg-black',
      headerBg: 'bg-gray-50 dark:bg-black',
      textColor: 'text-gray-900 dark:text-white',
      features: [
        { icon: <Users className="!w-[15px] dark:text-[#d7d7de]" />, text: 'Min 30 contributers.' },
        { icon: <BadgeCheck className="!w-[15px] dark:text-[#d7d7de]" />, text: 'White-label Included.' },
        { icon: <Lock className="!w-[15px] dark:text-[#d7d7de]" />, text: 'Single Sign-on (add-on).' },
        { icon: <PenTool className="!w-[15px] dark:text-[#d7d7de]" />, text: 'Clikkle eSign (Professional Plus)' },
        { icon: <Briefcase className="!w-[15px] dark:text-[#d7d7de]" />, text: 'Clikkle CRM (Enterprise)' },
        { icon: <BarChart3 className="!w-[15px] dark:text-[#d7d7de]" />, text: 'Clikkle Projects (Platinum)' },
        { icon: <ShieldCheck className="!w-[15px] dark:text-[#d7d7de]" />, text: 'Clikkle Files (Enterprise)' },
        { icon: <Layers className="!w-[15px] dark:text-[#d7d7de]" />, text: 'Clikkle Hr (Enterprise)' },
        { icon: <MessageCircle className="!w-[15px] dark:text-[#d7d7de]" />, text: 'Clikkle Chat (Enterprise)' },
        { icon: <Megaphone className="!w-[15px] dark:text-[#d7d7de]" />, text: 'Clikkle Campaigns (Platinum)' },
      ]
    }
  ]

  const apps = [
    { name: 'Chat', image: 'https://cdn.clikkle.com/images/chat/logo/2025/clikkle%20chat.png', size: 'w-[35px] h-[41px]' },
    { name: 'Files', image: 'https://cdn.clikkle.com/images/files/logo/2025/clikkle%20files.png', size: 'w-[43px] h-[41px]' },
    { name: 'eSign', image: 'https://cdn.clikkle.com/images/e-sign/logo/2025/clikkle%20esign.png', size: 'w-10 h-[40px]' },
    { name: 'Hr', image: 'https://cdn.clikkle.com/images/hr/logo/2025/clikkle%20hr.png', size: 'w-[41px] h-[40px]' },
    { name: 'Projects', image: 'https://cdn.clikkle.com/images/projects/logo/2025/clikkle%20projects.png', size: 'w-10 h-[40px]' },
    { name: 'Campaigns', image: 'https://cdn.clikkle.com/images/campaigns/logo/2025/clikkle%20campaigns.png', size: 'w-[55px] h-[41px]' },
    { name: 'CRM', image: 'https://cdn.clikkle.com/images/crm/2025/clikkle%20crm.png', size: 'w-[55px] h-[41px]' },
  ]

  return (
    <section className="w-full" id="moreInfo">
      <section className="relative py-16 bg-white dark:bg-[#1a1925] overflow-hidden" id="pricing">
        {/* Background Images */}
        <div className="relative max-w-7xl mx-auto px-4">
          {/* Background decorative lines - using divs for better control */}
          <div className="absolute w-[574px] h-[566px] top-[-300px] right-0 z-0 opacity-20 pointer-events-none">
            <svg width="574" height="566" viewBox="0 0 574 566" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M0 0 L574 566" stroke="#2563EB" strokeWidth="2" opacity="0.3"/>
            </svg>
          </div>
          <div className="absolute w-[701px] h-[695px] bottom-[-300px] left-0 z-0 opacity-20 pointer-events-none">
            <svg width="701" height="695" viewBox="0 0 701 695" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M0 695 L701 0" stroke="#2563EB" strokeWidth="2" opacity="0.3"/>
            </svg>
          </div>

          {/* Product Selector */}
          <div className="mx-auto text-center mb-10 relative z-10">
            <div className="inline-block">
              <select
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
                className="z-10 bg-[#25272c] dark:bg-[#2563EB] text-white dark:text-white cursor-pointer px-4 py-2 rounded-lg border border-gray-300 dark:border-white/30 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              >
                <option value="worksuite">Clikkle Worksuite</option>
              </select>
            </div>
          </div>

          {/* Header */}
          <div className="flex flex-col items-center gap-4 mb-12 relative z-10">
            <h2 className="text-[32px] md:text-5xl font-semibold text-center tracking-[-0.96px] leading-[56px]">
              <span className="text-gray-900 dark:text-white tracking-[-0.46px]">Our </span>
              <span className="text-[#2563EB] dark:text-[#A9C5FF] tracking-[-0.46px]">Pricing</span>
              <span className="text-gray-900 dark:text-white tracking-[-0.46px]"> Plans</span>
            </h2>
            <p className="text-[#51515E] dark:text-[#eeeef0] text-base text-center leading-6 tracking-[-0.03px]">
              Affordable solutions for businesses of all sizes <br className="hidden sm:block" /> with a{' '}
              <span className="font-bold text-[#2563EB] dark:text-[#A9C5FF]">7 day free</span> tier included
            </p>

            {/* Monthly/Annually Toggle */}
            <div className="flex items-center gap-3 mt-4 flex-wrap relative">
              <span className="text-[#51515E] dark:text-[#eeeef0] text-sm whitespace-nowrap">Monthly</span>
              <button
                type="button"
                role="switch"
                aria-checked={isAnnual}
                onClick={() => setIsAnnual(!isAnnual)}
                className={`peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full bg-white border-2 border-[#eeeeee] shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 ${
                  isAnnual ? 'bg-[#2563EB] border-[#2563EB]' : ''
                }`}
              >
                <span
                  className={`pointer-events-none block h-4 w-4 rounded-full bg-[#1A1925] shadow-md ring-0 transition-transform duration-200 ${
                    isAnnual ? 'translate-x-4 bg-white' : 'translate-x-0'
                  }`}
                />
              </button>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-[#51515E] dark:text-[#eeeef0] whitespace-nowrap leading-none">Annually</span>
              </div>
              <div className="hidden md:flex items-center gap-1 mt-[-1rem] absolute right-[-9.6rem]">
                <svg width="36" height="16" viewBox="0 0 36 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-4 rotate-[5deg]">
                  <path d="M0 8 L36 0" stroke="#4e85f0" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="text-[#4e85f0] text-sm relative -top-[1px]">Save up to 50%</span>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="flex flex-wrap justify-center gap-3 relative z-10">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`text-card-foreground shadow rounded-3xl w-full border md:w-[348px] flex flex-col ${plan.cardClass} ${
                  index === 0 || index === 2 ? 'md:h-[900px] mt-9' : 'md:h-[960px]'
                }`}
              >
                <div className="flex flex-col space-y-1.5 p-0">
                  <div className={`${index === 1 ? 'm-0' : 'm-1'} h-[136px] rounded-[20px] ${plan.headerBg} shadow-[0px_12px_12px_-3px_rgba(0,0,0,0.04),0px_1px_1px_-0.5px_rgba(0,0,0,0.03),0px_3px_3px_-1.5px_rgba(0,0,0,0.02),0px_6px_6px_-3px_rgba(0,0,0,0.02)]`}>
                    <div className="p-7">
                      <h3 className={`${plan.textColor} text-2xl font-medium tracking-[-0.48px] leading-8`}>
                        {plan.name}
                      </h3>
                      <p className={`${plan.textColor === 'text-white' ? 'text-white' : 'dark:text-[#d7d7de] text-gray-600'} text-sm tracking-[-0.08px] leading-5 whitespace-pre-line`}>
                        {plan.description}
                      </p>
                    </div>
                  </div>
                  <div className="px-9 pt-8 pb-4">
                    <div className="flex items-baseline">
                      <span className={`${plan.textColor === 'text-white' ? 'text-white' : 'dark:text-[#d7d7de] text-gray-900'} text-5xl font-medium tracking-[-0.96px] leading-[56px]`}>
                        {plan.price}
                      </span>
                      <span className={`${plan.textColor === 'text-white' ? 'text-white' : 'dark:text-[#d7d7de] text-gray-600'} text-sm ml-2 tracking-[-0.08px] leading-5`}>
                        / Month
                      </span>
                    </div>
                    <button
                      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow-sm h-9 px-4 py-2 w-full mt-6 rounded-lg text-xs cursor-pointer ${plan.buttonClass}`}
                    >
                      {plan.buttonText}
                    </button>
                  </div>
                  <div data-orientation="horizontal" role="separator" className="mx-9 bg-gray-200 dark:bg-[#ffffff1a] h-[1px]" />
                </div>
                <div className="p-6 px-9 pt-5">
                  <p className={`${plan.textColor === 'text-white' ? 'text-white' : 'text-[#51515E] dark:text-[#eeeef0]'} text-xs font-semibold tracking-[0.12px] leading-5 mb-4`}>
                    INCLUDES
                  </p>
                  <div className="flex flex-col gap-[0.575rem]">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-0.5">{feature.icon}</div>
                        <div className="flex items-start gap-1">
                          <span className={`${plan.textColor === 'text-white' ? 'text-white' : 'dark:text-[#d7d7de] text-gray-600'} max-w-[233px] text-sm tracking-[-0.08px] leading-5`}>
                            {feature.text}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Try for Free Section */}
          <div className="flex flex-col items-center justify-center gap-3 mt-16 relative z-10">
            <div className="p-3 bg-[#1759f3] rounded-[32px] hover:cursor-pointer">
              <ArrowUpRight className="w-4 h-4 text-white" />
            </div>
            <div className="text-center">
              <h3 className="text-xl">
                <span className="font-medium text-gray-900 dark:text-white">Try for </span>
                <span className="font-semibold text-[#2563EB] dark:text-[#A9C5FF]">Free</span>
              </h3>
              <p className="text-[#51515E] dark:text-[#eeeef0] text-sm leading-6">Explore Basic Features at No Cost</p>
            </div>
          </div>
        </div>

        {/* Apps Section */}
        <section className="py-28 relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 text-center w-full">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-10 leading-tight">
              <span className="text-gray-900 dark:text-white tracking-[-0.46px]">Clikkle </span>
              <span className="text-[#2563EB] dark:text-[#A9C5FF] tracking-[-0.46px]">Worksuite </span>
              <span className="text-gray-900 dark:text-white tracking-[-0.46px]">includes all apps you need for your business.</span>
            </h3>

            {/* Desktop Apps Grid */}
            <div className="hidden md:block">
              <div className="grid grid-cols-7 justify-center items-end">
                {apps.map((app) => (
                  <div key={app.name} className="flex flex-col items-center">
                    <button
                      className="bg-white shadow-xl dark:bg-[#1a1925] border border-solid border-gray-300 dark:border-[#ffffff3a] w-20 h-20 rounded-xl flex items-center justify-center hover:shadow-md transition-shadow duration-150"
                      aria-label={app.name}
                    >
                      <Image
                        alt={app.name}
                        src={app.image}
                        width={50}
                        height={50}
                        className={`object-contain ${app.size}`}
                      />
                    </button>
                    <span className="mt-3 text-sm text-[#2563EB] dark:text-[#A9C5FF] font-bold">{app.name}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex justify-center">
                <a className="text-gray-900 dark:text-white text-3xl flex items-center gap-3 font-black" href="/products">
                  <span>And many more</span>
                  <svg width="65" height="20" viewBox="0 0 65 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 10 L55 10 M45 0 L55 10 L45 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Mobile Apps Scroll */}
            <div className="md:hidden block w-full overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
              <div className="gap-4 pb-2 px-4 flex w-[350px] overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
                {apps.map((app) => (
                  <div key={app.name} className="w-24 text-center">
                    <button className="bg-white dark:bg-[#1a1925] w-20 h-20 rounded-xl shadow-sm flex items-center justify-center mx-auto border border-solid border-gray-300 dark:border-[#5e5e69]">
                      <Image
                        alt={app.name}
                        src={app.image}
                        width={50}
                        height={50}
                        className={`object-contain ${app.size}`}
                      />
                    </button>
                    <p className="mt-2 text-xs text-[#2563EB] dark:text-[#A9C5FF] font-semibold">{app.name}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-center">
                <a className="text-gray-900 dark:text-white text-xl flex items-center gap-2 font-bold" href="/products">
                  <span>And many more</span>
                  <svg width="45" height="20" viewBox="0 0 45 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 10 L35 10 M25 0 L35 10 L25 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  )
}

