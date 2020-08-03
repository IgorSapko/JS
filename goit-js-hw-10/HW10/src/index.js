import './styles.css';
('use strict');
import menu from './menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const source = document.querySelector('#template_menu__item').innerHTML.trim();
const template = Handlebars.compile(source);
const markup = template({ apidata: menu });

const menuList = document.querySelector('.js-menu');

menuList.innerHTML = markup;

const switcher = document.querySelector('#theme-switch-control');

const body = document.querySelector('body');

const checkbox = document.querySelector('#theme-switch-control');
function isChecked() {}
checkbox.addEventListener('change', isChecked);

if (
  localStorage.getItem(Theme.DARK) === null &&
  localStorage.getItem(Theme.LIGHT) === null
) {
  body.classList.add('light-theme');
  localStorage.setItem(Theme.LIGHT, 'ON');
} else if (localStorage.getItem(Theme.DARK)) {
  localStorage.removeItem(Theme.LIGHT);
  body.classList.remove('light-theme');
  body.classList.add('dark-theme');
  checkbox.checked = true;
} else {
  localStorage.removeItem(Theme.DARK);
  body.classList.remove('dark-theme');
  body.classList.add('light-theme');
}

function changeThemefunk() {
  if (localStorage.getItem(Theme.LIGHT)) {
    localStorage.removeItem(Theme.LIGHT);
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    localStorage.setItem(Theme.DARK, 'ON');
  } else {
    localStorage.removeItem(Theme.DARK);
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    localStorage.setItem(Theme.LIGHT, 'ON');
  }
}

switcher.addEventListener('change', changeThemefunk);
// localStorage.clear()
