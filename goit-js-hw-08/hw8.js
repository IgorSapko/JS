import dataOfPictures from "./gallery-items.js";

const listOfPictures = document.querySelector(".js-gallery");

let arrOfLiToString = dataOfPictures
  .map((elem) => {
    const item = `<li class="gallery__item">
        <a
          class="gallery__link"
          href=${elem.original}
        >
          <img
            class="gallery__image"
            src=${elem.preview}
            data-source=${elem.original}
            alt=${elem.description}
          />
        </a>
      </li>`;
    return item;
  })
  .join("");
listOfPictures.insertAdjacentHTML("beforeend", arrOfLiToString);

//-------

// function createListItem(arr){
//   arr.forEach(element => {
// const liItem = document.createElement('li');

// liItem.classList.add('gallery__item');
// console.log(liItem);
// const liItem_a = document.createElement('a');
// liItem_a.classList.add('gallery__link');
// liItem_a.href = element.original;
// // console.log(liItem_a)
// const img = document.createElement('img');
// img.classList.add('gallery__image');
// img.src= element.preview;
// img.setAttribute('data-source',element.original);
// //  console.log(img)
//  img.alt = element.description;
//  liItem.appendChild(liItem_a);
//  liItem_a.appendChild(img);
//  console.log(liItem);
//  listOfPictures.appendChild(liItem);
//   });
// }

// createListItem(dataOfPictures);

//----------

const divLightbox = document.querySelector(".lightbox");
const imgModal = document.querySelector(".lightbox__image");

const divLightboxFunk = function () {
  event.preventDefault();

  if (listOfPictures === event.target) {
    return;
  }

  divLightbox.classList.toggle("is-open");
  imgModal.src = event.target.dataset.source;
};

listOfPictures.addEventListener("click", divLightboxFunk);

const btnClose = document.querySelector(".lightbox__button");
// console.log(btnClose);

const closeModalWindowFunk = function () {
  divLightbox.classList.toggle("is-open");
  imgModal.src = "";
};

btnClose.addEventListener("click", closeModalWindowFunk);
const divLightboxOverlay = document.querySelector(".lightbox__overlay");
// console.log(divLightboxOverlay)

const closeModalWindowFunkLightbox = function () {
  if (event.target === btnClose) {
    return;
  }
  divLightbox.classList.toggle("is-open");
  imgModal.src = "";
};

divLightbox.addEventListener("click", closeModalWindowFunkLightbox);

const closeModalWindowByESCFunk = function ({ key }) {
  if (divLightbox.classList.contains("is-open") && key === "Escape") {
    closeModalWindowFunk();
  }
};
listOfPictures.addEventListener("keydown", closeModalWindowByESCFunk);

console.log(listOfPictures.children[1].childNodes[1].href);

console.log(listOfPictures.children.length);

function controlDownFunk({ key }) {
  if (key === "ArrowDown") {
    for (let i = 0; i <= listOfPictures.children.length; i += 1) {
      if (listOfPictures.children[i].childNodes[1].href === imgModal.src) {
        if (i < 6) {
          imgModal.src = listOfPictures.children[i + 3].childNodes[1].href;
        } else {
          imgModal.src = listOfPictures.children[i - 6].childNodes[1].href;
        }
        return;
      }
    }
  }
}
window.addEventListener("keydown", controlDownFunk);

function controlUpFunk({ key }) {
  if (key === "ArrowUp") {
    for (let i = 0; i <= listOfPictures.children.length; i += 1) {
      if (listOfPictures.children[i].childNodes[1].href === imgModal.src) {
        if (i >= 3) {
          imgModal.src = listOfPictures.children[i - 3].childNodes[1].href;
        } else {
          imgModal.src = listOfPictures.children[i + 6].childNodes[1].href;
        }
        return;
      }
    }
  }
}
window.addEventListener("keydown", controlUpFunk);

function controlRightFunk({ key }) {
  if (key === "ArrowRight") {
    for (let i = 0; i <= listOfPictures.children.length; i += 1) {
      if (listOfPictures.children[i].childNodes[1].href === imgModal.src) {
        if (i < 8) {
          imgModal.src = listOfPictures.children[i + 1].childNodes[1].href;
        } else {
          imgModal.src = listOfPictures.children[0].childNodes[1].href;
        }
        return;
      }
    }
  }
}

window.addEventListener("keydown", controlRightFunk);

function controlLeftFunk({ key }) {
  if (key === "ArrowLeft") {
    for (let i = 0; i <= listOfPictures.children.length; i += 1) {
      if (listOfPictures.children[i].childNodes[1].href === imgModal.src) {
        console.log(
          listOfPictures.children[i].childNodes[1].href === imgModal.src
        );
        if (i > 0) {
          imgModal.src = listOfPictures.children[i - 1].childNodes[1].href;
        } else {
          imgModal.src = listOfPictures.children[8].childNodes[1].href;
        }
        return;
      }
    }
  }
}

window.addEventListener("keydown", controlLeftFunk);
