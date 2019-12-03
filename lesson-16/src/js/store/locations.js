


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
            this.api.getCountries()
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


    getCityName(cityCode) {
        for (let key in this.citiesForAutocomplete) {
            if (cityCode === this.citiesForAutocomplete[key]) {
                return key;
            }
        }
    }

    transformTickets(ticketsList) {
        const updatedList = [];

        for (let key in ticketsList) {
            const ticket = ticketsList[key];
            updatedList.push({
                ...ticket,
                airline_logo: '',
                airline_name: '',
                'origin_name': this.getCityName(ticket.origin),
                'destination_name': this.getCityName(ticket.destination),
                'departure_at': '',
            });
        }

        return updatedList;
    }


    fetchTickets(params) {
        return this.api.getPrices(params)
            .then((response) => {
                return this.transformTickets(response.data.data);
            })
    }
}
