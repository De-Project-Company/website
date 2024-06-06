import {
  Poppins,
  Nunito,
  Work_Sans,
  Ramaraja,
  Plus_Jakarta_Sans,
  Podkova,
  Caveat
} from 'next/font/google';

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito'
});

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans'
});

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const rama = Ramaraja({
  subsets: ['latin', 'telugu'],
  display: 'swap',
  variable: '--font-ramaraja',
  weight: '400'
});

const jaka = Plus_Jakarta_Sans({
  subsets: ['latin', 'cyrillic-ext', 'latin-ext', 'vietnamese'],
  display: 'swap',
  variable: '--font-jakarta'
});

const podkova = Podkova({
  subsets: ['latin', 'cyrillic-ext', 'latin-ext', 'vietnamese', 'cyrillic'],
  display: 'swap',
  variable: '--font-podkova'
});

const cav = Caveat({
  subsets: ['latin', 'cyrillic-ext', 'latin-ext', 'cyrillic'],
  display: 'swap',
  variable: '--font-caveat'
});

export { nunito, workSans, poppins, rama, jaka, podkova, cav };
