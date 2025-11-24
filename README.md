# Portfolio Website

A modern, minimalist portfolio website built with Next.js, TailwindCSS, and Framer Motion. Features smooth animations, responsive design, and a clean white theme.

## 🎨 Design Features

- **Modern dark purple gradient** theme
- **Glass-morphism cards** with backdrop blur
- **Smooth animations** (80-150ms transitions)
- **GSAP-like effects** using Framer Motion
- **Custom cursor** with hover interactions
- **Scroll-based animations** for all sections
- **Responsive design** for all devices

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript

## 📦 Installation

1. **Clone the repository:**
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run the development server:**
```bash
npm run dev
```

4. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio-website/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles & Tailwind imports
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable UI components
│   ├── Button.tsx         # Animated button component
│   ├── Card.tsx           # Card with hover effects
│   ├── CustomCursor.tsx   # Custom cursor implementation
│   ├── FloatingShapes.tsx # Background animations
│   ├── SectionTitle.tsx   # Section heading component
│   └── SkillTag.tsx       # Skill tag component
├── sections/              # Page sections
│   ├── Navigation.tsx     # Sticky navbar with scroll behavior
│   ├── Hero.tsx           # Hero section with animations
│   ├── About.tsx          # About section with skills
│   ├── Experience.tsx     # Timeline of experiences
│   ├── Projects.tsx       # Project showcase grid
│   ├── Contact.tsx        # Contact section with social links
│   └── Footer.tsx         # Footer component
├── lib/                   # Utility functions
│   ├── animations.ts      # Framer Motion animation variants
│   └── utils.ts           # Helper functions
├── data/                  # Content data
│   └── portfolio.ts       # Portfolio content (EDIT THIS!)
└── public/                # Static assets
    └── images/            # Add your images here
```

## ✏️ Customization

### 1. Update Your Personal Information

Edit `data/portfolio.ts` with your information:

```typescript
export const personalInfo = {
  name: 'Your Name',
  title: 'Your Title',
  subtitle: 'Your tagline',
  email: 'your.email@example.com',
  location: 'Your Location',
  avatar: '/images/avatar.jpg',
}
```

### 2. Add Your Projects

Update the `projects` array in `data/portfolio.ts`:

```typescript
export const projects = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Project description',
    image: '/images/project1.jpg',
    technologies: ['React', 'Node.js'],
    liveUrl: 'https://...',
    githubUrl: 'https://github.com/...',
  },
  // ... more projects
]
```

### 3. Update Experience

Modify the `experiences` array in `data/portfolio.ts`:

```typescript
export const experiences = [
  {
    id: 1,
    title: 'Job Title',
    company: 'Company Name',
    period: '2020 - Present',
    description: 'Job description...',
    technologies: ['React', 'TypeScript'],
  },
  // ... more experiences
]
```

### 4. Add Your Images

Place your images in the `public/images/` directory:
- `avatar.jpg` - Your profile photo
- `project1.jpg`, `project2.jpg`, etc. - Project screenshots

### 5. Update Social Links

Edit the `contact.social` array in `data/portfolio.ts`:

```typescript
social: [
  { name: 'GitHub', url: 'https://github.com/yourusername', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: 'linkedin' },
  { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: 'twitter' },
]
```

## 🎭 Animation System

The portfolio uses a comprehensive animation system built on Framer Motion:

### Key Animations

1. **Fade In Up** - Text and content fade in with upward movement
2. **Scale In** - Images and cards scale in with overshoot easing
3. **Section Reveal** - Sections animate in as you scroll
4. **Stagger Container** - Child elements animate with delay
5. **Card Hover** - Cards scale up with enhanced shadow
6. **Button Hover** - Buttons scale with subtle shadow bloom
7. **Icon Bounce** - Icons bounce gently on hover

### Animation Timing

- Fast transitions: **80-100ms** (hover states)
- Standard animations: **300-600ms** (section reveals)
- Slow animations: **6-10s** (floating shapes)

## 🎨 Color Palette

The design uses a dark purple gradient theme:

- **Background:** Dark purple gradient (`#1a1534` to `#4a2c6f`)
- **Primary Text:** `#ffffff` (white)
- **Secondary Text:** `#d1d5db` (gray-300)
- **Cards:** Glass-morphism (`bg-white/5` with backdrop blur)
- **Accents:** Purple shades (`#7c3aed`, `#8b5cf6`)
- **Borders:** `rgba(255, 255, 255, 0.1)`

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

### Build for Production

```bash
npm run build
npm start
```

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Key Features

### Navigation
- **Sticky navbar** that hides on scroll down, shows on scroll up
- **Smooth scroll** to sections with offset for navbar
- **Animated underline** on hover

### Hero Section
- **Staggered text animations** for headline, subtitle, buttons
- **Floating background shapes** with slow movement
- **Profile image reveal** with scale-in animation
- **Scroll indicator** at bottom

### About Section
- **Skill tags** with stagger animation
- **Fade-in content** on scroll into view

### Experience Section
- **Vertical timeline** with dots and line
- **Card animations** on scroll
- **Technology badges**

### Projects Section
- **Grid layout** with 2 columns on desktop
- **Hover effects:** scale 1.03x, enhanced shadow
- **Image zoom** on card hover
- **Overlay with links** appearing on hover

### Contact Section
- **Social icons** with bounce animation
- **Email CTA** with mail icon
- **Centered layout**

### Custom Cursor
- **Follows mouse** with smooth spring animation
- **Enlarges** on interactive elements
- **Fades** for better UX

## 📝 Notes

- All animations use **Framer Motion** for performance
- **Scroll animations** trigger once by default
- **Viewport margin** of -100px for earlier triggers
- **Cursor disabled** on mobile/touch devices
- **Accessibility** maintained throughout

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

MIT License - feel free to use this for your own portfolio.

---

Built with ❤️ using Next.js, TailwindCSS, and Framer Motion

