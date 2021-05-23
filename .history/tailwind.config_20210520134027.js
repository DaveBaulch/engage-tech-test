module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderRadius: {
      none: '0',
      'sm': '0.125rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
      '50': '50%'
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
