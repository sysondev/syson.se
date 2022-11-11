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
    name: 'Anton Söderstedt',
    profileUrl:
      'https://docs.google.com/document/d/1mp3L3mIeuixXMV7CpGp_wHiyGcWzOQPJ_GT7zu-sixs/edit?usp=sharing',
    image: '/images/people/anton.jpg',
    quote: 'JS / .NET',
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
    profileUrl:
      'https://docs.google.com/document/d/1zhhJQneniBod_kk54PkmVA6cbL6GabbR5sgHmVkju4o/edit?usp=sharing',
    image: '/images/people/soroush.jpg',
    phone: '073-047 34 41',
    quote: 'JS / React',
  },
  {
    name: 'Love Gehlin',
    profileUrl:
      'https://docs.google.com/document/d/1G5nqrnYOWyYFlL1kPp0h4kwzgaqXPl9Cq66-bDQqECE/edit#',
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
    profileUrl:
      'https://docs.google.com/document/d/1NQ7IQzW8mZMl9iYdsS8JZXPmGzWP6AWrymL-C37bjTA/edit?usp=sharing',
    image: '/images/people/olov.jpg',
    quote: 'JS / .NET',
  },
  {
    name: 'Victor Trigo Wagner',
    profileUrl:
      'https://docs.google.com/document/d/1UoNXF-xm-xHoJLp9fibAlq5aw6KwU3Oz8uvFc-4YjCM/edit?usp=sharing',
    image: '/images/people/victor.jpg',
    quote: 'JS / React',
  },
  {
    name: 'Gustav Lindberg',
    profileUrl:
      'https://docs.google.com/document/d/1KhtqREPwBCNqAoReT8r1dqZjAGqlZfmgSRyXNecVH-0/edit?usp=sharing',
    image: '/images/people/gustav.jpg',
    quote: 'JS / React',
  },
  {
    name: 'Dimitris Thanasis',
    profileUrl:
      'https://docs.google.com/document/d/1eNJre_NsDYioSvKQHmQQMjRHUg52Jd-iZuPg233Ao9g/edit?usp=sharing',
    image: '/images/people/dimitris.jpg',
    quote: 'JS / .NET',
  },
]);
