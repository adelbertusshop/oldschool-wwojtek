/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        'serifretro': ['Merriweather', 'serif']
      },
      colors: {
        retroBg: '#f6ecd9',
        retroBrown: '#3b2b20',
        retroGreen: '#4ef08a'
      },
      backgroundImage: {
        'scanlines': "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
}
