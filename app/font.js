import localFont from 'next/font/local';

export const myFont = localFont(
    {
    src: [
            {
                path: '../public/fonts/roboto_slab.ttf',
                weight: '400',
                style: 'normal'
            }
        ]
    }
);

