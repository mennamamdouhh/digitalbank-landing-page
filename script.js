
function navmenu(){

     let mobnav= document.querySelector('.mobnavmenu');
     let icon=document.querySelector('.hamburger')

    if (mobnav.classList.contains('navtoggled')) {
        mobnav.classList.remove('navtoggled');
        overlay.style.display = "none"; 
        icon.innerHTML='<img src="images/icon-hamburger.svg" onclick="navmenu()"></img>'
    } else {
        mobnav.classList.add('navtoggled');
        overlay.style.display = "block"; 
        icon.innerHTML='<img src="images/icon-close.svg" onclick="navmenu()"></img>'
    }

}

let mobnav = document.querySelector('.mobnavmenu');

mobnav.addEventListener('click', function(e) {
  if (e.target.tagName === 'A') { 
    mobnav.classList.add('navtoggled');
    navmenu();
  }
});
 