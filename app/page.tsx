"use client"

import { useState, useEffect } from "react"
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
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [systemStatus, setSystemStatus] = useState("INITIALIZING...")
  const [showStickyUI, setShowStickyUI] = useState(false)

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
      const sections = ["home", "about", "skills", "projects", "contact"]
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
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const skills = [
    { name: "JavaScript", level: 90, category: "Frontend", icon: <Code className="w-4 h-4" /> },
    { name: "TypeScript", level: 85, category: "Frontend", icon: <Code className="w-4 h-4" /> },
    { name: "React", level: 90, category: "Frontend", icon: <Zap className="w-4 h-4" /> },
    { name: "Next.js", level: 85, category: "Frontend", icon: <Zap className="w-4 h-4" /> },
    { name: "Vue.js", level: 80, category: "Frontend", icon: <Shield className="w-4 h-4" /> },
    { name: "Node.js", level: 85, category: "Backend", icon: <Cpu className="w-4 h-4" /> },
    { name: "PHP", level: 80, category: "Backend", icon: <Cpu className="w-4 h-4" /> },
    { name: "Laravel", level: 85, category: "Backend", icon: <Shield className="w-4 h-4" /> },
    { name: "MySQL", level: 80, category: "Database", icon: <Database className="w-4 h-4" /> },
    { name: "MongoDB", level: 75, category: "Database", icon: <Database className="w-4 h-4" /> },
    { name: "Git", level: 85, category: "Tools", icon: <Code className="w-4 h-4" /> },
    { name: "Docker", level: 70, category: "Tools", icon: <Cpu className="w-4 h-4" /> },
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

  const techStack = [
    { name: "JavaScript", icon: "JS", color: "from-yellow-500 to-yellow-600" },
    { name: "TypeScript", icon: "TS", color: "from-blue-500 to-blue-600" },
    { name: "React", icon: "⚛️", color: "from-cyan-500 to-cyan-600" },
    { name: "Next.js", icon: "▲", color: "from-slate-500 to-slate-600" },
    { name: "Vue.js", icon: "V", color: "from-green-500 to-green-600" },
    { name: "Node.js", icon: "⬢", color: "from-green-600 to-green-700" },
    { name: "PHP", icon: "🐘", color: "from-purple-500 to-purple-600" },
    { name: "Laravel", icon: "L", color: "from-red-500 to-red-600" },
    { name: "MySQL", icon: "🗄️", color: "from-orange-500 to-orange-600" },
    { name: "MongoDB", icon: "🍃", color: "from-green-500 to-green-600" },
    { name: "Docker", icon: "🐳", color: "from-blue-600 to-blue-700" },
    { name: "Git", icon: "📝", color: "from-orange-600 to-red-600" },
    { name: "AWS", icon: "☁️", color: "from-orange-500 to-yellow-500" },
    { name: "Python", icon: "🐍", color: "from-blue-500 to-yellow-500" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 relative overflow-hidden">
      {/* StarCraft-style background elements */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=80 height=80 viewBox=0 0 80 80 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%236366f1 fillOpacity=0.1%3E%3Cpath d=M40 40l20-20v40l-20-20zm0 0l-20-20v40l20-20z/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
      </div>

      {/* Hexagonal grid overlay */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=52 viewBox=0 0 60 52 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%236366f1 fillOpacity=0.05%3E%3Cpath d=M30 0l15 26-15 26L15 26 30 0zm0 8L19 26l11 18 11-18L30 8z/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-sm border-b border-blue-500/30 shadow-lg shadow-blue-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-lg border border-blue-400/50 shadow-lg shadow-blue-500/25">
                  CJ
                </div>
                <div className="absolute -inset-1 bg-blue-500/20 rounded-lg blur-sm -z-10"></div>
              </div>
              <div className="hidden sm:block">
                <span className="text-blue-400 font-mono text-xs">{"< NEURAL_LINK_ESTABLISHED />"}</span>
                <div className="text-blue-300 font-mono text-xs opacity-75">{systemStatus}</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                {[
                  { id: "home", label: "COMMAND_CENTER" },
                  { id: "about", label: "PERSONNEL_FILE" },
                  { id: "skills", label: "TECH_SPECS" },
                  { id: "projects", label: "MISSION_LOG" },
                  { id: "contact", label: "COMM_LINK" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 text-xs font-mono font-medium transition-all duration-300 relative ${
                      activeSection === item.id
                        ? "bg-blue-500/20 text-blue-300 border border-blue-500/50 shadow-lg shadow-blue-500/25"
                        : "text-blue-100/70 hover:bg-blue-500/10 hover:text-blue-400 border border-transparent"
                    } rounded-sm`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <div className="absolute -inset-1 bg-blue-500/10 rounded-sm blur-sm -z-10"></div>
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
                className="text-blue-400 hover:bg-blue-500/20 border border-blue-500/30"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-950/98 backdrop-blur-sm border-t border-blue-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {[
                { id: "home", label: "COMMAND_CENTER" },
                { id: "about", label: "PERSONNEL_FILE" },
                { id: "skills", label: "TECH_SPECS" },
                { id: "projects", label: "MISSION_LOG" },
                { id: "contact", label: "COMM_LINK" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 text-sm font-mono font-medium w-full text-left transition-colors ${
                    activeSection === item.id
                      ? "bg-blue-500/20 text-blue-300 border-l-2 border-blue-500"
                      : "text-blue-100/70 hover:bg-blue-500/10 hover:text-blue-400"
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
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center z-10 max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-8">
            {/* Left side - Profile Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative w-48 h-48 lg:w-56 lg:h-56">
                {/* Main portrait */}
                <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-blue-500/50 shadow-2xl shadow-blue-500/25 bg-slate-800">
                  <img
                    src="/images/carlo-portrait.png"
                    alt="Carlo Jimenez - Senior Fullstack Developer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                </div>

                {/* Glowing border effect */}
                <div className="absolute -inset-2 bg-blue-500/10 rounded-2xl blur-xl -z-10"></div>

                {/* StarCraft-style corner brackets */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-blue-400"></div>
                <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-blue-400"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-blue-400"></div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-blue-400"></div>

                {/* Status indicator */}
                <div className="absolute top-3 right-3 w-4 h-4 bg-green-400 rounded-full border-2 border-slate-900 animate-pulse shadow-lg shadow-green-400/50"></div>

                {/* ID Badge */}
                <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-sm border border-blue-500/30 rounded px-2 py-1">
                  <span className="text-blue-300 font-mono text-xs">ID: CJ_001</span>
                </div>
              </div>
            </div>

            {/* Right side - Main Content */}
            <div className="flex-1 order-1 lg:order-2 text-center lg:text-left">
              <div className="mb-6">
                <div className="inline-block relative">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 mx-auto lg:mx-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-4xl lg:text-5xl font-bold text-white mb-4 shadow-xl shadow-blue-500/25 border-2 border-blue-400/50">
                    CJ
                  </div>
                  <div className="absolute -inset-2 bg-blue-500/10 rounded-full blur-lg -z-10"></div>
                  {/* Rotating ring */}
                  <div
                    className="absolute inset-0 border-2 border-blue-400/30 rounded-full animate-spin"
                    style={{ animationDuration: "15s" }}
                  >
                    <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full transform -translate-x-1/2 -translate-y-1"></div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="text-blue-400 font-mono text-sm tracking-wider">{">> NEURAL_INTERFACE_ACTIVE <<"}</div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 tracking-tight">
                  CARLO JIMENEZ
                </h1>
                <div className="text-lg sm:text-xl lg:text-2xl text-blue-200 font-mono tracking-wide">
                  <span className="text-blue-400">{"["}</span>
                  SENIOR FULLSTACK DEVELOPER
                  <span className="text-blue-400">{"]"}</span>
                </div>
                <div className="text-blue-300 font-mono text-sm opacity-75 max-w-2xl mx-auto lg:mx-0">
                  SPECIALIZATION: QUANTUM_CODE_ARCHITECTURE | NEURAL_NETWORKS | SYSTEM_OPTIMIZATION
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
                <Button
                  onClick={() => scrollToSection("projects")}
                  className="bg-blue-500 hover:bg-blue-600 text-slate-900 font-semibold px-8 py-3 text-lg font-mono border border-blue-400/50 shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-blue-500/40"
                >
                  {">> INITIATE_MISSION_REVIEW"}
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="outline"
                  className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-slate-900 px-8 py-3 text-lg font-mono shadow-lg shadow-blue-500/10 transition-all duration-300 hover:shadow-blue-500/25"
                >
                  {">> ESTABLISH_COMM_LINK"}
                </Button>
              </div>

              {/* System status indicator */}
              <div className="inline-flex items-center space-x-2 text-blue-300 font-mono text-xs">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span>SYSTEM_STATUS: OPERATIONAL</span>
              </div>
            </div>
          </div>

          {/* Tech Stack Infinite Carousel */}
          <div className="mt-12 w-full max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <div className="text-blue-400 font-mono text-xs mb-2">{">> ACTIVE_TECHNOLOGIES <<"}</div>
            </div>

            <div className="relative overflow-hidden">
              {/* Gradient fade effects */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent z-10 pointer-events-none"></div>

              {/* Scrolling container */}
              <div className="flex animate-scroll-infinite space-x-4 py-4">
                {/* First set of tech stack items */}
                {techStack.map((tech, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 w-24 h-24 bg-slate-800/50 border border-blue-500/20 rounded-lg backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300 group"
                  >
                    <div className="w-full h-full flex flex-col items-center justify-center p-2">
                      <div
                        className={`w-8 h-8 bg-gradient-to-br ${tech.color} rounded-md flex items-center justify-center text-white font-bold text-sm mb-1 group-hover:scale-110 transition-transform duration-300`}
                      >
                        {tech.icon}
                      </div>
                      <span className="text-blue-300 font-mono text-xs text-center leading-tight">{tech.name}</span>
                    </div>
                    <div className="absolute -inset-1 bg-blue-500/5 rounded-lg blur-sm -z-10 group-hover:bg-blue-500/10 transition-all duration-300"></div>
                  </div>
                ))}

                {/* Duplicate set for infinite scroll */}
                {techStack.map((tech, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 w-24 h-24 bg-slate-800/50 border border-blue-500/20 rounded-lg backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300 group"
                  >
                    <div className="w-full h-full flex flex-col items-center justify-center p-2">
                      <div
                        className={`w-8 h-8 bg-gradient-to-br ${tech.color} rounded-md flex items-center justify-center text-white font-bold text-sm mb-1 group-hover:scale-110 transition-transform duration-300`}
                      >
                        {tech.icon}
                      </div>
                      <span className="text-blue-300 font-mono text-xs text-center leading-tight">{tech.name}</span>
                    </div>
                    <div className="absolute -inset-1 bg-blue-500/5 rounded-lg blur-sm -z-10 group-hover:bg-blue-500/10 transition-all duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center space-y-2">
              <ChevronDown className="w-6 h-6 text-blue-400" />
              <div className="text-blue-400 font-mono text-xs">SCROLL_TO_CONTINUE</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-blue-400 font-mono text-sm mb-2">{">> ACCESSING_PERSONNEL_DATABASE <<"}</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">PERSONNEL FILE</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg border border-blue-500/30 shadow-2xl shadow-blue-500/10">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Carlo Jimenez - Neural Interface Profile"
                  className="w-full max-w-sm mx-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-blue-300 font-mono text-xs">
                  ID: CJ_001 | STATUS: ACTIVE
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border border-blue-500/20 rounded-lg p-6 bg-slate-900/50 backdrop-blur-sm">
                <div className="text-blue-400 font-mono text-sm mb-3">{">> BIOGRAPHICAL_DATA"}</div>
                <p className="text-slate-200 text-lg leading-relaxed mb-4">
                  Elite software architect with 5+ years of experience in quantum code development and neural network
                  optimization. Specialized in creating advanced digital infrastructures that push the boundaries of
                  conventional programming paradigms.
                </p>
                <p className="text-slate-200 text-lg leading-relaxed">
                  Primary expertise includes React quantum frameworks, Node.js neural processing, and cloud-based system
                  architectures. Off-duty activities include exploring emerging technologies, contributing to
                  open-source protocols, and strategic gaming simulations.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 border border-blue-500/20 rounded-lg bg-slate-900/30">
                  <div className="text-2xl font-bold text-blue-400">5+</div>
                  <div className="text-blue-200 font-mono text-xs">YEARS_ACTIVE</div>
                </div>
                <div className="text-center p-4 border border-blue-500/20 rounded-lg bg-slate-900/30">
                  <div className="text-2xl font-bold text-blue-400">50+</div>
                  <div className="text-blue-200 font-mono text-xs">MISSIONS_COMPLETED</div>
                </div>
                <div className="text-center p-4 border border-blue-500/20 rounded-lg bg-slate-900/30">
                  <div className="text-2xl font-bold text-blue-400">99%</div>
                  <div className="text-blue-200 font-mono text-xs">SUCCESS_RATE</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {["PROBLEM_SOLVER", "TEAM_COORDINATOR", "CONTINUOUS_LEARNER"].map((trait) => (
                  <Badge
                    key={trait}
                    variant="secondary"
                    className="bg-blue-500/20 text-blue-300 border-blue-500/30 font-mono text-xs"
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
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-blue-400 font-mono text-sm mb-2">{">> ANALYZING_TECHNICAL_SPECIFICATIONS <<"}</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">TECH SPECIFICATIONS</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Frontend", "Backend", "Database", "Tools"].map((category) => (
              <Card
                key={category}
                className="bg-slate-800/50 border-blue-500/20 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-blue-400 flex items-center gap-2 font-mono text-sm">
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
                    .map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <div className="flex items-center gap-2">
                            {skill.icon}
                            <span className="text-slate-200 font-mono">{skill.name}</span>
                          </div>
                          <span className="text-blue-400 font-mono">{skill.level}%</span>
                        </div>
                        <div className="relative">
                          <div className="w-full bg-slate-700 rounded-full h-2 border border-slate-600">
                            <div
                              className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 relative overflow-hidden"
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

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-blue-400 font-mono text-sm mb-2">{">> RETRIEVING_MISSION_ARCHIVES <<"}</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">MISSION LOG</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-blue-500/20 backdrop-blur-sm overflow-hidden group hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 font-mono text-xs">
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 text-blue-300 font-mono text-xs">
                    MISSION_ID: {String(index + 1).padStart(3, "0")}
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-blue-400 font-mono text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-slate-200">{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-blue-500/20 text-blue-300 border-blue-500/30 font-mono text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-blue-500/50 text-blue-400 hover:bg-blue-500 hover:text-slate-900 font-mono text-xs flex-1"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3 mr-2" />
                        SOURCE_CODE
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-blue-500 hover:bg-blue-600 text-slate-900 font-mono text-xs flex-1"
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
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-blue-400 font-mono text-sm mb-2">{">> ESTABLISHING_COMMUNICATION_PROTOCOLS <<"}</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">COMM LINK</h2>

          <div className="border border-blue-500/20 rounded-lg p-8 bg-slate-800/30 backdrop-blur-sm mb-8">
            <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
              Ready to collaborate on your next mission? Establish secure communication channel for project briefings,
              technical consultations, or strategic partnerships.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Button
                className="bg-blue-500 hover:bg-blue-600 text-slate-900 font-semibold px-8 py-3 text-lg font-mono border border-blue-400/50 shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-blue-500/40"
                asChild
              >
                <a href="mailto:carlo@example.com">
                  <Mail className="w-5 h-5 mr-2" />
                  SEND_TRANSMISSION
                </a>
              </Button>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-blue-500/50 text-blue-400 hover:bg-blue-500 hover:text-slate-900 w-12 h-12"
                  asChild
                >
                  <a href="https://github.com/jimenez-carlo" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-blue-500/50 text-blue-400 hover:bg-blue-500 hover:text-slate-900 w-12 h-12"
                  asChild
                >
                  <a href="https://linkedin.com/in/carlo-jimenez" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="text-blue-200 font-mono text-sm space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span>NEURAL_LINK_STATUS: ACTIVE</span>
              </div>
              <p>© 2024 Carlo Jimenez | Built with Next.js Quantum Framework & Tailwind Neural CSS</p>
            </div>
          </div>
        </div>
      </section>

      {/* StarCraft-style Sticky Bottom UI */}
      {showStickyUI && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-t from-slate-950 via-slate-900 to-slate-900/95 border-t-2 border-blue-500/50 backdrop-blur-sm shadow-2xl shadow-blue-500/20 animate-in slide-in-from-bottom duration-500">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              {/* Left side - Minimap style navigation */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-slate-800 border border-blue-500/30 rounded-lg p-1 relative overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-900/50 to-slate-900 rounded border border-blue-400/20 relative">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=20 height=20 viewBox=0 0 20 20 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=%236366f1 fillOpacity=0.1%3E%3Ccircle cx=3 cy=3 r=1/%3E%3Ccircle cx=13 cy=13 r=1/%3E%3Ccircle cx=7 cy=17 r=1/%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
                    <div className="absolute top-1 left-1 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-1 right-1 w-1 h-1 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="absolute -inset-1 bg-blue-500/10 rounded-lg blur-sm -z-10"></div>
                </div>

                <div className="space-y-1">
                  <div className="text-blue-400 font-mono text-xs">NEURAL_LINK_ACTIVE</div>
                  <div className="text-blue-300 font-mono text-xs opacity-75">
                    SECTION: {activeSection.toUpperCase()}
                  </div>
                </div>
              </div>

              {/* Center - Portrait and Info */}
              <div className="flex items-center space-x-4 bg-slate-800/50 border border-blue-500/30 rounded-lg p-2">
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-blue-500/50 shadow-lg shadow-blue-500/25">
                    <img
                      src="/images/carlo-portrait.png"
                      alt="Carlo Jimenez - Neural Interface"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -inset-1 bg-blue-500/20 rounded-lg blur-sm -z-10"></div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border border-slate-900 animate-pulse"></div>
                </div>

                <div className="space-y-1">
                  <div className="text-white font-mono text-sm font-bold">CARLO_JIMENEZ</div>
                  <div className="text-blue-300 font-mono text-xs">SR_FULLSTACK_DEV</div>
                </div>
              </div>

              {/* Right side - Quick Actions */}
              <div className="flex items-center space-x-2">
                <Button
                  onClick={() => scrollToSection("contact")}
                  size="sm"
                  className="bg-blue-500/20 hover:bg-blue-500 text-blue-300 hover:text-slate-900 border border-blue-500/50 font-mono text-xs px-3 py-2 transition-all duration-300"
                >
                  COMM_LINK
                </Button>

                <Button
                  onClick={() => scrollToSection("projects")}
                  size="sm"
                  className="bg-green-500/20 hover:bg-green-500 text-green-300 hover:text-slate-900 border border-green-500/50 font-mono text-xs px-3 py-2 transition-all duration-300"
                >
                  MISSIONS
                </Button>

                {/* Resource indicators */}
                <div className="flex flex-col space-y-1 ml-4">
                  <div className="flex items-center space-x-2 text-xs font-mono">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-blue-300">SKILLS: 12</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-mono">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-green-300">PROJECTS: 4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom accent line */}
          <div className="h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        </div>
      )}
    </div>
  )
}
