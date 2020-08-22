const basicLightbox = require('basiclightbox');
export const openModalWindow = (data, e) => {
  console.log(data);
  console.log(e);
  data.map(elem => {
    if (elem.webformatURL === e.srcElement.currentSrc) {
      const instance = basicLightbox.create(
        `
  <img src=${elem.largeImageURL} width="800" height="600">
  `,
        {
          closable: true,
        },
      );

      instance.show();
    }
  });
};
