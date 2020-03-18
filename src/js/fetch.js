const url = 'https://restcountries.eu/rest/v2/name/';
export default function(searchName) {
    return fetch(url + searchName)
        .then(res => {
            return res.json();
        })
        .then(data => data)
        .catch(error => {
            console.error('Error: ', error);
        });
}