import AboutMe from "./components/AboutMe"
import CustomCursor from "./components/CustomCursor"
import IntroSection from "./components/IntroSection"
import ProjectsShowcase from "./components/ProjectsShowcase"

function App() {
  return (
    <>
      <CustomCursor />

      <main className="relative">
        <IntroSection />
        <AboutMe />
        <ProjectsShowcase />
      </main>
    </>
  )
}

export default App
