//////UTILITIES///////////////

const myApiKey = "wBmQSDXkME1hKn80LC75kd2OSaeifuM4";

/** funcion de fetch para cualquier URL */
async function pintarGifsConAsyncAwait(url) {
    let res = await fetch(url);
    let json = await res.json();
    return json;
}

// FUNCION HOVER y ACTIVE FAV

/////////// INPUT SEARCH y SUGERENCIAS////////

let searchInput = document.getElementById('searchInput');
let suggDiv = document.getElementById('suggestion');
let suggestion = document.getElementsByClassName('jsSug');
let results = document.getElementById("results");
let gifosGrid = document.getElementsByClassName("gifosGrid")[0];
let vermas = document.getElementById("seeMore");
let resultsTitle = document.getElementById("resultsTitle");
let titleSearch = document.getElementById("titleSearch");
let lineTitle = document.getElementById("lineTitle");
let searchString = "";// se carga el valor que se vaya tipeando en el input search.
let indexS = 0;
let suggestDataIndex = []; // se cargan en este¿a variable el array de las sugerencias desde la funcion searchSugg(); 

let searchWrapper = document.querySelector(".search_input");
let inputBox = searchWrapper.querySelector("input");


////// KEYPRESS SUGERENCIAS Y BUSQUEDA DE GIFOS////////

searchInput.addEventListener("keyup", (e) => {
    searchString = e.target.value;
    // abre sugerencias y las remueve con close
    searchWrapper.classList.add("active");
    document.querySelector(".close").style.display = "block";
    document.querySelector(".lupa").style.display = "none";
    document.querySelector(".close").addEventListener
        ("click", () => {
            inputBox.value = "";
            searchWrapper.classList.remove("active");
            document.querySelector(".close").style.display = "none";
            document.querySelector(".lupa").style.display = "block";
        });

    // IF PRESS ENTER
    if (e.key === 'Enter') {
        resultsTitle.innerHTML = searchString;
        console.log(resultsTitle.innerHTML);
        // TRAE LOS RESULTADOS DE LOS GIF BUSCADOS//
        gifoResult(searchString);
        // reemplaza close con lupa
        document.querySelector(".close").style.display = "none";
        document.querySelector(".lupa").style.display = "block";
        //me remueve la visualizacion de la lista de preferencias
        searchWrapper.classList.remove("active");
        // me vacia el input
        inputBox.value = "";
        // me hace unfocus en el input
        document.getElementById("searchInput").blur();
        console.log(gifosGrid.innerHTML);
        // me remueve el resultado anterior de GIF, titulo y ver mas
        gifosGrid.innerHTML ="";
    }



    else {/// ELSE LLAMA A SUGGESTIONS
        searchSugg();

        /// FUNCION SI APRIETA UNA SUGERENCIA
        function selectSUggestion() {
            for (let index = 0; index < suggestion.length; index++) {

                suggestion[index].setAttribute("onClick", "select(this);");

            }
        }
        selectSUggestion();

    }

});



function select(element) {
    event.preventDefault();
    let selectUserData = element.textContent;
    console.log(selectUserData);
    searchInput.value = selectUserData;
    gifoResult(selectUserData);
    // reemplaza close con lupa
    document.querySelector(".close").style.display = "none";
    document.querySelector(".lupa").style.display = "block";
    //me remueve la visualizacion de la lista de preferencias
    searchWrapper.classList.remove("active");
    // me vacia el input
    inputBox.value = "";
    // me hace unfocus en el input
    document.getElementById("searchInput").blur();
    // me remueve el resultado anterior de GIF, titulo y ver mas
    resultsTitle.innerHTML = selectUserData;
    gifosGrid.innerHTML ="";
}

/////////// INPUT SUGERENCIAS////////


function searchSugg() {
    let searchS = pintarGifsConAsyncAwait(`https://api.giphy.com/v1/tags/related/${searchString}?api_key=${myApiKey}`);
    searchS.then(json => {
        for (let i = 0; i < 4; i++) {
            suggestDataIndex = suggestion[i].textContent = `${json.data[i].name}`;
        }
    })

        .catch(err => console.error(err));
}


//****************************************************//////////////// RESULTADOS DE BUSQUEDA ////////////////////////////////////////////////////////////////////////////////////

let offset = 0;
let limit = 12;
let favId = 0;
function gifoResult(searchString) {

    let info = pintarGifsConAsyncAwait(`https://api.giphy.com/v1/gifs/search?api_key=${myApiKey}&q=${searchString}&limit=${limit}&offset=${offset}`);

    info.then(json => {
        ///buscar resultados y agregar al div grid////
        for (let i = favId; i < json.data.length; i++) {
            let urlSearch = json.data[i].images.fixed_width.url;
            console.log("FAV ID = " + favId);
            // crear div con el overlay con iconos en cada gifos////
            //div general
             let divGifos = document.createElement("div");
            gifosGrid.appendChild(divGifos);
            divGifos.setAttribute("class", "gifos");
            //div contenedor de iconos
            let iconsGifos = document.createElement("div");
            divGifos.appendChild(iconsGifos);
            iconsGifos.setAttribute("class", "icons_gifos");

            //icono favoritos//
            let aFavourites = document.createElement("a");
            iconsGifos.appendChild(aFavourites);
            let favourites = document.createElement("img");
            aFavourites.appendChild(favourites);
            favourites.setAttribute("class", "favSearch");
            favourites.setAttribute("id", "favouritesS" + i);
            favourites.setAttribute("src", "assets/icon-fav.svg");
            hoverSearch(favourites, "assets/icon-fav-hover.svg", "assets/icon-fav.svg");

            //icono download//
            let aDownload = document.createElement("a");
            iconsGifos.appendChild(aDownload);
            let download = document.createElement("img");
            aDownload.appendChild(download);
            download.setAttribute("class", "down");
            download.setAttribute("id", "downS");
            download.setAttribute("src", "assets/icon-download.svg");
            //icono maximize//
            let aMax = document.createElement("a");
            iconsGifos.appendChild(aMax);
            let max = document.createElement("img");
            aMax.appendChild(max);
            max.setAttribute("class", "max");
            max.setAttribute("id", "maxS");
            max.setAttribute("src", "assets/icon-max-normal.svg");

            ///// CLICK en ICONO FAVORITO
            favourites.addEventListener("click", () => {
                console.log(favourites);
                let encontrado = sessionStorage.getItem(`favSearch${i}`);
                console.log("buscamos = " + encontrado);
                console.log(sessionStorage.getItem(`favSearch${i}`));
                if (encontrado === null) {
                    console.log(` agrega favSearch${i}`);
                    console.log(urlSearch);
                    sessionStorage.setItem(`favSearch${i}`, urlSearch);
                    favourites.setAttribute("src", "assets/icon-fav-active.svg")
                    hoverSearch(favourites, "assets/icon-fav-active.svg", "assets/icon-fav-active.svg");
                } else {
                    console.log("borro de favoritos");
                    sessionStorage.removeItem(`favSearch${i}`);
                    favourites.setAttribute("src", "assets/icon-fav.svg")
                    hoverSearch(favourites, "assets/icon-fav-hover.svg", "assets/icon-fav.svg");
                }

            })

            //////////// TRAE GIFOS DE LA API//////////////////
            let gifo = document.createElement("img");
            gifo.setAttribute("src", json.data[i].images.fixed_width.url);
            gifo.setAttribute("class", "gif");
            divGifos.appendChild(gifo);


            /// User  y Titulo del GIFOS traido de la API/////

            // div contenedor user///
            let divUser = document.createElement("div");
            divGifos.appendChild(divUser)
            divUser.setAttribute("class", "user");
            // h2 user///
            let user = document.createElement("h2");
            user.innerHTML = json.data[i].username;
            divUser.appendChild(user);
            // p user///
            let pUser = document.createElement("p");
            pUser.innerHTML = json.data[i].title;
            divUser.appendChild(pUser);

        }
        



        /*
                // boton VER MAS////
                let verMas = document.createElement("input");
                results.appendChild(verMas);
                verMas.setAttribute("type", "button");
                verMas.setAttribute("value", "VER MÁS");
                verMas.setAttribute("id", "seeMore");
         */
    })

        // HAY QUE VER A PAGINA DE ERROR///
        .catch(() => {
            let errorSearch = document.createElement("div");
            errorSearch.id = "errorSearch";
            results.appendChild(errorSearch);

            let errorImg = document.createElement("img");
            errorImg.setAttribute("src", "assets/icon-busqueda-sin-resultado.svg")
            let errorP = document.createElement("p");
            errorP.innerHTML = "Intenta con otra búsqueda.";
            errorSearch.appendChild(errorImg);
            errorSearch.appendChild(errorP);

        });


};




////// Hover FUNCTION


function hoverSearch(x, urlOver, urlOut) {
    /// HOVER FAV de TRENDING
    console.log("estoyaqui");
    function mouseOver() {
        x.setAttribute("src", urlOver);
    }
    x.addEventListener('mouseover', mouseOver);

    function mouseOut() {
        x.setAttribute("src", urlOut);
    }
    x.addEventListener('mouseout', mouseOut);
}


console.log(vermas);

vermas.addEventListener("click", ()=> {
    console.log("click ver mas")
    offset +=12;
    console.log(favId);
    gifoResult(searchString);
})

function clearBoxId(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}

function clearBoxClass(elementClass)
{
    document.getElementsByClassName(elementClass).innerHTML = "";
}



