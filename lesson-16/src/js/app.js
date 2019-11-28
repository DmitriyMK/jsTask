
import './helpers/materialize';
import FormUI from './views/form';
import Locations from './store/locations';

const locations = new Locations();


document.addEventListener('DOMContentLoaded', function() {
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
        const arrive = form.arrive;
        const departure = form.departure;

        console.log('arrive', arrive)
        console.log('departure', departure)
    }

});
