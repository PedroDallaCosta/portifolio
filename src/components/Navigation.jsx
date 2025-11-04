import { useState, useEffect } from "react"

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("IntroSection")

  const sections = [
    { id: "IntroSection", label: "01" },
    { id: "AboutMe", label: "02" },
    { id: "ProjectsShowcase", label: "03" },
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["IntroSection", "AboutMe", "ProjectsShowcase", "SocialLinks"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }

        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed right-8 top-1/2 z-50 -translate-y-1/2 hidden lg:block">
      <div className="flex flex-col gap-6">
        {sections.map((section) => (
          <button key={section.id} onClick={() => scrollToSection(section.id)} className="group relative flex items-center gap-3" >
            <span className={`font-mono text-xs transition-all ${ activeSection === section.id ? "text-purple-400" : "text-slate-600 group-hover:text-slate-400" }`}>{section.label}</span>
            <div className={`h-px transition-all ${activeSection === section.id ? "w-12 bg-purple-400" : "w-6 bg-slate-700 group-hover:w-8 group-hover:bg-slate-500" }`} />
          </button>
        ))}
      </div>
    </nav>
  )
}
