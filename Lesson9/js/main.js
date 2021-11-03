(function () {
  console.log('Запуск жабоскрипт приложения');
  const MAX_PLAYING_FIELDS = 16;
  let quantityOpenCards = 0;
  let listOpenCards = [];

  function createDocumentTitle() {
    return 'Игра в пары - 1 вариант';
  }

  function createPageContainer() {
    const containerPage = document.createElement('div');
    containerPage.classList.add('container');

    return containerPage;
  }

  function createPageHeader() {
    let pageHeader = document.createElement('h3');
    pageHeader.textContent = 'Игра в пары';

    return pageHeader;
  }

  function createInputForm() {
    const form = document.createElement('form');
    form.classList.add('input-form');
    const inputField = document.createElement('input');
    inputField.setAttribute('type', 'number');
    inputField.placeholder = '4';
    inputField.classList.add('input-form__field');

    const inputButton = document.createElement('button');
    inputButton.innerText = 'Играем';
    form.append(inputField);
    form.append(inputButton);

    return {
      form,
      inputField,
      inputButton
    };
  }

  function createPlayContainer() {
    const containerPlay = document.createElement('div');
    containerPlay.classList.add('container', 'container-play');

    return containerPlay;
  }

  function createListFields() {
    const listFields = document.createElement('ul');
    listFields.classList.add('field-game', 'flex');

    return listFields;
  }

  function checkEquality(itemField) {
    quantityOpenCards += 1;
    listOpenCards.push(itemField);

    if (quantityOpenCards === 2) {
      if (listOpenCards[0].innerHTML !== listOpenCards[1].innerHTML) {
        console.log('Карточки разные!');
        let timeOut = setTimeout(() => {
          listOpenCards[0].classList.remove('field-game__visible');
          listOpenCards[1].classList.remove('field-game__visible');
          quantityOpenCards = 0;
          listOpenCards = [];
        }, 1000);

      } else {
        quantityOpenCards = 0;
        listOpenCards = [];
        itemField.removeEventListener('click', actionToggleVizible(itemField));
        console.log('Карточки одинаковые!');
      }
    }

    return;

    if (quantityOpenCards === 2) {
      let listOpenCards = document.getElementsByClassName('field-game__visible');
      console.log(listOpenCards.item(0).innerHTML);
      let itemValue1 = parseInt(listOpenCards.item(0).innerHTML);
      console.log(listOpenCards.item(1).innerHTML);
      let itemValue2 = parseInt(listOpenCards.item(1).innerHTML);

      if (itemValue1 !== itemValue2) {
        console.log('Карточки разные!');
        console.log(listOpenCards.item(0));
        // listOpenCards.item(0).classList.remove('field-game__visible');
        // listOpenCards.item(1).classList.remove('field-game__visible');
      }

    }
  }

  function actionToggleVizible(itemField) {
      // itemField.classList.toggle('field-game__visible');
      // checkEquality(itemField);

      return itemField;
  }

  function createPairsApp() {
    const pageContainer = createPageContainer();
    const documentTitle = createDocumentTitle();
    const pageHeader = createPageHeader();
    const playContainer = createPlayContainer();
    let listFields = createListFields();

    document.title = documentTitle;
    document.body.prepend(pageContainer);
    pageContainer.append(pageHeader);
    playContainer.append(listFields);
    document.body.append(playContainer);

    //todo - Создаем форму для указания размера игрового поля
    const quantityFieldInputForm = createInputForm();
    pageContainer.append(quantityFieldInputForm.form);
    quantityFieldInputForm.form.addEventListener('submit', function (e) {
      e.preventDefault();

      const quantityField = parseInt(quantityFieldInputForm.inputField.value);
      if (!quantityField || quantityField % 2 !== 0 || quantityField > MAX_PLAYING_FIELDS) {
        return;
      } else {
        if (listFields.childElementCount !== 0) {
          let listChild = listFields.children;
          const count = listFields.childElementCount;
          for (let i = count; i > 0; i--) {
            listFields.removeChild(listChild[0]);
          }
        }

        //todo - Создаем игровое поле
        let startArrayNumbers = [];
        for (let i = 0; i < quantityField; i++) {
          // startArrayNumbers.push(i);
          let itemField = document.createElement('li');
          itemField.classList.add('field-game__block', 'flex');
          itemField.id = i.toString();
          itemField.innerText = (i % 2).toString();
          itemField.addEventListener('click', actionToggleVizible(itemField));
          listFields.append(itemField);
        }
        // console.log(startArrayNumbers);

      }
    });
  }

  window.createPairsApp = createPairsApp;
})();