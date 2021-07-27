

////////////////////////////////////////////////////////////////////// TRENDING SLIDER //////////////////////////////////////////////////////////// //

let arrayOfGifs = []
let arrayOfGifsUser = []
let arrayOfGifsTitle = [];
let firstIF = 0;
const numberOfImg = 4;
let urlIdCarrousel = new Array();
let fav = document.getElementsByClassName("fav");
let offseTrend = 0;
let key = [];

function gifosTrendingLoad() {

    let limiTrend = 3;
    let trend = myFetch(`https://api.giphy.com/v1/gifs/trending?api_key=wBmQSDXkME1hKn80LC75kd2OSaeifuM4&limit=${limiTrend}&offset=${offseTrend}`);
    trend.then(json => {

        //CARGA DE GIF EN ARRAYS/////////////////////////////////////////////////////////////////////////////////
        for (let index = 0; index < json.data.length; index++) {
            arrayOfGifs.push(json.data[index].images.original.url)//url del gif .
            arrayOfGifsUser.push(json.data[index].username)//username del gif .
            arrayOfGifsTitle.push(json.data[index].title)//Title del gif
            urlIdCarrousel.push(json.data[index].id);
            console.log(arrayOfGifs);
            document.getElementById("gif" + (index + 1)).setAttribute("src", arrayOfGifs[index]);
            document.getElementById("h2" + (index + 1)).textContent = arrayOfGifsUser[index];
            document.getElementById("p" + (index + 1)).textContent = arrayOfGifsTitle[index];
        }
        favMarcado(urlIdCarrousel, fav);
    })
        .catch(err => console.error(err));

};


gifosTrendingLoad();


///////////////////////////////////////////////////////////

console.log(urlIdCarrousel);
console.log(fav);


for (let index = 0; index < 3; index++) {
    fav = document.getElementsByClassName("fav")[index];
    hoverSearch(fav, "assets/icon-fav-hover.svg", "assets/icon-fav.svg");
    

    //CLICK EN ICONO FAVORITO////

    fav.addEventListener("click", function () {
        fav = document.getElementsByClassName("fav")[index]
        encontrado = localStorage.getItem(`${urlIdCarrousel[index]}`);
        console.log("buscamos = " + encontrado);
        if (encontrado === null) {
            console.error(` agrega ${urlIdCarrousel[index]}`);
            localStorage.setItem(`${urlIdCarrousel[index]}`, `{"url": "${arrayOfGifs[index]}", "user": "${arrayOfGifsUser[index]}", "title": "${arrayOfGifsTitle[index]}"}`);
            fav.setAttribute("src", "assets/icon-fav-active.svg")
            hoverSearch(fav, "assets/icon-fav-active.svg", "assets/icon-fav-active.svg");
        } else {
            console.error("ESTA EN SESSION Y borro " + urlIdCarrousel[index]);
            localStorage.removeItem(`${urlIdCarrousel[index]}`);
            fav.setAttribute("src", "assets/icon-fav.svg")
            hoverSearch(fav, "assets/icon-fav-hover.svg", "assets/icon-fav.svg");
        }
    });
}

//////

//// VER KEY Y FOUNDSS DE FAVORITOS PARA PINTAR LOS CORAZONES SI ESTAN EN EL LOCALSTORAGE

function favMarcado(urlId, boton) {

    for (let index = 0; index < 3; index++) {
        boton = document.getElementsByClassName("fav")[index];
        let key1 = localStorage.key(index);
        let found =  urlId.indexOf(key1);
        console.log("KEY 1 = " + key1);
        console.log(urlId);
        console.log(found);
        let boton1 = document.getElementById(`fav${found + 1}`);
        
        if (found == -1 || null) {
            boton.setAttribute("src", "assets/icon-fav.svg");
            hoverSearch(boton, "assets/icon-fav-hover.svg", "assets/icon-fav.svg");
            console.error("NO encontrado REALLL icon SIN active")

        } else {
            boton1.setAttribute("src", "assets/icon-fav-active.svg");
            console.log(boton1);
            hoverSearch(boton, "assets/icon-fav-active.svg", "assets/icon-fav-active.svg");
            console.error("encontrado REALLL icon active")
        }

    }

}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///// BOTON RIGHT //////////////////

let buttonNN = document.getElementsByClassName("right")[0];

buttonNN.addEventListener('click', () => {
    if (offseTrend >= 9) {
        offseTrend = 9;
    } else {

        offseTrend += 3;
        arrayOfGifs = []
        arrayOfGifsUser = []
        arrayOfGifsTitle = []
        urlIdCarrousel = [];
        found = [];
        gifosTrendingLoad();
        favMarcado(urlIdCarrousel, fav);
    }
});

////// BOTON LEFT //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let buttonNL = document.getElementsByClassName("left")[0];
buttonNL.addEventListener('click', () => {

    if (offseTrend <= 0) {
        offseTrend = 0;

    } else {
        offseTrend = (offseTrend - 3);
        arrayOfGifs = []
        arrayOfGifsUser = []
        arrayOfGifsTitle = [];
        urlIdCarrousel = [];
        console.log("offseTrend = " + offseTrend);
        gifosTrendingLoad();
        favMarcado(urlIdCarrousel, fav);
    }

});

