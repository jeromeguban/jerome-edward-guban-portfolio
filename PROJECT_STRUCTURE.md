# 📂 Complete Project Structure

```
portfolio-website/
│
├── 📁 app/                          # Next.js App Directory
│   ├── favicon.ico                 # Site favicon
│   ├── globals.css                 # Global styles + Tailwind
│   ├── layout.tsx                  # Root layout with metadata
│   └── page.tsx                    # Main page (imports all sections)
│
├── 📁 components/                   # Reusable UI Components
│   ├── Button.tsx                  # Animated button (3 variants)
│   ├── Card.tsx                    # Card container with hover
│   ├── CustomCursor.tsx            # Custom cursor interaction
│   ├── FloatingShapes.tsx          # Background animated shapes
│   ├── SectionTitle.tsx            # Consistent section headers
│   └── SkillTag.tsx                # Individual skill badge
│
├── 📁 sections/                     # Page Sections
│   ├── Navigation.tsx              # Sticky navbar with scroll behavior
│   ├── Hero.tsx                    # Hero section with intro
│   ├── About.tsx                   # About + skills section
│   ├── Experience.tsx              # Timeline of work experience
│   ├── Projects.tsx                # Portfolio project showcase
│   ├── Contact.tsx                 # Contact form + social links
│   └── Footer.tsx                  # Site footer
│
├── 📁 lib/                          # Utilities & Helpers
│   ├── animations.ts               # Framer Motion variants & easings
│   └── utils.ts                    # Helper functions (cn, scrollTo)
│
├── 📁 data/                         # Content Data
│   └── portfolio.ts                # All portfolio content (EDIT THIS!)
│       ├── personalInfo           # Name, title, email, etc.
│       ├── navigation             # Nav menu items
│       ├── about                  # Bio and skills
│       ├── experiences            # Work history
│       ├── projects               # Portfolio projects
│       └── contact                # Contact info + social links
│
├── 📁 public/                       # Static Assets
│   └── 📁 images/                  # Image folder
│       ├── .gitkeep               # Placeholder
│       ├── avatar.jpg             # (Add your photo)
│       ├── project1.jpg           # (Add project screenshots)
│       ├── project2.jpg
│       ├── project3.jpg
│       └── project4.jpg
│
├── 📁 node_modules/                 # Dependencies (auto-generated)
│
├── 📄 package.json                  # Project dependencies & scripts
├── 📄 package-lock.json             # Locked dependency versions
├── 📄 tsconfig.json                 # TypeScript configuration
├── 📄 tailwind.config.js            # TailwindCSS theme & settings
├── 📄 postcss.config.js             # PostCSS configuration
├── 📄 next.config.js                # Next.js configuration
├── 📄 .eslintrc.json                # ESLint rules
├── 📄 .gitignore                    # Git ignore rules
│
├── 📄 README.md                     # Main documentation
├── 📄 SETUP.md                      # Quick start guide
├── 📄 ARCHITECTURE.md               # Architecture documentation
└── 📄 PROJECT_STRUCTURE.md          # This file
```

## 🎯 Key Files to Edit

### 1. Content (MUST EDIT)
```
data/portfolio.ts        # Your personal information, projects, etc.
```

### 2. Images (MUST ADD)
```
public/images/
├── avatar.jpg          # Your profile photo
├── project1.jpg        # Project 1 screenshot
├── project2.jpg        # Project 2 screenshot
├── project3.jpg        # Project 3 screenshot
└── project4.jpg        # Project 4 screenshot
```

### 3. Styling (OPTIONAL)
```
tailwind.config.js      # Theme colors, fonts, etc.
app/globals.css         # Global CSS styles
```

### 4. Configuration (OPTIONAL)
```
next.config.js          # Next.js settings
package.json            # Dependencies
```

## 📊 File Sizes & Complexity

### Components (Simple → Complex)

**Simple** (< 50 lines)
- SectionTitle.tsx
- SkillTag.tsx
- Footer.tsx

**Medium** (50-100 lines)
- Button.tsx
- Card.tsx
- FloatingShapes.tsx
- About.tsx

**Complex** (100+ lines)
- CustomCursor.tsx
- Navigation.tsx
- Hero.tsx
- Experience.tsx
- Projects.tsx
- Contact.tsx

### Data Files

**portfolio.ts** (~150 lines)
- All content in one place
- Easy to edit
- Well-commented

### Configuration Files

**Small** (< 30 lines)
- next.config.js
- postcss.config.js
- .eslintrc.json

**Medium** (30-60 lines)
- tsconfig.json
- tailwind.config.js

### Library Files

**animations.ts** (~120 lines)
- All animation variants
- Easing functions
- Well-documented

**utils.ts** (~20 lines)
- Helper functions
- Minimal utilities

## 🔄 Data Flow

```
┌─────────────────┐
│ data/portfolio  │  ← EDIT YOUR CONTENT HERE
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│   app/page.tsx  │  ← Main page (rarely edit)
└────────┬────────┘
         │
         ↓
┌─────────────────────────────────────────┐
│           SECTIONS                      │
│  ┌──────────┐  ┌──────────┐           │
│  │Navigation│  │   Hero   │           │
│  └──────────┘  └──────────┘           │
│  ┌──────────┐  ┌──────────┐           │
│  │  About   │  │Experience│           │
│  └──────────┘  └──────────┘           │
│  ┌──────────┐  ┌──────────┐           │
│  │ Projects │  │ Contact  │           │
│  └──────────┘  └──────────┘           │
│  ┌──────────┐                         │
│  │  Footer  │                         │
│  └──────────┘                         │
└─────────────────────────────────────────┘
         │
         ↓
┌─────────────────────────────────────────┐
│         COMPONENTS                      │
│  ┌──────┐  ┌──────┐  ┌──────┐         │
│  │Button│  │ Card │  │ Tag  │         │
│  └──────┘  └──────┘  └──────┘         │
└─────────────────────────────────────────┘
         │
         ↓
┌─────────────────────────────────────────┐
│      LIBRARIES & UTILITIES              │
│  ┌────────────┐  ┌────────────┐        │
│  │ animations │  │   utils    │        │
│  └────────────┘  └────────────┘        │
└─────────────────────────────────────────┘
```

## 🎨 Component Dependencies

### Navigation
- Uses: `navigation` from data
- Utils: `scrollToElement`
- Animations: `navbarAnimation`

### Hero
- Uses: `personalInfo` from data
- Components: `Button`, `FloatingShapes`
- Animations: `fadeInUp`, `scaleIn`
- Utils: `scrollToElement`

### About
- Uses: `about` from data
- Components: `SectionTitle`, `SkillTag`
- Animations: `sectionReveal`, `staggerContainer`

### Experience
- Uses: `experiences` from data
- Components: `SectionTitle`
- Animations: `fadeInUp`

### Projects
- Uses: `projects` from data
- Components: `SectionTitle`
- Icons: `ExternalLink`, `Github` from lucide-react
- Animations: `fadeInUp`

### Contact
- Uses: `contact` from data
- Components: `SectionTitle`, `Button`
- Icons: `Github`, `Linkedin`, `Twitter`, `Mail`
- Animations: `sectionReveal`, `iconBounce`

### Footer
- Animations: `fadeInUp`

## 📦 Dependencies Tree

```
portfolio-website
│
├── react (18.3.1)
├── react-dom (18.3.1)
├── next (14.2.0)
│   └── Includes React Server Components
│
├── framer-motion (11.0.0)
│   └── Animation library
│
├── lucide-react (0.344.0)
│   └── Icon library
│
├── clsx (2.1.0)
│   └── Utility for className management
│
└── Dev Dependencies
    ├── typescript (5.3.0)
    ├── tailwindcss (3.4.0)
    ├── postcss (8.4.0)
    ├── autoprefixer (10.4.0)
    └── eslint + next config
```

## 🚀 Build Output Structure

After running `npm run build`:

```
.next/
├── cache/              # Build cache
├── server/             # Server-side code
├── static/             # Static assets
│   ├── chunks/        # JS bundles
│   ├── css/           # Compiled CSS
│   └── media/         # Optimized images
└── types/             # TypeScript types
```

## 📝 Documentation Files

```
README.md           # Main documentation
├── Overview
├── Features
├── Installation
├── Customization
├── Deployment
└── Troubleshooting

SETUP.md            # Quick start guide
├── 5-minute setup
├── Content editing
├── Image guide
└── Deploy instructions

ARCHITECTURE.md     # Technical details
├── Design decisions
├── Component architecture
├── Animation system
├── Performance tips
└── Future enhancements

PROJECT_STRUCTURE.md  # This file
├── File tree
├── Component dependencies
├── Data flow
└── Build output
```

---

## 💡 Quick Reference

**To start developing:**
```bash
npm install && npm run dev
```

**To edit content:**
```
data/portfolio.ts
```

**To add images:**
```
public/images/
```

**To customize styles:**
```
tailwind.config.js
app/globals.css
```

**To deploy:**
```
Push to GitHub → Import to Vercel → Done
```

---

This structure keeps everything organized and easy to navigate!

