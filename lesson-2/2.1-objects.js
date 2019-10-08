// 1. Создать объект с полем product, равным ‘iphone’
let catalog = {
  product: 'iphone',
}
console.log(catalog);


// 2. Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
catalog.price = 1000;
catalog.currency = 'dollar';
console.log(catalog);


// 3. Добавить поле details, которое будет содержать объект с полями model и color
catalog.details = {
  model: '',
  color: ''
}
console.log(catalog);

// Все поля добавлять по очереди, не создавать сразу готовый объект со всеми полями.
