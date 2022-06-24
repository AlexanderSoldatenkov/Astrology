const liveSearch = () => {
  let searchForm = document.forms.searchItems;
  // let searchITEM = searchForm.find;
  let searchInput = searchForm.search;
  const searchField = document.querySelector('.search__div');

  const headSearch = document.querySelector('.head__search');
  const smenu = document.querySelector('.search');

  function hide(selector) {
    selector.classList.add('hide');
    selector.classList.remove('show');
  }

  function show(selector) {
    selector.classList.add('show');
    selector.classList.remove('hide');
  }

  headSearch.addEventListener('click', function (e) {
    e.preventDefault();
    hide(headSearch);
    show(searchField);
  });


  searchInput.addEventListener('focus', function (e) {
    e.preventDefault();
    show(smenu);
  });

  searchField.addEventListener('mouseleave', function (e) {
    e.preventDefault();
    const smenu = document.querySelector('.search');
    hide(smenu);
    hide(searchField);
    show(headSearch);
  });

  searchInput.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('ddddddddddd');
  });

  searchInput.addEventListener('input', function (e) {
    e.preventDefault();
    let val = this.value.trim();
    let valInLowerCase = val.toLowerCase();
    
    let searchItems = document.querySelectorAll('.search li');
    if (val != '') {
      searchItems.forEach(function (elem) {
        let elemInLowerCase = elem.innerText.toLowerCase();
        let position = elemInLowerCase.search(valInLowerCase);
        if (position == -1) {
          elem.classList.add('hide');
          elem.innerHTML = elem.innerText;
        } else {
          elem.classList.remove('hide');
          let str = elem.innerText;
          elem.innerHTML = insertMark(str, position, val.length);
        }
      });
    } else {
      searchItems.forEach(function (elem) {
        elem.classList.remove('hide');
        elem.innerHTML = elem.innerText;
      });
    }
  });

  function insertMark(string, pos, len) {
    //len - количество символов, которые ввел пользователь
    //pos - позиция, где мы нашли совпадение
    //string - cтрока, которую мы передаем
    return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);
  }


};
export default liveSearch;
