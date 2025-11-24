# Quick Setup Guide

Follow these steps to get your portfolio up and running in minutes!

## 🚀 Quick Start

### Step 1: Install Dependencies

```bash
npm install
```

This will install:
- Next.js 14
- React 18
- TailwindCSS
- Framer Motion
- Lucide React (icons)
- TypeScript

### Step 2: Customize Your Content

Open `data/portfolio.ts` and update with your information:

#### Personal Info
```typescript
export const personalInfo = {
  name: 'Your Full Name',
  title: 'Your Job Title',
  subtitle: 'Your tagline or description',
  email: 'your.email@example.com',
  location: 'Your City, Country',
  avatar: '/images/avatar.jpg',
}
```

#### Navigation (Optional - can keep as is)
```typescript
export const navigation = [
  { name: 'Home', href: 'hero' },
  { name: 'About', href: 'about' },
  // ... customize if needed
]
```

#### About Section
```typescript
export const about = {
  title: 'About Me',
  description: `Write your bio here. Tell visitors about yourself,
  your passion, and what you do.`,
  skills: [
    // Add your skills
    'React',
    'TypeScript',
    // ... more skills
  ],
}
```

#### Experience
```typescript
export const experiences = [
  {
    id: 1,
    title: 'Your Job Title',
    company: 'Company Name',
    period: '2022 - Present',
    description: 'What you did in this role...',
    technologies: ['React', 'Node.js'],
  },
  // Add more experiences
]
```

#### Projects
```typescript
export const projects = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Brief description of the project',
    image: '/images/project1.jpg',
    technologies: ['Next.js', 'TailwindCSS'],
    liveUrl: 'https://your-project-url.com',
    githubUrl: 'https://github.com/yourusername/project',
  },
  // Add more projects (4 projects look best)
]
```

#### Contact
```typescript
export const contact = {
  title: 'Get In Touch',
  description: 'Your invitation message',
  email: 'your.email@example.com',
  social: [
    { name: 'GitHub', url: 'https://github.com/yourusername', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: 'linkedin' },
    { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: 'twitter' },
  ],
}
```

### Step 3: Add Your Images

1. Create images folder (already exists): `public/images/`
2. Add your photos:
   - `avatar.jpg` - Your profile photo (recommended: 800x800px)
   - `project1.jpg` - First project screenshot (recommended: 1200x600px)
   - `project2.jpg` - Second project screenshot
   - `project3.jpg` - Third project screenshot
   - `project4.jpg` - Fourth project screenshot

**Note:** If you don't have images yet, the site will show placeholder emojis.

### Step 4: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio!

## 🎨 Customization Tips

### Colors

The portfolio uses a dark purple gradient theme. To change colors, edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your custom colors
    500: '#your-color',
  },
  dark: {
    // Background colors
    900: '#your-dark-color',
  },
}
```

To change the background gradient, edit `app/globals.css`:

```css
body {
  background: linear-gradient(135deg, #your-color-1 0%, #your-color-2 100%);
}
```

### Fonts

To change fonts, update `app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap');
```

And in `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['YourFont', 'system-ui', 'sans-serif'],
}
```

### Animation Speed

Adjust animation speeds in `lib/animations.ts`:

```typescript
// Make animations faster
transition: {
  duration: 0.3, // was 0.6
}

// Make animations slower
transition: {
  duration: 1.0, // was 0.6
}
```

### Disable Custom Cursor

If you don't want the custom cursor, remove it from `app/page.tsx`:

```typescript
// Remove this line:
<CustomCursor />
```

And remove from `app/globals.css`:

```css
body {
  cursor: auto; // instead of cursor: none;
}
```

## 🌐 Deployment

### Deploy to Vercel (Easiest)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"
6. Done! Your site is live.

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `.next` folder
4. Done!

### Deploy to Other Hosts

```bash
# Build for production
npm run build

# The build output is in .next/
# Upload this folder to your host
```

## ✅ Checklist

Before deploying, make sure you've:

- [ ] Updated all personal information in `data/portfolio.ts`
- [ ] Added your profile photo to `public/images/avatar.jpg`
- [ ] Added project screenshots to `public/images/`
- [ ] Updated project links (live URLs and GitHub)
- [ ] Updated social media links
- [ ] Changed email addresses
- [ ] Tested on mobile (responsive design)
- [ ] Tested all navigation links
- [ ] Checked all animations work smoothly
- [ ] Updated the `README.md` if needed

## 🐛 Troubleshooting

### "Module not found" errors
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

### Animations not working
- Make sure you're using `'use client'` at the top of component files
- Check browser console for errors

### Images not showing
- Make sure images are in `public/images/` folder
- Check file names match exactly (case-sensitive)
- Try using `.jpg` or `.png` extensions

### Custom cursor causing issues
- On mobile devices, the cursor is hidden by CSS media queries
- If issues persist, disable it (see Customization Tips above)

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

## 💡 Tips for Best Results

1. **High-quality images:** Use clear, professional photos
2. **Concise descriptions:** Keep project descriptions under 200 characters
3. **Real links:** Always use real project URLs when available
4. **Proofread:** Check all text for typos before deploying
5. **Test everywhere:** View on different devices and browsers
6. **Keep it updated:** Regularly add new projects and experiences

---

Need help? Check the main README.md for more detailed information!

