"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Linkedin,
  MapPin,
  Calendar,
  Award,
  Code,
  Server,
  Cloud,
  GitBranch,
  Monitor,
  Shield,
  Zap,
  ExternalLink,
  ChevronDown,
  Github,
  Moon,
  Sun,
  Download,
  FileText,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isDarkMode, setIsDarkMode] = useState(false)
  // Remove these lines:
  // const [powerFlow, setPowerFlow] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem("theme")
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove("dark")
    }
  }, [])

  // Remove the power flow useEffect:
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setPowerFlow(true)
  //     setTimeout(() => setPowerFlow(false), 2000)
  //   }, 4000)

  //   return () => clearInterval(interval)
  // }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode
    setIsDarkMode(newDarkMode)

    if (newDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "work", "certifications", "projects", "skills", "resume", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
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
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 z-50 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-gray-900 dark:text-white">Badal Kumar Prusty</div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex space-x-6">
                {[
                  { id: "home", label: "Home" },
                  { id: "about", label: "About" },
                  { id: "work", label: "Work" },
                  { id: "certifications", label: "Certifications" },
                  { id: "projects", label: "Projects" },
                  { id: "skills", label: "Skills" },
                  { id: "resume", label: "Resume" },
                  { id: "contact", label: "Contact" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                      activeSection === item.id
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-600 dark:text-gray-300"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-600" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="Badal Kumar Prusty"
                className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-white shadow-xl"
              />
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hey, I'm <span className="text-blue-600 dark:text-blue-400">Badal</span> 👋
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              DevOps Engineer who makes Kubernetes clusters purr like happy cats 🐱
              <br />
              <span className="text-lg">2.5 years of turning chaos into 99.99% uptime</span>
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="text-sm px-3 py-1">
                <Award className="w-4 h-4 mr-1" />
                Kubestronaut
              </Badge>
              <Badge variant="secondary" className="text-sm px-3 py-1">
                <Shield className="w-4 h-4 mr-1" />
                CKA + CKAD + CKS
              </Badge>
              <Badge variant="secondary" className="text-sm px-3 py-1">
                <Zap className="w-4 h-4 mr-1" />
                40% Faster Incidents
              </Badge>
            </div>
            <Button onClick={() => scrollToSection("contact")} size="lg" className="bg-blue-600 hover:bg-blue-700">
              Let's Build Something Amazing
            </Button>
            <div className="mt-12">
              <ChevronDown
                className="w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 animate-bounce cursor-pointer"
                onClick={() => scrollToSection("about")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 transition-colors duration-300"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">About Me</h2>
          <div className="text-center space-y-6">
            <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-300">
              I'm a DevOps Engineer at <span className="font-semibold text-blue-600 dark:text-blue-400">Devtron</span>{" "}
              who believes that infrastructure should be as reliable as your morning coffee ☕. With 2.5 years of
              experience wrangling Kubernetes clusters across AWS, GCP, and Azure, I've learned that the best
              deployments are the ones nobody notices.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              When I'm not busy achieving 99.99% uptime or reducing incident response times by 40%, you'll find me
              mentoring junior engineers and contributing to open-source projects like{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">Mirrorverse</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Work Experience</h2>

          <div className="space-y-8">
            {/* Current Role */}
            <Card className="border-l-4 border-l-blue-600 dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">DevOps Engineer</CardTitle>
                    <CardDescription className="text-lg font-medium text-blue-600 dark:text-blue-400">
                      Devtron
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    Jun 2023 – Present
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <Server className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Managed production Kubernetes clusters (EKS, GKE, AKS) with <strong>99.99% uptime</strong> for
                        30+ enterprise workloads
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Zap className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Reduced incident response time by <strong>40%</strong> with custom observability stack
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <GitBranch className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Cut release cycle time by <strong>60%</strong> with ArgoCD, Helm, and GitHub Actions
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <Cloud className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Saved <strong>40% infrastructure costs</strong> with namespace-scoped clusters and KEDA
                        autoscaling
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Shield className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Developed secure VPN architecture using Pritunl and Tailscale
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Code className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Mentored <strong>5+ junior engineers</strong> in DevOps best practices
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Internship */}
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">DevOps Intern</CardTitle>
                    <CardDescription className="text-lg font-medium text-blue-600 dark:text-blue-400">
                      Devtron
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    Jan 2023 – May 2023
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Zap className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Reduced deployment time by <strong>30%</strong> building StatefulSet Helm charts
                    </span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Monitor className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Improved release visibility with custom Lua-based health checks in ArgoCD
                    </span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Code className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Integrated Jaeger and OpenTelemetry for distributed tracing
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section
        id="certifications"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Certifications Journey</h2>
          <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12">
            Five CNCF certifications that power up to create the ultimate KUBESTRONAUT mastery
          </p>

          {/* Individual Certification Cards */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {[
              {
                name: "CKA",
                full: "Certified Kubernetes Administrator",
                color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
                link: "https://www.credly.com/badges/1555435a-9553-42be-88f1-ccda348aee66",
              },
              {
                name: "CKAD",
                full: "Certified Kubernetes Application Developer",
                color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
                link: "https://www.credly.com/badges/1555435a-9553-42be-88f1-ccda348aee66",
              },
              {
                name: "CKS",
                full: "Certified Kubernetes Security Specialist",
                color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
                link: "https://www.credly.com/badges/1555435a-9553-42be-88f1-ccda348aee66",
              },
              {
                name: "KCNA",
                full: "Kubernetes and Cloud Native Associate",
                color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
                link: "https://www.credly.com/badges/1555435a-9553-42be-88f1-ccda348aee66",
              },
              {
                name: "KCSA",
                full: "Kubernetes and Cloud Security Associate",
                color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
                link: "https://www.credly.com/badges/1555435a-9553-42be-88f1-ccda348aee66",
              },
            ].map((cert, index) => (
              <a key={cert.name} href={cert.link} target="_blank" rel="noopener noreferrer" className="block">
                <Card className="text-center dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-4">
                    <Badge className={`${cert.color} text-lg px-3 py-1 mb-2`}>{cert.name}</Badge>
                    <p className="text-xs text-gray-600 dark:text-gray-300">{cert.full}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          {/* Simple Pipeline Connections */}
          <div className="flex justify-center mb-8 relative">
            <div className="relative w-full max-w-4xl h-32">
              
            </div>
          </div>

          {/* KUBESTRONAUT Card */}
          <div className="flex justify-center">
            <Card className="w-full max-w-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000"></div>

              <CardContent className="p-8 text-center relative">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-2">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold tracking-wide">KUBESTRONAUT</h3>
                  <p className="text-lg text-blue-100">Elite Kubernetes Expert</p>
                  <div className="flex flex-wrap justify-center gap-2 mt-4">
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-sm">
                      5/5 CNCF Certifications
                    </Badge>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-sm">
                      Elite Status
                    </Badge>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <Button
                      variant="secondary"
                      size="default"
                      asChild
                      className="bg-white text-blue-600 hover:bg-gray-100"
                    >
                      <a
                        href="https://www.credly.com/badges/489e72f8-aaaf-4382-8621-f3b097444fd7"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Award className="w-4 h-4 mr-2" />
                        View Badge
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="default"
                      asChild
                      className="border-white/30 text-white hover:bg-white/10"
                    >
                      <a
                        href="https://www.cncf.io/training/kubestronaut/?p=badalkumar"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Official Page
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Projects</h2>

          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-colors dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl flex items-center text-gray-900 dark:text-white">
                      <Server className="w-6 h-6 mr-2 text-blue-600" />
                      Mirrorverse
                    </CardTitle>
                    <CardDescription className="text-lg mt-2 text-gray-900 dark:text-white">
                      Open-source Kubernetes controller for Secret & ConfigMap synchronization
                    </CardDescription>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Open Source</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A Kubernetes controller that synchronizes Secrets and ConfigMaps across namespaces with conflict
                  resolution, drift detection, and automated cleanup. Built with Go and Kubernetes client-go, reducing
                  manual effort by 80%.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Go", "Kubernetes", "Helm", "client-go", "Controller Runtime"].map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://badal773.github.io/mirrorverse/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Documentation
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://github.com/badal773/mirrorverse" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-1" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Skills & Technologies</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="dark:bg-gray-800/80 dark:border-gray-600 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center text-lg text-gray-900 dark:text-white">
                  <Code className="w-5 h-5 mr-2 text-blue-600" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {["Python", "Bash", "Java", "Go"].map((skill) => (
                    <div
                      key={skill}
                      className="inline-block bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mr-2 mb-2 border border-blue-200 dark:border-blue-700 hover:shadow-md hover:scale-105 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800/80 dark:border-gray-600 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center text-lg text-gray-900 dark:text-white">
                  <Cloud className="w-5 h-5 mr-2 text-green-600" />
                  Cloud & Infrastructure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {["AWS", "Azure", "GCP", "Kubernetes", "Helm", "Terraform"].map((skill) => (
                    <div
                      key={skill}
                      className="inline-block bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 text-green-700 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium mr-2 mb-2 border border-green-200 dark:border-green-700 hover:shadow-md hover:scale-105 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800/80 dark:border-gray-600 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center text-lg text-gray-900 dark:text-white">
                  <GitBranch className="w-5 h-5 mr-2 text-purple-600" />
                  DevOps & CI/CD
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {["Git", "GitHub Actions", "ArgoCD", "Docker", "KEDA", "GitOps"].map((skill) => (
                    <div
                      key={skill}
                      className="inline-block bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-medium mr-2 mb-2 border border-purple-200 dark:border-purple-700 hover:shadow-md hover:scale-105 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800/80 dark:border-gray-600 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center text-lg text-gray-900 dark:text-white">
                  <Monitor className="w-5 h-5 mr-2 text-orange-600" />
                  Monitoring & Observability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {["Prometheus", "Grafana", "Jaeger", "NATS", "PagerDuty", "OpenTelemetry"].map((skill) => (
                    <div
                      key={skill}
                      className="inline-block bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mr-2 mb-2 border border-orange-200 dark:border-orange-700 hover:shadow-md hover:scale-105 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resume Section - Removed Certifications Portfolio */}
      <section
        id="resume"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 transition-colors duration-300"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Resume</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Ready to dive deeper? Download my complete resume to see the full picture of my DevOps journey! 📄
          </p>

          <div className="flex justify-center">
            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 dark:bg-gray-800/80 dark:border-gray-600 backdrop-blur-sm border-t-4 border-t-blue-500 max-w-md">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 dark:bg-blue-900/50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Professional Resume</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Complete professional experience, projects, achievements, and all CNCF certifications in a
                  comprehensive format.
                </p>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Download className="w-5 h-5 mr-2" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700/50 dark:to-gray-800/50 rounded-xl border border-blue-200 dark:border-gray-600 backdrop-blur-sm">
            <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">📋 What's Inside?</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                2.5 years of DevOps experience
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>5 CNCF Kubernetes certifications
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Open-source contributions
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                Multi-cloud expertise (AWS, GCP, Azure)
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                99.99% uptime achievements
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                Cost optimization success stories
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-gray-800 dark:via-indigo-900 dark:to-gray-900 transition-colors duration-300"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Let's Connect!</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Ready to discuss Kubernetes, DevOps, or just want to chat about the latest in cloud-native tech? I'm always
            up for a good conversation! ☕
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 dark:bg-gray-800/80 dark:border-gray-600 backdrop-blur-sm border-t-4 border-t-blue-500">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 dark:bg-blue-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Email</h3>
                <a
                  href="mailto:badalkumarofficial2002@gmail.com"
                  className="text-blue-600 hover:underline text-sm break-all whitespace-nowrap overflow-hidden text-ellipsis block"
                  title="badalkumarofficial2002@gmail.com"
                >
                  badalkumarofficial2002@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 dark:bg-gray-800/80 dark:border-gray-600 backdrop-blur-sm border-t-4 border-t-blue-500">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 dark:bg-blue-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Linkedin className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">LinkedIn</h3>
                <a
                  href="https://linkedin.com/in/badalprusty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  linkedin.com/in/badalprusty
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 dark:bg-gray-800/80 dark:border-gray-600 backdrop-blur-sm border-t-4 border-t-blue-500">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 dark:bg-blue-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Github className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">GitHub</h3>
                <a
                  href="https://github.com/badal773"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  github.com/badal773
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700/50 dark:to-gray-800/50 rounded-xl border border-blue-200 dark:border-gray-600 backdrop-blur-sm">
            <p className="text-gray-600 dark:text-gray-300">
              <MapPin className="w-4 h-4 inline mr-1" />
              Based in Gurgaon, Haryana • Open to remote opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-white py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300 border-t border-gray-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Badal Kumar Prusty. Built with Next.js and lots of ☕</p>
          <p className="text-sm text-gray-500 mt-2">"Making infrastructure reliable, one deployment at a time"</p>
          <div className="mt-4 flex items-center justify-center space-x-2 text-xs text-gray-600">
            <span className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              Built with AI ✨
            </span>
            <span className="text-gray-700">•</span>
            <span>Powered by v0</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
