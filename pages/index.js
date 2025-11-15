import Head from 'next/head'

export default function Home() {
  return (
    <div style={{ background: '#f6ecd9', minHeight: '100vh', fontFamily: 'Arial' }}>
      <Head>
        <title>OLD SCHOOL by WWWojtek</title>
      </Head>

      {/* HEADER */}
      <header style={{ padding: '20px', borderBottom: '2px solid #3b2b20', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ width: '50px', height: '50px', background: '#3b2b20', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'monospace' }}>W</div>
          <div>
            <h1 style={{ fontFamily: 'monospace', fontSize: '20px', margin: 0 }}>OLD SCHOOL</h1>
            <p style={{ margin: 0, fontSize: '12px' }}>by WWWojtek</p>
          </div>
        </div>
        
        <nav style={{ display: 'flex', gap: '20px' }}>
          <a href="#portfolio" style={{ textDecoration: 'none', color: '#3b2b20' }}>Realizacje</a>
          <a href="#cennik" style={{ textDecoration: 'none', color: '#3b2b20' }}>Cennik</a>
          <a href="#kontakt" style={{ textDecoration: 'none', color: '#3b2b20' }}>Kontakt</a>
        </nav>
      </header>

      {/* HERO */}
      <section style={{ padding: '60px 20px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'monospace', fontSize: '32px', color: '#3b2b20' }}>OLD SCHOOL</h1>
        <p style={{ fontSize: '18px', maxWidth: '600px', margin: '20px auto' }}>Ręcznie kodowane strony internetowe w 8-bitowym klimacie. Prostota. Pixele. Dusza.</p>
        <div style={{ marginTop: '30px' }}>
          <button style={{ background: '#3b2b20', color: 'white', padding: '12px 24px', border: 'none', margin: '5px', fontFamily: 'monospace' }}>ZOBACZ CENNIK</button>
          <button style={{ background: '#4ef08a', color: '#3b2b20', padding: '12px 24px', border: 'none', margin: '5px', fontFamily: 'monospace' }}>KONTAKT</button>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" style={{ padding: '40px 20px', background: 'rgba(255,255,255,0.5)' }}>
        <h2 style={{ textAlign: 'center', fontFamily: 'monospace', fontSize: '24px', marginBottom: '30px' }}>REALIZACJE</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          {/* Projekt 1 */}
          <div style={{ background: 'white', padding: '15px', border: '2px solid #ccc', boxShadow: '5px 5px 0 #00000011' }}>
            <div style={{ height: '200px', background: '#ddd', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>ZDJĘCIE PROJEKTU 1</div>
            <h3 style={{ marginTop: '15px' }}>Nazwa Projektu 1</h3>
            <p style={{ fontSize: '14px' }}>Krótki opis projektu</p>
          </div>

          {/* Projekt 2 */}
          <div style={{ background: 'white', padding: '15px', border: '2px solid #ccc', boxShadow: '5px 5px 0 #00000011' }}>
            <div style={{ height: '200px', background: '#ddd', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>ZDJĘCIE PROJEKTU 2</div>
            <h3 style={{ marginTop: '15px' }}>Nazwa Projektu 2</h3>
            <p style={{ fontSize: '14px' }}>Krótki opis projektu</p>
          </div>

          {/* Projekt 3 */}
          <div style={{ background: 'white', padding: '15px', border: '2px solid #ccc', boxShadow: '5px 5px 0 #00000011' }}>
            <div style={{ height: '200px', background: '#ddd', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>ZDJĘCIE PROJEKTU 3</div>
            <h3 style={{ marginTop: '15px' }}>Nazwa Projektu 3</h3>
            <p style={{ fontSize: '14px' }}>Krótki opis projektu</p>
          </div>
        </div>
      </section>

      {/* STOPKA */}
      <footer style={{ padding: '30px 20px', borderTop: '2px solid #3b2b20', textAlign: 'center', marginTop: '50px' }}>
        <p>📧 frekig52@gmail.com | 📱 604 296 360</p>
        <p style={{ fontSize: '12px', marginTop: '10px' }}>© 2024 OldSchool by WWWojtek - Ręcznie kodowane strony</p>
      </footer>
    </div>
  )
}
