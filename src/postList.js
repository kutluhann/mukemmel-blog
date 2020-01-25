export const postList = [
  {
    title: 'Hello World',
    slug: 'ikinci-yazi',
    category: 'javascript',
    details: require('./posts/hello-world.md').default,
    description: 'Bu benim ilk blog postum! Bu benim ilk blog postum! Bu benim ilk blog postum!',
    image: 'https://i.hizliresim.com/nbXXjV.jpg',
    date: '24 Ocak 2020'
  },
  {
    title: 'İkinci Yazının Başlığı Biraz Uzun Olsun!',
    slug: 'birinci-yazi',
    category: 'reactjs',
    details: require('./posts/ikinci-yazinin-basligi-biraz-uzun-olsun.md').default,
    description: 'Bu benim ikinci blog postum!',
    date: '22 Ocak 2020'
  },
  {
    title: 'Üçüncü Yazı!',
    slug: 'ucuncu-yazi',
    category: 'reactjs',
    details: require('./posts/ucuncu-yazi.md').default,
    description: 'Bu benim üçüncü blog postum!',
    image: 'https://i.hizliresim.com/nbXXgg.jpg',
    date: '24 Ocak 2020'
  }
]
