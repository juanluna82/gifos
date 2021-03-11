/*funcion para pasar camodo nocturno cuando aprieto el MODO NOCTURNO */ 
let night_mode = false;
let clickNoc = document.getElementById("click_mn");
console.log(clickNoc);
clickNoc.addEventListener('click', () => {
        if (night_mode === false) {
                let noc_mode = document.getElementById("noc_mode");
                noc_mode.setAttribute("href", "style/nocturno/nocturno.css");
                clickNoc.textContent = "Modo Diurno";
                console.log(clickNoc);
                console.log(night_mode);
                night_mode = true;
                console.log(night_mode);
        }
        else {
                let noc_mode = document.getElementById("noc_mode");
                noc_mode.setAttribute("href", "style/style.css");
                clickNoc.textContent = "Modo Nocturno";
                console.log(clickNoc);
                console.log(night_mode);  
                night_mode = false; 
                console.log(night_mode);
        }
});


// HOVER de iconos GIFOS/////////////////////////////////
// FAVOURITES
let fav = document.getElementsByClassName("fav");
for (let index = 0; index < fav.length; index++) {
    fav[index].addEventListener('mouseover', () => {
        fav[index].setAttribute("src", "assets/icon-fav-hover.svg");
    });
    fav[index].addEventListener('mouseout', () => {
        fav[index].setAttribute("src", "assets/icon-fav.svg");
    });
};
// DOWNLOAD
let items = document.getElementsByClassName("down");
for (let index = 0; index < items.length; index++) {
    items[index].addEventListener('mouseover', () => {
        items[index].setAttribute("src", "assets/icon-download-hover.svg");
    });
    items[index].addEventListener('mouseout', () => {
        items[index].setAttribute("src", "assets/icon-download.svg");
    });
};

// MAXIMIZE
let max = document.getElementsByClassName("max");
for (let index = 0; index < max.length; index++) {
    max[index].addEventListener('mouseover', () => {
        max[index].setAttribute("src", "assets/icon-max-hover.svg");
    });
    max[index].addEventListener('mouseout', () => {
        max[index].setAttribute("src", "assets/icon-max-normal.svg");
    });
};




// HOVER de iconos sociales/////////////////////////////////
// FACEBOOK
let face = document.getElementById("facebook");
console.log(face);
face.addEventListener('mouseover', () => {
        facebook_hover = document.getElementById("facebook_hover");
        face.setAttribute("src", "assets/icon_facebook_hover.svg"); 
})

face.addEventListener('mouseout', () => {
        facebook_hover = document.getElementById("facebook_hover");
        face.setAttribute("src", "assets/icon_facebook.svg"); 
})
// TWITTER

let twit = document.getElementById("twitter");
console.log(twit);
twit.addEventListener('mouseover', () => {
        twit_hover = document.getElementById("twit_hover");
        twit.setAttribute("src", "assets/icon-twitter-hover.svg"); 
})

twit.addEventListener('mouseout', () => {
        twit_hover = document.getElementById("twit_hover");
        twit.setAttribute("src", "assets/icon-twitter.svg"); 
})

// INSTAGRAM

let inst = document.getElementById("instagram");
console.log(inst);
inst.addEventListener('mouseover', () => {
        inst_hover = document.getElementById("inst_hover");
        inst.setAttribute("src", "assets/icon_instagram-hover.svg"); 
})

inst.addEventListener('mouseout', () => {
        inst_hover = document.getElementById("inst_hover");
        inst.setAttribute("src", "assets/icon_instagram.svg"); 
})


// HOVER de NAV/////////////////////////////////
// FACEBOOK
let create = document.getElementById("create");
console.log(create);
create.addEventListener('mouseover', () => {
        create_hover = document.getElementById("create_hover");
        create.setAttribute("src", "assets/CTA-crear-gifo-hover.svg"); 
})

create.addEventListener('mouseout', () => {
        create_hover = document.getElementById("create_hover");
        create.setAttribute("src", "assets/button-crear-gifo.svg"); 
})

// HOVER de ARROW/////////////////////////////////
// LEFT
let left = document.getElementById("left");
console.log(left);
left.addEventListener('mouseover', () => {
        left_hover = document.getElementById("left_hover");
        left.setAttribute("src", "assets/button-slider-left-hover.svg"); 
})

left.addEventListener('mouseout', () => {
        left_hover = document.getElementById("left_hover");
        left.setAttribute("src", "assets/button-slider-left.svg"); 
})

// RIGHT
let right  = document.getElementById("right");
console.log(right);
right.addEventListener('mouseover', () => {
        right_hover = document.getElementById("right_hover");
        right.setAttribute("src", "assets/button-slider-right-hover.svg"); 
})

right.addEventListener('mouseout', () => {
        right_hover = document.getElementById("right_hover");
        right.setAttribute("src", "assets/button-slider-right.svg"); 
})





/// let menu abierto on clik abri menu

