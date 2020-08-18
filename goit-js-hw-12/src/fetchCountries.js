import templateList from './templates/list_of_countries.hbs';
import templateOne from './templates/one_country_desription.hbs';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/Material.css';
import { _ } from 'core-js';
// import 'material-design-icons/iconfont/material-icons.css';
import { alert, notice, info, success, error } from '@pnotify/core';


const listContainer = document.querySelector('#list-container');
const oneContainer = document.querySelector('#one-container');
const input = document.querySelector('input');

export default function fetchCountries(searchQuery) {
  event.preventDefault();
  // console.log(searchQuery)
  console.log(input.value);
  const currentRequest = String(input.value);

  setTimeout(() => {
    fetch(searchQuery + currentRequest)
      .then(Response => {
        if (Response.ok) return Response.json();
        throw new Error('error');
      })
      .then(data => {
        console.log(data);
        listContainer.innerHTML = '';
        oneContainer.innerHTML = '';
        if (data.length > 10) {
          console.log(true);
          error({
            text: 'Too many matches found. Please enter more specify query',
          });
        } else if (data.length >= 2 && data.length <= 10) {
          let arrOfNamesOfCountries = data.map(item => item.name);

          const markupList = templateList({ apidata: arrOfNamesOfCountries });

          listContainer.innerHTML = markupList;
        } else if (data.length === 1) {
          const markupOne = templateOne({ apidata: data });

          oneContainer.innerHTML = markupOne;
        }
        return data;
      })
      .catch(error => console.log('Catched error'));
  }, 500);
}
