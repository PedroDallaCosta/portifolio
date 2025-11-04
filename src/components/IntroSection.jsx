import CustomBackground from './CustomBackground.jsx';

export default function IntroSection() {
  return (
    <section id="IntroSection" className="relative min-h-screen min-w-screen overflow-hidden bg-[#080509]">
      <div className="absolute w-screen h-screen top-0 left-0 z-9">
        <CustomBackground
          particleColors={['#2d0141']}
          particleCount={800}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div>
          <div className="mb-6 inline-block">
            <span className="rounded-full border border-purple-400/30 bg-purple-200/10 px-4 py-2 text-xs text-purple-600">
              {">"} Disponível para contato
            </span>
          </div>

          <h1 className="mb-6 font-bold leading-none">
            <span className="block text-6xl text-white md:text-7xl lg:text-8xl">Desenvolvido</span>
            <span className="block text-6xl text-purple-600 md:text-7xl lg:text-8xl">Por Pedro</span>
            <span className="block text-6xl text-white md:text-7xl lg:text-8xl">Suzek</span>
          </h1>

          <p className="mb-8 max-w-lg text-lg leading-relaxed text-slate-400">
            Desenvolvedor full-stack focado em <span className="text-purple-800">React</span>, <span className="text-purple-800">Node.js</span>, e <span className="text-purple-800">Lua</span>. Eu construo aplicações escalavéis com foco na usabilidade do usuário e desempenho.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="group relative overflow-hidden bg-purple-600 px-8 py-4 text-sm font-bold text-black transition-all hover:bg-purple-300">
              <span className="relative z-10">Ver Projetos</span>
              <div className="absolute inset-0 -translate-x-full bg-purple-300 transition-transform group-hover:translate-x-0" />
            </a>

            <a href="#about" className="border border-purple-600/30 px-8 py-4 text-sm font-bold text-purple-600 transition-all hover:border-purple-600 hover:bg-purple-800/10">Sobre mim</a>
          </div>
        </div>

        <div className="relative hidden lg:block px-20">
          <div className="right-0 top-1/2">
            <div className="relative h-96 w-96">
              <div className="absolute inset-0 animate-pulse rounded-full bg-purple-800/20 blur-3xl"/>
              <div className="absolute inset-8 rounded-full border border-purple-800/30"/>
              <div className="absolute inset-16 rounded-full border border-purple-800/20"/>
              <div className="absolute inset-24 rounded-full border border-purple-800/10"/>

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="text-6xl font-bold text-purple-600">{"</>"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-slate-600">Scroll</span>
          <div className="h-12 w-px animate-pulse bg-gradient-to-b from-purple-400 to-transparent" />
        </div>
      </div>
    </section>
  )
}