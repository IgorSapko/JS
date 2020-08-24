const debounce = require('lodash.debounce');
import './styles.css';
import fetchCountries from './fetchCountries';
const input = document.querySelector('input');
input.addEventListener('input', debounce(fetchCountries,1000));
