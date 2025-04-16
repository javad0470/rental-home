const config = {
    plugins: ["@tailwindcss/postcss"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            gridTemplateColumns: {
                '70/30': '70% 28%'
            }
        }
    }
};

export default config;
