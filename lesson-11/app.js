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



http.get('https://jsonplaceholder.typicode.com/albums', (photo) => {

  const parsedPhoto = JSON.parse(photo);
  const imgForRendering = new PhotoAlbum();

  parsedPhoto.forEach((photo) => {
    imgForRendering.render(photo);
  })
});


class PhotoAlbum {
  constructor() {
    this.gallery = document.querySelector('.gallery');
    this.photo = document.querySelector('.photo');
  }

  handleClick(event) {

    http.get('https://jsonplaceholder.typicode.com/photos?albumId=', (res) => {
      const gallery = new PhotoAlbum();
      const parsedPhoto = JSON.parse(res);
      parsedPhoto.forEach((photo) => {
        gallery.render(photo);
      });
    });
  }

  render(gallery) {
    const div = document.createElement('div')
    div.addEventListener('click', this.handleClick)
    this.gallery.append(div);
  }
}
