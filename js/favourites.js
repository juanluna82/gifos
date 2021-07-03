let linkFav = document.getElementById("linkFav");
let searchDiv = document.getElementsByClassName("search")[0];
let newRetrievedObject = [];
let blockFavClick = 0;

linkFav.addEventListener("click", clickFav);



function clickFav() {

    results.style.display = "none";
    searchDiv.style.display = "none";
    while (blockFavClick == 0) {

        let urlId =[];

        //// Rescata los gif del session storage
        for (let i = 0; i < sessionStorage.length; i++) {
            let key = sessionStorage.key(i+1);
            keyUrl = sessionStorage.key(i);
            retrievedObject = JSON.parse(sessionStorage.getItem(key));
            newRetrievedObject.push(retrievedObject);
            urlId.push(keyUrl);
            console.log("newRetrievedObject adentor", newRetrievedObject.length)
        }

        console.log("prueba", newRetrievedObject.length);


        if (newRetrievedObject.length < 2) {
            
            console.log("FAVORITOS SIN RESULTADOS");
            break;
        } else {

            //// Muestra los gif en Mis favoritos
            /// logo y titulo

            let favDiv = document.createElement("div")
            searchDiv.before(favDiv);
            favDiv.setAttribute("class", "favDiv");
            favDiv.style.display = "flex";
            let favLogo = document.createElement("div")
            favDiv.appendChild(favLogo);
            favLogo.setAttribute("class", "favLogo");

            let FavImg = document.createElement("img")
            favLogo.appendChild(FavImg);
            FavImg.setAttribute("src", "assets/icon-favoritos.svg");
            FavImg.setAttribute("class", "FavImg");

            let FavTitle = document.createElement("h2")
            favLogo.appendChild(FavTitle);
            FavTitle.innerHTML = "Favoritos";
            FavTitle.setAttribute("class", "FavTitle");


            // listado de gifos
            let gridFav = document.createElement("div");
            favDiv.appendChild(gridFav);
            gridFav.setAttribute("class", "gridFav");


            for (let index = 1; index < sessionStorage.length; index++) {

                // crear div con el overlay con iconos en cada gifos////
                //div general
                let divGifos = document.createElement("div");
                gridFav.appendChild(divGifos);
                divGifos.setAttribute("class", "gifos");
                //div contenedor de iconos
                let iconsGifos = document.createElement("div");
                divGifos.appendChild(iconsGifos);
                iconsGifos.setAttribute("class", "icons_gifos");

                //icono favoritos//
                let aTrash = document.createElement("a");
                iconsGifos.appendChild(aTrash);
                let trash = document.createElement("img");
                aTrash.appendChild(trash);
                trash.setAttribute("class", "favSearch");
                trash.setAttribute("src", "assets/icon-trash-normal.svg");
                hoverSearch(trash, "assets/icon-trash-hover.svg", "assets/icon-trash-normal.svg");

                //icono download//
                let aDownload = document.createElement("a");
                iconsGifos.appendChild(aDownload);
                let download = document.createElement("img");
                aDownload.appendChild(download);
                download.setAttribute("class", "downS");
                download.setAttribute("src", "assets/icon-download.svg");
                hoverSearch(download, "assets/icon-download-hover.svg", "assets/icon-download.svg");
                //icono maximize//
                let aMax = document.createElement("a");
                iconsGifos.appendChild(aMax);
                let max = document.createElement("img");
                aMax.appendChild(max);
                max.setAttribute("class", "max");
                max.setAttribute("id", "maxS");
                max.setAttribute("src", "assets/icon-max-normal.svg");
                hoverSearch(max, "assets/icon-max-hover.svg", "assets/icon-max-normal.svg");

                
                            ///// CLICK en ICONO TRASH
                            trash.addEventListener("click", () => {
                                sessionStorage.removeItem(`${urlId[index]}`);
                                blockFavClick = 0;
                                newRetrievedObject = [];
                                console.log("TRASH", newRetrievedObject);
                                favDiv.style.display = "none";
                                //location.reload();
                                clickFav();
                                
                                
                            })
                
                //////////// TRAE GIFOS DE LA API//////////////////
                let gifo = document.createElement("img");
                gifo.setAttribute("src", newRetrievedObject[index - 1].url);
                gifo.setAttribute("class", "gif");
                divGifos.appendChild(gifo);


                /// User  y Titulo del GIFOS traido de la API/////

                // div contenedor user///
                let divUser = document.createElement("div");
                divGifos.appendChild(divUser)
                divUser.setAttribute("class", "user");
                // h2 user///
                let user = document.createElement("h2");
                user.innerHTML = newRetrievedObject[index - 1].user;
                divUser.appendChild(user);
                // p user///
                let pUser = document.createElement("p");
                pUser.innerHTML = newRetrievedObject[index - 1].title;
                divUser.appendChild(pUser);

            }

            let favSeeMore = document.createElement("button")
            favDiv.appendChild(favSeeMore);
            favSeeMore.innerHTML = "VER MÁS";
            favSeeMore.setAttribute("class", "favSeeMore");
            ; break
        }
        
    }
    blockFavClick = 1;
    console.log("blockFavClick", blockFavClick);
    console.log("newRetrievedObject", newRetrievedObject);
}



