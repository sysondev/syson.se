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
      'https://docs.google.com/document/d/1GAd6cXTrBft_0I_pwRYJD9lNLb4bKLXApv6vD_OGZeE/edit?usp=sharing',
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
      'https://docs.google.com/document/d/13QeSY4v8b5hOBbZPC3SkdaZqivr-D3sGh4jEj-EUCag/pub',
    image: '/images/people/micke.jpg',
    quote: 'Node / JS / UX',
  },
  {
    name: 'Otto Nordgren',
    profileUrl:
      'https://docs.google.com/document/d/1NwXJjs6DdApM_Qg04mQY8raWkY7IrPeaUxIa64TkIDM/pub',
    image: '/images/people/otto.jpg',
    quote: 'JS / Java',
  },
  {
    name: 'Magnus Linell',
    profileUrl:
      'https://docs.google.com/document/d/1aTuje5x5GmgnupA6zcyPqvzm-mRebmGIO_z0JTn_4ao/pub',
    image: '/images/people/magnus.jpg',
    quote: 'JS / Java',
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
    name: 'Patrick Thomsson',
    profileUrl:
      'https://docs.google.com/document/d/1GuaMyViqwnT8Nysba9n3LKW2CBJesuORIiGlY93twqk/pub',
    image: '/images/people/patrick.jpg',
    quote: 'JS / Java',
  },
  {
    name: 'Soroush Hakami',
    image: '/images/people/soroush.jpg',
    linkedInUrl: 'https://www.linkedin.com/in/soroush-hakami/',
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
]);
