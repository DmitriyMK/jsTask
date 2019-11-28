
import axios from 'axios';

export default class Api {
    constructor() {
        this.url = 'https://aviasales-api.herokuapp.com';
    }
    getCities() {
        return axios.get(this.url + '/cities')
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    getCountries() {
        return axios.get(this.url + '/countries')
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}
