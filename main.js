var buttonClick = document.getElementById("button");
buttonClick.addEventListener("click", onClickItem);

function onClickItem(evt){
      const target = evt.target;
      if (target.nodeName !== 'BUTTON') {
          return;
          
  }
  alert('Кнопка натиснута');
}


