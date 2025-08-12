module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary - Warm Champagne Gold
        primary: {
          DEFAULT: "#8B7355", // champagne-500
          50: "#F7F5F1", // champagne-50
          100: "#EDE8DF", // champagne-100
          200: "#DDD4C5", // champagne-200
          300: "#C8B89F", // champagne-300
          400: "#A99579", // champagne-400
          500: "#8B7355", // champagne-500
          600: "#6F5C44", // champagne-600
          700: "#5A4A37", // champagne-700
          800: "#473A2C", // champagne-800
          900: "#3A2F24", // champagne-900
        },
        
        // Secondary - Sophisticated Charcoal
        secondary: {
          DEFAULT: "#2C2C2C", // charcoal-800
          50: "#F7F7F7", // charcoal-50
          100: "#E8E8E8", // charcoal-100
          200: "#D1D1D1", // charcoal-200
          300: "#B0B0B0", // charcoal-300
          400: "#888888", // charcoal-400
          500: "#6B6B6B", // charcoal-500
          600: "#5A5A5A", // charcoal-600
          700: "#4A4A4A", // charcoal-700
          800: "#2C2C2C", // charcoal-800
          900: "#1F1F1F", // charcoal-900
        },
        
        // Accent - Deep Sapphire
        accent: {
          DEFAULT: "#1E3A5F", // sapphire-800
          50: "#F0F4F8", // sapphire-50
          100: "#D9E2EC", // sapphire-100
          200: "#BCCCDC", // sapphire-200
          300: "#9FB3C8", // sapphire-300
          400: "#829AB1", // sapphire-400
          500: "#627D98", // sapphire-500
          600: "#486581", // sapphire-600
          700: "#334E68", // sapphire-700
          800: "#1E3A5F", // sapphire-800
          900: "#102A43", // sapphire-900
        },
        
        // Background & Surface
        background: "#FEFCF8", // soft pearl
        surface: "#F5F2ED", // subtle cream
        
        // Text Colors
        text: {
          primary: "#1A1A1A", // rich black
          secondary: "#6B6B6B", // refined gray
        },
        
        // Status Colors
        success: {
          DEFAULT: "#2D5A27", // forest emerald
          50: "#F0F8F0", // emerald-50
          100: "#C8E6C9", // emerald-100
          500: "#4CAF50", // emerald-500
        },
        
        warning: {
          DEFAULT: "#B8860B", // antique gold
          50: "#FDF6E3", // gold-50
          100: "#F9E79F", // gold-100
          500: "#F1C40F", // gold-500
        },
        
        error: {
          DEFAULT: "#8B2635", // deep ruby
          50: "#FDF2F8", // ruby-50
          100: "#FCE4EC", // ruby-100
          500: "#E91E63", // ruby-500
        },
      },
      
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        accent: ['Cormorant Garamond', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
      },
      
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.6rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.3' }],
        '6xl': ['3.75rem', { lineHeight: '1.3' }],
      },
      
      boxShadow: {
        'elegant': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card': '0 2px 12px rgba(139, 115, 85, 0.12)',
        'elevated': '0 8px 32px rgba(0, 0, 0, 0.12)',
      },
      
      borderColor: {
        'elegant': 'rgba(139, 115, 85, 0.2)',
        'light': 'rgba(139, 115, 85, 0.1)',
      },
      
      transitionDuration: {
        'elegant': '300ms',
        'story': '600ms',
      },
      
      transitionTimingFunction: {
        'elegant': 'ease-out',
      },
      
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      
      backdropBlur: {
        'elegant': '8px',
      },
    },
  },
  plugins: [],
}