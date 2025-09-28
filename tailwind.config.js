module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'aluminum': '#f5f5f7',
        'brushed-metal': '#a8a8a8',
        'apple-blue': '#007aff',
      },
      fontFamily: {
        'sf-pro': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'apple-glow': '0 4px 14px 0 rgba(0, 122, 255, 0.1)',
      },
      borderRadius: {
        'apple': '12px',
      },
    },
  },
  plugins: [],
};
