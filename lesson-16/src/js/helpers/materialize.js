

import 'materialize-css/dist/js/materialize.min';
import 'materialize-css/dist/css/materialize.min.css';

//Init datepicker
const datepicker = document.querySelectorAll('.datepicker');
M.Datepicker.init(datepicker);


//Init autocomplete
const autocomplete = document.querySelectorAll('.autocomplete');
const options = {
    data: {
        "Apple": null,
        "Microsoft": null,
        "Google": 'https://placehold.it/250x250'
    }
}
M.Autocomplete.init(autocomplete, options);

export function getAutocompleteInstance(elem) {
    return M.Autocomplete.getInstance(elem)
}
