import './styles.css';
import fetch from './js/fetch';
import templateCountry from './template/templateCountry.hbs';
import templateСountries from './template/templateCountryies.hbs';
import setPNotifySettings from './js/PNotify';
import setPNotifySettings1 from './js/PNotify2';
import debounce from 'lodash.debounce';

const countryContainer = document.querySelector('.country-container');
const searchInput = document.querySelector('.search__input');
const CountriesList = document.querySelector('.countries-list');

function renderCountry(country) {
    countryContainer.insertAdjacentHTML(
        'afterbegin',
        templateCountry(country[0]),
    );
}

function renderСountries(countries) {
    CountriesList.insertAdjacentHTML('beforeend', templateСountries(countries));
}

function clean() {
    countryContainer.innerHTML = '';
    CountriesList.innerHTML = '';
}

function countrySearch() {
    const searchValue = searchInput.value;
    clean();
    if (searchValue !== '') {
        fetch(searchValue)
            .then(result => {
                if (result.length === 1) {
                    return renderCountry(result);
                }
                if (result.length > 1 && result.length < 20) {
                    return renderСountries(result);
                }
                setPNotifySettings();
            })
            .catch(error => {
                setPNotifySettings1();
            });
    }
}

searchInput.addEventListener('input', debounce(countrySearch, 500));