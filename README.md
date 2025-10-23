# 🌍 Wanderlust - Premium Travel Booking Platform

<div align="center">
  <img src="public/Thumbnail.JPG" alt="Wanderlust Logo" >

  [![Live Demo](https://img.shields.io/badge/demo-live-brightgreen?style=for-the-badge)](https://wanderlust-by-harsh.vercel.app)
  [![GitHub](https://img.shields.io/badge/GitHub-panduthegang-blue?style=for-the-badge&logo=github)](https://github.com/panduthegang/Wanderlust-Saas)
  [![License](https://img.shields.io/badge/license-MIT-purple?style=for-the-badge)](LICENSE)

  **Your Gateway to Extraordinary Travel Experiences** ✈️

  [Features](#-features) • [Demo](#-live-demo) • [Installation](#-installation) • [Tech Stack](#-tech-stack) • [Contributing](#-contributing)
</div>

---

## 🎯 About Wanderlust

**Wanderlust** is a modern, full-featured travel booking platform that connects travelers with their dream destinations. Built with cutting-edge web technologies, it offers a seamless and elegant user experience from discovery to booking.

> 🌟 *"Transform your travel dreams into unforgettable memories"*

### ✨ Why Choose Wanderlust?

- 🎨 **Beautiful UI/UX** - Crafted with attention to detail using modern design principles
- 🚀 **Lightning Fast** - Built on Vite for optimal performance
- 📱 **Fully Responsive** - Perfect experience across all devices
- 🔒 **Secure** - Powered by Supabase for enterprise-grade security
- 🌐 **Rich Content** - 15+ curated destinations with detailed itineraries
- 💳 **Easy Booking** - Streamlined booking flow with multiple package options

---

## 🎬 Live Demo

🔗 **[Visit Wanderlust Live](https://wanderlust-by-harsh.vercel.app)**

Experience the platform in action! Browse destinations, explore detailed itineraries, and see our beautiful UI design.

---

## 🎨 Features

### 🏖️ Destination Discovery
- **15+ Premium Destinations** across 6 continents
- **Advanced Filtering** by category (Luxury, Beach, Adventure, Budget)
- **Smart Search** with real-time filtering
- **Sort Options** by price, rating, and popularity
- **Interactive Gallery** with auto-playing carousel

### 📋 Detailed Destination Pages
- **High-Quality Image Galleries** with thumbnail navigation
- **Comprehensive Itineraries** - Day-by-day breakdowns
- **Package Options** - Solo, Couple, Family, and Group packages
- **What's Included/Excluded** - Clear transparency
- **Guest Reviews** - Real testimonials from travelers
- **Upcoming Departures** - Available batch dates and seat counts

### 🎯 User Experience
- **Smooth Animations** - Thoughtful transitions and micro-interactions
- **Mobile-First Design** - Optimized for touch and small screens
- **Floating Navigation** - Modern, glassmorphism-style navbar
- **Scroll-to-Top** - Automatic page position management
- **Loading States** - Elegant skeleton screens and spinners

### 🎫 Services Showcase
- ✈️ Flight Bookings
- 🏨 Luxury Accommodations
- 🚢 Cruise Packages
- 🧭 Guided Tours
- 📸 Photo Expeditions
- 🍽️ Culinary Experiences

### 💬 Contact & Support
- **Interactive Contact Form** - Get in touch with travel experts
- **Multiple Contact Methods** - Phone, email, and office location
- **Social Media Integration** - Follow our journey
- **24/7 Support** - Always available to help

---

## 🛠️ Tech Stack

### Frontend
- **⚛️ React 18** - Modern UI library with hooks
- **📘 TypeScript** - Type-safe development
- **⚡ Vite** - Next-generation frontend tooling
- **🎨 Tailwind CSS** - Utility-first styling
- **🎭 Shadcn/ui** - Beautiful component library
- **🎪 Radix UI** - Unstyled, accessible components

### Backend & Database
- **🔥 Supabase** - Backend-as-a-Service
- **🗄️ PostgreSQL** - Relational database
- **🔐 Row Level Security** - Built-in auth and security

### Routing & Navigation
- **🛣️ React Router v7** - Client-side routing
- **📍 Dynamic Routes** - SEO-friendly URLs with slugs

### UI Libraries & Utilities
- **🎨 Lucide Icons** - Beautiful icon set
- **📅 date-fns** - Modern date utility library
- **🎠 Embla Carousel** - Lightweight carousel library
- **🎯 clsx & tailwind-merge** - Conditional styling
- **🔔 Sonner** - Toast notifications
- **📝 React Hook Form** - Form management
- **✅ Zod** - Schema validation

### Development Tools
- **📦 npm** - Package management
- **🔍 ESLint** - Code linting
- **🎨 PostCSS** - CSS transformations
- **🔨 TypeScript ESLint** - TypeScript-specific linting

---

## 🚀 Installation

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download](https://git-scm.com/)

### Step 1: Clone the Repository

```bash
git clone https://github.com/panduthegang/Wanderlust-Saas.git
cd Wanderlust-Saas
```

### Step 2: Install Dependencies

```bash
npm install
```

or if you prefer yarn:

```bash
yarn install
```

### Step 3: Run Development Server

```bash
npm run dev
```

The application will open at `http://localhost:5173` 🎉

### Step 4: Build for Production

```bash
npm run build
```

### Step 5: Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```
Wanderlust-Saas/
├── 📂 public/                 # Static assets
│   └── favicon.svg           # App icon
├── 📂 src/
│   ├── 📂 components/        # React components
│   │   ├── 📂 ui/           # Shadcn UI components
│   │   ├── Contact.tsx      # Contact section
│   │   ├── Destinations.tsx # Destinations showcase
│   │   ├── Footer.tsx       # Footer component
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── Services.tsx     # Services section
│   │   └── Testimonials.tsx # Reviews section
│   ├── 📂 data/             # Static data
│   │   ├── destinations.ts  # Destination listings
│   │   └── destinationDetails.ts # Detailed info
│   ├── 📂 hooks/            # Custom React hooks
│   │   └── use-toast.ts     # Toast notifications
│   ├── 📂 lib/              # Utility functions
│   │   └── utils.ts         # Helper utilities
│   ├── 📂 pages/            # Page components
│   │   ├── DestinationDetails.tsx
│   │   ├── DestinationsCatalogue.tsx
│   │   └── Home.tsx
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── 📄 .gitignore            # Git ignore rules
├── 📄 package.json          # Dependencies
├── 📄 tailwind.config.js    # Tailwind configuration
├── 📄 tsconfig.json         # TypeScript config
├── 📄 vite.config.ts        # Vite configuration
└── 📄 README.md             # You are here!
```

---

## 🎨 Color Palette

The Wanderlust brand uses a vibrant, travel-inspired color scheme:

| Color | Hex | Usage |
|-------|-----|-------|
| 🔵 Cyan Primary | `#06B6D4` | Primary actions, links |
| 🟢 Teal Secondary | `#14B8A6` | Secondary actions, accents |
| ⚫ Slate Dark | `#1E293B` | Text, headings |
| ⚪ Slate Light | `#F8FAFC` | Backgrounds, surfaces |
| 🟡 Amber Accent | `#FCD34D` | Ratings, highlights |

---

## 🌟 Key Pages

### 🏠 Home Page (`/`)
- Hero section with immersive video background
- Featured destinations grid
- Services showcase
- Customer testimonials
- Contact form

### 🗺️ Destinations Catalogue (`/destinations`)
- Complete destination listing
- Advanced search and filtering
- Category and sorting options
- Real-time search suggestions

### 📍 Destination Details (`/destinations/:slug`)
- Auto-playing image carousel
- Comprehensive itinerary
- Package pricing tiers
- Upcoming departure batches
- Customer reviews
- Booking options

---

## 🎯 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Check TypeScript types |

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy! 🚀

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/panduthegang/Wanderlust-Saas)


## 🤝 Contributing

Contributions are what make the open-source community amazing! Any contributions you make are **greatly appreciated**.

### How to Contribute

1. **Fork the Project**
   ```bash
   # Click the 'Fork' button at the top of this page
   ```

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/your-username/Wanderlust-Saas.git
   ```

3. **Create a Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

4. **Make Your Changes**
   - Write clean, readable code
   - Follow existing code style
   - Add comments where necessary

5. **Commit Your Changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```

6. **Push to Your Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```

7. **Open a Pull Request**
   - Go to the original repository
   - Click 'New Pull Request'
   - Describe your changes

### Contribution Guidelines

- 📝 Write clear commit messages
- 🧪 Test your changes thoroughly
- 📚 Update documentation if needed
- 🎨 Follow the existing code style
- 🐛 Report bugs using GitHub Issues

---

## 🐛 Bug Reports

Found a bug? Please help us improve Wanderlust!

1. **Check Existing Issues** - Someone might have already reported it
2. **Create a New Issue** - Include detailed steps to reproduce
3. **Add Screenshots** - Visual context helps a lot
4. **Describe Expected Behavior** - What should happen?

---

## 💡 Feature Requests

Have an idea to make Wanderlust better?

1. Open an issue with the `enhancement` label
2. Describe your feature in detail
3. Explain why it would be valuable
4. Share any implementation ideas

---

## 📊 Project Stats

- **15+ Destinations** worldwide
- **6 Service Categories**
- **100% Responsive** design
- **Type-Safe** with TypeScript
- **Modern** component architecture
- **Accessible** UI components

---

## 🙏 Acknowledgments

- **Design Inspiration** - Modern travel websites
- **Icons** - [Lucide Icons](https://lucide.dev)
- **Images** - [Unsplash](https://unsplash.com) & [Pexels](https://pexels.com)
- **Fonts** - [Google Fonts](https://fonts.google.com)
- **UI Components** - [Shadcn/ui](https://ui.shadcn.com)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Developer

**Built with ❤️ by [panduthegang](https://github.com/panduthegang)**

- 🐙 GitHub: [@panduthegang](https://github.com/panduthegang)
- 📧 Email: Available on profile

---

## 🌟 Show Your Support

If you found this project helpful, please consider:

- ⭐ Starring the repository
- 🍴 Forking for your own projects
- 📢 Sharing with fellow developers
- 🐛 Reporting issues
- 💡 Suggesting features

---

<div align="center">

  ### 🌍 Ready to Explore the World?

  **[Visit Wanderlust](https://wanderlust-saas.vercel.app)** • **[Report Bug](https://github.com/panduthegang/Wanderlust-Saas/issues)** • **[Request Feature](https://github.com/panduthegang/Wanderlust-Saas/issues)**

  ---

  Made with 💙 and ☕ by developers who love to travel

  **© 2025 Wanderlust. All rights reserved.**

</div>
