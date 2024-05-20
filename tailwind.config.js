/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        biruPrimary: '#0A3B82',
        merahPrimary: '#8C1F29',
        merahSecondary: '#F23041',
        biruSecondary: '#5BACFF',
        kuningPrimary: '#FFA800',
        hijauPrimary: '#37B02D',
        blackPrimary: '#1D1D1B',
        blackSecondary: '#343432',

        biruUndangan: '#212456',
        orangeUndangan: '#F69221',
        kremUndangan: '#F8BE7B',
        krem2Undangan: '#FFE4C7',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        poly: ['Poly', 'sans-serif'],
        meryChristole: ['Mercy Christole', 'sans-serif']
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
}
