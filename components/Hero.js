export default function Hero(){
  return (
    <section className="py-12">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="h1-pixel">OLD SCHOOL</h1>
          <p className="subtitle mt-4">Ręcznie kodowane strony internetowe w 8-bitowym klimacie. Prostota. Pixele. Dusza.</p>

          <ul className="mt-6 text-sm">
            <li>• Ręczne podejście — każdy projekt indywidualny</li>
            <li>• Optymalizacja mobilna</li>
            <li>• Sklepy, płatności, integracje</li>
          </ul>

          <div className="mt-6">
            <a href="#pricing" className="btn-retro mr-3">CENNIK</a>
            <a href="#contact" className="btn-retro" style={{background:'#4ef08a', color:'#1b1b1b'}}>KONTAKT</a>
          </div>
        </div>

        <div>
          <div className="retro-card">
            <img src="/assets/mockup-desktop.png" alt="mockup" className="w-full h-48 object-cover"/>
            <div className="mt-3 text-xs subtitle">Przykładowy projekt — styl retro, czytelny i funkcjonalny.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
