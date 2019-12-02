
import './helpers/materialize';
import FormUI from './views/form';
import Locations from './store/locations';
import Tickets from './views/tickets';

const locations = new Locations();
const tickets = new Tickets();


document.addEventListener('DOMContentLoaded', function () {
    const submitBtn = document.querySelector('.submit')
    const form = new FormUI();

    async function initApp() {
        await locations.init();
        form.setAutocompleteData(locations.citiesForAutocomplete)
    }
    initApp();

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        handleSubmit()
    })

    function handleSubmit() {
        const arriveCity = locations.getCityCode(form.arriveCity);
        const departureCity = locations.getCityCode(form.departureCity);
        const departureDate = form.departure;
        const returnDate = form.return;

        locations.fetchTickets({
            origin: arriveCity,
            destination: departureCity,
            'depart_date': departureDate,
            'return_date': returnDate,
            currency: 'USD'
        }).then((data) => {
            tickets.renderTickets(data)
        })
    }

});
