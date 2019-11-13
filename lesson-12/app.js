'use strict'

// API
// https://newsapi.org/


// 1. Подключить поиск по введенному слову. +
// Новости должны обновляться после каждой введенной буквы.
// 2. Добавить сортировку. Пример, как должно быть в запросе: sortBy=popularity


//!!! делайте запрос с поиском и сортировкой. 



class Service {
  constructor() {
    this.key = 'dfb8b7f05b2d47f1be7ca76c489e61ec';
    this.country = '';
    this.category = '';
    this.search = '';
  }

  sendRequest({ country = '', category = '', search = '', sort = '' }) {
    let urlForSearch = ''

    if (country !== '') {
      this.country = country;
      urlForSearch = `https://newsapi.org/v2/top-headlines?country=${this.country}&category=${this.category}&apiKey=${this.key}`
    }

    if (category !== '') {
      this.category = category;
      urlForSearch = `https://newsapi.org/v2/top-headlines?country=${this.country}&category=${this.category}&apiKey=${this.key}`
    }

    if (search !== '') {
      this.search = search;
      urlForSearch = `https://newsapi.org/v2/everything?q=${this.search}&apiKey=${this.key}`
    }

    if (sort !== '') {
      this.sort = sort;
      urlForSearch = `https://newsapi.org/v2/everything?q=${this.search}}&sortBy=${this.sort}&apiKey=${this.key}`
    }


    return fetch(urlForSearch)
      .then((response) => {
        return response.json()
      })
      .catch((err) => {
        console.log(err)
      })
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
    const search = document.querySelector('#search');
    const sort = document.querySelector('#sort');

    country.addEventListener('change', this.handleSelect.bind(this));
    category.addEventListener('change', this.handleSelect.bind(this))
    search.addEventListener('change', this.handleSelect.bind(this));
    sort.addEventListener('change', this.handleSelect.bind(this));
  }

  handleSelect(event) {
    const { id: selectName, value: selectValue } = event.target;
    this.service.sendRequest({ [selectName]: selectValue })
      .then((response) => {
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


