export default function AboutInfo({ title, text, }) {
  return (
    <div className="group relative overflow-hidden border-l-2 border-purple-400/30 bg-[#1702173b] p-8 transition-all hover:border-purple-400">
      <div className="absolute left-0 top-0 h-full w-1 bg-purple-400 transition-all group-hover:w-full group-hover:opacity-5" />
      <div className="relative z-10">
        <h3 className="mb-4 text-2xl font-bold text-white">{title}</h3>
        <p className="leading-relaxed text-slate-400">{text}</p>
      </div>
    </div>
  )
}