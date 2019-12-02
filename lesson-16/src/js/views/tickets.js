

export default class Tickets {
    constructor() {
        this.container = document.querySelector('.tickets')
    }

    renderTickets(tickets) {
        this.clearScreen();

        if (tickets === {}) {
            this.showErrorMessage()
            return;
        }

        for (let key in tickets) {
            this.render(tickets[key])
        }

    }

    clearScreen() {
        this.container.innerHTML = '';
    }

    showErrorMessage() {
        const html = `<div style="color: #ff1506">Билетов нет :( </div>`;
        this.container.insertAdjacentHTML('beforeend', html);
    }

    render(ticket) {
        const html = `<div style="color: #0bb106">
        destination - ${ticket.destination} <br />
        origin - ${ticket.origin} <br />
        price - ${ticket.price} <br />
        </div>`;
        this.container.insertAdjacentHTML('beforeend', html);
    }
}
