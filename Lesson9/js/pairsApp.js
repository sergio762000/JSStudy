(function () {
  const DEFAULT_LENGTH_SIDE_PLAYING_FIELD = 4;

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

    formQuantityField.classList.add('form-input', 'flex');

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
   * Функция для создания перемешанного массива пар чисел
   */
  function createArrayPairNumbers(sideLengthPlayingField = 4) {
    let arrayPairNumbers = [];
    const quantityPairsNumber = (sideLengthPlayingField ** 2) / 2;
    let middleArrayNumber = [];

    //todo - заполняем промежуточный массив
    for (let i = 0; i < quantityPairsNumber; i++) {
      middleArrayNumber.push(i);
    }

    const arr1 = createShuffleArray(middleArrayNumber);
    const arr2 = createShuffleArray(middleArrayNumber);

    //заполняем возвращаемый массив
    for (let i = 0; i < quantityPairsNumber; i++) {
      arrayPairNumbers.push(arr1[i]);
      arrayPairNumbers.push(arr2[i]);
    }

    return arrayPairNumbers;
  }

  /**
   * Функция для создания перемешанного массива
   */
  function createShuffleArray(sourceArray) {
    const shuffleArray = [];
    let sourceArrayCopy = sourceArray.slice();

    let j = sourceArrayCopy.length;
    while (j > 0) {
      let endRange = j - 1;
      let currentNumber = Math.round(Math.random() * endRange);
      shuffleArray.push(sourceArrayCopy[currentNumber]);
      sourceArrayCopy.splice(currentNumber, 1);
      j -= 1;
    }

    return shuffleArray;
  }


  /**
   * Функция для закрепления обработчиков событий
   */
  function addEventListenerToAreaPlayingField(areaPlayingField, sideLengthPlayingField) {
    areaPlayingField.addEventListener('click', setToggleVisibleItemPlayingList);
    areaPlayingField.addEventListener('click', function () { controlEndGame(sideLengthPlayingField); });
  }

  /**
   * Функция для снятия обработчика события
   */
  function removeEventListenerFromAreaPlayingField(areaPlayingField) {
    areaPlayingField.removeEventListener('click', setToggleVisibleItemPlayingList);
  }

  /**
   * Функция контроля количества открытых полей
   */
  function controlEndGame(sideLengthPlayingField) {
    const quantityOpenFields = document.getElementsByClassName('playing-field__equals').length;

    if (quantityOpenFields === sideLengthPlayingField ** 2) {
      let button = document.querySelector('button');

      const buttonAgain = document.getElementById('button-again');
      buttonAgain.classList.toggle('button-play__invisible');
    }
  }

  /**
   * Функция для переключения видимости элемента поля
   */
  function setToggleVisibleItemPlayingList(e) {
    let listVisibleField = document.getElementsByClassName('playing-field__visible');
    const countVisibleField = listVisibleField.length;
    switch (countVisibleField) {
      case 0:
        if (!e.target.classList.contains('playing-field__equals')) {
          e.target.classList.toggle('playing-field__visible');
        }
        break;
      case 1:
        if (!e.target.classList.contains('playing-field__equals')) {
          e.target.classList.toggle('playing-field__visible');
        }
      case 2:
        //todo - Сравниваем innerHTML обоих открытых полей
        if (listVisibleField[0].innerHTML !== listVisibleField[1].innerHTML) {
          setTimeout(() => {
            listVisibleField[1].classList.toggle('playing-field__visible');
            listVisibleField[0].classList.toggle('playing-field__visible');
          }, 500);
        } else {
          listVisibleField[1].classList.replace('playing-field__visible', 'playing-field__equals');
          listVisibleField[0].classList.replace('playing-field__visible', 'playing-field__equals');
        }
        break;
      default:
        break;
    }
  }

  /**
   * Функция создающая игровое поле
   */
  function createPlayingField(sideLengthPlayingField) {
    //формируем массив пар чисел для заполнения игрового поля
    const arrayPairNumbers = createArrayPairNumbers(sideLengthPlayingField);

    let playingField = document.createElement('ul');
    playingField.id = 'playing-field';
    playingField.classList.add('playing-field', 'flex');

    let i = 0;
    for (const valueItem of arrayPairNumbers) {
      const itemPlayingField = document.createElement('li');
      itemPlayingField.classList.add('playing-field__item', 'flex');
      itemPlayingField.id = i.toString();
      itemPlayingField.innerText = valueItem.toString();

      itemPlayingField.style.width = `calc((100% - (10px * ${sideLengthPlayingField})) / ${sideLengthPlayingField}`;
      itemPlayingField.style.height = `calc((100% - 10px) / ${sideLengthPlayingField}`;

      playingField.append(itemPlayingField);
      i += 1;
    }

    return playingField;
  }

  /**
   * Функция создающая кнопку "Сыграть еще раз"
   */
  function createButtonPlayAgain() {
    const blockButtonPlayAgain = document.createElement('div');
    blockButtonPlayAgain.id = 'button-play-block';
    blockButtonPlayAgain.classList.add('button-play__block', 'flex');

    const ButtonPlayAgain = document.createElement('button');
    ButtonPlayAgain.id = 'button-again';
    ButtonPlayAgain.classList.add('button-play__item', 'button-play__invisible');
    ButtonPlayAgain.innerText = 'Сыграть еще раз';

    blockButtonPlayAgain.append(ButtonPlayAgain);

    return blockButtonPlayAgain;
  }

  /**
   * Функция очистки игрового поля
   */
  function clearPlayingFields() {
    let listPlayingFieldActive = document.getElementById('playing-field');
    if (listPlayingFieldActive) {
      listPlayingFieldActive.remove();
    }

    let buttonPlayAgain = document.getElementById('button-play-block');
    if (buttonPlayAgain) {
      buttonPlayAgain.remove();
    }

    clearTimeout();
  }

  /**
   * Основная функция, создающая приложение
   */
  function createPairsApp() {
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
      if (isNaN(sideLengthPlayingField) || sideLengthPlayingField % 2 !== 0 || sideLengthPlayingField < 2 || sideLengthPlayingField > 10) {
        sideLengthPlayingField = DEFAULT_LENGTH_SIDE_PLAYING_FIELD;
        documentFormQuantityField.inputFieldQuantity.value = DEFAULT_LENGTH_SIDE_PLAYING_FIELD.toString();
      } else {
        //Сначала необходимо очистить существующее игровое поле - если оно уже есть
        clearPlayingFields();
      }

      //затем создать новое игровое поле
      let playingField = createPlayingField(parseInt(sideLengthPlayingField));
      documentContainer.append(playingField);

      addEventListenerToAreaPlayingField(document.body.querySelector('ul'), sideLengthPlayingField);

      const buttonPlayAgain = createButtonPlayAgain();
      documentContainer.append(buttonPlayAgain);
      buttonPlayAgain.addEventListener('click', clearPlayingFields);

      setTimeout(clearPlayingFields, 60000);
    });

    document.body.append(documentContainer);
  }

  window.createPairsApp = createPairsApp;
})();