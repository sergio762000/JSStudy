(function () {
  // создаем и возвращаем заголовок приложения
  function createAppTitle(title) {
    let appTitle = document.createElement('h2');
    appTitle.innerHTML = title;
    return appTitle;
  }

  // создаём и возвращаем форму для создания дела
  function createTodoItemForm() {
    let form = document.createElement('form');
    let input = document.createElement('input');
    let buttonWrapper = document.createElement('div');
    let button = document.createElement('button');

    form.classList.add('input-group', 'mb-3');
    input.classList.add('form-control');
    input.placeholder = 'Введите название нового дела';
    buttonWrapper.classList.add('input-group-append');
    button.classList.add('btn', 'btn-primary');
    button.textContent = 'Добавить дело';
    button.setAttribute('disabled', 'true');

    input.addEventListener('keyup', function () {
      if (input.value.length !== 0) {
        button.removeAttribute('disabled');
      } else {
        button.setAttribute('disabled', 'true');
      }
    });

    buttonWrapper.append(button);
    form.append(input);
    form.append(buttonWrapper);

    return {
      form,
      input,
      button,
    };
  }

  // создаём и возвращаем список элементов
  function createTodoList(keyUser) {
    let list = document.createElement('ul');
    list.classList.add('list-group');
    list.id = keyUser;
    return list;
  }

  // Создаем и возвращаем элемент списка дел
  function createTodoItem(name, done = false) {
    let item = document.createElement('li');

    // кнопки помещаем в элемент, который красиво покажет их в одной группе
    let buttonGroup = document.createElement('div');
    let doneButton = document.createElement('button');
    let deleteButton = document.createElement('button');

    // устанавливаем стили для элемента списка, а также для размещения кнопок
    // в его правой части спомощью flex
    item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    if (done) {
      item.classList.add('list-group-item-success');
    }
    item.textContent = name;

    buttonGroup.classList.add('btn-group', 'btn-group-sm');
    doneButton.classList.add('btn', 'btn-success');
    doneButton.textContent = 'Готово';
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.textContent = 'Удалить';

    //вкладываем кнопки в отдельный элемент, чтобы они объединились в один блок
    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    item.append(buttonGroup);

    //приложению нужен доступ к самому элементу и кнопкам, чтобы обрабатывать события нажатия
    return {
      item,
      doneButton,
      deleteButton,
    };
  }

  // Сохранение данных в LocalStorage
  function saveDataToStorage(person, todoListForPerson) {
    let arrayTodoItem = [];

    for (let i = 0; i < todoListForPerson.childElementCount; i++) {
      let attributeDone = false;
      if (todoListForPerson.children[i].attributes['class'].value.indexOf('list-group-item-success', 0) !== -1) {
        attributeDone = true;
      }

      arrayTodoItem[i] = {
        desc: todoListForPerson.children[i].firstChild.nodeValue,
        done: attributeDone
      };
    }

    localStorage.setItem(person, JSON.stringify(arrayTodoItem));
  }

  // Добавляем обработчик на кнопку "Готово"
  function addHandlerToDoneButton(todoItem) {
    todoItem.doneButton.addEventListener('click', function () {
      todoItem.item.classList.toggle('list-group-item-success');
      let todoList = document.getElementsByClassName('list-group');
      saveDataToStorage(todoList[0].id, todoList[0]);
    });
  }

  // Добавляем обработчик на кнопку "Удалить"
  function addHandlerToDeleteButton(todoItem) {
    todoItem.deleteButton.addEventListener('click', function () {
      if (confirm('Вы уверены?')) {
        todoItem.item.remove();
        let todoList = document.getElementsByClassName('list-group');
        saveDataToStorage(todoList[0].id, todoList[0]);
      }
    });
  }

  // Создаем экземпляр приложения
  function createTodoApp(container, title = 'Список дел', keyUser, storageItemList = []) {
    let todoAppTitle = createAppTitle(title);
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList(keyUser);

    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);

    // Обрабатываем массив присланных дел storageItemList
    if (storageItemList !== null && storageItemList.length !== 0) {

      for (let storageItemListElement of storageItemList) {
        let todoItemElement = createTodoItem(storageItemListElement.desc, storageItemListElement.done);
        addHandlerToDoneButton(todoItemElement);
        addHandlerToDeleteButton(todoItemElement);
        todoList.append(todoItemElement.item);
      }
    }

    todoItemForm.form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!todoItemForm.input.value) {
        return;
      }

      let todoItem = createTodoItem(todoItemForm.input.value);
      addHandlerToDoneButton(todoItem);
      addHandlerToDeleteButton(todoItem);

      todoList.append(todoItem.item);
      saveDataToStorage(keyUser, todoList);

      todoItemForm.input.value = '';
      todoItemForm.button.setAttribute('disabled', 'disabled');
    });
  }

  window.createTodoApp = createTodoApp;
})();