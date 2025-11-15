export default function Home() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <header style={{ borderBottom: '2px solid black', paddingBottom: '10px' }}>
        <h1 style={{ fontFamily: 'monospace', fontSize: '24px' }}>OLD SCHOOL by WWWojtek</h1>
      </header>
      
      <main style={{ padding: '20px 0' }}>
        <h2>Strony internetowe w stylu retro</h2>
        <p>Ręcznie kodowane, proste i funkcjonalne</p>
        
        <div style={{ margin: '20px 0' }}>
          <button style={{ background: 'black', color: 'white', padding: '10px 20px', marginRight: '10px' }}>
            CENNIK
          </button>
          <button style={{ background: '#4ef08a', color: 'black', padding: '10px 20px' }}>
            KONTAKT
          </button>
        </div>

        <p>📧 frekig52@gmail.com | 📱 604 296 360</p>
      </main>

      <footer style={{ borderTop: '1px solid #ccc', paddingTop: '10px', marginTop: '20px' }}>
        <p>© 2024 OldSchool by WWWojtek</p>
      </footer>
    </div>
  )
}
