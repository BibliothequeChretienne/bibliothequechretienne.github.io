//----------------------------------------------- note-button----------------------------------------------//
titles={};


const notesDiv = document.getElementById("notesDiv");
const textsDiv = document.getElementById("textsDiv");


const notesButton = document.getElementById("notes");
const notesIcon = notesButton.querySelector("i");
let noteIsSlashed = false;

notesButton.addEventListener("click", () => {
  if (noteIsSlashed) {
    notesIcon.classList.remove("fa-music-slash");
    notesIcon.classList.add("fa-music");
  } else {
    notesIcon.classList.remove("fa-music");
    notesIcon.classList.add("fa-music-slash");

    // Unslash the text button
    textSpan.textContent = "T";
    textIsSlashed = false;
  }
  noteIsSlashed = !noteIsSlashed;
  updateDivVisibility();
});


//-----------------------------------------------text-button----------------------------------------------//
const textsButton = document.getElementById("texts");
const textSpan = document.getElementById("textSpan");
let textIsSlashed = false;

textsButton.addEventListener("click", () => {
  if (textIsSlashed) {
    textSpan.textContent = "T";
  } else {
    textSpan.innerHTML = '<i class="fa-solid fa-text-slash"></i>';

    // Unslash the notes button
    notesIcon.classList.remove("fa-music-slash");
    notesIcon.classList.add("fa-music");
    noteIsSlashed = false;
  }
  textIsSlashed = !textIsSlashed;
  updateDivVisibility();
});


// update Div visibility 
function updateDivVisibility(){
  if(noteIsSlashed){ // If notes button is slashed, hide notesDiv, show textsDiv
    notesDiv.style.display ="none";
    textsDiv.style.display = "block";

  }
  else if(textIsSlashed){  // If text button is slashed, hide textsDiv, show notesDiv
    notesDiv.style.display = "block";
    textsDiv.style.display = "none";
  }
  else{
    // If neither button is slashed, show both divs
    notesDiv.style.display = "block";
    textsDiv.style.display = "block";
  }

}


//-----------------------------------------------buttons----------------------------------------------//
// refresh the songs.html page
        const button1 = document.getElementById('voice1');
        const button2 = document.getElementById('voice2');
        const button3 = document.getElementById('voice3');
        const button4 = document.getElementById('voice4');


        //-------------loading files---------------------------------------//
document.addEventListener('DOMContentLoaded', function() {
  const textContent = localStorage.getItem('textContent');
  const svgFilePath = localStorage.getItem('svgFilePath');
  const audioPlayer = document.getElementById('audio-player');
  const savedMP3URL = localStorage.getItem('savedMP3');
  // const songTitle = localStorage.getItem('songTitle');
  const num = localStorage.getItem('numero');
  const songTitle = titles[num];

if(songTitle){
  document.getElementById('song_title').innerHTML= songTitle;
}

if (textContent) {
      document.getElementById('textsDiv').innerHTML = `<pre>` + textContent + `</pre>`;
  }

  if (svgFilePath) {
    document.getElementById('notesDiv').innerHTML = `<img src="` + svgFilePath + `" alt="song_s notes" ">`;
}

  if (savedMP3URL) {
    audioPlayer.src = savedMP3URL + `1.mp3`;

    button1.addEventListener('click' ,function(){
      audioPlayer.src = savedMP3URL + `1.mp3`;
    });
    button2.addEventListener('click' ,function(){
      audioPlayer.src = savedMP3URL + `2.mp3`;
    });
    button3.addEventListener('click' ,function(){
      audioPlayer.src = savedMP3URL + `3.mp3`;
    });
    button4.addEventListener('click' ,function(){
      audioPlayer.src = savedMP3URL + `4.mp3`;
    });

  } else {
    alert('No saved MP3 found.');
  }

});

 // ------------------------------------------ PREVIOUS and NEXT --------------------------------------------//
 
 const previous = document.getElementById('previous');
 const next = document.getElementById('next');

 previous.addEventListener('click',()=>{
  numero = localStorage.getItem('numero')
  // alert(numero);
  if( numero == 1){
    alert("Песня № 1");
    
  }
  else{
    numero = numero -1;
    localStorage.setItem('numero', numero);
    const songTitle = titles[numero];
    const textFilePath = `../song_texts/${numero}.txt`; // looking for the corresponding text file
    const svgFilePath =`../song_notes/${numero}.svg`; // looking for the corresponding note svg file
    const mp3FilePath = `../song_melodies/${numero}_`; // looking for the corresponding mp3 file. voice 1 by default

    localStorage.setItem('songTitle', songTitle);
    fetch(svgFilePath)
    .then(response => response.blob())
    .then( svgContent=> {
        // localStorage.setItem('svgContent', svgContent);
        localStorage.setItem('svgFilePath', svgFilePath);
    });

    //fetching mp3 file
    fetch(mp3FilePath)
        .then(response => response.blob())
        .then(blob => {
              localStorage.setItem('savedMP3', mp3FilePath );//URL.createObjectURL(blob));

                })

                //fetching text file//
    fetch(textFilePath)
        .then(response => response.text())
        .then(textContent =>{
              localStorage.setItem('textContent', textContent);
              window.location.href = 'song.html'
                        // search_results.textContent = "Number" + numero +"\n" + textContent;               
                })
  }
});


next.addEventListener('click', ()=>{
  numero = parseInt(localStorage.getItem('numero'));

  // alert(numero);
  if( numero == 100){
    alert("Песня № 100");
    
  }
  else{
    numero = numero +1;
    localStorage.setItem('numero', numero);

    const songTitle = titles[numero];
    const textFilePath = `../song_texts/${numero}.txt`; // looking for the corresponding text file
    const svgFilePath =`../song_notes/${numero}.svg`; // looking for the corresponding note svg file
    const mp3FilePath = `../song_melodies/${numero}_`; // looking for the corresponding mp3 file. voice 1 by default

    localStorage.setItem('songTitle', songTitle);
    // fetching the notes ///
    fetch(svgFilePath)
    .then(response => response.blob())
    .then( svgContent=> {
        // localStorage.setItem('svgContent', svgContent);
        localStorage.setItem('svgFilePath', svgFilePath);
    });

    //fetching mp3 file
    fetch(mp3FilePath)
        .then(response => response.blob())
        .then(blob => {
              localStorage.setItem('savedMP3', mp3FilePath );//URL.createObjectURL(blob));

                })

                //fetching text file//
    fetch(textFilePath)
        .then(response => response.text())
        .then(textContent =>{
              localStorage.setItem('textContent', textContent);
              window.location.href = 'song.html'
                        // search_results.textContent = "Number" + numero +"\n" + textContent;               
                })
  }
});
//-------------to
function toggleControlPanel(){
  const controlPanel = document.querySelector('.control_panel');
  const controlPanelWidth = controlPanel.offsetWidth;
  const leftPosition = `calc(50% - ${controlPanelWidth / 2}px)`;
  // alert(leftPosition )

// alert("test")
  if(window.innerWidth <=900){
    if(controlPanel.style.display==='block'){
      controlPanel.style.display='none';
    }
    else{
      controlPanel.style.display = 'block';
      controlPanel.style.justifyContent = 'center'; // Center horizontally
      controlPanel.style.position = 'fixed';
      controlPanel.style.bottom = '0%';
      controlPanel.style.zIndex = '999';
    }
  }
}

document.querySelector('.control_panel').addEventListener('click', (event) => {
  // Stop the click event from propagating to the controlPanel element
  event.stopPropagation();
});
document.addEventListener('click', () =>{
  toggleControlPanel();
});



//automatically repeat song
var audio = document.getElementById('audio-player');

// Add an event listener for the 'ended' event
audio.addEventListener('ended', function() {
    // Reset the audio to the beginning and play it again
    audio.currentTime = 0;
    audio.play();
});

const visionControl = document.getElementById("eye");
const body = document.body;
const container = document.getElementsByClassName('container');
const song_title = document.getElementById('song_title');

function setBackgroundColor(color){
  document.body.style.background = color;
  textsDiv.style.backgroundColor = color;
  song_title.style.color = color ==='white' ? 'black':'white';
  textsDiv.style.color = color ==='white' ? 'black':'white';
  notesDiv.style.color = color ==='white' ? 'black':'white';
  visionControl.style.backgroundColor='white';
  localStorage.setItem('backgroundColor',color);
}

const savedColor =localStorage.getItem('backgroundColor');
if (savedColor){
  setBackgroundColor(savedColor);
}

visionControl.addEventListener('click',(event)=>{
  event.stopPropagation();// Stop the click event from propagating to the controlPanel element
  if(textsDiv.style.backgroundColor==='white'){
      setBackgroundColor('black');
    }
  else{
    setBackgroundColor('white');  
  }
});

// swipe effect on NEXT button ////////
let startX, startY;

document.addEventListener('touchstart', (e) =>{
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
});

document.addEventListener('touchmove', (e) =>{
  const endX = e.touches[0].clientX;
  const endY = e.touches[0].clientY;

  const deltaX = startX - endX;
  const deltaY = startY - endY;

  if(Math.abs(deltaX)>Math.abs(deltaY) && Math.abs(deltaX) > 50){
    if(deltaX>0){
      next.click();
    }
    else{
      previous.click();
    }
  }
});