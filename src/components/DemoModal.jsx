import { useEffect } from "react"

export default function DemoModal({ isOpen, onClose, title, demoUrl }) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden"
    else document.body.style.overflow = "unset"

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full max-w-6xl animate-in fade-in zoom-in-95 duration-300" onClick={(e) => e.stopPropagation()} >
        <button onClick={onClose} className="absolute -right-4 -top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-lime-400/30 bg-black text-lime-400 transition-all hover:border-lime-400 hover:bg-lime-400/10" aria-label="Close demo" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round" >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="relative mx-auto max-w-6xl">
          <div className="rounded-3xl border-8 border-slate-800 bg-slate-900 p-4 shadow-2xl">
            <div className="mb-3 flex items-center justify-between rounded-t-xl bg-slate-950 px-4 py-2">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-red-500" />
                <div className="h-2 w-2 rounded-full bg-yellow-500" />
                <div className="h-2 w-2 rounded-full bg-green-500" />
              </div>
              <span className="font-mono text-xs text-slate-500">{title}</span>
              <div className="flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-lime-400" />
                <span className="font-mono text-xs text-lime-400">LIVE</span>
              </div>
            </div>

            <div className="relative aspect-video w-full overflow-hidden rounded-b-xl bg-white">
              <iframe
                src={demoUrl}
                className="h-full w-full"
                title={`${title} Demo`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            </div>
          </div>

          <div className="absolute inset-0 -z-10 rounded-3xl bg-lime-400/5 blur-3xl" />
        </div>

        <p className="mt-4 text-center font-mono text-xs text-slate-600">Precione ESC ou fora da página para fechar</p>
      </div>
    </div>
  )
}