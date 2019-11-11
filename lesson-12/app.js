'use strict'

// API
// https://newsapi.org/





// 1. Подключить поиск по введенному слову.
// Новости должны обновляться после каждой введенной буквы.
// 2. Добавить сортировку. Пример, как должно быть в запросе: sortBy=popularity
// Не обязательно:
// 3. Добавить возможность выбора новостей по дате. Пример из запроса: from=2019-10-05


//!!! делайте запрос с поиском и сортировкой. 



class Service {
  constructor() {
    this.key = 'dfb8b7f05b2d47f1be7ca76c489e61ec';
    this.country = '';
    this.category = '';
  }

  sendRequest({ country = '', category = '' }) {
    if (country !== '') {
      this.country = country;
    }
    if (category !== '') {
      this.category = category;
    }

    return fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${this.key}`)
      .then((response) => { return response.json() })
      // .then((response) => { console.log(response) })
      .catch((err) => { console.log(err) })
  }
}

class UI {
  constructor() {
    this.service = new Service();
    this.layout = new LayoutNews();
  }

  init() {
    const country = document.querySelector('#country');
    const category = document.querySelector('#category');

    country.addEventListener('change', this.handleSelect.bind(this));
    category.addEventListener('change', this.handleSelect.bind(this))
  }

  handleSelect(event) {
    const { id: selectName, value: selectValue } = event.target;
    this.service.sendRequest({ [selectName]: selectValue })
      .then((response) => {
        console.log('Yopooooo', response.articles);
        this.layout.renderAll(response.articles)
      })
  }
}

class LayoutNews {
  constructor() {
    this.divRow = document.querySelector('#row');
  }

  renderAll(newsList) {
    this.divRow.innerHTML = '';

    newsList.forEach((news) => {
      const html = this.render(news)
      this.divRow.insertAdjacentHTML('beforeend', html);
    })
  }

  render(news) {
    return `<div class="col s12 m6">
              <div class="card">
                <div class="card-image">
                  <img src="${news.urlToImage}">
                </div>

                <div class="card-content">
                  <span class="card-title">${news.title || ''}</span>
                  <p>${news.description || ''}</p>
                </div>

                <div class="card-action">
                  <a href="${news.url}" target="_blank">Read more</a>
                </div>
              </div>
            </div>
            `
  }
}

const myUI = new UI();
myUI.init();


