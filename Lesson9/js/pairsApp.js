(function () {
  /**
   * Функции, вспомогательные, по отношению к createPairsApp()
   */

  /**
   * Заголовок Window.document.title
   */
  function setPageTitle() {
    window.document.title = 'Игра в пары';
  }

  /**
   * Контейнер для содержимого
   */
  function setDocumentContainer() {
    let documentContainer = document.createElement('div');
    documentContainer.classList.add('container');

    return documentContainer;
  }

  /**
   * Название игры - заголовок H3
   */
  function setDocumentHeader() {
    let documentHeader = document.createElement('h3');
    documentHeader.classList.add('document-header');
    documentHeader.innerHTML = 'Игра в пары';

    return documentHeader;
  }

  /**
   *  Форма для ввода количества игровых полей
   *  длина стороны игрового поля от 2 до 10
   */
  function createFormQuantityField() {
    const formQuantityField = document.createElement('form');
    const inputFieldQuantity = document.createElement('input');
    const buttonFieldQuantity = document.createElement('button')

    formQuantityField.classList.add('form-input');

    inputFieldQuantity.classList.add('form-input__field');
    inputFieldQuantity.setAttribute('type', 'number');
    inputFieldQuantity.placeholder = 'Сторона поля от 2 до 10';

    buttonFieldQuantity.classList.add('form-input__button');
    buttonFieldQuantity.type = 'submit';
    buttonFieldQuantity.innerHTML = 'Создать игровое поле';

    formQuantityField.append(inputFieldQuantity);
    formQuantityField.append(buttonFieldQuantity);

    return {
      formQuantityField,
      inputFieldQuantity,
      buttonFieldQuantity
    };
  }

  /**
   * Функция создающая игровое поле
   */
  function createPlayingField(sideLengthPlayingField) {
    const playingField = document.createElement('ul');
    playingField.classList.add('playing-field', 'flex');

    let i = parseInt(sideLengthPlayingField);
    while (i > 0) {
      const itemPlayingField = document.createElement('li');
      itemPlayingField.classList.add('playing-field__item');
      itemPlayingField.innerText = (i % 2).toString();
      playingField.append(itemPlayingField);
      i -= 1;
      console.log(i);
    }

    return playingField;
  }

  /**
   * Основная функция, создающая приложение
   */
  function createPairsApp() {
    console.log(this);
    setPageTitle();

    const documentContainer = setDocumentContainer();
    const documentHeader = setDocumentHeader();
    const documentFormQuantityField = createFormQuantityField();
    let sideLengthPlayingField = null;

    documentContainer.append(documentHeader);
    documentContainer.append(documentFormQuantityField.formQuantityField);
    documentFormQuantityField.formQuantityField.addEventListener('submit', (e) => {
      e.preventDefault();

      sideLengthPlayingField = parseInt(documentFormQuantityField.inputFieldQuantity.value);
      if (!sideLengthPlayingField || sideLengthPlayingField % 2 !== 0 || sideLengthPlayingField > 10) {
        console.log('Wrong value!');
        return false;
      } else {
        console.log('Right value!');
        console.log(sideLengthPlayingField);
        const playingField = createPlayingField(sideLengthPlayingField);
        documentContainer.append(playingField);
      }
    });

    document.body.append(documentContainer);


  }

  window.createPairsApp = createPairsApp;
})();