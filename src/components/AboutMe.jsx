import AboutInfo from "./AboutInfo";

export default function AboutMe() {
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
              <AboutInfo
                title="História"
                text={
                  <>
                    Desde cedo sempre fui apaixonado por computadores — inicialmente pelos jogos, como Counter-Strike Source nas lan houses. Mas tudo mudou quando conheci o GTA V e, mais tarde, o mundo do GTA RP. A curiosidade sobre como os servidores funcionavam despertou meu interesse pelo desenvolvimento, e assim comecei minha jornada.
                    Iniciei com modificações simples no GTA e, com o tempo, mergulhei no estudo de HTML, CSS e JavaScript, dando meus primeiros passos no frontend. Depois avancei para o backend, aprendendo <b className="text-purple-400">.lua</b> e <b className="text-purple-400">integrações com banco de dados</b> utilizando <b className="text-purple-400">XAMPP e HeidiSQL</b>.
                    Com o tempo, evoluí para o ecossistema <b className="text-purple-400">React</b> e <b className="text-purple-400">Node.js</b>, desenvolvendo <b className="text-purple-400">interfaces completas e sistemas integrados</b>. Trabalhei com <b className="text-purple-400">diversas interfaces para o FiveM</b>, atendendo <b className="text-purple-400">milhares de jogadores simultaneamente</b>, cuidando desde o <b className="text-purple-400">frontend</b> até o <b className="text-purple-400">backend</b> e <b className="text-purple-400">banco de dados</b>.
                    Durante essa trajetória, também criei <b className="text-purple-400">diversas automações</b> para otimizar o <b className="text-purple-400">atendimento e gerenciamento de clientes</b>, sempre buscando eficiência e escalabilidade. Hoje, atuo como <b className="text-purple-400">desenvolvedor pleno</b>, focado em aprimorar minhas habilidades em <b className="text-purple-400">JavaScript e seu ecossistema</b>, aprendendo e colaborando com profissionais da área para evoluir ainda mais.
                  </>
                }
              />

              <AboutInfo
                title="Filosofia"
                text={
                  <>
                    Acredito que uma interface não deve apenas se conectar bem ao backend — ela deve <b className="text-purple-400">funcionar para o usuário</b>. É essencial que quem utiliza o sistema se sinta <b className="text-purple-400">confortável, envolvido e satisfeito</b>. Isso começa com uma 
                    <b className="text-purple-400">experiência de uso agradável (UX)</b>, passando por um sistema <b className="text-purple-400">rápido, otimizado, responsivo e com interações fluidas</b>.
                    Para mim, um bom design vai além da aparência: ele torna o uso <b className="text-purple-400">intuitivo até para os usuários mais leigos</b>, criando uma conexão real com o produto. E, por trás disso, acredito em um <b className="text-purple-400">código limpo, bem organizado e 
                    de fácil manutenção</b>, que facilite a colaboração e a evolução contínua do projeto.
                  </>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}