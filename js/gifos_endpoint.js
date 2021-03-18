////////////////// RESULTADOS DE BUSQUEDA ///////////////

let results = document.getElementById("results");

function gifoResult() {
    async function newSearch (){
        let url = `https://api.giphy.com/v1/gifs/search?api_key=wBmQSDXkME1hKn80LC75kd2OSaeifuM4&q=mascotas&limit=50`;
        const resp = await fetch(url);
        const jsonResults = await resp.json();
        return jsonResults;
        
    }
    
    let info = newSearch();
        info.then (json => {
            ///crear div titulo busqueda////
            let titleSearch = document.createElement("div");
            titleSearch.id = "titleSearch";
            results.appendChild(titleSearch);

            let lineTitle = document.createElement("div");
            lineTitle.id = "lineTitle";
            let resultsTitle = document.createElement("h2");

            titleSearch.appendChild(lineTitle);
            titleSearch.appendChild(resultsTitle);
            resultsTitle.innerHTML = "Mascotas";
            ///crear div grid con resultados////
            let gifosGrid = document.createElement("div");
            results.appendChild(gifosGrid);
            gifosGrid.setAttribute("class", "gifosGrid");

            ///buscar resultados y agregar al div grid////
            for (let i = 0; i < 12; i++) {

                console.log(json.data[i].images.fixed_width.url);

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
                favourites.setAttribute("class", "fav");
                favourites.setAttribute("id", "favouritesS");
                favourites.setAttribute("src", "assets/icon-fav.svg");
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
                ;

                // TRAE GIFOS DE LA API////
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

            // boton VER MAS////
            let verMas = document.createElement("input");
            results.appendChild(verMas);
            verMas.setAttribute("type", "button");
            verMas.setAttribute("value", "VER MÁS");

        })
        .catch(err => console.error(err));
};

gifoResult();
//results(burrito);


