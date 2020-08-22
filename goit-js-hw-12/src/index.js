var debounce = require('lodash.debounce');
import './styles.css';
_.debounce(() => console.log('111'), 1000);
const baseUrl = 'https://restcountries.eu/rest/v2/name/';
const input = document.querySelector('input');

import fetchCountries from './fetchCountries';
input.addEventListener('input', fetchCountries.bind(this, baseUrl));


