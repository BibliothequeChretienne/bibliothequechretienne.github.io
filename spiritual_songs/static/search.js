const analyzeButton = document.getElementById('analyze-button');
const searchInput = document.querySelector('.search-input');
const inputField = document.getElementById("input-field")
const clearButton = document.getElementById('clearButton');

analyzeButton.addEventListener('click', function() {
    analyseInput();
});

// Gadget Enter Button clicked ------------------------------------------------------
inputField.addEventListener('keydown', function(event){
    if (event.keyCode === 13){
        analyzeButton.click();
    }
}); 

// cursor set focused on the input field
window.addEventListener('load',function(){
    setInterval(function(){inputField.focus();},100);
});

// ------------------FONCTION D"ANALYSE DES ENTREES-----------------------//
// titles={};
function analyseInput(){
    const searchText = searchInput.value.trim();

    const search_results = document.getElementById("search_results");

    if (searchText === '') {  // Vibrate the input field
        searchInput.classList.add('vibrate');
        setTimeout(() => {
            searchInput.classList.remove('vibrate');
        }, 10000);
    } else {
        if (!isNaN(searchText)) {
                                localStorage.setItem('svgFilePath', '');
                                localStorage.setItem('savedMP3',  '');//URL.createObjectURL(blob));
                                localStorage.setItem('textContent','' );


            const numero = parseInt(searchText);
            localStorage.setItem('numero', numero);
            const textFilePath = `../song_texts/${numero}.txt`; // looking for the corresponding text file
            const svgFilePath =`../song_notes/${numero}.svg`; // looking for the corresponding note svg file
            const mp3FilePath = `../song_melodies/${numero}_`; // looking for the corresponding mp3 file. voice 1 by default

///////////////////////////////////////////// A REVOIR LES NOTES DE MUSIQUES //////////////////////////
            fetch(svgFilePath)
                .then(response => response.blob())
                .then( svgContent=> {
                    // localStorage.setItem('svgContent', svgContent);
                    localStorage.setItem('svgFilePath', svgFilePath);

                });
                ///// FETCHING THE MP3 FILE///

            fetch(mp3FilePath)
                .then(response => response.blob())
                .then(blob => {
                    localStorage.setItem('savedMP3', mp3FilePath );//URL.createObjectURL(blob));

                })

                //fetchingt text file
            fetch(textFilePath)
                .then(response => response.text())
                .then(textContent =>{
                            localStorage.setItem('textContent', textContent);
                        window.location.href = 'song.html'
                        // search_results.textContent = "Number" + numero +"\n" + textContent;               
                })
                .catch(error => {
                    search_results.textContent = "Ощибка загрузки файла. Возможно файл не найден!"
                    alert(error(error));
                });
        } else {
            // --------------------------------TEXT RESEARCH ACTIONS--------------------------//
            // alert('Text action:' + searchText);
            // const pattern = /^(\d+)([a-zA-Z])$/;
            const pattern = /^(\d+)([аАaA])$/;
            const match = searchText.match(pattern);
            if (match){
                const number = parseInt(match[1],10);
                const letter = match[2].toLowerCase();

                if (letter==='а' || letter==='a'){
                    // alert(number + letter);
                    // вызов песней 1а - 9а
                }else{
                    alert("Неправилный номер песни. Буква должна быть 'а' или 'А'");
                }
            }
            else{
                //pure text research
                alert("Поиск песни отрывком текста пока не готов!")
            }
            
        }
    }
}

// function that takes input from the virtual number_keyboard
function appendToInput(number) {
    var inputField = document.getElementById('input-field');
    inputField.value += number;
}

// clearing the input from the input field
clearButton.addEventListener("click",function(){
    
    const currentValue = searchInput.value;
    newValue = currentValue.slice(0,-1);
    searchInput.value=newValue;
});


// ---------------------dealing with the background color saving ---------------------
const titre = document.getElementById("titre")
function setBackgroundColor(color){
    document.body.style.background = color;
    titre.style.color= color ==='white' ? 'black':'white';

}

document.addEventListener('DOMContentLoaded', function(){
    const savedColor = localStorage.getItem('backgroundColor');
    if(savedColor){
        setBackgroundColor(savedColor);
    }
});



