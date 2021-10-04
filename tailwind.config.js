module.exports = {
    mode: 'jit',
    purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            animation: {
                'spin-slow': 'spin 3s linear infinite',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};