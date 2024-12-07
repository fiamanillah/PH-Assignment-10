import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class', // Enable dark mode using 'class' strategy
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['Fira Code', 'monospace'],
                spaceMono: ['Space Mono', 'monospace'],
            },
            screens: {
                'desktop-xl': { max: '1535px' },
                'laptop-xl': { max: '1279px' },
                'tablet-lg': { max: '1023px' },
                'mobile-lg': { max: '767px' },
                'mobile-sm': { max: '639px' },
            },
            aspectRatio: {
                '4/3': '4 / 3',
            },
            colors: {
                // Light Mode Colors
                background: '#f3f8fa', // Light Grayish Blue (Background)
                primary: '#045d56', // Deep Green (Primary)
                secondary: '#2a9d8f', // Teal (Secondary)
                accent: '#f4a261', // Orange (Accent)
                info: '#4a90e2', // Blue (Info)
                success: '#76c893', // Vibrant Green (Success)
                warning: '#f6bd60', // Warm Yellow (Warning)
                danger: '#f94144', // Bright Red (Danger)
                lightPrimaryText: '#00211c', // Brighter Dark Green (Primary Text)
                lightSecondaryText: '#636e72', // Slightly Lighter Gray (Secondary Text)
                lightCard: '#ffffff', // White (Card Background)
                lightCardSecondary: '#d9f7f1', // Soft Teal (Card Secondary)
                lightCardHover: '#eaf8f3', // Very Light Teal (Card Hover)

                // Dark Mode Colors
                darkBackground: '#081c15', // Very Dark Green (Background)
                darkCard: '#0d2818', // Dark Green (Card Background)
                darkCardSecondary: '#164c36', // Deep Teal (Card Secondary)
                darkCardHover: '#216655', // Muted Teal (Card Hover)
                darkPrimary: '#d8f3dc', // Light Green (Primary Text)
                darkSecondary: '#b7e4c7', // Soft Green (Secondary Text)
                darkAccent: '#f6a852', // Warm Orange (Accent)
                darkInfo: '#58a6f0', // Vibrant Blue (Info)
                darkSuccess: '#80e4a5', // Light Vibrant Green (Success)
                darkWarning: '#ffe05d', // Soft Yellow (Warning)
                darkDanger: '#f98490', // Soft Coral Red (Danger)
                darkPrimaryText: '#fcfeff', // Bright Light Gray (Primary Text)
                darkSecondaryText: '#cad7e3', // Light Grayish Blue (Secondary Text)

                // Neutral Grays
                gray: {
                    50: '#f9fafb', // White Smoke
                    100: '#f3f4f6', // Light Gray
                    200: '#e5e7eb', // Very Light Gray
                    300: '#d1d5db', // Light Gray
                    400: '#9ca3af', // Cool Gray
                    500: '#6b7280', // Gray
                    600: '#4b5563', // Dark Gray
                    700: '#374151', // Charcoal
                    800: '#1f2937', // Dark Charcoal
                    900: '#111827', // Almost Black
                },

                // Additional Colors for Sports Store
                highlight: '#ff9f1c', // Bright Yellow-Orange (Highlight)
                positive: '#14b866', // Emerald Green (Positive)
                neutral: '#d0d6db', // Soft Grayish Blue (Neutral)
                link: '#1e90ff', // Vivid Blue (Links)
                callToAction: '#ff6f3c', // Bright Orange-Red (Call to Action)
                backdrop: '#eef2f5', // Off White (Backdrop)
                lightShadow: '#d6e4ea', // Light Grayish Blue Shadow
                darkShadow: '#1d2f38', // Dark Blue-Gray Shadow

                // Accent Shades
                softGreen: '#81c784', // Light Green (Accent)
                softBlue: '#64b5f6', // Sky Blue (Accent)
                softYellow: '#ffe082', // Light Yellow (Highlight)
                darkGreen: '#264653', // Deep Green (Accent)
            },

            typography: {
                DEFAULT: {
                    css: {
                        '*': { margin: '0', padding: '0' },
                        color: '#00211c', // Lighter primary color for light mode text
                        '[class~="dark"] &': {
                            color: '#fcfeff', // Brighter text in dark mode
                        },
                        a: {
                            color: '#2a9d8f', // Secondary color for links
                            textDecoration: 'none', // Added none for links
                            '[class~="dark"] &': { color: '#cad7e3' },
                        },
                        h1: {
                            color: '#00211c',
                            fontSize: '2.5rem',
                            fontWeight: '600',
                            '[class~="dark"] &': { color: '#fcfeff' },
                        },
                        h2: {
                            color: '#2a9d8f',
                            fontSize: '2rem',
                            fontWeight: '500',
                            '[class~="dark"] &': { color: '#cad7e3' },
                        },
                        input: {
                            color: '#00211c',
                            fontWeight: '500',
                            '[class~="dark"] &': { color: '#cad7e3' },
                        },
                        label: {
                            color: '#00211c',
                            fontWeight: '500',
                            '[class~="dark"] &': { color: '#cad7e3' },
                        },
                        strong: {
                            color: '#00211c',
                            fontSize: '1.5rem',
                            fontWeight: '600',
                            '[class~="dark"] &': { color: '#fcfeff' },
                        },
                        h3: {
                            color: '#2a9d8f',
                            fontSize: '1.75rem',
                            fontWeight: '400',
                            '[class~="dark"] &': { color: '#cad7e3' },
                        },
                        h4: {
                            color: '#2a9d8f',
                            fontSize: '1.5rem',
                            fontWeight: '400',
                            '[class~="dark"] &': { color: '#cad7e3' },
                        },
                        p: {
                            color: '#636e72',
                            fontSize: '1rem',
                            fontWeight: '400',
                            '[class~="dark"] &': { color: '#cad7e3' },
                        },
                        span: {
                            color: '#636e72',
                            fontSize: '1rem',
                            fontWeight: '400',
                            '[class~="dark"] &': { color: '#cad7e3' },
                        },
                        ul: { listStyleType: 'none' },
                        ol: { listStyleType: 'none' },
                        li: {
                            color: '#636e72',
                            fontSize: '1rem',
                            '[class~="dark"] &': { color: '#cad7e3' },
                        },
                        blockquote: {
                            fontStyle: 'italic',
                            borderLeft: '4px solid #2a9d8f', // Teal for quotes
                            paddingLeft: '1rem',
                            marginLeft: '0',
                            color: '#2a9d8f',
                            '[class~="dark"] &': { color: '#cad7e3' },
                        },
                        code: {
                            color: '#f4a261', // Orange for inline code
                            fontFamily: '"Fira Code", monospace',
                            backgroundColor: '#f3f8fa', // Light Grayish Blue background for code
                            padding: '0.2rem 0.4rem',
                            borderRadius: '4px',
                        },
                    },
                },
            },
        },
    },
    plugins: [typography],
};
