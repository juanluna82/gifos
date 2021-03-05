/*funcion para pasar camodo nocturno cuando aprieto el MODO NOCTURNO */ 

let clickNoc = document.getElementById("click_mn");
console.log(clickNoc);
clickNoc.addEventListener('click', () => {
            let noc_mode = document.getElementById("noc_mode");
        noc_mode.setAttribute("href", "style/nocturno/nocturno.css");
        clickNoc.textContent = "Modo Diurno";
        clickNoc.setAttribute("id", "click_md");
        console.log(clickNoc);
    

});


        // Modo diurno

