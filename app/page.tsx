"use client"

import { useState, useEffect, useRef } from "react"
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Smartphone,
  Globe,
  ChevronDown,
  Zap,
  Shield,
  Cpu,
  Palette,
  MapPin,
  Phone,
  Calendar,
  Filter,
  Grid,
  List,
  Send,
  Building2,
  Clock,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

type ColorTheme = "blue" | "red" | "green"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [systemStatus, setSystemStatus] = useState("INITIALIZING...")
  const [showStickyUI, setShowStickyUI] = useState(false)
  const [colorTheme, setColorTheme] = useState<ColorTheme>("blue")
  const [showThemeSelector, setShowThemeSelector] = useState(false)
  const [activeProjectTab, setActiveProjectTab] = useState<"projects" | "gallery">("projects")
  const [galleryFilter, setGalleryFilter] = useState("all")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [showContactModal, setShowContactModal] = useState(false)
  const [activeTimelineItem, setActiveTimelineItem] = useState(0)
  const [timelineSidebarSticky, setTimelineSidebarSticky] = useState(false)

  // Refs for intersection observer and timeline
  const sectionRefs = useRef<(HTMLElement | null)[]>([])
  const timelineSectionRef = useRef<HTMLElement | null>(null)

  // Theme configurations
  const themes = {
    blue: {
      primary: "blue-500",
      primaryHover: "blue-600",
      primaryLight: "blue-400",
      primaryDark: "blue-600",
      accent: "blue-300",
      border: "blue-500/30",
      borderHover: "blue-500/40",
      glow: "blue-500/25",
      glowHover: "blue-500/40",
      text: "blue-400",
      textLight: "blue-300",
      textMuted: "blue-100/70",
      bg: "blue-500/20",
      bgHover: "blue-500/10",
      gradient: "from-blue-500 to-blue-600",
      name: "PROTOSS",
      faction: "PROTOSS_NEXUS",
    },
    red: {
      primary: "red-500",
      primaryHover: "red-600",
      primaryLight: "red-400",
      primaryDark: "red-600",
      accent: "red-300",
      border: "red-500/30",
      borderHover: "red-500/40",
      glow: "red-500/25",
      glowHover: "red-500/40",
      text: "red-400",
      textLight: "red-300",
      textMuted: "red-100/70",
      bg: "red-500/20",
      bgHover: "red-500/10",
      gradient: "from-red-500 to-red-600",
      name: "TERRAN",
      faction: "TERRAN_COMMAND",
    },
    green: {
      primary: "green-500",
      primaryHover: "green-600",
      primaryLight: "green-400",
      primaryDark: "green-600",
      accent: "green-300",
      border: "green-500/30",
      borderHover: "green-500/40",
      glow: "green-500/25",
      glowHover: "green-500/40",
      text: "green-400",
      textLight: "green-300",
      textMuted: "green-100/70",
      bg: "green-500/20",
      bgHover: "green-500/10",
      gradient: "from-green-500 to-green-600",
      name: "ZERG",
      faction: "ZERG_HIVE",
    },
  }

  const currentTheme = themes[colorTheme]

  // Work experience data
  const workExperience = [
    {
      id: 1,
      company: "We Support Incorporated (PH)",
      position: "Senior Fullstack Developer",
      period: "JANUARY 2023 - PRESENT",
      status: "ACTIVE",
      description: "Fullstack maintenance and development and converting Figma/illustrator to responsive web design.",
      technologies: [
        "PHP (CodeIgniter, React JS, Stripe, Node JS)",
        "SQL (MariaDB, MySQL Workbench)",
        "Bootstrap 5 (jQuery & Vanilla JS)",
        "GIT (Bash, Github Desktop, BitBucket)",
        "Docker",
        "Putty",
      ],
            image: "/companies/wesupport.png?height=60&width=60",
      achievements:[]
      // achievements: [
      //   "Led development of 15+ responsive web applications",
      //   "Improved system performance by 40%",
      //   "Mentored 3 junior developers",
      // ],
    },
    {
      id: 2,
      company: "Positive Nation (US)",
      position: "Fullstack",
      period: "NOVEMBER 2023 - JANUARY 2025",
      status: "COMPLETED",
      description: "Fullstack maintenance and development and converting Figma/illustrator to responsive web design.",
      technologies: [
        "PHP (CodeIgniter, React JS, Stripe, Node JS)",
        "SQL (MariaDB, MySQL Workbench)",
        "Bootstrap 5 (jQuery & Vanilla JS)",
        "GIT (Bash, Github Desktop, BitBucket)",
        "Webhosting (Justhost, A2hosting)",
        "Putty",
      ],
            image: "/companies/positivenation.png?height=60&width=60",
      achievements:[]
    },
    {
      id: 3,
      company: "SEO For Real Estate Investors (US)",
      position: "Wordpress Developer & Customer Support (Part Time)",
      period: "JUNE 2024 - SEPTEMBER 2024",
      status: "COMPLETED",
      description: "Fullstack maintenance and development and converting Figma/illustrator to responsive web design.",
      technologies: [
        "Wordpress (Grumpy Hare, Beaver Builder, Themes, Plugin)",
        "SQL (MariaDB, MySQL Workbench)",
        "Bootstrap 5 (Jquery & vanilla js)",
        "GIT (Bash, Github)",
      ],
            image: "/companies/seo.png?height=60&width=60",
      achievements:[]
    },
      {
      id: 4,
      company: "AXPARA",
      position: "SOFTWARE DEVELOPER",
      period: "OCTOBER 2021 - NOVEMBER 2023",
      status: "COMPLETED",
      description: "Web App development (SLDC Waterfall) with APIs and performing research analysis and testing for web technologies, converting Figma/illustrator to responsive web design.",
      technologies: [
        "Php (PDO, Matomo(Piwik), Zend, WordPress plugin, CMS, Smarty Template, Angular 12, Node JS)",
        "WebAR (AR js)",
        "Tailwind (Tailwind UI, Flowbite, Vite JS & vanilla js)",
        "Bootstrap 5 (Jquery & vanilla js)",
        "GIT (Bash, Github Desktop, BitBucket)",
        "AWS (RDBMS, RESTful API)",
        "Figma",
      ],
            image: "/companies/axpara.png?height=60&width=60",
      achievements:[]
    },
      {
      id: 5,
      company: "CONCERTED MANAGEMENT CORPORATION (PH)",
      position: "SYSTEMS ANALYST PROGRAMMER",
      period: "JUNE 2021 - OCTOBER 2021",
      status: "COMPLETED",
      description: "Technical Support, Web App maintenance and developement (Scrum) with centralized flow.",
      technologies: [
        "Php (CodeIgniter, Laravel)",
        "SQL (MYSQL, Mysql Workbench)",
        "Bootstrap (3-5) (Jquery & vanilla js)",
        "GIT (Bash, Github Desktop, Gitlab)",
        "Putty"
      ],
            image: "/companies/motortrade.png?height=60&width=60",
      achievements:[]
    },
      {
      id: 6,
      company: "H2 SOFTWARE (PH)",
      position: "SYSTEMS ANALYST PROGRAMMER",
      period: "OCTOBER 2019 - JUNE 2021",
      status: "COMPLETED",
      description: "Technical Support, Web App maintenance and developement (Scrum) with centralized flow.",
      technologies: [
        "Php (CodeIgniter, Laravel)",
        "SQL (MYSQL, Mysql Workbench)",
        "Bootstrap (3-5) (Jquery & vanilla js)",
        "GIT (Bash, Github Desktop, Gitlab)",
        "Putty"
      ],
            image: "/companies/h2software.png?height=60&width=60",
      achievements:[]
    },
      {
      id: 7,
      company: "I-REMIT (PH)",
      position: "SOFTWARE DEVELOPER",
      period: "OCTOBER 2019 - JUNE 2021",
      status: "COMPLETED",
      description: "On-the-phone & Software Support, Software maintenance, Development and web service API's (in XML).",
      technologies: [
        "Php Core (ODBC)",
        "ASP.NET C# Razor(MVC, EF)",
        "SQL (MSSQL)",
        "Bootstrap4 (Jquery & vanilla js)",
        "GIT (Github Desktop)"
      ],
      image: "/companies/iremit.png?height=60&width=60",
      achievements:[]
    },
  ]

  // Global click effect
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const clickEffect = document.createElement("div")
      clickEffect.className = `global-click-effect ${colorTheme === "blue" ? "text-blue-500" : colorTheme === "red" ? "text-red-500" : "text-green-500"}`
      clickEffect.style.left = `${e.clientX - 10}px`
      clickEffect.style.top = `${e.clientY - 10}px`
      clickEffect.style.width = "20px"
      clickEffect.style.height = "20px"
      clickEffect.style.color = colorTheme === "blue" ? "#6366f1" : colorTheme === "red" ? "#ef4444" : "#22c55e"

      document.body.appendChild(clickEffect)

      setTimeout(() => {
        document.body.removeChild(clickEffect)
      }, 600)
    }

    document.addEventListener("click", handleGlobalClick)
    return () => document.removeEventListener("click", handleGlobalClick)
  }, [colorTheme])

  // Intersection Observer for section animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible")
            entry.target.classList.remove("section-hidden")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    )

    sectionRefs.current.forEach((ref) => {
      if (ref) {
        ref.classList.add("section-hidden")
        observer.observe(ref)
      }
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    // StarCraft-style system initialization
    const statusMessages = ["INITIALIZING...", "SYSTEMS ONLINE", "NEURAL INTERFACE ACTIVE", "READY FOR DEPLOYMENT"]

    let currentIndex = 0
    const interval = setInterval(() => {
      setSystemStatus(statusMessages[currentIndex])
      currentIndex = (currentIndex + 1) % statusMessages.length
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "timeline", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      // Show sticky UI when scrolled past hero section
      const heroSection = document.getElementById("home")
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        setShowStickyUI(window.scrollY > heroBottom - 200)
      }

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }

      // Timeline sidebar sticky behavior
      const timelineSection = timelineSectionRef.current
      if (timelineSection) {
        const rect = timelineSection.getBoundingClientRect()
        const navHeight = 64 // Navigation height
        const sidebarOffset = 100 // Desired offset from top

        // Check if timeline section is in viewport
        const isTimelineInView = rect.top <= navHeight + sidebarOffset && rect.bottom >= navHeight + sidebarOffset
        setTimelineSidebarSticky(isTimelineInView)

        // Timeline progress calculation
        if (isTimelineInView) {
          const sectionTop = timelineSection.offsetTop
          const sectionHeight = timelineSection.offsetHeight
          const scrollFromSectionTop = window.scrollY - sectionTop + navHeight + sidebarOffset
          const progress = Math.max(0, Math.min(1, scrollFromSectionTop / sectionHeight))
          const activeIndex = Math.floor(progress * workExperience.length)
          setActiveTimelineItem(Math.min(activeIndex, workExperience.length - 1))
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once to set initial state
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Add this after the existing useEffect hooks
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in-view")
        }
      })
    }, observerOptions)

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(".animate-on-scroll, .animate-typing, .animate-typing-slow")
    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const skills = [
    { name: "JavaScript (ES2015+)", level: 100, category: "Frontend", icon: <Code className="w-4 h-4" /> },
    { name: "TypeScript", level: 85, category: "Frontend", icon: <Code className="w-4 h-4" /> },
    { name: "React", level: 90, category: "Frontend", icon: <Zap className="w-4 h-4" /> },
    { name: "Next.js", level: 85, category: "Frontend", icon: <Zap className="w-4 h-4" /> },
    { name: "Vue.js", level: 80, category: "Frontend", icon: <Shield className="w-4 h-4" /> },
    { name: "C#", level: 80, category: "Frontend", icon: <Shield className="w-4 h-4" /> },
    { name: "ASP.NET", level: 80, category: "Frontend", icon: <Shield className="w-4 h-4" /> },

    { name: "PHP", level: 100, category: "Backend", icon: <Cpu className="w-4 h-4" /> },
    { name: "Laravel", level: 85, category: "Backend", icon: <Shield className="w-4 h-4" /> },
    { name: "Wordpress", level: 85, category: "Backend", icon: <Shield className="w-4 h-4" /> },
    // { name: "Node.js", level: 85, category: "Backend", icon: <Cpu className="w-4 h-4" /> },
    // { name: "VBA", level: 85, category: "Backend", icon: <Cpu className="w-4 h-4" /> },
    { name: "VB.NET", level: 85, category: "Backend", icon: <Cpu className="w-4 h-4" /> },
    { name: "Python", level: 85, category: "Backend", icon: <Cpu className="w-4 h-4" /> },

    { name: "MySQL", level: 80, category: "Database", icon: <Database className="w-4 h-4" /> },
    { name: "MongoDB", level: 75, category: "Database", icon: <Database className="w-4 h-4" /> },

    { name: "Git", level: 100, category: "Tools", icon: <Code className="w-4 h-4" /> },
    { name: "GitHub Desktop", level: 85, category: "Tools", icon: <Cpu className="w-4 h-4" /> },
    { name: "Docker", level: 85, category: "Tools", icon: <Cpu className="w-4 h-4" /> },
    // { name: "Vite", level: 85, category: "Tools", icon: <Cpu className="w-4 h-4" /> },
    { name: "MySQL Work bench", level: 85, category: "Tools", icon: <Cpu className="w-4 h-4" /> },
    // { name: "Github Actions", level: 85, category: "Tools", icon: <Cpu className="w-4 h-4" /> },
    { name: "Jira", level: 85, category: "Tools", icon: <Cpu className="w-4 h-4" /> },
  ]

  const projects = [
    {
      title: "NEXUS E-COMMERCE PROTOCOL",
      description: "Advanced commerce platform with quantum-encrypted transactions and neural network optimization",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=200&width=300",
      status: "OPERATIONAL",
    },
    {
      title: "TACTICAL COMMAND INTERFACE",
      description: "Real-time collaborative task management with encrypted communication channels",
      tech: ["Vue.js", "Laravel", "MySQL", "Socket.io"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=200&width=300",
      status: "ACTIVE",
    },
    {
      title: "ATMOSPHERIC MONITORING SYSTEM",
      description: "Real-time environmental data analysis with predictive algorithms and visual interfaces",
      tech: ["Next.js", "TypeScript", "Chart.js", "API Integration"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=200&width=300",
      status: "SCANNING",
    },
    {
      title: "NEURAL ANALYTICS NETWORK",
      description: "Advanced social media performance tracking with AI-powered insights and predictions",
      tech: ["React", "Python", "PostgreSQL", "D3.js"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=200&width=300",
      status: "ANALYZING",
    },
  ]

  const galleryImages = [
    {
      id: 1,
      src: "/categories/ABToken.png?height=300&width=400",
      title: "ABToken",
      category: "system",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc nulla, feugiat sit amet gravida vitae, sodales vitae justo. Vivamus sodales tellus quis dolor tempus, nec vestibulum metus vestibulum. Sed vitae congue urna.",
    },
    {
      id: 2,
      src: "/categories/BPC.png?height=300&width=400",
      title: "BPC",
      category: "system",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc nulla, feugiat sit amet gravida vitae, sodales vitae justo. Vivamus sodales tellus quis dolor tempus, nec vestibulum metus vestibulum. Sed vitae congue urna.",
    },
    {
      id: 3,
      src: "/categories/Bridge Connect.png?height=300&width=400",
      title: "Bridge Connect",
      category: "system_landing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc nulla, feugiat sit amet gravida vitae, sodales vitae justo. Vivamus sodales tellus quis dolor tempus, nec vestibulum metus vestibulum. Sed vitae congue urna.",
    },
    {
      id: 4,
      src: "/categories/Dentist System.png?height=300&width=400",
      title: "PDCMS",
      category: "system",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc nulla, feugiat sit amet gravida vitae, sodales vitae justo. Vivamus sodales tellus quis dolor tempus, nec vestibulum metus vestibulum. Sed vitae congue urna.",
    },
    {
      id: 5,
      src: "/categories/E-Barangay System.png?height=300&width=400",
      title: "E-Barangay System",
      category: "system",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc nulla, feugiat sit amet gravida vitae, sodales vitae justo. Vivamus sodales tellus quis dolor tempus, nec vestibulum metus vestibulum. Sed vitae congue urna.",
    },
    {
      id: 6,
      src: "/categories/Inventory System.png?height=300&width=400",
      title: "Inventory System",
      category: "system",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc nulla, feugiat sit amet gravida vitae, sodales vitae justo. Vivamus sodales tellus quis dolor tempus, nec vestibulum metus vestibulum. Sed vitae congue urna.",
    },
    {
      id: 7,
      src: "/categories/Kireina V1.png?height=300&width=400",
      title: "Kireina Window Films v1",
      category: "system_landing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc nulla, feugiat sit amet gravida vitae, sodales vitae justo. Vivamus sodales tellus quis dolor tempus, nec vestibulum metus vestibulum. Sed vitae congue urna.",
    },
    {
      id: 8,
      src: "/categories/Kireina V1.5.png?height=300&width=400",
      title: "Kireina Window Films v1.5",
      category: "system_landing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc nulla, feugiat sit amet gravida vitae, sodales vitae justo. Vivamus sodales tellus quis dolor tempus, nec vestibulum metus vestibulum. Sed vitae congue urna.",
    },
    {
      id: 9,
      src: "/categories/Kireina V2.png?height=300&width=400",
      title: "Kireina Window Films v2",
      category: "system_landing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc nulla, feugiat sit amet gravida vitae, sodales vitae justo. Vivamus sodales tellus quis dolor tempus, nec vestibulum metus vestibulum. Sed vitae congue urna.",
    },
    {
      id: 10,
      src: "/categories/Medical Appointment_Inventory System.png?height=300&width=400",
      title: "Medical Appointment & Inventory System",
      category: "system",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc nulla, feugiat sit amet gravida vitae, sodales vitae justo. Vivamus sodales tellus quis dolor tempus, nec vestibulum metus vestibulum. Sed vitae congue urna.",
    },
    {
      id: 11,
      src: "/categories/Positivenation Music Awards.png?height=300&width=400",
      title: "Positivenation Music Awards",
      category: "wordpress",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc nulla, feugiat sit amet gravida vitae, sodales vitae justo. Vivamus sodales tellus quis dolor tempus, nec vestibulum metus vestibulum. Sed vitae congue urna.",
    },
    {
      id: 12,
      src: "/categories/Positivenation.png?height=300&width=400",
      title: "Positivenation",
      category: "wordpress",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc nulla, feugiat sit amet gravida vitae, sodales vitae justo. Vivamus sodales tellus quis dolor tempus, nec vestibulum metus vestibulum. Sed vitae congue urna.",
    },
    {
      id: 13,
      src: "/categories/Project Management System.png?height=300&width=400",
      title: "Project Management System",
      category: "system",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc nulla, feugiat sit amet gravida vitae, sodales vitae justo. Vivamus sodales tellus quis dolor tempus, nec vestibulum metus vestibulum. Sed vitae congue urna.",
    },
    {
      id: 14,
      src: "/categories/Quail Farm.png?height=300&width=400",
      title: "Quail Farm",
      category: "system",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc nulla, feugiat sit amet gravida vitae, sodales vitae justo. Vivamus sodales tellus quis dolor tempus, nec vestibulum metus vestibulum. Sed vitae congue urna.",
    },
    {
      id: 15,
      src: "/categories/Sales Tracker.png?height=300&width=400",
      title: "Sales Tracker System",
      category: "system",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc nulla, feugiat sit amet gravida vitae, sodales vitae justo. Vivamus sodales tellus quis dolor tempus, nec vestibulum metus vestibulum. Sed vitae congue urna.",
    },
    {
      id: 16,
      src: "/categories/Strong tower Gym.png?height=300&width=400",
      title: "Strong Tower Gym",
      category: "system",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc nulla, feugiat sit amet gravida vitae, sodales vitae justo. Vivamus sodales tellus quis dolor tempus, nec vestibulum metus vestibulum. Sed vitae congue urna.",
    },
    {
      id: 17,
      src: "/categories/Zeng IT v1.png?height=300&width=400",
      title: "Zeng IT v1",
      category: "landing_system",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc nulla, feugiat sit amet gravida vitae, sodales vitae justo. Vivamus sodales tellus quis dolor tempus, nec vestibulum metus vestibulum. Sed vitae congue urna.",
    },
    {
      id: 18,
      src: "/categories/Zeng IT v2.png?height=300&width=400",
      title: "Zeng IT v2",
      category: "landing_system",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc nulla, feugiat sit amet gravida vitae, sodales vitae justo. Vivamus sodales tellus quis dolor tempus, nec vestibulum metus vestibulum. Sed vitae congue urna.",
    },
    {
      id: 19,
      src: "/categories/vba.png?height=300&width=400",
      title: "Routing System",
      category: "excel",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc nulla, feugiat sit amet gravida vitae, sodales vitae justo. Vivamus sodales tellus quis dolor tempus, nec vestibulum metus vestibulum. Sed vitae congue urna.",
    },
    {
      id: 20,
      src: "/categories/vba2.png?height=300&width=400",
      title: "Routing System",
      category: "excel",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc nulla, feugiat sit amet gravida vitae, sodales vitae justo. Vivamus sodales tellus quis dolor tempus, nec vestibulum metus vestibulum. Sed vitae congue urna.",
    },
  ]

  const galleryCategories = [
    { id: "all", label: "ALL_ARCHIVES", count: galleryImages.length },
    { id: "system_landing", label: "SYSTEM_WITH_LANDING", count: galleryImages.filter((img) => img.category === "system_landing").length },
    { id: "system", label: "SYSTEM", count: galleryImages.filter((img) => img.category === "system").length },
    { id: "wordpress", label: "WORDPRESS", count: galleryImages.filter((img) => img.category === "wordpress").length },
    { id: "excel", label: "EXCEL", count: galleryImages.filter((img) => img.category === "excel").length },
  ]

  const filteredGalleryImages =
    galleryFilter === "all" ? galleryImages : galleryImages.filter((img) => img.category === galleryFilter)

  const techStack = [
    { name: "JavaScript", icon: "JS", color: "from-yellow-500 to-yellow-600" },
    {
      name: "TypeScript",
      icon: "TS",
      color: `${colorTheme === "blue" ? "from-blue-500 to-blue-600" : colorTheme === "red" ? "from-red-500 to-red-600" : "from-green-500 to-green-600"}`,
    },
    { name: "React", icon: "⚛️", color: "from-cyan-500 to-cyan-600" },
    { name: "Next.js", icon: "▲", color: "from-slate-500 to-slate-600" },
    { name: "Vue.js", icon: "V", color: "from-green-500 to-green-600" },
    { name: "Node.js", icon: "⬢", color: "from-green-600 to-green-700" },
    { name: "PHP", icon: "🐘", color: "from-purple-500 to-purple-600" },
    { name: "Laravel", icon: "L", color: "from-red-500 to-red-600" },
    { name: "MySQL", icon: "🗄️", color: "from-orange-500 to-orange-600" },
    { name: "MongoDB", icon: "🍃", color: "from-green-500 to-green-600" },
    {
      name: "Docker",
      icon: "🐳",
      color: `${colorTheme === "blue" ? "from-blue-500 to-blue-600" : colorTheme === "red" ? "from-red-500 to-red-600" : "from-green-500 to-green-600"}`,
    },
    { name: "Git", icon: "📝", color: "from-orange-600 to-red-600" },
    { name: "AWS", icon: "☁️", color: "from-orange-500 to-yellow-500" },
    {
      name: "Python",
      icon: "🐍",
      color: `${colorTheme === "blue" ? "from-blue-500 to-yellow-500" : colorTheme === "red" ? "from-red-500 to-yellow-500" : "from-green-500 to-yellow-500"}`,
    },
  ]

  const availableDates = [
    "2024-01-15",
    "2024-01-16",
    "2024-01-18",
    "2024-01-22",
    "2024-01-23",
    "2024-01-25",
    "2024-01-29",
    "2024-01-30",
    "2024-02-01",
    "2024-02-05",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 relative overflow-hidden">
      {/* Color Theme Selector */}
      <div className="fixed top-20 right-4 z-50">
        <div className="relative">
          <Button
            onClick={() => setShowThemeSelector(!showThemeSelector)}
            size="sm"
            className={` ${colorTheme === "blue" ? "bg-blue-500/20 hover:bg-blue-600 text-blue-400 border-blue-500/30 shadow-blue-500/25 hover:shadow-blue-500/40" : colorTheme === "red" ? "bg-red-500/20 hover:bg-red-600 text-red-400 border-red-500/30 shadow-red-500/25 hover:shadow-red-500/40" : "bg-green-500/20 hover:bg-green-600 text-green-400 border-green-500/30 shadow-green-500/25 hover:shadow-green-500/40"} font-mono text-xs px-3 py-2 transition-all duration-300 ripple-effect click-glow`}
          >
            <Palette className="w-4 h-4 mr-2" />
            {currentTheme.name}
          </Button>

          {showThemeSelector && (
            <div
              className={`absolute top-full right-0 mt-2 bg-slate-900/95 backdrop-blur-sm border ${colorTheme === "blue" ? "border-blue-500/30 shadow-blue-500/25" : colorTheme === "red" ? "border-red-500/30 shadow-red-500/25" : "border-green-500/30 shadow-green-500/25"} rounded-lg p-2 space-y-2 shadow-2xl animate-in slide-in-from-top duration-300`}
            >


              {(Object.keys(themes) as ColorTheme[]).map((theme) => (
                <button
                  key={theme}
                  onClick={() => {
                    setColorTheme(theme)
                    setShowThemeSelector(false)
                  }}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded font-mono text-xs transition-all duration-300 ripple-effect click-glow ${
                    colorTheme === theme
                      ? `bg-${themes[theme].primary}/20 text-${themes[theme].text} border border-${themes[theme].border}`
                      : `text-slate-300 hover:bg-${themes[theme].primary}/10 hover:text-${themes[theme].text} border border-transparent`
                  }`}
                >
                  <div
                    className={`w-4 h-4 bg-gradient-to-br from-${themes[theme].primary} to-${themes[theme].primaryDark} rounded border border-${themes[theme].border}`}
                  ></div>
                  <span>{themes[theme].faction}</span>
                  {colorTheme === theme && (
                    <span
                      className={`${colorTheme === "blue" ? "text-blue-300" : colorTheme === "red" ? "text-red-300" : "text-green-300"}`}
                    >
                      ●
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Background patterns - subtle and few */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 pattern-dots"></div>
        <div className="absolute bottom-0 right-0 w-1/4 h-1/4 pattern-grid"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/5 h-1/5 pattern-circuit"></div>
      </div>

      {/* StarCraft-style background elements */}
      <div className="fixed inset-0 opacity-5">
        <div
          className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=80 height=80 viewBox=0 0 80 80 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23${colorTheme === "blue" ? "6366f1" : colorTheme === "red" ? "ef4444" : "22c55e"} fillOpacity=0.1%3E%3Cpath d=M40 40l20-20v40l-20-20zm0 0l-20-20v40l20-20z/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat`}
        ></div>
      </div>

      {/* Hexagonal grid overlay */}
      <div className="fixed inset-0 opacity-10">
        <div
          className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=52 viewBox=0 0 60 52 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23${colorTheme === "blue" ? "6366f1" : colorTheme === "red" ? "ef4444" : "22c55e"} fillOpacity=0.05%3E%3Cpath d=M30 0l15 26-15 26L15 26 30 0zm0 8L19 26l11 18 11-18L30 8z/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat`}
        ></div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-sm border-b ${colorTheme === "blue" ? "border-blue-500/30 shadow-blue-500/25" : colorTheme === "red" ? "border-red-500/30 shadow-red-500/25" : "border-green-500/30 shadow-green-500/25"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div
                  className={`w-10 h-10 ${colorTheme === "blue" ? "bg-gradient-to-br from-blue-500 to-blue-600 border-blue-400/50 shadow-blue-500/25" : colorTheme === "red" ? "bg-gradient-to-br from-red-500 to-red-600 border-red-400/50 shadow-red-500/25" : "bg-gradient-to-br from-green-500 to-green-600 border-green-400/50 shadow-green-500/25"} rounded-lg flex items-center justify-center font-bold text-white text-lg border border-${currentTheme.primaryLight}/50 shadow-lg ripple-effect click-glow cursor-pointer`}
                >
                  CJ
                </div>
                <div
                  className={`absolute -inset-1 ${colorTheme === "blue" ? "bg-blue-500/20" : colorTheme === "red" ? "bg-red-500/20" : "bg-green-500/20"} rounded-lg blur-sm -z-10`}
                ></div>
              </div>
              <div className="hidden sm:block">
                <span
                  className={`${colorTheme === "blue" ? "text-blue-400" : colorTheme === "red" ? "text-red-400" : "text-green-400"} font-mono text-xs animate-typing animate-on-scroll`}
                >
                  {"< PORTFOLIO_PREVIEWED_MODE />"}
                </span>
                <div
                  className={`${colorTheme === "blue" ? "text-blue-300" : colorTheme === "red" ? "text-red-300" : "text-green-300"} font-mono text-xs opacity-75`}
                >
                  {systemStatus}
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                {[
                  { id: "home", label: "HOME" },
                  { id: "about", label: "ABOUT ME" },
                  { id: "skills", label: "TECH STACK" },
                  { id: "timeline", label: "WORK EXPERIENCE" },
                  { id: "projects", label: "PROJECTS" },
                  { id: "contact", label: "CONTACT" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 text-xs font-mono font-medium transition-all duration-300 relative ripple-effect click-glow ${
                       `bg-${currentTheme.bg} text-${currentTheme.textLight} border border-${currentTheme.border} shadow-lg shadow-${currentTheme.glow}
                         text-${currentTheme.textMuted} hover:bg-${currentTheme.bgHover} hover:text-${currentTheme.text} border border-transparent`
                    } rounded-sm`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <div className={`absolute -inset-1 bg-${currentTheme.bgHover} rounded-sm blur-sm -z-10`}></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`${colorTheme === "blue" ? "text-blue-400 hover:bg-blue-500/20 border-blue-500/30" : colorTheme === "red" ? "text-red-400 hover:bg-red-500/20 border-red-500/30" : "text-green-400 hover:bg-green-500/20 border-green-500/30"} ripple-effect click-glow`}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className={`md:hidden bg-slate-950/98 backdrop-blur-sm border-t ${colorTheme === "blue" ? "border-blue-500/30" : colorTheme === "red" ? "border-red-500/30" : "border-green-500/30"}`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {[
                { id: "home", label: "HOME" },
                { id: "about", label: "ABOUT ME" },
                { id: "skills", label: "TECH STACK" },
                { id: "timeline", label: "WORK EXPERIENCE" },
                { id: "projects", label: "PROJECTS" },
                { id: "contact", label: "CONTACT" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 text-sm font-mono font-medium w-full text-left transition-colors ripple-effect click-glow ${
                    activeSection === item.id
                      ? `bg-${currentTheme.bg} text-${currentTheme.textLight} border-l-2 border-${currentTheme.primary}`
                      : `text-${currentTheme.textMuted} hover:bg-${currentTheme.bgHover} hover:text-${currentTheme.text}`
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 mt-8"
        ref={(el) => (sectionRefs.current[0] = el)}
      >
        <div className="text-center z-10 max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-8">
            {/* Left side - Profile Image */}
            <div className="relative order-2 lg:order-1 animate-fade-in-left">
              <div className="relative w-48 h-48 lg:w-56 lg:h-56">
                {/* Main portrait */}
                <div
                  className={`w-full h-full rounded-2xl overflow-hidden border-2 ${colorTheme === "blue" ? "border-blue-500/30 shadow-blue-500/25" : colorTheme === "red" ? "border-red-500/30 shadow-red-500/25" : "border-green-500/30 shadow-green-500/25"} shadow-2xl bg-slate-800 ripple-effect click-glow cursor-pointer`}
                >
                  <img
                    src="/images/carlo-portrait.png?height=400&width=400"
                    alt="Carlo Jimenez - Senior Fullstack Developer"
                    className="w-full h-full object-cover"
                  />
                  {/* <div className={`absolute inset-0 bg-gradient-to-t from-${colorTheme}-900/20 to-transparent`}></div> */}
                </div>

                {/* Glowing border effect */}
                <div
                  className={`absolute -inset-2 ${colorTheme === "blue" ? "bg-blue-500/10" : colorTheme === "red" ? "bg-red-500/10" : "bg-green-500/10"} rounded-2xl blur-xl -z-10`}
                ></div>

                {/* StarCraft-style corner brackets */}
                <div
                  className={`absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 ${colorTheme === "blue" ? "border-blue-400" : colorTheme === "red" ? "border-red-400" : "border-green-400"}`}
                ></div>
                <div
                  className={`absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 ${colorTheme === "blue" ? "border-blue-400" : colorTheme === "red" ? "border-red-400" : "border-green-400"}`}
                ></div>
                <div
                  className={`absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 ${colorTheme === "blue" ? "border-blue-400" : colorTheme === "red" ? "border-red-400" : "border-green-400"}`}
                ></div>
                <div
                  className={`absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 ${colorTheme === "blue" ? "border-blue-400" : colorTheme === "red" ? "border-red-400" : "border-green-400"}`}
                ></div>

                {/* Status indicator */}
                <div className="absolute top-3 right-3 w-4 h-4 bg-green-400 rounded-full border-2 border-slate-900 animate-pulse shadow-lg shadow-green-400/50"></div>

                {/* ID Badge */}
                <div
                  className={`absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-sm border ${colorTheme === "blue" ? "border-blue-500/30" : colorTheme === "red" ? "border-red-500/30" : "border-green-500/30"} rounded px-2 py-1`}
                >
                  <span
                    className={`${colorTheme === "blue" ? "text-blue-300" : colorTheme === "red" ? "text-red-300" : "text-green-300"} font-mono text-xs`}
                  >
                    ID: CJ_001
                  </span>
                </div>
              </div>
            </div>

            {/* Right side - Main Content */}
            <div className="flex-1 order-1 lg:order-2 text-center lg:text-left animate-fade-in-right">
              <div className="mb-6">
                <div className="inline-block relative">
                  <div
                    className={`w-20 h-20 lg:w-24 lg:h-24 mx-auto lg:mx-0 ${colorTheme === "blue" ? "bg-gradient-to-br from-blue-500 to-blue-600 border-blue-400/50 shadow-blue-500/25" : colorTheme === "red" ? "bg-gradient-to-br from-red-500 to-red-600 border-red-400/50 shadow-red-500/25" : "bg-gradient-to-br from-green-500 to-green-600 border-green-400/50 shadow-green-500/25"} rounded-full flex items-center justify-center text-4xl lg:text-5xl font-bold text-white mb-4 shadow-xl border-2 ripple-effect click-glow cursor-pointer`}
                  >
                    CJ
                  </div>
                  <div
                    className={`absolute -inset-2 ${colorTheme === "blue" ? "bg-blue-500/10" : colorTheme === "red" ? "bg-red-500/10" : "bg-green-500/10"} rounded-full blur-lg -z-10`}
                  ></div>
                  {/* Rotating ring */}
                  <div
                    className={`absolute inset-0 border-2 ${colorTheme === "blue" ? "border-blue-400/30" : colorTheme === "red" ? "border-red-400/30" : "border-green-400/30"} rounded-full animate-spin`}
                    style={{ animationDuration: "15s" }}
                  >
                    <div
                      className={`absolute top-0 left-1/2 w-1.5 h-1.5 ${colorTheme === "blue" ? "bg-blue-400" : colorTheme === "red" ? "bg-red-400" : "bg-green-400"} rounded-full transform -translate-x-1/2 -translate-y-1`}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div
                  className={`${colorTheme === "blue" ? "text-blue-400" : colorTheme === "red" ? "text-red-400" : "text-green-400"} font-mono text-sm tracking-wider animate-typing animate-on-scroll`}
                >
                  {">> INTERFACE_ACTIVE <<"}
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 tracking-tight glitch-effect animate-on-scroll">
                  CARLO JIMENEZ
                </h1>
                <div
                  className={`${colorTheme === "blue" ? "text-blue-300" : colorTheme === "red" ? "text-red-300" : "text-green-300"} font-mono text-lg sm:text-xl lg:text-2xl tracking-wide animate-on-scroll`}
                >
                  <span
                    className={`${colorTheme === "blue" ? "text-blue-400" : colorTheme === "red" ? "text-red-400" : "text-green-400"}`}
                  >
                    {"["}
                  </span>
                  SENIOR FULLSTACK DEVELOPER
                  <span
                    className={`${colorTheme === "blue" ? "text-blue-400" : colorTheme === "red" ? "text-red-400" : "text-green-400"}`}
                  >
                    {"]"}
                  </span>
                </div>
                <div
                  className={`${colorTheme === "blue" ? "text-blue-300" : colorTheme === "red" ? "text-red-300" : "text-green-300"} font-mono text-sm opacity-75 max-w-2xl mx-auto lg:mx-0 animate-on-scroll`}
                >
                  SPECIALIZATION: LARAVEL | CODE_IGNITER | WORDPRESS
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6 animate-on-scroll">
                <Button
                  // onClick={() => scrollToSection("projects")}
  onClick={() => {
    const link = document.createElement("a");
    link.href = "/Jimenez_Carlo_Resume.pdf";
    link.download = "Jimenez_Carlo_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
                  className={`${colorTheme === "blue" ? "bg-blue-500 hover:bg-blue-600 border-blue-400/50 shadow-blue-500/25 hover:shadow-blue-500/40" : colorTheme === "red" ? "bg-red-500 hover:bg-red-600 border-red-400/50 shadow-red-500/25 hover:shadow-red-500/40" : colorTheme === "green" ? "bg-green-500 hover:bg-green-600 border-green-400/50 shadow-green-500/25 hover:shadow-green-500/40" : ""} text-slate-900 font-semibold px-8 py-3 text-lg font-mono transition-all duration-300 ripple-effect click-glow`}
                >
                  {">> DOWNLOAD_RESUME"}
                </Button>
                <Button
                  onClick={() => setShowContactModal(true)}
                  variant="outline"
                  className={`${colorTheme === "blue" ? "border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-slate-900 shadow-blue-500/10" : colorTheme === "red" ? "border-red-500 text-red-400 hover:bg-red-500 hover:text-slate-900 shadow-red-500/10" : "border-green-500 text-green-400 hover:bg-green-500 hover:text-slate-900 shadow-green-500/10"} px-8 py-3 text-lg font-mono shadow-lg transition-all duration-300 ripple-effect click-glow`}
                >
                  {">> ESTABLISH_COMM_LINK"}
                </Button>
              </div>

              {/* System status indicator */}
              <div
                className={`${colorTheme === "blue" ? "text-blue-300" : colorTheme === "red" ? "text-red-300" : "text-green-300"} inline-flex items-center space-x-2 font-mono text-xs animate-on-scroll`}
              >
                <div
                  className={`${colorTheme === "blue" ? "bg-blue-400" : colorTheme === "red" ? "bg-red-400" : "bg-green-400"} w-2 h-2 rounded-full animate-pulse`}
                ></div>
                <span>USER_STATUS: ACTIVE</span>
              </div>
            </div>
          </div>

          {/* Tech Stack Infinite Carousel */}
          <div className="mt-12 w-full max-w-4xl mx-auto animate-fade-in-up">
            <div className="text-center mb-6">
              <div
                className={`${colorTheme === "blue" ? "text-blue-400" : colorTheme === "red" ? "text-red-400" : "text-green-400"} font-mono text-xs mb-2 animate-typing animate-on-scroll`}
              >
                {">> ACTIVE_TECHNOLOGIES <<"}
              </div>
            </div>

            <div className="relative overflow-hidden tech-stack-fade">
              {/* Scrolling container */}
              <div className="flex animate-scroll-infinite space-x-4 py-4">
                {/* First set of tech stack items */}
                {techStack.map((tech, index) => (
                  <div
                    key={`first-${index}`}
                    className={`flex-shrink-0 w-24 h-24 bg-slate-800/50 border ${colorTheme === "blue" ? "border-blue-500/30 hover:border-blue-500/40" : colorTheme === "red" ? "border-red-500/30 hover:border-red-500/40" : colorTheme === "green" ? "border-green-500/30 hover:border-green-500/40" : ""} rounded-lg backdrop-blur-sm transition-all duration-300 group ripple-effect click-glow cursor-pointer relative`}
                  >
                    <div className="w-full h-full flex flex-col items-center justify-center p-2">
                      <div
                        className={`w-8 h-8 bg-gradient-to-br ${tech.color} rounded-md flex items-center justify-center text-white font-bold text-sm mb-1 group-hover:scale-110 transition-transform duration-300`}
                      >
                        {tech.icon}
                      </div>
                      <span
                        className={`${colorTheme === "blue" ? "text-blue-300" : colorTheme === "red" ? "text-red-300" : colorTheme === "green" ? "text-green-300" : ""} font-mono text-xs text-center leading-tight`}
                      >
                        {tech.name}
                      </span>
                    </div>
                    <div
                      className={`absolute -inset-1 ${colorTheme === "blue" ? "bg-blue-500/5" : colorTheme === "red" ? "bg-red-500/5" : colorTheme === "green" ? "bg-green-500/5" : ""} rounded-lg blur-sm -z-10 group-hover:bg-${currentTheme.primary}/10 transition-all duration-300`}
                    ></div>
                  </div>
                ))}

                {/* Duplicate set for infinite scroll */}
                {techStack.map((tech, index) => (
                  <div
                    key={`second-${index}`}
                    className={`flex-shrink-0 w-24 h-24 bg-slate-800/50 border ${colorTheme === "blue" ? "border-blue-500/30 hover:border-blue-500/40" : colorTheme === "red" ? "border-red-500/30 hover:border-red-500/40" : colorTheme === "green" ? "border-green-500/30 hover:border-green-500/40" : ""} rounded-lg backdrop-blur-sm transition-all duration-300 group ripple-effect click-glow cursor-pointer relative`}
                  >
                    <div className="w-full h-full flex flex-col items-center justify-center p-2">
                      <div
                        className={`w-8 h-8 bg-gradient-to-br ${tech.color} rounded-md flex items-center justify-center text-white font-bold text-sm mb-1 group-hover:scale-110 transition-transform duration-300`}
                      >
                        {tech.icon}
                      </div>
                      <span
                        className={`${colorTheme === "blue" ? "text-blue-300" : colorTheme === "red" ? "text-red-300" : colorTheme === "green" ? "text-green-300" : ""} font-mono text-xs text-center leading-tight`}
                      >
                        {tech.name}
                      </span>
                    </div>
                    <div
                      className={`absolute -inset-1 ${colorTheme === "blue" ? "bg-blue-500/5" : colorTheme === "red" ? "bg-red-500/5" : colorTheme === "green" ? "bg-green-500/5" : ""} rounded-lg blur-sm -z-10 group-hover:bg-${currentTheme.primary}/10 transition-all duration-300`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center space-y-2">
              <ChevronDown
                className={`${colorTheme === "blue" ? "text-blue-400" : colorTheme === "red" ? "text-red-400" : "text-green-400"} w-6 h-6`}
              />
              <div
                className={`${colorTheme === "blue" ? "text-blue-400" : colorTheme === "red" ? "text-red-400" : "text-green-400"} font-mono text-xs animate-typing animate-on-scroll`}
              >
                SCROLL_TO_CONTINUE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative" ref={(el) => (sectionRefs.current[1] = el)}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div
              className={`${colorTheme === "blue" ? "text-blue-400" : colorTheme === "red" ? "text-red-400" : "text-green-400"} font-mono text-sm mb-2 animate-typing animate-on-scroll`}
            >
              {">> ACCESSING_PERSONNEL_DATABASE <<"}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white glitch-effect">ABOUT ME</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-in-left">
              <div
                className={`relative overflow-hidden rounded-lg border ${colorTheme === "blue" ? "border-blue-500/30 shadow-blue-500/25" : colorTheme === "red" ? "border-red-500/30 shadow-red-500/25" : "border-green-500/30 shadow-green-500/25"} shadow-2xl ripple-effect click-glow cursor-pointer`}
              >
                <img
                  src="/images/carlo-portrait.png?height=400&width=400"
                  alt="Carlo Jimenez - Neural Interface Profile"
                  className="w-full max-w-sm mx-auto"
                />
                {/* <div className={`absolute inset-0 bg-gradient-to-t from-${colorTheme}-900/50 to-transparent`}></div> */}
                <div
                  className={`${colorTheme === "blue" ? "text-blue-300" : colorTheme === "red" ? "text-red-300" : "text-green-300"} absolute bottom-4 left-4 font-mono text-xs animate-typing animate-on-scroll`}
                >
                  ID: CJ_001 | STATUS: ACTIVE
                </div>
              </div>
            </div>

            <div className="space-y-6 animate-fade-in-right">
              <div
                className={`border ${colorTheme === "blue" ? "border-blue-500/30" : colorTheme === "red" ? "border-red-500/30" : "border-green-500/30"} rounded-lg p-6 bg-slate-900/50 backdrop-blur-sm`}
              >
                <div
                  className={`${colorTheme === "blue" ? "text-blue-400" : colorTheme === "red" ? "text-red-400" : "text-green-400"} font-mono text-sm mb-3 animate-typing animate-on-scroll`}
                >
                  {">> BIOGRAPHICAL_DATA"}
                </div>
                <p className="text-slate-200 text-lg leading-relaxed mb-4 animate-on-scroll">
Dedicated Fullstack Developer with extensive experience in web application development, responsive design, and system maintenance. Skilled in PHP (Laravel, WordPress, CodeIgniter), SQL, Bootstrap, and modern front-end frameworks, with a strong focus on delivering efficient and user-friendly solutions.
                </p>
                <p className="text-slate-200 text-lg leading-relaxed animate-on-scroll">
                  Adept at transforming design prototypes into functional, scalable systems while ensuring seamless collaboration and problem-solving.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div
                  className={`text-center p-4 border ${colorTheme === "blue" ? "border-blue-500/30" : colorTheme === "red" ? "border-red-500/30" : "border-green-500/30"} rounded-lg bg-slate-900/30 ripple-effect click-glow cursor-pointer animate-on-scroll`}
                >
                  <div
                    className={`${colorTheme === "blue" ? "text-blue-400" : colorTheme === "red" ? "text-red-400" : "text-green-400"} text-2xl font-bold`}
                  >
                    5+
                  </div>
                  <div
                    className={`${colorTheme === "blue" ? "text-blue-300" : colorTheme === "red" ? "text-red-300" : "text-green-300"} font-mono text-xs`}
                  >
                    YEARS_ACTIVE
                  </div>
                </div>
                <div
                  className={`text-center p-4 border ${colorTheme === "blue" ? "border-blue-500/30" : colorTheme === "red" ? "border-red-500/30" : "border-green-500/30"} rounded-lg bg-slate-900/30 ripple-effect click-glow cursor-pointer animate-on-scroll`}
                >
                  <div
                    className={`${colorTheme === "blue" ? "text-blue-400" : colorTheme === "red" ? "text-red-400" : "text-green-400"} text-2xl font-bold`}
                  >
                    30+
                  </div>
                  <div
                    className={`${colorTheme === "blue" ? "text-blue-300" : colorTheme === "red" ? "text-red-300" : "text-green-300"} font-mono text-xs`}
                  >
                    PROJECTS
                  </div>
                </div>
                <div
                  className={`text-center p-4 border ${colorTheme === "blue" ? "border-blue-500/30" : colorTheme === "red" ? "border-red-500/30" : "border-green-500/30"} rounded-lg bg-slate-900/30 ripple-effect click-glow cursor-pointer animate-on-scroll`}
                >
                  <div
                    className={`${colorTheme === "blue" ? "text-blue-400" : colorTheme === "red" ? "text-red-400" : "text-green-400"} text-2xl font-bold`}
                  >
                    80%
                  </div>
                  <div
                    className={`${colorTheme === "blue" ? "text-blue-300" : colorTheme === "red" ? "text-red-300" : "text-green-300"} font-mono text-xs`}
                  >
                    SUCCESS_RATE
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {["PROBLEM_SOLVER", "TEAM_COORDINATOR", "CONTINUOUS_LEARNER"].map((trait, index) => (
                  <Badge
                    key={trait}
                    variant="secondary"
                    className={`bg-${currentTheme.bg} text-${currentTheme.textLight} border-${currentTheme.border} font-mono text-xs ripple-effect click-glow cursor-pointer animate-on-scroll`}
                  >
                    {trait}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50"
        ref={(el) => (sectionRefs.current[2] = el)}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div
              className={`${colorTheme === "blue" ? "text-blue-400" : colorTheme === "red" ? "text-red-400" : "text-green-400"} font-mono text-sm mb-2 animate-typing animate-on-scroll`}
            >
              {">> ANALYZING_TECHNICAL_SPECIFICATIONS <<"}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white glitch-effect">TECH SPECIFICATIONS</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Frontend", "Backend", "Database", "Tools"].map((category, categoryIndex) => (
              <Card
                key={category}
                className={`bg-slate-800/50 border-${currentTheme.border} backdrop-blur-sm hover:border-${currentTheme.borderHover} transition-all duration-300 ripple-effect click-glow cursor-pointer animate-fade-in-up`}
              >
                <CardHeader className="pb-3">
                  <CardTitle
                    className={`${colorTheme === "blue" ? "text-blue-400" : colorTheme === "red" ? "text-red-400" : "text-green-400"} flex items-center gap-2 font-mono text-sm`}
                  >
                    {category === "Frontend" && <Globe className="w-4 h-4" />}
                    {category === "Backend" && <Code className="w-4 h-4" />}
                    {category === "Database" && <Database className="w-4 h-4" />}
                    {category === "Tools" && <Smartphone className="w-4 h-4" />}
                    {category.toUpperCase()}_SYSTEMS
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2 animate-on-scroll">
                        <div className="flex justify-between items-center text-sm">
                          <div className="flex items-center gap-2">
                            {skill.icon}
                            <span className="text-slate-200 font-mono">{skill.name}</span>
                          </div>
                          <span
                            className={`${colorTheme === "blue" ? "text-blue-400" : colorTheme === "red" ? "text-red-400" : "text-green-400"} font-mono`}
                          >
                            {skill.level}%
                          </span>
                        </div>
                        <div className="relative">
                          <div className="w-full bg-slate-700 rounded-full h-2 border border-slate-600">
                            <div
                              className={`${colorTheme === "blue" ? "bg-gradient-to-r from-blue-500 to-blue-600" : colorTheme === "red" ? "bg-gradient-to-r from-red-500 to-red-600" : colorTheme === "green" ? "bg-gradient-to-r from-green-500 to-green-600" : ""} h-2 rounded-full transition-all duration-1000 relative overflow-hidden`}
                              style={{ width: `${skill.level}%` }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section
        id="timeline"
        className="py-20 px-4 sm:px-6 lg:px-8 relative"
        ref={(el) => {
          sectionRefs.current[3] = el
          timelineSectionRef.current = el
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div
              className={`${colorTheme === "blue" ? "text-blue-400" : colorTheme === "red" ? "text-red-400" : "text-green-400"} font-mono text-sm mb-2 animate-typing animate-on-scroll`}
            >
              {">> RETRIEVING_SERVICE_RECORDS <<"}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white glitch-effect">WORK EXPERIENCE</h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar - Now with conditional sticky behavior */}
            <div className="lg:col-span-1">
              <div className={`sticky top-24 z-30 transition-all duration-300`}>
                <div
                  className={`bg-slate-800/50 border ${colorTheme === "blue" ? "border-blue-500/30" : colorTheme === "red" ? "border-red-500/30" : "border-green-500/30"} rounded-lg p-6 backdrop-blur-sm transition-all duration-300 ${
                    timelineSidebarSticky ? `shadow-lg shadow-${currentTheme.glow}` : ""
                  }`}
                >
                  <div
                    className={`${colorTheme === "blue" ? "text-blue-400" : colorTheme === "red" ? "text-red-400" : "text-green-400"} font-mono text-sm mb-4 animate-typing animate-on-scroll`}
                  >
                    {">> ACTIVE_DEPLOYMENT <<"}
                  </div>

                  <div className="space-y-4">
                    {workExperience.map((job, index) => (
                      <div
                        key={job.id}
                        className={`p-3 rounded-lg border transition-all duration-300 cursor-pointer ripple-effect click-glow ${
                          index === activeTimelineItem
                            ? `bg-${currentTheme.bg} border-${currentTheme.border} shadow-lg shadow-${currentTheme.glow}`
                            : `bg-slate-900/30 border-slate-700 hover:border-${currentTheme.border}`
                        }`}
                        onClick={() => setActiveTimelineItem(index)}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <img
                            src={job.image || "/placeholder.svg"}
                            alt={job.company}
                            className="w-8 h-8 rounded border border-slate-600 bg-white  object-contain"
                          />
                          <div>
                            <div
                              className={`${colorTheme === "blue" ? "text-blue-300" : colorTheme === "red" ? "text-red-300" : colorTheme === "green" ? "text-green-300" : ""} font-mono text-xs font-bold`}
                            >
                              {job.company}
                            </div>
                            <div className="text-slate-400 font-mono text-xs">{job.period.split(" - ")[0]}</div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <Badge
                            variant="secondary"
                            className={`font-mono text-xs ${
                              job.status === "ACTIVE"
                                ? `bg-green-500/20 text-green-300 border-green-500/50`
                                : `bg-slate-500/20 text-slate-300 border-slate-500/50`
                            }`}
                          >
                            {job.status}
                          </Badge>

                          {index === activeTimelineItem && (
                            <div
                              className={`${colorTheme === "blue" ? "bg-blue-400" : colorTheme === "red" ? "bg-red-400" : colorTheme === "green" ? "bg-green-400" : ""} w-2 h-2 rounded-full animate-pulse`}
                            ></div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Progress indicator */}
                  <div className="mt-6 pt-4 border-t border-slate-700">
                    <div
                      className={`${colorTheme === "blue" ? "text-blue-400" : colorTheme === "red" ? "text-red-400" : colorTheme === "green-400"} font-mono text-xs mb-2`}
                    >
                      WORK_EXPERIENCE_PROGRESS
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className={`${colorTheme === "blue" ? "bg-gradient-to-r from-blue-500 to-blue-600" : colorTheme === "red" ? "bg-gradient-to-r from-red-500 to-red-600" : colorTheme === "green" ? "bg-gradient-to-r from-green-500 to-green-600" : ""} h-2 rounded-full transition-all duration-500`}
                        style={{ width: `${((activeTimelineItem + 1) / workExperience.length) * 100}%` }}
                      ></div>
                    </div>
                    <div
                      className={`${colorTheme === "blue" ? "text-blue-300" : colorTheme === "red" ? "text-red-300" : colorTheme === "green-300"} font-mono text-xs mt-1`}
                    >
                      {activeTimelineItem + 1} / {workExperience.length} VIEWED
                    </div>
                  </div>

                  {/* Sticky indicator */}
                  {timelineSidebarSticky && (
                    <div className={`mt-4 pt-4 border-t border-slate-700`}>
                      <div
                        className={`${colorTheme === "blue" ? "text-blue-300" : colorTheme === "red" ? "text-red-300" : colorTheme === "green-300"} flex items-center gap-2 font-mono text-xs`}
                      >
                        <div
                          className={`${colorTheme === "blue" ? "bg-blue-400" : colorTheme === "red" ? "bg-red-400" : colorTheme === "green-400"} w-2 h-2 rounded-full animate-pulse`}
                        ></div>
                        <span>TRACKING_MODE: ACTIVE</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Main Timeline Content */}
            <div className="lg:col-span-3">
              <div className="relative scrollable-invisible">
                {/* Timeline line */}
                <div
                  className={`absolute left-8 top-0 bottom-0 w-0.5 ${colorTheme === "blue" ? "bg-gradient-to-b from-blue-500 via-blue-400 to-blue-500" : colorTheme === "red" ? "bg-gradient-to-b from-red-500 via-red-400 to-red-500" : colorTheme === "green" ? "bg-gradient-to-b from-green-500 via-green-400 to-green-500" : ""} timeline-line opacity-30`}
                ></div>

                <div className="space-y-12">
                  {workExperience.map((job, index) => (
                    <div
                      key={job.id}
                      className={`relative transition-all duration-500 ${
                        index === activeTimelineItem ? "animate-fade-in-up" : "opacity-50"
                      }`}
                    >
                      {/* Timeline dot */}
                      <div
                        className={`absolute left-6 w-4 h-4 rounded-full border-2 ${colorTheme === "blue" ? "border-blue-500" : colorTheme === "red" ? "border-red-500" : colorTheme === "green-500"} ${
                          index === activeTimelineItem
                            ? `${colorTheme === "blue" ? "bg-blue-500 shadow-lg shadow-blue-500/25" : colorTheme === "red" ? "bg-red-500 shadow-lg shadow-red-500/25" : colorTheme === "green" ? "bg-green-500 shadow-lg shadow-green-500/25" : ""} timeline-pulse`
                            : "bg-slate-800"
                        }`}
                      ></div>

                      {/* Content card */}
                      <div className="ml-16">
                        <Card
                          className={`bg-slate-800/50 border-${currentTheme.border} backdrop-blur-sm hover:border-${currentTheme.borderHover} transition-all duration-300 ${
                            index === activeTimelineItem ? `shadow-lg shadow-${currentTheme.glow}` : ""
                          }`}
                        >
                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <div className="flex items-center gap-4">
                                <img
                                  src={job.image || "/placeholder.svg"}
                                  alt={job.company}
                                  className="w-12 h-12 rounded-lg border border-slate-600 bg-white  object-contain"
                                />
                                <div>
                                  <CardTitle
                                    className={`${colorTheme === "blue" ? "text-blue-300" : colorTheme === "red" ? "text-red-300" : colorTheme === "green-300"} font-mono text-lg flex items-center gap-2`}
                                  >
                                    <Building2 className="w-5 h-5" />
                                    {job.company}
                                  </CardTitle>
                                  <div
                                    className={`${colorTheme === "blue" ? "text-blue-400" : colorTheme === "red" ? "text-red-400" : colorTheme === "green-400"} font-mono text-sm`}
                                  >
                                    {job.position}
                                  </div>
                                  <div className="flex items-center gap-2 mt-1">
                                    <Clock className="w-4 h-4 text-slate-400" />
                                    <span className="text-slate-400 font-mono text-xs">{job.period}</span>
                                  </div>
                                </div>
                              </div>

                              <Badge
                                variant="secondary"
                                className={`font-mono text-xs ${
                                  job.status === "ACTIVE"
                                    ? `bg-green-500/20 text-green-300 border-green-500/50`
                                    : `bg-slate-500/20 text-slate-300 border-slate-500/50`
                                }`}
                              >
                                {job.status}
                              </Badge>
                            </div>
                          </CardHeader>

                          <CardContent className="space-y-6">
                            <div>
                              <div
                                className={`${colorTheme === "blue" ? "text-blue-400" : colorTheme === "red" ? "text-red-400" : colorTheme === "green-400"} font-mono text-sm mb-2 animate-typing animate-on-scroll`}
                              >
                                {">> SUMMARY_BRIEFING"}
                              </div>
                              <p className="text-slate-200 leading-relaxed animate-on-scroll">{job.description}</p>
                            </div>

                            <div>
                              <div
                                className={`${colorTheme === "blue" ? "text-blue-400" : colorTheme === "red" ? "text-red-400" : colorTheme === "green-400"} font-mono text-sm mb-3 animate-typing animate-on-scroll`}
                              >
                                {">> TECHNOLOGY_STACK"}
                              </div>
                              <div className="space-y-2">
                                {job.technologies.map((tech, techIndex) => (
                                  <div
                                    key={techIndex}
                                    className={`flex items-center gap-2 text-slate-300 font-mono text-sm p-2 bg-slate-900/30 border border-slate-700 rounded animate-on-scroll`}
                                  >
                                    <Code className="w-4 h-4 text-slate-400" />
                                    {tech}
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div>
                              <div
                                className={`${colorTheme === "blue" ? "text-blue-400" : colorTheme === "red" ? "text-red-400" : colorTheme === "green-400"} font-mono text-sm mb-3 animate-typing animate-on-scroll`}
                              >
                                {">> MISSION_ACHIEVEMENTS"}
                              </div>
                              <div className="space-y-2">
                                {job.achievements.map((achievement, achIndex) => (
                                  <div
                                    key={achIndex}
                                    className={`flex items-center gap-2 text-slate-300 font-mono text-sm animate-on-scroll`}
                                  >
                                    <CheckCircle
                                      className={`${colorTheme === "blue" ? "text-blue-400" : colorTheme === "red" ? "text-red-400" : colorTheme === "green-400"} w-4 h-4`}
                                    />
                                    {achievement}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section with Tabs */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8" ref={(el) => (sectionRefs.current[4] = el)}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div
              className={`${colorTheme === "blue" ? "text-blue-400" : colorTheme === "red" ? "text-red-400" : colorTheme === "green-400"} font-mono text-sm mb-2 animate-typing animate-on-scroll`}
            >
              {">> RETRIEVING_PROJECT_ARCHIVES <<"}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white glitch-effect">PROJECTS</h2>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8 ">
            <div
              className={`bg-slate-800/50 border ${colorTheme === "blue" ? "border-blue-500/30" : colorTheme === "red" ? "border-red-500/30" : colorTheme === "green-500/30"} rounded-lg p-1 backdrop-blur-sm flex flex-row`}
            >
              <button
                onClick={() => setActiveProjectTab("projects")}
                className={`px-6 py-3 font-mono text-sm transition-all duration-300 rounded-md flex items-center gap-2 ripple-effect click-glow ${
                  activeProjectTab === "projects"
                    ? `${colorTheme === "blue" ? "bg-blue-500 shadow-blue-500/25" : colorTheme === "red" ? "bg-red-500 shadow-red-500/25" : colorTheme === "green" ? "bg-green-500 shadow-green-500/25" : ""} text-slate-900 shadow-lg`
                    : `${colorTheme === "blue" ? "text-blue-300 hover:bg-blue-500/10 hover:text-blue-400" : colorTheme === "red" ? "text-red-300 hover:bg-red-500/10 hover:text-red-400" : colorTheme === "green" ? "text-green-300 hover:bg-green-500/10 hover:text-green-400" : ""}`
                }`}
              >
                <List className="w-4 h-4" />
                PROJECTS_ARCHIVES
              </button>
              <button
                onClick={() => setActiveProjectTab("gallery")}
                className={`px-6 py-3 font-mono text-sm transition-all duration-300 rounded-md flex items-center gap-2 ripple-effect click-glow ${
                  activeProjectTab === "gallery"
                    ? `${colorTheme === "blue" ? "bg-blue-500 shadow-blue-500/25" : colorTheme === "red" ? "bg-red-500 shadow-red-500/25" : colorTheme === "green" ? "bg-green-500 shadow-green-500/25" : ""} text-slate-900 shadow-lg`
                    : `${colorTheme === "blue" ? "text-blue-300 hover:bg-blue-500/10 hover:text-blue-400" : colorTheme === "red" ? "text-red-300 hover:bg-red-500/10 hover:text-red-400" : colorTheme === "green" ? "text-green-300 hover:bg-green-500/10 hover:text-green-400" : ""}`
                }`}
              >
                <Grid className="w-4 h-4" />
                VISUAL_ARCHIVES
              </button>
            </div>
          </div>

          {/* Projects Tab Content */}
          {activeProjectTab === "projects" && (
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className={`bg-slate-800/50 border-${currentTheme.border} backdrop-blur-sm overflow-hidden group hover:border-${currentTheme.borderHover} transition-all duration-300 hover:shadow-lg hover:shadow-${currentTheme.glow} ripple-effect click-glow cursor-pointer animate-fade-in-up`}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <Badge
                        className={`bg-${currentTheme.bg} text-${currentTheme.textLight} border-${currentTheme.border} font-mono text-xs`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <div
                      className={`${colorTheme === "blue" ? "text-blue-300" : colorTheme === "red" ? "text-red-300" : colorTheme === "green-300"} absolute bottom-4 left-4 font-mono text-xs animate-typing animate-on-scroll`}
                    >
                      MISSION_ID: {String(index + 1).padStart(3, "0")}
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle
                      className={`${colorTheme === "blue" ? "text-blue-400" : colorTheme === "red" ? "text-red-400" : colorTheme === "green-400"} font-mono text-lg`}
                    >
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-slate-200 animate-on-scroll">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className={`bg-${currentTheme.bg} text-${currentTheme.textLight} border-${currentTheme.border} font-mono text-xs ripple-effect click-glow cursor-pointer animate-on-scroll`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className={`border-${currentTheme.border} text-${currentTheme.text} hover:bg-${currentTheme.primary} hover:text-slate-900 font-mono text-xs flex-1 ripple-effect click-glow`}
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3 h-3 mr-2" />
                          SOURCE_CODE
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        className={`bg-${currentTheme.primary} hover:bg-${currentTheme.primaryHover} text-slate-900 font-mono text-xs flex-1 ripple-effect click-glow`}
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-2" />
                          DEPLOY_DEMO
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Gallery Tab Content */}
          {activeProjectTab === "gallery" && (
            <div>
              {/* Gallery Filter */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {galleryCategories.map((category, index) => (
                  <button
                    key={category.id}
                    onClick={() => setGalleryFilter(category.id)}
                    className={`px-4 py-2 font-mono text-xs transition-all duration-300 rounded-md flex items-center gap-2 ripple-effect click-glow animate-fade-in-up ${
                      galleryFilter === category.id
                        ? `${colorTheme === "blue" ? "bg-blue-500 shadow-blue-500/25" : colorTheme === "red" ? "bg-red-500 shadow-red-500/25" : colorTheme === "green" ? "bg-green-500 shadow-green-500/25" : ""} text-slate-900 shadow-lg`
                        : `bg-slate-800/50 text-${currentTheme.textLight} border border-${currentTheme.border} hover:bg-${currentTheme.bgHover} hover:text-${currentTheme.text}`
                    }`}
                  >
                    <Filter className="w-3 h-3" />
                    {category.label} ({category.count})
                  </button>
                ))}
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredGalleryImages.map((image, index) => (
                  <Dialog key={image.id}>
                    <DialogTrigger asChild>
                      <div
                        className={`group cursor-pointer bg-slate-800/50 border ${colorTheme === "blue" ? "border-blue-500/30" : colorTheme === "red" ? "border-red-500/30" : colorTheme === "green-500/30"} rounded-lg overflow-hidden hover:border-${currentTheme.borderHover} transition-all duration-300 hover:shadow-lg hover:shadow-${currentTheme.glow} ripple-effect click-glow animate-fade-in-up`}
                      >
                        <div className="relative overflow-hidden">
                          <img
                            src={image.src || "/placeholder.svg"}
                            alt={image.title}
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3
                              className={`${colorTheme === "blue" ? "text-blue-300" : colorTheme === "red" ? "text-red-300" : colorTheme === "green-300"} font-mono text-xs font-bold mb-1 animate-typing animate-on-scroll`}
                            >
                              {image.title}
                            </h3>
                            <p className="text-slate-300 text-xs line-clamp-2">{image.description}</p>
                          </div>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-full bg-slate-950/95 backdrop-blur-sm border-2 border-blue-500/30 p-0">
                      <div className="relative">
                        <img
                          src={image.src || "/placeholder.svg"}
                          alt={image.title}
                          className="w-full h-auto max-h-[80vh] object-contain"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-6">
                          <h2
                            className={`${colorTheme === "blue" ? "text-blue-300" : colorTheme === "red" ? "text-red-300" : colorTheme === "green-300"} font-mono text-xl font-bold mb-2 animate-typing animate-on-scroll`}
                          >
                            {image.title}
                          </h2>
                          <p className="text-slate-300 text-sm animate-on-scroll">{image.description}</p>
                          <Badge
                            className={`mt-3 bg-${currentTheme.bg} text-${currentTheme.textLight} border-${currentTheme.border} font-mono text-xs`}
                          >
                            {image.category.toUpperCase().replace("-", "_")}
                          </Badge>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50"
        ref={(el) => (sectionRefs.current[5] = el)}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`${colorTheme === "blue" ? "text-blue-400" : colorTheme === "red" ? "text-red-400" : colorTheme === "green-400"} font-mono text-sm mb-2 animate-typing animate-on-scroll`}
          >
            {">> ESTABLISHING_COMMUNICATION_PROTOCOLS <<"}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 glitch-effect">CONTACT</h2>

          <div
            className={`border ${colorTheme === "blue" ? "border-blue-500/30" : colorTheme === "red" ? "border-red-500/30" : colorTheme === "green-500/30"} rounded-lg p-8 bg-slate-800/30 backdrop-blur-sm mb-8 animate-fade-in-up`}
          >
            <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto animate-on-scroll">
              Ready to collaborate on your next mission? Establish secure communication channel for project briefings,
              technical consultations, or strategic partnerships.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8 animate-on-scroll">
              <Button
                onClick={() => setShowContactModal(true)}
                className={`${colorTheme === "blue" ? "bg-blue-500 hover:bg-blue-600 border-blue-400/50 shadow-blue-500/25 hover:shadow-blue-500/40" : colorTheme === "red" ? "bg-red-500 hover:bg-red-600 border-red-400/50 shadow-red-500/25 hover:shadow-red-500/40" : colorTheme === "green" ? "bg-green-500 hover:bg-green-600 border-green-400/50 shadow-green-500/25 hover:shadow-green-500/40" : ""} text-slate-900 font-semibold px-8 py-3 text-lg font-mono transition-all duration-300 ripple-effect click-glow`}
              >
                <Mail className="w-5 h-5 mr-2" />
                SEND_TRANSMISSION
              </Button>

              <div className="flex gap-4">
                {/* <Button
                  variant="outline"
                  size="icon"
                  className={`border-${currentTheme.border} text-${currentTheme.text} hover:bg-${currentTheme.primary} hover:text-slate-900 w-12 h-12 ripple-effect click-glow`}
                  asChild
                >
                  <a href="https://github.com/jimenez-carlo" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </a>
                </Button> */}
                <Button
                  variant="outline"
                  size="icon"
                  className={`border-${currentTheme.border} text-${currentTheme.text} hover:bg-${currentTheme.primary} hover:text-slate-900 w-12 h-12 ripple-effect click-glow`}
                  asChild
                >
                  <a href="https://www.linkedin.com/in/carlo-jimenez-28318520" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>

            <div
              className={`${colorTheme === "blue" ? "text-blue-300" : colorTheme === "red" ? "text-red-300" : "text-green-300"} font-mono text-sm space-y-2 animate-on-scroll`}
            >
              <div className="flex items-center justify-center space-x-2">
                <div
                  className={`${colorTheme === "blue" ? "bg-blue-400" : colorTheme === "red" ? "bg-red-400" : colorTheme === "green-400"} w-2 h-2 rounded-full animate-pulse`}
                ></div>
                <span className="animate-typing animate-on-scroll">NEURAL_LINK_STATUS: ACTIVE</span>
              </div>
              <p>© 2024 Carlo Jimenez | Built with Next.js Quantum Framework & Tailwind Neural CSS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <Dialog open={showContactModal} onOpenChange={setShowContactModal}>
        <DialogContent
          className={`max-w-4xl bg-slate-950/95 backdrop-blur-sm border-2 border-${currentTheme.border} p-0`}
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left side - Contact Form */}
            <div className="p-6">
              <DialogHeader className="mb-6">
                <DialogTitle
                  className={`${colorTheme === "blue" ? "text-blue-300" : colorTheme === "red" ? "text-red-300" : "text-green-300"} font-mono text-xl font-bold animate-typing animate-on-scroll`}
                >
                  ESTABLISH_COMM_LINK
                </DialogTitle>
                <div
                  className={`${colorTheme === "blue" ? "text-blue-400" : colorTheme === "red" ? "text-red-400" : "text-green-400"} font-mono text-sm animate-typing animate-on-scroll`}
                >
                  {">> SECURE_TRANSMISSION_PROTOCOL <<"}
                </div>
              </DialogHeader>

              <form className="space-y-4">
                <div className="space-y-2 animate-on-scroll">
                  <Label
                    htmlFor="name"
                    className={`${colorTheme === "blue" ? "text-blue-300" : colorTheme === "red" ? "text-red-300" : "text-green-300"} font-mono text-sm`}
                  >
                    YOUR_NAME
                  </Label>
                  <Input
                  autoComplete="off"
                    id="name"
                    placeholder="Enter your alias..."
                    className={`bg-slate-800/50 border-${currentTheme.border} text-slate-200 placeholder:text-slate-400 font-mono text-sm`}
                  />
                </div>

                <div className="space-y-2 animate-on-scroll">
                  <Label
                    htmlFor="email"
                    className={`${colorTheme === "blue" ? "text-blue-300" : colorTheme === "red" ? "text-red-300" : "text-green-300"} font-mono text-sm`}
                  >
                    EMAIL_ADDRESS
                  </Label>
                  <Input
                  autoComplete="off"
                    id="email"
                    type="email"
                    placeholder="operative@domain.com"
                    className={`bg-slate-800/50 border-${currentTheme.border} text-slate-200 placeholder:text-slate-400 font-mono text-sm`}
                  />
                </div>

                <div className="space-y-2 animate-on-scroll">
                  <Label
                    htmlFor="subject"
                    className={`${colorTheme === "blue" ? "text-blue-300" : colorTheme === "red" ? "text-red-300" : "text-green-300"} font-mono text-sm`}
                  >
                    SUBJECT
                  </Label>
                  <Input
                  autoComplete="off"
                    id="subject"
                    placeholder="Project consultation, collaboration..."
                    className={`bg-slate-800/50 border-${currentTheme.border} text-slate-200 placeholder:text-slate-400 font-mono text-sm`}
                  />
                </div>

                <div className="space-y-2 animate-on-scroll">
                  <Label
                    htmlFor="message"
                    className={`${colorTheme === "blue" ? "text-blue-300" : colorTheme === "red" ? "text-red-300" : "text-green-300"} font-mono text-sm`}
                  >
                    DESCRIPTION
                  </Label>
                  <Textarea
                    autoComplete="off"
                    id="message"
                    placeholder="Describe your objectives and inquiries..."
                    rows={4}
                    className={`bg-slate-800/50 border-${currentTheme.border} text-slate-200 placeholder:text-slate-400 font-mono text-sm resize-none`}
                  />
                </div>

                <Button
                  type="submit"
                  className={`${colorTheme === "blue" ? "bg-blue-500 hover:bg-blue-600" : colorTheme === "red" ? "bg-red-500 hover:bg-red-600" : colorTheme === "green" ? "bg-green-500 hover:bg-green-600" : ""} text-slate-900 font-mono text-sm py-3 ripple-effect click-glow animate-on-scroll`}
                >
                  <Send className="w-4 h-4 mr-2" />
                  TRANSMIT_MESSAGE
                </Button>
              </form>

              {/* Contact Info */}
              <div className="mt-6 pt-6 border-t border-slate-700">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div
                    className={`p-3 bg-slate-800/30 border ${colorTheme === "blue" ? "border-blue-500/30" : colorTheme === "red" ? "border-red-500/30" : colorTheme === "green-500/30"} rounded-lg animate-on-scroll`}
                  >
                    <Phone
                      className={`${colorTheme === "blue" ? "text-blue-400" : colorTheme === "red" ? "text-red-400" : colorTheme === "green-400"} w-5 h-5 mx-auto mb-2`}
                    />
                    <div
                      className={`${colorTheme === "blue" ? "text-blue-300" : colorTheme === "red" ? "text-red-300" : colorTheme === "green-300"} font-mono text-xs mb-1`}
                    >
                      DIRECT_COMM
                    </div>
                    <div className="text-slate-300 text-xs">+63 9 217 635 295</div>
                  </div>
                  <div
                    className={`p-3 bg-slate-800/30 border ${colorTheme === "blue" ? "border-blue-500/30" : colorTheme === "red" ? "border-red-500/30" : colorTheme === "green-500/30"} rounded-lg animate-on-scroll`}
                  >
                    <MapPin
                      className={`${colorTheme === "blue" ? "text-blue-400" : colorTheme === "red" ? "text-red-400" : colorTheme === "green-400"} w-5 h-5 mx-auto mb-2`}
                    />
                    <div
                      className={`${colorTheme === "blue" ? "text-blue-300" : colorTheme === "red" ? "text-red-300" : colorTheme === "green-300"} font-mono text-xs mb-1`}
                    >
                      COORDINATES
                    </div>
                    <div className="text-slate-300 text-xs">Manila, PH</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Map */}
            <div
              className={`bg-slate-800/50 border-l ${colorTheme === "blue" ? "border-blue-500/30" : colorTheme === "red" ? "border-red-500/30" : colorTheme === "green-500/30"} relative`}
            >
              <div className="h-full min-h-[500px] relative">
                {/* Dummy Google Map Embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4768.673459009735!2d120.45484977513031!3d15.807534284834658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339149a49e89ed21%3A0x9845cf528eb6aa42!2sCJ%20Programmer!5e1!3m2!1sen!2sph!4v1750925618590!5m2!1sen!2sph"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>

                {/* Map overlay */}
                <div className={`absolute inset-0 bg-${colorTheme}-900/20 pointer-events-none`}></div>

                {/* Map info overlay */}
                <div className="absolute top-4 left-4 right-4">
                  <div
                    className={`bg-slate-900/90 backdrop-blur-sm border ${colorTheme === "blue" ? "border-blue-500/30" : colorTheme === "red" ? "border-red-500/30" : colorTheme === "green-500/30"} rounded-lg p-4`}
                  >
                    <div
                      className={`${colorTheme === "blue" ? "text-blue-300" : colorTheme === "red" ? "text-red-300" : colorTheme === "green-300"} font-mono text-sm font-bold mb-2 animate-typing animate-on-scroll`}
                    >
                      TACTICAL_COORDINATES
                    </div>
                    <div className="text-slate-300 font-mono text-xs space-y-1 animate-on-scroll">
                      <div>LAT: 14.5995° N</div>
                      <div>LON: 120.9842° E</div>
                      <div
                        className={`${colorTheme === "blue" ? "text-blue-400" : colorTheme === "red" ? "text-red-400" : colorTheme === "green-400"}`}
                      >
                        STATUS: OPERATIONAL_ZONE
                      </div>
                    </div>
                  </div>
                </div>

                {/* Available times */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div
                    className={`bg-slate-900/90 backdrop-blur-sm border ${colorTheme === "blue" ? "border-blue-500/30" : colorTheme === "red" ? "border-red-500/30" : colorTheme === "green-500/30"} rounded-lg p-4`}
                  >
                    <div
                      className={`${colorTheme === "blue" ? "text-blue-300" : colorTheme === "red" ? "text-red-300" : colorTheme === "green-300"} font-mono text-sm font-bold mb-2 flex items-center gap-2 animate-typing animate-on-scroll`}
                    >
                      <Calendar className="w-4 h-4" />
                      AVAILABLE_SLOTS
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {availableDates.slice(0, 6).map((date, index) => (
                        <div
                          key={date}
                          className={`${colorTheme === "blue" ? "text-blue-300" : colorTheme === "red" ? "text-red-300" : colorTheme === "green-300"} text-center p-2 bg-slate-800/50 border ${colorTheme === "blue" ? "border-blue-500/30" : colorTheme === "red" ? "border-red-500/30" : colorTheme === "green-500/30"} rounded font-mono text-xs animate-on-scroll`}
                        >
                          {new Date(date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* StarCraft-style Sticky Bottom UI */}
      {showStickyUI && (
        <div
          className={`fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-t from-slate-950 via-slate-900 to-slate-900/95 border-t-2 ${colorTheme === "blue" ? "border-blue-500/30 shadow-blue-500/25" : colorTheme === "red" ? "border-red-500/30 shadow-red-500/25" : colorTheme === "green-500/30 shadow-green-500/25"} backdrop-blur-sm shadow-2xl animate-in slide-in-from-bottom duration-500`}
        >
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              {/* Left side - Minimap style navigation */}
              <div className="flex items-center space-x-4">
                <div
                  className={`w-16 h-16 bg-slate-800 border ${colorTheme === "blue" ? "border-blue-500/30" : colorTheme === "red" ? "border-red-500/30" : colorTheme === "green-500/30"} rounded-lg p-1 relative overflow-hidden ripple-effect click-glow cursor-pointer`}
                >
                  <div
                    className={`w-full h-full bg-gradient-to-br from-${colorTheme}-900/50 to-slate-900 rounded border ${colorTheme === "blue" ? "border-blue-400/20" : colorTheme === "red" ? "border-red-400/20" : colorTheme === "green-400/20"} relative`}
                  >
                    <div
                      className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=20 height=20 viewBox=0 0 20 20 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23${colorTheme === "blue" ? "6366f1" : colorTheme === "red" ? "ef4444" : "22c55e"} fillOpacity=0.1%3E%3Ccircle cx=3 cy=3 r=1/%3E%3Ccircle cx=13 cy=13 r=1/%3E%3Ccircle cx=7 cy=17 r=1/%3E%3C/g%3E%3C/svg%3E')] bg-repeat`}
                    ></div>
                    <div
                      className={`${colorTheme === "blue" ? "bg-blue-400" : colorTheme === "red" ? "bg-red-400" : colorTheme === "green-400"} absolute top-1 left-1 w-2 h-2 rounded-full animate-pulse`}
                    ></div>
                    <div className="absolute bottom-1 right-1 w-1 h-1 bg-green-400 rounded-full"></div>
                  </div>
                  <div
                    className={`absolute -inset-1 ${colorTheme === "blue" ? "bg-blue-500/10" : colorTheme === "red" ? "bg-red-500/10" : colorTheme === "green-500/10"} rounded-lg blur-sm -z-10`}
                  ></div>
                </div>

                <div className="space-y-1">
                  <div
                    className={`${colorTheme === "blue" ? "text-blue-400" : colorTheme === "red" ? "text-red-400" : colorTheme === "green-400"} font-mono text-xs animate-typing animate-on-scroll`}
                  >
                    NEURAL_LINK_ACTIVE
                  </div>
                  <div
                    className={`${colorTheme === "blue" ? "text-blue-300" : colorTheme === "red" ? "text-red-300" : colorTheme === "green-300"} font-mono text-xs opacity-75`}
                  >
                    SECTION: {activeSection.toUpperCase()}
                  </div>
                </div>
              </div>

              {/* Center - Portrait and Info */}
              <div
                className={`flex items-center space-x-4 bg-slate-800/50 border ${colorTheme === "blue" ? "border-blue-500/30" : colorTheme === "red" ? "border-red-500/30" : colorTheme === "green-500/30"} rounded-lg p-2 ripple-effect click-glow cursor-pointer`}
              >
                <div className="relative">
                  <div
                    className={`w-12 h-12 rounded-lg overflow-hidden border-2 ${colorTheme === "blue" ? "border-blue-500/30 shadow-blue-500/25" : colorTheme === "red" ? "border-red-500/30 shadow-red-500/25" : colorTheme === "green-500/30 shadow-green-500/25"}`}
                  >
                    <img
                      src="/images/carlo-portrait.png?height=400&width=400"
                      alt="Carlo Jimenez - Neural Interface"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div
                    className={`absolute -inset-1 ${colorTheme === "blue" ? "bg-blue-500/20" : colorTheme === "red" ? "bg-red-500/20" : colorTheme === "green-500/20"} rounded-lg blur-sm -z-10`}
                  ></div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border border-slate-900 animate-pulse"></div>
                </div>

                <div className="space-y-1">
                  <div className="text-white font-mono text-sm font-bold">CARLO_JIMENEZ</div>
                  <div
                    className={`${colorTheme === "blue" ? "text-blue-300" : colorTheme === "red" ? "text-red-300" : colorTheme === "green-300"} font-mono text-xs`}
                  >
                    SR_FULLSTACK_DEV
                  </div>
                </div>
              </div>

              {/* Right side - Quick Actions */}
              <div className="flex items-center space-x-2">
                <Button
                  onClick={() => setShowContactModal(true)}
                  size="sm"
                  className={`bg-${currentTheme.bg} hover:bg-${currentTheme.primary} text-${currentTheme.textLight} hover:text-slate-900 border border-${currentTheme.border} font-mono text-xs px-3 py-2 transition-all duration-300 ripple-effect click-glow`}
                >
                  CONTACT FORM
                </Button>

                
                <Button
                  onClick={() => scrollToSection("projects")}
                  size="sm"
                  className={`bg-green-500/20 hover:bg-green-500 text-green-300 hover:text-slate-900 border border-green-500/50 font-mono text-xs px-3 py-2 transition-all duration-300 ripple-effect click-glow`}
                >
                  PROJECTS
                </Button>

                {/* Resource indicators */}
                <div className="flex flex-col space-y-1 ml-4">
                  <div className="flex items-center space-x-2 text-xs font-mono">
                    <div
                      className={`${colorTheme === "blue" ? "bg-blue-400" : colorTheme === "red" ? "bg-red-400" : colorTheme === "green-400"} w-2 h-2 rounded-full`}
                    ></div>
                    <span
                      className={`${colorTheme === "blue" ? "text-blue-300" : colorTheme === "red" ? "text-red-300" : colorTheme === "green-300"}`}
                    >
                      ON-GOING: 3+
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-mono">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-green-300">PROJECTS: 20+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom accent line */}
          <div
            className={`h-1 ${colorTheme === "blue" ? "bg-gradient-to-r from-transparent via-blue-500 to-transparent" : colorTheme === "red" ? "bg-gradient-to-r from-transparent via-red-500 to-transparent" : "bg-gradient-to-r from-transparent via-green-500 to-transparent"}`}
          ></div>
        </div>
      )}
    </div>
  )
}
