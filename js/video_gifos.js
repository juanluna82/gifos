const myApiKey = "wBmQSDXkME1hKn80LC75kd2OSaeifuM4";
let start = document.getElementById("start");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let clock = document.getElementById("clock");
let repeat = document.getElementById("repeat");
let miVideo;
let recorder;
let tape = 0;
let newGif = new FormData();
let videoDiv = document.getElementById("video");
let previewGif = document.getElementById("previewGif");

let myGifSaved = [];



/// APRIETO COMENZAR
start.addEventListener("click", () => {


    tape++;


    if (tape == 1) {
        start.setAttribute("style", "display: none");
        document.getElementById("title").textContent = "¿Nos das acceso a tu cámara?";
        document.getElementById("text").textContent = "El acceso a tu camara será válido sólo por el tiempo en el que estés creando el GIFO.";
        one.setAttribute("src", "assets/paso-a-paso-hover-1.svg");

        navigator.mediaDevices.getUserMedia({
            audio: false,
            video: {
                height: { max: 300 }
            }
        })
            .then((stream) => {
                document.getElementById("title").setAttribute("style", "display:none;");
                document.getElementById("text").setAttribute("style", "display:none;");
                videoDiv.setAttribute("style", "display:block;")
                video.srcObject = stream;
                video.play();
                miVideo = video;
                two.setAttribute("src", "assets/paso-a-paso-hover-2.svg");
                one.setAttribute("src", "assets/paso-a-paso.svg");
                start.textContent = "GRABAR";
                start.setAttribute("style", "display:block;");
                
            });
            

    }
    console.log("tape = " + tape);

    if (tape == 2) {
        recorder = RecordRTC(miVideo.srcObject, {
            type: "gif",
            frameRate: 1,
            quality: 10,
            width: 480,
            hidden: 240,
        });
        recorder.startRecording();
        recorder.stream = miVideo.srcObject;
        start.textContent = "FINALIZAR";
        cronometro();
}

    if (tape == 3) {
        recorder.stopRecording(stopRecordingCallback);
        start.textContent = "SUBIR GIFO";
        clock.style.display = "none";
        repeat.style.display = "block";
        repeat.addEventListener("click", () => {
            tape = 0;
            console.log(tape)
            repeat.style.display = "none";
            start.textContent = "GRABAR";
            start.setAttribute("style", "display: block");
            start.textContent = "COMENZAR";
            previewGif.style.display = "none";
            document.getElementById("title").textContent = "¿Nos das acceso a tu cámara?";
            document.getElementById("text").textContent = "El acceso a tu camara será válido sólo por el tiempo en el que estés creando el GIFO.";
            document.getElementById("title").style.display = "block";
            document.getElementById("text").style.display = "block";
            one.setAttribute("src", "assets/paso-a-paso-hover-1.svg");
            two.setAttribute("src", "assets/paso-a-paso-2.svg");
            
        });
    }

    if (tape == 4) {

        uploadGif(newGif);
        console.log("estoy subiendo mi gif");
        overlay = document.getElementById("overlay")
        overlay.setAttribute("style", "opacity:1;")
        two.setAttribute("src", "assets/paso-a-paso-2.svg");
        three.setAttribute("src", "assets/paso-a-paso-hover-3.svg");
        start.style.display = "none";
        repeat.style.display = "none";
        estadoSvg = document.getElementById("estado");
        estadoSvg.style.display = "block";
    }
});


/// STOP RECORDING


function stopRecordingCallback() {
    videoDiv.style.display = "none";
    previewGif.src = URL.createObjectURL(recorder.getBlob());  
    document.getElementById("download").setAttribute("href",previewGif.src); 
    previewGif.style.display = "block";
    recorder.stream.stop();
    newGif.append("file", recorder.getBlob(), "myGif.gif");
    console.log(newGif.get("file"));
    recorder.destroy();
    recorder = null;
}




//// SUBIR GIF

  function uploadGif(upload) {
    let uploadUrl = `https://upload.giphy.com/v1/gifs?api_key=${myApiKey}`;
  
    fetch(uploadUrl, {
      method: "POST",
      body: upload, 
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then(function (res) {
          // guardo los gifs grabados en  un array//////
        let GifSaved = res.data.id;
        myGifSaved.push(GifSaved)
        console.log("ID de Gif subido", myGifSaved);
        localStorage.setItem("myGifs", JSON.stringify(myGifSaved));

        document.getElementById("texto").textContent= "GIFO subido con éxito"
        loadersvg = document.getElementById("load");
        loadersvg.setAttribute("src","assets/ok.svg");
        loadersvg.style.display = "block";
        icon=document.getElementById("icon")
        icon.style.display = "block";
        }   
      
      );
  }

/// TIMER


"use strict";

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;


function cronometro() {
    begin();
    start.addEventListener("click", (e) =>  {pause(); e.stopPropagation();});
    clock.style.display = "block";
    repeat.addEventListener("click", () => reset());
    
    
    
    function begin() {
        pause();        
        cron = setInterval(() => { timer(); }, 10);
    }
    
    function pause() {
        clearInterval(cron);
        
    }

    function reset() {
        minute = 0;
        second = 0;
        millisecond = 0;
        document.getElementById('hour').innerText = '00';
        document.getElementById('minute').innerText = '00';
        document.getElementById('second').innerText = '00';
    }

    function timer() {
        if ((millisecond += 10) == 1000) {
            millisecond = 0;
            second++;
        }
        if (second == 60) {
            second = 0;
            minute++;
        }
        document.getElementById('minute').innerText = returnData(minute);
        document.getElementById('second').innerText = returnData(second);

    }

    function returnData(input) {
        return input > 10 ? input : `0${input}`
    }
    
}

/////// CARGO  EN EL ARRAY PARA ACUMULAR EN EL LOCALSTORAGE /////
let GifUp = JSON.parse(localStorage.getItem("myGifs"));
myGifSaved = GifUp;
if (myGifSaved == null) {
myGifSaved = [];
}






