export default function AboutMe() {
  const infosAbout = [
    {
      title: 'Quem eu sou?',
      description:
        <>
          Sou um desenvolvedor movido por curiosidade e resultado. Desde cedo, a tecnologia me fascinou, comecei como toda criança, jogando seus jogos favoritos, mas foi a curiosidade de entender como tudo funcionava
          que me motivou a descobrir a programação e me aprofundar no assunto.
        </>
    },

    {
      title: 'O que eu faço?',
      description:
        <>
          Sou um desenvolvedor full-stack, trabalho com JavaScript, utilizando React e Node.js, desenvolvendo interfaces completas, rápidas e intuitivas, além de integrações sólidas entre frontend, backend e banco de dados.
          Meu foco é entregar projetos que funcionem bem, encantem o usuário e gerem resultado real.
        </>
    },

    {
      title: 'O que eu já fiz?',
      description:
        <>
          Criei diversas interfaces e sistemas para servidores FiveM, atendendo milhares de jogadores simultaneamente com estabilidade e performance. Além disso, criei diversas telas e sistemas personalizados para empresas como freelancer,
          entregando soluções sob medida e com foco em usabilidade, escalabilidade, eficiência e impacto visual.Também desenvolvi automações e soluções personalizadas que
          otimizaram o atendimento e a gestão de clientes, sempre com o objetivo de aumentar a eficiência e escalar resultados.
          <br />
          Sou o tipo de profissional que une técnica, experiência e visão de produto para transformar cada linha de código em algo útil, bonito e que realmente entrega valor.
        </>
    }
  ]

  return (
    <section id="AboutMe" className="relative bg-[#080509] py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <span className="mb-4 block text-sm text-purple-400">01 / About</span>
              <h2 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl">Quem eu<br />Sou?
              </h2>
              <div className="h-1 w-20 bg-purple-400" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-8">
              {
                infosAbout.map(({ title, description }, index) => (
                  <div key={index} className="group relative overflow-hidden border-l-2 border-purple-400/30 bg-[#1702173b] p-8 transition-all hover:border-purple-400">
                    <div className="absolute left-0 top-0 h-full w-1 bg-purple-400 transition-all group-hover:w-full group-hover:opacity-5" />
                    <div className="relative z-10">
                      <h3 className="mb-4 text-2xl font-bold text-white">{title}</h3>
                      <p className="leading-relaxed text-slate-400">{description}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}