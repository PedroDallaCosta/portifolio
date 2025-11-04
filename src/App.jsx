import AboutMe from "./components/AboutMe"
import CustomCursor from "./components/CustomCursor"
import IntroSection from "./components/IntroSection"
import Navigation from "./components/Navigation"
import ProjectsShowcase from "./components/ProjectsShowcase"
import SocialLinks from "./components/SocialLinks"

function App() {
  return (
    <>
      <CustomCursor />
      <Navigation />

      <main className="relative">
        <IntroSection />
        <AboutMe />
        <ProjectsShowcase />
        <SocialLinks />

        <footer className="relative z-10 border-t border-lime-500/10 bg-black py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="font-mono text-sm text-purple-400">{"<"} Construido com React {"/>"}</p>
              <p className="text-sm text-slate-500">Pedro Dalla Costa • 2025</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}

export default App
