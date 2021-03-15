const shuffle = (array) => {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

export default shuffle([
  {
    name: 'Johanna Lagerholm',
    profileUrl:
      'https://docs.google.com/document/d/19fDEWBrFH449nJoqzrZkqby3v5AcJ7PYdn4pmUlr07E/edit?usp=sharing',
    image: '/images/people/johanna.jpg',
    quote: 'JS / Java',
  },
  {
    name: 'Leo Danielsson',
    profileUrl:
      'https://docs.google.com/document/d/1vFr4LHEOGgcXI5rXEM2cgqzS_5AuhiwJI1I-ex6oEGU/edit?usp=sharing',
    image: '/images/people/leo.jpg',
    quote: 'JS / Java',
  },
  {
    name: 'Alexander Lissenko',
    profileUrl:
      'https://docs.google.com/document/d/1tk9L-IHqo-yGvLbj3feiCj8sdnKEEM-ff2ugQjjvQkc/edit?usp=sharing',
    image: '/images/people/alexander.jpg',
    quote: 'JS / Java',
  },
  {
    name: 'Anton Söderstedt',
    profileUrl:
      'https://docs.google.com/document/d/1mp3L3mIeuixXMV7CpGp_wHiyGcWzOQPJ_GT7zu-sixs/edit?usp=sharing',
    image: '/images/people/anton.jpg',
    quote: 'JS / .NET',
  },
  {
    name: 'Mikael Larsson',
    profileUrl:
      'https://docs.google.com/document/d/1o0v_EqH5tozHDAXhG-FDIedoGT_Pw6Xa2nfe9dmFbuw/edit?usp=sharing',
    image: '/images/people/micke.jpg',
    quote: 'Node / JS / UX',
  },
  {
    name: 'Katrine Johansson',
    profileUrl:
      'https://docs.google.com/document/d/10vA5JZfqXxqPSt4YuKJXRNWVjs2sQ0fc3-2Y9_dDuts/edit?usp=sharing',
    image: '/images/people/katrine.jpg',
    quote: 'Testautomatisering / Java',
  },
  {
    name: 'Joakim Gordillo',
    profileUrl:
      'https://docs.google.com/document/d/119PGfv9tjTpKQMSwPT3PmaXOFVaL42S6tnTqov3hPEo/edit?usp=sharing',
    image: '/images/people/joakim.jpg',
    quote: 'Node / JS',
  },
  {
    name: 'Soroush Hakami',
    image: '/images/people/soroush.jpg',
    phone: '073-047 34 41',
    mail: 'salj@syson.se',
    quote: 'Sälj / Rekrytering',
  },
  {
    name: 'Love Gehlin',
    profileUrl:
      'https://docs.google.com/document/d/1rk1qTNxWkkgRCP6aTH_8Wj_mJsv1GfKWqORRGdz1sWA/edit?usp=sharing',
    image: '/images/people/love.jpg',
    quote: 'JS / Java',
  },
  {
    name: 'Mattias Ekström',
    image: '/images/people/mattias.jpg',
    profileUrl:
      'https://docs.google.com/document/d/1_h2Fjb8JxDHs1B1b-ftnSTsH5O_z_UJjo2iATJ8KUFI/edit?usp=sharing',
    quote: 'JS / .NET',
  },
  {
    name: 'Sabina Kosgård',
    image: '/images/people/sabina.jpg',
    profileUrl:
      'https://docs.google.com/document/d/1kzZkwy7fCbRlKJKmD6v01i4UO8_WpjbQAAsVjGLJAZM/edit?usp=sharing',
    quote: 'Test & testautomatisering',
  },
  {
    name: 'Aram Ghanipour',
    profileUrl:
      'https://docs.google.com/document/d/1MMQOWN8GbvxxQAmD6bisEndDSZVme1B-A2yiF8e5WS0/edit?usp=sharing',
    image: '/images/people/aram.jpg',
    quote: 'JS / .NET',
  },
  {
    name: 'Denny Johansson',
    image: '/images/people/denny.jpg',
    quote: 'JS / React',
  },
  {
    name: 'Olov Gulliksson',
    profileUrl: 'https://docs.google.com/document/d/1NQ7IQzW8mZMl9iYdsS8JZXPmGzWP6AWrymL-C37bjTA/edit?usp=sharing',
    image: '/images/people/olov.jpg',
    quote: 'JS / .NET',
  },
]);
