/**
 * Portfolio data - Update this file with your personal information
 */

export const personalInfo = {
  name: 'Jerome Edward Guban',
  title: 'Backend Developer',
  subtitle: 'Building scalable and efficient systems',
  email: 'jeromeguban02@gmail.com',
  location: 'Philippines',
  avatar: '/images/avatar.png', // Add your image to public/images/
}

export const navigation = [
  { name: 'Home', href: 'hero' },
  { name: 'About', href: 'about' },
  { name: 'Why Me', href: 'why-me' },
  { name: 'Experience', href: 'experience' },
  { name: 'Projects', href: 'projects' },
  { name: 'Contact', href: 'contact' },
]

export const experiences = [
  {
    id: 1,
    title: 'Mid Backend Developer',
    company: 'Electro Premier Venture Inc Intl',
    period: '2024 - Present',
    description:
      'Developed and implemented web-based applications to enhance business processes, improving efficiency and workflow automation. Successfully designed, deployed, and maintained HRIS (Human Resource Information System) for employee data management, payroll processing, and leave tracking. Built Virtual Calling Card System for seamless communication and networking. Created Inventory Management System to optimize stock tracking, procurement, and reporting for efficient warehouse management.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Vue.js', 'React.js', 'Node.js', 'REST APIs', 'Git', 'Scrum'],
  },
  {
    id: 2,
    title: 'Backend Developer',
    company: 'HMR PHILIPPINES INC. (RETAIL | AUCTION)',
    period: '2019 - 2024',
    description:
      'Implemented DevOps principles to optimize development workflows, fostering seamless collaboration between teams. Developed high-quality, testable code following SOLID principles, code reviews, and CI/CD strategies. Integrated multiple back-end services and databases to ensure smooth data flow and system communication. Stayed current with emerging technologies, applying innovative solutions to improve system scalability and performance. Designed compliance modules and strategies to maintain evolving company standards. Configured, upgraded, and maintained e-commerce platforms with online bidding functionalities, warehouse management systems, user account management, and reporting tools. Integrated CRM systems to optimize customer interactions and enhance sales workflows. Led training sessions for end users on new system applications, ensuring smooth transitions and effective adoption.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Vue.js', 'Node.js', 'REST APIs', 'Git', 'DevOps Methodology', 'Elasticsearch', 'Redis']
  },
]

export const projects = [
  {
    id: 1,
    title: 'HMR Shop N\' Bid',
    description:
      'E-commerce and Online Bidding website for HMR Philippines Inc.',
    image: '/images/project1.jpg',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Vue.js', 'Elasticsearch', 'Redis', 'Tailwind css', 'Rest APIs', 'Node.js', 'Axios', 'Cron'],
    liveUrl: 'https://hmr.ph/#/',
  },
  {
    id: 2,
    title: 'Hammer 3.0',
    description:
      'A Warehouse Management System that handles business’ entire inventory and operations',
    image: '/images/2.webp',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Vue.js', 'Redis', 'Tailwind css', 'Rest APIs', 'Node.js', 'Axios', 'Cron'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'HMR CMS',
    description:
      'Content Management System For Shop N\' Bid',
    image: '/images/3.webp',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Vue.js', 'Redis', 'Tailwind css', 'Rest APIs', 'Node.js', 'Axios', 'Cron', 'Elasticsearch'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'HMR Forms',
    description:
      'A System like Google Forms',
    image: '/images/4.webp',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Vue.js', 'Redis', 'Tailwind css', 'Rest APIs', 'Axios', 'Cron'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 5,
    title: 'Overlanders 2.0',
    description:
      'Warehouse Management System',
    image: '/images/5.webp',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Vue.js', 'Redis', 'Tailwind css', 'Rest APIs', 'Axios', 'Cron'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 6,
    title: 'Seller Platform',
    description:
      'Seller Platform for HMR Shop N\' Bid',
    image: '/images/6.webp',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Vue.js', 'Redis', 'Tailwind css', 'Rest APIs', 'Axios', 'Cron'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 7,
    title: 'Simulcast Auction',
    description:
      'HMR Shop N\' Bid Live Auction Controller using WebRTC and Ant Media Server',
    image: '/images/7.webp',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Vue.js', 'Redis', 'Tailwind css', 'Rest APIs', 'Axios', 'Cron', 'WebRTC', 'Ant Media Server','web socket'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 8,
    title: 'Live Selling',
    description:
      'HMR Shop N\' Bid Live Selling Controller using WebRTC and Ant Media Server',
    image: '/images/8.webp',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Vue.js', 'Redis', 'Tailwind css', 'Rest APIs', 'Axios', 'Cron', 'WebRTC', 'Ant Media Server','web socket'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 9,
    title: 'Recherche E-commerce',
    description:
      'E-commerce website for Recherche',
    image: '/images/9.png',
    technologies: ['Laravel', 'PHP', 'MySQL', 'React.js', 'Tailwind css', 'Rest APIs', 'Axios'],
    liveUrl: 'https://recherche.com.ph/',
    githubUrl: '#',
  },
  {
    id: 10,
    title: 'Recherche E-commerce CMS',
    description:
      'Content management system for Recherche E-commerce',
    image: '/images/10.png',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Vue.js', 'Tailwind css', 'Rest APIs', 'Axios'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 11,
    title: 'HRIS System',
    description:
      'Human Resource Information System for Electro Premier Venture Inc Intl',
    image: '/images/11.png',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Vue.js', 'Tailwind css', 'Rest APIs', 'Axios'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 12,
    title: 'Virtual Calling Card System',
    description:
      'Virtual Calling Card System for Electro Premier Venture Inc Intl',
    image: '/images/13.png',
    technologies: ['react js', 'tailwind css', 'rest APIs', 'axios'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 13,
    title: 'Inventory Management System',
    description:
      'Inventory Management System for Electro Premier Venture Inc Intl',
    image: '/images/12.png',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Vue.js', 'Tailwind css', 'Rest APIs', 'Axios'],
    liveUrl: '#',
    githubUrl: '#',
  },
  
]

export const contact = {
  title: 'Get In Touch',
  description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
  email: 'jerome@example.com',
  social: [
   
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: 'linkedin',
    },
    {
      name: 'facebook',
      url: 'https://facebook.com',
      icon: 'facebook',
    },
  ],
}

