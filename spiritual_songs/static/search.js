const analyzeButton = document.getElementById('analyze-button');
const searchInput = document.querySelector('.search-input');
const inputField = document.getElementById("inputField")


analyzeButton.addEventListener('click', function() {
    analyseInput();
});

inputField.addEventListener('keydown', function(event){
    if (event.keyCode === 13){
        analyzeButton.click();
    }
}); 



// ------------------FONCTION D"ANALYSE DES ENTREES-----------------------//
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
            // numero = localStorage.getItem('numero');
            // alert(typeof(localStorage.getItem('numero')));
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
            alert('Text action:' + searchText);
        }
    }
}



//-----------------------------------affichage des notes------------------------------//

// document.getElementById('searchButton').addEventListener('click', function() {
//     const inputNumber = document.getElementById('inputNumber').value;
//     const svgContainer = document.getElementById('svgContainer');
//     svgContainer.innerHTML = ''; // Clear previous content

//     const svgFilePath = `path/to/files/${inputNumber}.svg`; // Adjust the path to your files

//     fetch(svgFilePath)
//         .then(response => response.text())
//         .then(svgContent => {
//             const svgElement = document.createElement('div');
//             svgElement.innerHTML = svgContent;
//             svgContainer.appendChild(svgElement);
//         })
//         .catch(error => {
//             console.error(error);
//             svgContainer.textContent = 'SVG not found for the input number.';
//         });
// });


// function that takes input from the virtual number_keyboard
function appendToInput(number) {
    var inputField = document.getElementById('input-field');
    inputField.value += number;
}

// hidding number_keyboard when T is pressed for text input research-------------------------------------------

// const call_text_keyboard = document.getElementById('call_text_keyboard');
// const number_keyboard = document.querySelector('.number-keyboard');

// call_text_keyboard.addEventListener('click',()=>{
// number_keyboard.style.display='none';
// });

// erasing the input text --------------------------------------------------------------------------------------
// var inputField = document.getElementById('input-field');

// const clearButton = document.getElementById('clearButton');
// clearButton.addEventListener('click', () => {
//     const currentValue = inputField.value;
//     if (currentValue.length > 0) {
//         // Remove the last character from the input value
//         const newValue = currentValue.slice(0, -1);
//         inputElement.value = newValue;
//     }
// });