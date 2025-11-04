import AboutMe from "./components/AboutMe"
import CustomCursor from "./components/CustomCursor"
import IntroSection from "./components/IntroSection"

function App() {
  return (
    <>
      <CustomCursor />
      <main className="relative">
        <IntroSection />
        <AboutMe />
      </main>
    </>
  )
}

export default App
