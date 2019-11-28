
import {getAutocompleteInstance} from '../helpers/materialize';

export default class FormUI {
    constructor() {
        this.cityOfArrive = document.querySelector('#city_of_arive');
        this.arriveAutocomplete = getAutocompleteInstance(this.cityOfArrive);

        this.cityOfDeparture = document.querySelector('#city_of_departure');
        this.departureAutocomplete = getAutocompleteInstance(this.cityOfDeparture);
    }

    get arrive() {
        return this.cityOfArrive.value;
    }

    get departure() {
        return this.cityOfDeparture.value;
    }

    setAutocompleteData(data) {
        this.arriveAutocomplete.updateData(data);
        this.departureAutocomplete.updateData(data);
    }
}
