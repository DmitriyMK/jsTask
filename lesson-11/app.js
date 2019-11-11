// Практика
// Сделать запрос к альбомам, получить их список, вывести на экран (в левой колонке на странице)
// При клике на альбом делать запрос к фотографиям (которые в относятся к текущему альбому), получать их список, вывести на экран (в правой колонке)
// Апи для запросов - https://jsonplaceholder.typicode.com/ 



class CustomHttp {
  get(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.addEventListener('load', () => callback(xhr.responseText))
  }

  post(url, data, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.send(data);
    xhr.addEventListener('load', () => callback(xhr.responseText))
  }
}

const http = new CustomHttp();

http.get('https://jsonplaceholder.typicode.com/albums', (res) => {
  const parsedAlbum = JSON.parse(res);
  const renderAlbum = new Album();

  parsedAlbum.forEach((album) => {
    renderAlbum.renderAlbum(album);
  });
});


class Album {
  constructor() {
    this.list = document.querySelector('.list');
  }


  handleClick(event) {
    const albumId = event.target.dataset.id;

    http.get('https://jsonplaceholder.typicode.com/photos?albumId=' + albumId, (res) => {
      const parsedAlbum = JSON.parse(res);
      const renderAlbum = new Album();

      parsedAlbum.forEach((photo) => {
        renderAlbum.renderPhoto(photo);
      });

    });
  }


  renderAlbum(album) {
    const photolink = document.querySelectorAll('.album__link');
    const photoItem = `
                        <div class='photoItem'>
                          <a href='#' class='photolink' data-id = ${album.id}>
                            <span class='photoTitle'>${album.title}</span>
                          </a>
                        </div>
                      `;

    this.list.insertAdjacentHTML('beforeend', photoItem);
    photolink.forEach(album => {
      album.addEventListener('click', this.handleClick);
    });
  }


  renderPhoto(photo) {
    const gallery = document.querySelector('.gallery')

    const galleryItem = `<div class='gallery__item'>
                          <img src='${photo.url}'>
                        </div>
                        `;

    this.gallery.insertAdjacentHTML('beforeend', galleryItem);
  }
}