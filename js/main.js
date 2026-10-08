// Получаем модальное окно по id.
const orderDialog = document.getElementById('order-dialog');

// Получаем все кнопки заказа в карточках товаров.
const orderButtons = document.querySelectorAll('.product-card__button');

// Получаем кнопку закрытия модального окна.
const closeDialogButton = document.getElementById('close-order-dialog');

// Получаем скрытое поле, в которое будет записан выбранный товар.
const selectedProductInput = document.getElementById('selected-product');

// Получаем кнопку возврата наверх.
const scrollTopButton = document.getElementById('scroll-top');

// Запоминаем положение страницы перед открытием окна.
let pageScrollPosition = 0;

// Фиксируем страницу и запрещаем прокрутку фона.
const lockPageScroll = () => {
  pageScrollPosition = window.scrollY;
  document.body.style.top = `-${pageScrollPosition}px`;
  document.body.classList.add('page--locked');
};

// Возвращаем прокрутку после закрытия окна.
const unlockPageScroll = () => {
  document.body.classList.remove('page--locked');
  document.body.style.top = '';
  window.scrollTo({ top: pageScrollPosition, behavior: 'instant' });
};

// Показываем кнопку наверх после прокрутки страницы.
const updateScrollTopButton = () => {
  scrollTopButton.hidden = window.scrollY < 300;
};

// Перебираем все кнопки «Заказать».
orderButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Получаем название товара из data-атрибута.
    const productName = button.dataset.product;

    // Записываем название товара в скрытое поле формы.
    selectedProductInput.value = productName;

    // Открываем модальное окно.
    orderDialog.showModal();

    // Запрещаем прокрутку фоновой страницы.
    lockPageScroll();
  });
});

// Закрываем модальное окно по кнопке «Закрыть».
closeDialogButton.addEventListener('click', () => {
  orderDialog.close();
});

// Возвращаем прокрутку при любом способе закрытия окна.
orderDialog.addEventListener('close', unlockPageScroll);

// Следим за прокруткой страницы.
window.addEventListener('scroll', updateScrollTopButton);

// Плавно прокручиваем страницу наверх.
scrollTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// Устанавливаем правильное состояние кнопки при загрузке страницы.
updateScrollTopButton();

// Получаем форму заявки.
const orderForm = document.getElementById('order-form');

// Получаем сообщение об успешной отправке.
const successMessage = document.getElementById('success-message');

// Обрабатываем отправку формы.
orderForm.addEventListener('submit', (event) => {
  // Отменяем стандартную отправку формы,
  // потому что backend пока не подключён.
  event.preventDefault();

  // Сбрасываем предыдущие признаки ошибок.
  const formElements = Array.from(orderForm.elements);

  formElements.forEach((element) => {
    if (element.willValidate) {
      element.removeAttribute('aria-invalid');
    }
  });

  // Проверяем встроенные HTML-ограничения формы.
  if (!orderForm.checkValidity()) {
    formElements.forEach((element) => {
      if (element.willValidate && !element.checkValidity()) {
        element.setAttribute('aria-invalid', 'true');
      }
    });

    // Показываем стандартные сообщения браузера.
    orderForm.reportValidity();
    return;
  }

  // Показываем сообщение об успешной отправке.
  successMessage.hidden = false;

  // Очищаем форму.
  orderForm.reset();

  // Закрываем модальное окно.
  orderDialog.close();
});