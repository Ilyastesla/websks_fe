/** @type {import('tailwindcss').Config} */

export default {
  content: [
<<<<<<< Updated upstream
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      screens: {
        xxs: '320px',
        xs: '350px',
        // => @media (min-width: 450px) { ... }

        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
      },
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
        cormorand: ['Cormorant Garamond', 'serif']
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}
=======
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      screens: {
        xxs: '320px',
        xs: '350px',
        // => @media (min-width: 450px) { ... }

        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
      },
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
        cormorand: ['Cormorant Garamond', 'serif'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
      writingMode: {
        'vertical-lr': 'vertical-lr',
        'vertical-rl': 'vertical-rl',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};
>>>>>>> Stashed changes
