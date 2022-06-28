const liveSearch = () => {
  let searchForm = document.forms.searchItems;
  // let searchITEM = searchForm.find;
  let searchInput = searchForm.search;
  let crossElem;
  const searchField = document.querySelector('.search__div');
  const headSearch = document.querySelector('.head__search');
  const smenu = document.querySelector('.search');
  searchInput.style.cssText = `  
  font-family: HelveticaNeue;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  padding: 0 5px 0 5px;   
  font-size: 16px;
  font-weight: 400;
  `;

//Append li in search
  const body = document.querySelector('body');
  let textNodes = [];
  let ids = [];
  function recurcy(element) {
    element.childNodes.forEach(node => {
  
      if (node.nodeName.match(/^H\d/)) {
        textNodes.push(node.textContent.trim());
        ids.push(node.id);
        
      } else {
        
        recurcy(node);
      }
    });
  }
  recurcy(body);
 
  textNodes.forEach(function(item, i) {
    let node = document.createElement("li");
      
      node.innerHTML = `<a href='#${ids[i]}'>${item}<a>`;
   
      node.style.cssText = `  
      font-family: HelveticaNeue;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.27;
      letter-spacing: normal;
      padding: 0 5px 0 5px;  
      font-size: 16px;
      font-weight: 300;
      color: black;
      `;
      let aLink = node.querySelector('a');
      aLink.style.cssText = `  
        color: black;
      `;

      smenu.append(node);
  });
 
//Events
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
          // elem.classList.add('hide');
          hide(elem);
          // elem.innerHTML = elem.innerText;
        } else {
          // elem.classList.remove('hide');
          show(elem);
          crossElem = elem;
          // let str = elem.innerText;
          // elem.innerHTML = insertMark(str, position, val.length);
        }
       
      });
    } else {
      searchItems.forEach(function (elem) {
        // elem.classList.remove('hide');
        show(elem);
        // elem.innerHTML = elem.innerText;
      });
    }
   
    

  });

  searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if(crossElem.classList.contains('show')) {
      const url = crossElem.querySelector('.search li > a ').href;
      document.location.href = url;
    }
  });

//Functions
  // function insertMark(string, pos, len) {
  //   //len - количество символов, которые ввел пользователь
  //   //pos - позиция, где мы нашли совпадение
  //   //string - cтрока, которую мы передаем
  //   return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);
  // }

  function hide(selector) {
    selector.classList.add('hide');
    selector.classList.remove('show');
  }

  function show(selector) {
    selector.classList.add('show');
    selector.classList.remove('hide');
  }


};
export default liveSearch;
