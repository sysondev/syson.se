const shuffle = array => {
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
      'https://docs.google.com/document/d/1FTaXx83ry7rS5vMPMyywwaQ_XqRk-3VBmQV5Pi-7-yc/pub',
    image: '/images/people/johanna.jpg',
    quote: 'JS / Java'
  },
  {
    name: 'Leo Danielsson',
    profileUrl:
      'https://docs.google.com/document/d/137oNF9v4lR4XGavlMksW7wwxxtYERTnONBFZrlud3i4/edit?usp=sharing',
    image: '/images/people/leo.jpg',
    quote: 'JS / Java'
  },
  {
    name: 'Alexander Lissenko',
    profileUrl:
      'https://docs.google.com/document/d/e/2PACX-1vSFPFoMEGbFYSKwNHw1fjbEsEydunSKPyG2BPoIyoaj-4wQ1ARCWV9YnqoRL-_DZu6bkuT3ova-TkCY/pub',
    image: '/images/people/alexander.jpg',
    quote: 'JS / Java'
  },
  {
    name: 'Anton Söderstedt',
    profileUrl:
      'https://docs.google.com/document/d/1vZeB8Jxe7qM4qVV8wJBM6X2zGvQKCUEhkVY4-vTFGtk/pub',
    image: '/images/people/anton.jpg',
    quote: 'JS / .NET'
  },
  {
    name: 'Mikael Larsson',
    profileUrl:
      'https://docs.google.com/document/d/13QeSY4v8b5hOBbZPC3SkdaZqivr-D3sGh4jEj-EUCag/pub',
    image: '/images/people/micke.jpg',
    quote: 'Node / JS / UX'
  },
  {
    name: 'Otto Nordgren',
    profileUrl:
      'https://docs.google.com/document/d/1NwXJjs6DdApM_Qg04mQY8raWkY7IrPeaUxIa64TkIDM/pub',
    image: '/images/people/otto.jpg',
    quote: 'JS / Java'
  },
  {
    name: 'Magnus Linell',
    profileUrl:
      'https://docs.google.com/document/d/1aTuje5x5GmgnupA6zcyPqvzm-mRebmGIO_z0JTn_4ao/pub',
    image: '/images/people/magnus.jpg',
    quote: 'JS / Java'
  },
  {
    name: 'Katrine Johansson',
    profileUrl:
      'https://docs.google.com/document/d/1TZj2yAhj6acUkCCTEomhN2GXQNFQHp2HRt6ksnaJP2M/pub',
    image: '/images/people/katrine.jpg',
    quote: 'Testautomatisering / Java'
  },
  {
    name: 'Joakim Gordillo',
    profileUrl:
      'https://docs.google.com/a/syson.se/document/d/1zNxgPpG5LfE35n1OLF3rB6iKIHbZBUCbo__h9wOC2wE/pub',
    image: '/images/people/joakim.jpg',
    quote: 'Node / JS'
  },
  {
    name: 'Patrick Thomsson',
    profileUrl:
      'https://docs.google.com/document/d/1GuaMyViqwnT8Nysba9n3LKW2CBJesuORIiGlY93twqk/pub',
    image: '/images/people/patrick.jpg',
    quote: 'JS / Java'
  },
  {
    name: 'Soroush Hakami',
    image: '/images/people/soroush.jpg',
    linkedInUrl: 'https://www.linkedin.com/in/soroush-hakami/',
    quote: 'Sälj / Rekrytering'
  },
  {
    name: 'Love Gehlin',
    profileUrl:
      'https://docs.google.com/document/d/1rk1qTNxWkkgRCP6aTH_8Wj_mJsv1GfKWqORRGdz1sWA/edit?usp=sharing',
    image: '/images/people/love.jpg',
    quote: 'JS / Java'
  },
  {
    name: 'Anders Söderstedt',
    image: '/images/people/anders.jpg',
    linkedInUrl: 'https://www.linkedin.com/in/anders-s%C3%B6derstedt-1631b8/',
    quote: 'Sälj / Rekrytering'
  },
  {
    name: 'Sabina Kosgård',
    image: '/images/people/sabina.jpg',
    profileUrl:
      'https://docs.google.com/document/d/1kzZkwy7fCbRlKJKmD6v01i4UO8_WpjbQAAsVjGLJAZM/edit?usp=sharing',
    quote: 'Test & testautomatisering'
  },
  {
    name: 'Aram Ghanipour',
    profileUrl:
      'https://docs.google.com/document/d/1MMQOWN8GbvxxQAmD6bisEndDSZVme1B-A2yiF8e5WS0/edit?usp=sharing',
    image: '/images/people/aram.jpg',
    quote: 'JS / .NET'
  },
  {
    name: 'Denny Johansson',
    image: '/images/people/denny.jpg',
    quote: 'JS / React'
  },
]);
