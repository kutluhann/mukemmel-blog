export const getPosts = () => {
  return [
    {
      title: 'Birinci Yazı!',
      slug: 'birinci-yazi',
      category: 'js',
      details: require('./posts/birinci-yazi.md').default,
      date: '22 Ocak 2020'
    }
  ];
};
