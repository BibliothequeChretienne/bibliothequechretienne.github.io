//----------------------------------------------- note-button----------------------------------------------//


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
  // if (noteIsSlashed && textIsSlashed){
  //    // If both buttons are slashed, show notes only,( hide both divs )
  //   notesDiv.style.display ="block";
  //   textsDiv.style.display="none"
    
  // }
  // else 
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
  const songTitle = localStorage.getItem('songTitle');

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
    // Set the src attribute of the audio element to the saved MP3 file URL.
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

  // if(mp3FilePath){
  //   const audioPlayer = document.getElementById('audio-player');
  //   const playButton = document.getElementById('play-button');
  //   playButton.addEventListener('click', function () {
  //     audioPlayer.src=mp3FilePath;
  //     audioPlayer.play();

  //   });

  // }
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
    alert(typeof(numero));
    // numero
    titles={
      1:"1-воспойте хвалу",
      2:" где есть Бог такой как ты",
      3:"о ты всегда со мной",
      4:"кто достойно поклонение",
  };
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
              window.location.href = 'index.html'
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
    alert(typeof(numero));
    localStorage.setItem('numero', numero);
    titles={
      1:"1-воспойте хвалу",
      2:" где есть Бог такой как ты",
      3:"о ты всегда со мной",
      4:"кто достойно поклонение",
  };
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
              window.location.href = 'index.html'
                        // search_results.textContent = "Number" + numero +"\n" + textContent;               
                })
  }
});



function toggleControlPanel(){
  const controlPanel = document.querySelector('.control_panel');
  const controlPanelWidth = controlPanel.offsetWidth;
  const leftPosition = `calc(50% - ${controlPanelWidth / 2}px)`;
  // alert(leftPosition )

// alert("test")
  if(window.innerWidth <=900){
    if(controlPanel.style.display==='block'){
      controlPanel.style.display='none';
    }else{
      controlPanel.style.display = 'block';
      controlPanel.style.justifyContent = 'center'; // Center horizontally
       // controlPanel.style.left = leftPosition;
      controlPanel.style.position = 'fixed';
      // controlPanel.style.top = '80%';
      controlPanel.style.bottom = '0%';

      // controlPanel.style.left = 'calc(50% - 280px';
      // controlPanel.style.right = '10';
      // controlPanel.style.width = '200';
      // controlPanel.style.height = '10';
      controlPanel.style.zIndex = '999';
      // controlPanel.style.overflow='auto'
     
    }
  }
}
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