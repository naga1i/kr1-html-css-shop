// Данные всех товаров магазина.
const products = {
  1: {
    name: 'Беспроводные наушники SoundMax',
    image: 'images/headphones.jpg',
    category: 'Наушники',
    price: 4990,
    available: true,
    description: 'Закрытые беспроводные наушники с мягкими амбушюрами и чистым звуком. До 30 часов работы без подзарядки.',
  },
  2: {
    name: 'Смартфон Nova X',
    image: 'images/phone.jpg',
    category: 'Смартфоны',
    price: 24990,
    oldPrice: 29990,
    available: true,
    description: 'Смартфон с ярким экраном 6,1 дюйма, двойной камерой и памятью 128 ГБ.',
  },
  3: {
    name: 'Умные часы Pulse',
    image: 'images/smartwatch.jpg',
    category: 'Умные часы',
    price: 8990,
    available: false,
    description: 'Умные часы с пульсометром, шагомером и уведомлениями со смартфона.',
  },
  4: {
    name: 'Ноутбук AirBook 14',
    image: 'images/laptop.jpg',
    category: 'Ноутбуки',
    price: 54990,
    available: true,
    description: 'Лёгкий ноутбук с экраном 14 дюймов для учёбы и работы. Весит всего 1,3 кг.',
  },
  5: {
    name: 'Планшет Tab 11',
    image: 'images/tablet.jpg',
    category: 'Планшеты',
    price: 19990,
    available: true,
    description: 'Планшет с экраном 11 дюймов и поддержкой стилуса. Удобен для рисования и просмотра видео.',
  },
  6: {
    name: 'Портативная колонка Boom',
    image: 'images/speaker.jpg',
    category: 'Аудиотехника',
    price: 6490,
    available: true,
    description: 'Влагозащищённая Bluetooth-колонка с громким звуком и 12 часами работы.',
  },
  7: {
    name: 'Беспроводная клавиатура KeyPro',
    image: 'images/keyboard.jpg',
    category: 'Аксессуары',
    price: 2990,
    available: true,
    description: 'Тонкая беспроводная клавиатура с тихими клавишами и русской раскладкой.',
  },
  8: {
    name: 'Компьютерная мышь Swift',
    image: 'images/mouse.jpg',
    category: 'Аксессуары',
    price: 1290,
    oldPrice: 1590,
    available: true,
    description: 'Беспроводная мышь удобной формы с точным сенсором.',
  },
  9: {
    name: 'Геймпад GameStick',
    image: 'images/gamepad.jpg',
    category: 'Игры',
    price: 3990,
    available: true,
    description: 'Беспроводной геймпад для компьютера и приставки с вибрацией.',
  },
  10: {
    name: 'Фотоаппарат моментальной печати Snap',
    image: 'images/camera.jpg',
    category: 'Фототехника',
    price: 9990,
    available: true,
    description: 'Фотоаппарат, который печатает снимок сразу после съёмки.',
  },
  11: {
    name: 'Фитнес-часы Lite',
    image: 'images/watch.jpg',
    category: 'Умные часы',
    price: 3490,
    available: true,
    description: 'Лёгкие фитнес-часы для тренировок: считают шаги, калории и сон.',
  },
  12: {
    name: 'Городской рюкзак Urban',
    image: 'images/backpack.jpg',
    category: 'Аксессуары',
    price: 2490,
    available: true,
    description: 'Вместительный рюкзак с отделением для ноутбука до 15 дюймов.',
  },
};

// Получаем номер товара из адреса страницы, например product.html?id=2.
const productId = new URLSearchParams(window.location.search).get('id') || '1';
const product = products[productId];

// Если товар найден, подставляем его данные на страницу.
if (product) {
  const priceText = `Цена: ${product.price} руб.`;

  document.title = `${product.name} — Учебный интернет-магазин`;
  document.getElementById('product-breadcrumb').textContent = product.name;
  document.getElementById('product-title').textContent = product.name;
  document.getElementById('product-description').textContent = product.description;
  document.getElementById('product-category').textContent = product.category;
  document.getElementById('product-table-price').textContent = `${product.price} руб.`;
  document.getElementById('product-availability').textContent = product.available ? 'В наличии' : 'Нет в наличии';

  const image = document.getElementById('product-image');
  image.src = product.image;
  image.alt = product.name;

  // Для товара со скидкой показываем старую цену зачёркнутой.
  const price = document.getElementById('product-price');
  price.textContent = priceText;

  if (product.oldPrice) {
    const oldPrice = document.createElement('s');
    oldPrice.className = 'product-card__old-price';
    oldPrice.textContent = `${product.oldPrice} руб.`;
    price.append(' ', oldPrice);
  }
}
