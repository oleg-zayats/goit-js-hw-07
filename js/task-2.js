const images = [
  {
    url: "./images/1.jpg"  ,
    alt: "People discussing ideas around a table with a laptop",
  },
  {
    url: "./images/2.jpg",
    alt: "Hand holding a glowing lightbulb against a colored background",
  },
  {
    url: "./images/3.jpg",
    alt: "A person holding a smartphone next to a potted plant",
  },
  {
    url: "./images/4.jpg",
    alt: "Modern open-plan office space with desks and chairs",
  },
  {
    url: "./images/5.jpg",
    alt: "Bright collaborative workspace with unique furniture",
  },
  {
    url: "./images/6.jpg",
    alt: "Long table in a conference room with large windows",
  },
];

const gallery = document.querySelector('.gallery');

const galleryMarkup = images
  .map(image => `<li><img src="${image.url}" alt="${image.alt}"></li>`)
  .join('');

gallery.insertAdjacentHTML('beforeend', galleryMarkup);