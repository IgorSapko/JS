import templateListOfCards from './templates/cards_list.hbs';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/Material.css';
// import { _ } from 'core-js';
import { alert, notice, info, success, error } from '@pnotify/core';
import './styles.css';
import apiServiceObj from './apiService.js';
import { data } from 'autoprefixer';
import '../node_modules/basiclightbox/dist/basicLightbox.min.css';
import { openModalWindow } from './openModalWindow';

let currentRequest = '';
const btn = document.querySelector('button data-action[load-more]');
const body = document.querySelector('body');
const input = document.querySelector('input');
const serchForm = document.querySelector('#search-form');
const listOfCards = document.querySelector('.gallery');
const btnLoadMore = document.querySelector('button[data-action="load-more"]');

serchForm.addEventListener('submit', apiServiceFunction);
btnLoadMore.addEventListener('click', loadMoreButtonHandler);

function loadMoreButtonHandler() {
  currentRequest = String(input.value);
  apiServiceObj
    .fetchPictureQuery(currentRequest)
    .then(data => {
      const markupListOfCards = templateListOfCards({ apidata: data });
      listOfCards.insertAdjacentHTML('beforeend', markupListOfCards);
      listOfCards.addEventListener('click', openModalWindow.bind(this, data));
    })
    .catch(error => {
      error;
      error({
        text: 'Something wrong. Please try to search again',
      });
    });
  let topIndent = 6580 * (apiServiceObj.page - 1);
  setTimeout(() => {
    window.scrollTo({
      top: `${topIndent}`,
      // left: -100,
      behavior: 'smooth',
    });
  }, 500);

  success({
    text: 'Your request was successful. Please see results',
  });
}

function apiServiceFunction(e) {
  e.preventDefault();
  listOfCards.innerHTML = '';
  apiServiceObj.resetPage();
  currentRequest = String(input.value);
  apiServiceObj
    .fetchPictureQuery(currentRequest)
    .then(data => {
      const markupListOfCards = templateListOfCards({ apidata: data });
      listOfCards.insertAdjacentHTML('beforeend', markupListOfCards);

      listOfCards.addEventListener('click', openModalWindow.bind(this, data));
      if (listOfCards.childNodes.length === 0) {
        notice({
          text: 'Nothing founded. Please input more specifi request',
        });
      } else {
        success({
          text: 'Your request was successful. Please see results',
        });
      }
    })
    .catch(error => {
      error;
      error({
        text: 'Something wrong. Please try to search again',
      });
    });
}
