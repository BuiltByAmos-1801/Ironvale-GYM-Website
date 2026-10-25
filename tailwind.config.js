/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        iron: {
          black: '#10110f', panel: '#191b18', panel2: '#222520',
          lime: '#d2fb48', white: '#f2f1ec', muted: '#a3a69b', line: '#34372f'
        }
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Barlow Condensed', 'sans-serif']
      },
      letterSpacing: { impact: '-0.035em', label: '0.18em' },
      boxShadow: { lime: '0 0 35px rgba(210,251,72,.12)' }
    }
  },
  plugins: []
}