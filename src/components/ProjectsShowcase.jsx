import { useState } from "react"
import urlShort from "../assets/url-short.png";
import mockCurse from "../assets/mock-curse.png";
import proxy from "../assets/proxy.png";
import DemoModal from "./DemoModal";

export default function ProjectsShowcase() {
  const [selectedDemo, setSelectedDemo] = useState(null)

  const projects = [
    {
      title: "Encurtador de URL",
      tech: "React • Node.js • PostgreSQL • Fastify",
      description: "Um encurtador de URL com sistema de proteção por senha, data de expiração, dashboard de controle e sistema de cadastro e login.",
      image: urlShort,
      demoUrl: "https://url-shortener.up.railway.app/",
      source: "https://github.com/PedroDallaCosta/url-shortener-frontend"
    },
    {
      title: "QuantumLeap",
      tech: "React",
      description: "Um simples projeto para estudar como o Redux funciona em uma aplicação para assitir aulas online.",
      image: mockCurse,
      demoUrl: "https://mock-curse.vercel.app/",
      source: "https://github.com/PedroDallaCosta/mock-curse"
    },
    {
      title: "Proxy Scrapper",
      tech: "Node.js • Puppeteer",
      description: "Um projeto que coleta proxys de diversos sites na web e armazena em um .JSON.",
      image: proxy,
      source: "https://github.com/PedroDallaCosta/proxy-scraper"
    },
  ]

  return (
    <section id="ProjectsShowcase" className="relative bg-[#080509] py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <span className="mb-4 block font-mono text-sm text-purple-400">02 / Projetos</span>
          <h2 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl">Meus trabalhos</h2>
          <p className="max-w-2xl text-lg text-slate-400">Uma seção com os projetos que eu desenvolvi, com foco em usabilidade, escalabilidade e desempenho</p>
        </div>
      </div>

      <div className="relative">
        <div
          className="flex gap-8 overflow-x-auto px-6 pb-8 scrollbar-hide lg:px-[calc((100vw-1280px)/2)]"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {projects.map(({ title, tech, description = "", demoUrl = false, source = false, image }, index) => (
            <div
              key={index}
              className="group relative min-w-[90vw] overflow-hidden md:min-w-[600px] "
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={image} alt={title} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120112] via-[#1702173b] to-transparent" />
              </div>

              <div className="p-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className="font-mono text-xs text-purple-400">{String(index + 1).padStart(2, "0")}</span>
                  <div className="h-px flex-1 bg-purple-400/20" />
                </div>

                <h3 className="mb-3 text-3xl font-bold text-white">{title}</h3>
                <p className="mb-4 font-mono text-sm text-purple-400">{tech}</p>
                <p className="mb-6 leading-relaxed text-slate-400">{description}</p>

                <div className="flex gap-4">
                  {demoUrl ?
                    <button onClick={() => setSelectedDemo({ title: title, url: demoUrl })} className="group/btn relative overflow-hidden border border-purple-400/30 px-6 py-3 font-mono text-sm text-purple-400 transition-all hover:border-purple-400">
                      <span className="relative z-10">Ver demo</span>
                      <div className="absolute inset-0 -translate-x-full bg-purple-400/10 transition-transform group-hover/btn:translate-x-0" />
                    </button>
                    : null
                  }

                  {source ? <a target="_blank" rel="noopener noreferrer" className="border border-slate-700 px-6 py-3 font-mono text-sm text-slate-400 transition-all hover:border-slate-500 hover:text-slate-300" href={source} >Ver source</a> : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl px-6">
        <p className="text-center font-mono text-sm text-slate-600">Role horizontalmente para mais projetos →</p>
      </div>

      <DemoModal
        isOpen={!!selectedDemo}
        onClose={() => setSelectedDemo(null)}
        title={selectedDemo?.title || ""}
        demoUrl={selectedDemo?.url || ""}
      />
    </section>
  )
}