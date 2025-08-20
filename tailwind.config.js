/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#F9F9FE',      // Lighter, cleaner background
        'foreground': '#334155',      // slate-700
        'card': '#ffffff',            // white
        'card-foreground': '#1e293b',  // slate-800
        'muted': '#64748b',           // slate-500
        'muted-foreground': '#94a3b8',  // slate-400
        'border': '#E5E0F4',          // A soft lavender border
        
        'primary': '#7C3AED',           // Darker, accessible violet (violet-600)
        'primary-foreground': '#ffffff', // White for high contrast
        
        'secondary': '#EC4899',         // A vibrant pink (pink-500)
        'highlight': '#FBBF24',         // A bright, contrasting amber for highlights (amber-400)
        
        'accent': '#93C5FD',            // A friendly blue
        'accent-foreground': '#1E40AF', // A darker blue for contrast
      },
      fontFamily: {
        'sans': ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'display': ['Playfair Display', 'ui-serif', 'Georgia', 'serif'],
        'anton': ['Anton', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 3s infinite ease-in-out',
        'float': 'float 4s infinite ease-in-out',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 8px rgba(124, 58, 237, 0.5), 0 0 16px rgba(124, 58, 237, 0.3)',
            transform: 'scale(1)',
          },
          '50%': {
            boxShadow: '0 0 16px rgba(124, 58, 237, 0.7), 0 0 32px rgba(124, 58, 237, 0.5)',
            transform: 'scale(1.03)',
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-6px)',
          },
        },
      },
    },
  },
  plugins: [],
}
