/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.jsx",
        "./resources/**/*.js",
    ],
    theme: {
        extend: {
            colors: {
                color: {
                    1: "#006400",
                    2: "#009600",
                    3: "#FFF000",
                },
            },
        },
    },
    plugins: [],
};
