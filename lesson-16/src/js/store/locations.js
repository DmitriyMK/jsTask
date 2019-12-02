



import Api from '../services/api';

export default class Locations {
    constructor() {
        this.countries = null;
        this.cities = null;
        this.api = new Api();

    }
    async init() {
        const response = await Promise.all([
            this.api.getCities(),
            this.api.getCountries(),
        ]);

        const [cities, countries] = response;
        this.cities = cities.data;
        this.citiesForAutocomplete = this.formatCities(cities);
        this.countries = countries.data;
    }

    formatCities(response) {
        const list = response.data;
        return list.reduce((acc, elem) => {
            acc[elem.name] = elem.code;
            return acc;
        }, {})
    };

    getCityCode(city) {
        return this.citiesForAutocomplete[city];
    }

    fetchTickets(params) {
        return this.api.getPrices(params)
            .then((data) => {
                return data.data.data;
            })
    }
}
