/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontSize: {
            md: ['14px', { lineHeight: '27px' }],
            lg: ['15px', { lineHeight: '18px' }],
            xl: ['40px', { lineHeight: '48px' }],
            '1xl': ['45px', { lineHeight: '54px' }],
            '2xl': ['140px', { lineHeight: '168px' }],
        },
        extend: {
            padding: {
                '60px': '60px',
                '50px': '50px',
                '75px': '75px',
            },
            margin: {
                '20px': '20px',
                '75px': '75px',
                '80px': '80px',
                '150px': '150px',
            },
            backgroundImage: {
                'home-image': "url('./src/assets/backgroundFirst.png')",
            },
            width: {
                sidebar: '300px',
            },
            height: {
                960: '960px',
            },
            textColor: {
                'dim-grey': '#6D6D6D',
                'light-slate-grey': '#889098',
                'custom-black': '#0E0E0E',
            },
            fontFamily: {
                barlow: ['Barlow'],
            },
        },
    },
    plugins: [],
}
