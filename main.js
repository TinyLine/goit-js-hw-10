const buttonClick = document.querySelector("#button");
buttonClick.addEventListener("click", onClickItem);

function onClickItem(evt){
      const target = evt.target;
      if (target.nodeName !== 'BUTTON') {
          return;
          
  }
}
