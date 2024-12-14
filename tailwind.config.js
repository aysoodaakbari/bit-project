/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-mode="dark"]'],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        text: 'var(--text)',
        hover: 'rgba(var(--hover) / <alpha-value>)',
        border: 'var(--border)',
        icons: 'var(--icons)',
        selected: 'rgba(var(--selected) / <alpha-value>)',

        tooltip: 'var(--tooltip)',
        gray: 'var(--gray)',
        skeleton: 'var(--skeleton)',
        modalBg: 'var(--modalBg)',
        pics: 'var(--pics)',
        disableText: 'var(--disableText)',
        disableBorder: 'var(--disableBorder)',
        disableBg: 'var(--disableBg)',
        blue: {
          1: '#2962FF',
          '1-hover': '#2456E0',
          '1-active': '#1F49BF',
        },
        red: {
          1: '#F23645',
          '1-hover': '#CE2E3B ',
          '1-active': '#A92630',
          2: '#F63538',
          '2-hover': '#D12D30',
          3: '#8B444E',
          '3-hover': '#763A42',
        },
        green: {
          1: '#089981',
          '1-hover': '#07826E',
          '1-active': '#066B5A',
          2: '#30CC5A',
          '2-hover': '#29AE4D',
          3: '#35764E',
          '3-hover': '#2D6442',
        },
        purple: '#9575CD',
        turquoise: '#26C6DA',
        orange: '#FF9800',
        pink: '#FF4081',
        yellow: '#E0BC00',
        darkBg:'#131722'
      },
    },
  },
  plugins: [],
};