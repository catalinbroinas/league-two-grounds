import purgecss from '@fullhuman/postcss-purgecss/postcss-purgecss.js';

const purgecssConfig = purgecss({
    content: [
        './index.html',
        './src/**/*.{html,js,jsx,ts,tsx,vue}',
    ],
    safelist: [
        /^modal/,
        /^dropdown/,
        /^collapse/,
        /^show$/,
        /^fade$/,
        /^btn-/,
        /^bg-/,
        /^text-/,
        /^ripple/,
        /^tooltip/,
        /^accordion/,
        /^offcanvas/,
        /^toast/,
    ],
});

export default ({ env }) => ({
    plugins: [
        env === 'production' ? purgecssConfig : false,
    ],
});
