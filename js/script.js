/*funcion para pasar cambiar de logo cuando paso a modo nocturno */ 

//imgToChangeAtt.setAttribute("alt", "Placeholder image nuevo")

let clickBox = document.getElementById("clickBox");
clickBox.addEventListener('click', () => {
    let imgToChangeAtt = document.getElementById("logo");
//imgToChangeAtt.setAttribute("src", "assets/Logo-modo-noc.svg");
    imgToChangeAtt.setAttribute("src", "assets/Logo-modo-noc.svg");
});
let clickBoxOn = document.getElementById("clickBoxOn");
clickBoxOn.onclick = () => {
    clickBoxOn.classList.toggle('color');
};
