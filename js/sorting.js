document.getElementById('price').addEventListener('click', callback);
function callback(evt) {

    var list = document.querySelector('.catalog_products');
  
    var items = list.childNodes;
    var itemsArr = [];
    for (var i in items) {
      if (items[i].nodeType == 1) {
        itemsArr.push(items[i]);
      }
    }
  
    itemsArr.sort(function(a, b) {
      return parseFloat(a.getAttribute('price')) == parseFloat(b.getAttribute('price')) ?
        0 :
        (parseFloat(a.getAttribute('price')) < parseFloat(b.getAttribute('price')) ? 1 : -1);
    });
  
    for (i = 0; i < itemsArr.length; ++i) {
      list.appendChild(itemsArr[i]);
    }
  }
  
  document.getElementById('raiting').addEventListener('click', raiting);
function raiting(evt) {

    let list = document.querySelector('.catalog_products');
  
    let items = list.childNodes;
    let itemsArr = [];
    for (let i in items) {
      if (items[i].nodeType == 1) {
        itemsArr.push(items[i]);
      }
    }
  
    itemsArr.sort(function(a, b) {
      return parseFloat(a.getAttribute('raiting')) == parseFloat(b.getAttribute('raiting')) ?
        0 :
        (parseFloat(a.getAttribute('raiting')) < parseFloat(b.getAttribute('raiting')) ? 1 : -1);
    });
  
    for (i = 0; i < itemsArr.length; ++i) {
      list.appendChild(itemsArr[i]);
    }
  }
  
  document.getElementById('weight').addEventListener('click', callback);
  function weight(evt) {
  
      let list = document.querySelector('.catalog_products');
    
      let items = list.childNodes;
      let itemsArr = [];
      for (let i in items) {
        if (items[i].nodeType == 1) {
          itemsArr.push(items[i]);
        }
      }
    
      itemsArr.sort(function(a, b) {
        return parseFloat(a.getAttribute('weight')) == parseFloat(b.getAttribute('weight')) ?
          0 :
          (parseFloat(a.getAttribute('weight')) < parseFloat(b.getAttribute('weight')) ? 1 : -1);
      });
    
      for (i = 0; i < itemsArr.length; ++i) {
        list.appendChild(itemsArr[i]);
      }
    }
    