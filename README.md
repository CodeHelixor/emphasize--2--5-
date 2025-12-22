# Clikkle Pricing Section - Pixel Perfect UI

A pixel-perfect recreation of the Clikkle pricing section from the landing page.

## Features

- ✅ Product selector dropdown (Clikkle Worksuite)
- ✅ Monthly/Annually toggle switch with "Save up to 50%" badge
- ✅ Three pricing cards: Freelancer, Teams (featured), and Agency
- ✅ Complete feature lists with icons for each plan
- ✅ "Try for Free" call-to-action section
- ✅ Apps showcase section with all Clikkle products
- ✅ Responsive design (mobile and desktop)
- ✅ Dark mode support
- ✅ Pixel-perfect styling matching the original design

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   └── PricingSection.tsx   # Main pricing section component
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── next.config.js           # Next.js configuration
```

## Technologies Used

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Styling Details

The component uses Tailwind CSS with custom colors matching the original design:
- Primary blue: `#2563EB`
- Primary light blue: `#A9C5FF`
- Dark backgrounds: `#1a1925`, `#2d2c39`
- Text colors: Various shades of gray with dark mode support

## Component Features

### Pricing Cards
- **Freelancer**: Basic plan with limited features
- **Teams**: Featured plan with highlighted styling and more features
- **Agency**: Enterprise plan with all features included

### Interactive Elements
- Product selector dropdown
- Monthly/Annually toggle switch
- Hover effects on buttons and app icons
- Responsive mobile layout with horizontal scroll

## Build for Production

```bash
npm run build
npm start
```

## License

This is a recreation for demonstration purposes.

