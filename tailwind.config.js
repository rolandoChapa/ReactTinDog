module.exports = {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            'tinder': '#ff4c68',
            'wild-sand': '#F5F5F5',
            'lexicon': '#E7EAEA',
            'off-white': '#fdfcfa',
        },
        extend: {
            fontFamily: {
                'raleway': ['"Raleway"', 'sans-serif'],
            }
        },
    },
    plugins: [require("daisyui")],
}