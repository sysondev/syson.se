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
    name: "Anton Söderstedt",
    profileUrl:
      "https://docs.google.com/document/d/1mp3L3mIeuixXMV7CpGp_wHiyGcWzOQPJ_GT7zu-sixs/edit?usp=sharing",
    image: "/images/people/anton.jpg",
    quote: "JS / .NET",
  },
  {
    name: "Soroush Hakami",
    profileUrl:
      "https://docs.google.com/document/d/1zhhJQneniBod_kk54PkmVA6cbL6GabbR5sgHmVkju4o/edit?usp=sharing",
    image: "/images/people/soroush.jpg",
    phone: "073-047 34 41",
    quote: "JS / React",
  },
  {
    name: "Love Gehlin",
    profileUrl:
      "https://docs.google.com/document/d/1G5nqrnYOWyYFlL1kPp0h4kwzgaqXPl9Cq66-bDQqECE/edit#",
    image: "/images/people/love.jpg",
    quote: "JS / Java",
  },
  {
    name: "Mattias Ekström",
    image: "/images/people/mattias.jpg",
    profileUrl:
      "https://docs.google.com/document/d/1_h2Fjb8JxDHs1B1b-ftnSTsH5O_z_UJjo2iATJ8KUFI/edit?usp=sharing",
    quote: "JS / .NET",
  },
  {
    name: "Olov Gulliksson",
    profileUrl:
      "https://docs.google.com/document/d/1NQ7IQzW8mZMl9iYdsS8JZXPmGzWP6AWrymL-C37bjTA/edit?usp=sharing",
    image: "/images/people/olov.jpg",
    quote: "JS / .NET",
  },
  {
    name: "Victor Trigo Wagner",
    profileUrl:
      "https://docs.google.com/document/d/1UoNXF-xm-xHoJLp9fibAlq5aw6KwU3Oz8uvFc-4YjCM/edit?usp=sharing",
    image: "/images/people/victor.jpg",
    quote: "JS / React",
  },
  {
    name: "Gustav Lindberg",
    profileUrl:
      "https://docs.google.com/document/d/1DvzCYClGfJEwFZBYBG0Ax3dXO-ZQ0NXuHFMaoHm6CxU/edit?usp=sharing",
    image: "/images/people/gustav.jpg",
    quote: "JS / React",
  },
]);
