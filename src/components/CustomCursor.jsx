import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener("mousemove", updatePosition)
    return () => window.removeEventListener("mousemove", updatePosition)
  }, [])

  return (
    <>
      <div
        className="pointer-events-none fixed z-999 mix-blend-difference transition-opacity duration-300"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}>
        <div className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500 transition-all duration-150 h-6 w-6"></div>
      </div>
     
    </>
  )
}