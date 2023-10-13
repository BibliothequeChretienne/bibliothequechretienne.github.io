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
            alert('Text action:' + searchText);
        }
    }
}

// function that takes input from the virtual number_keyboard
function appendToInput(number) {
    var inputField = document.getElementById('input-field');
    inputField.value += number;
}
