// const fs = require('fs');

// // Function to search for matches in a text file
// function searchMatchesInFile(inputText, filePath) {
//   const fileContent = fs.readFileSync(filePath, 'utf8');
//   const lines = fileContent.split('\n');
//   const matchedLineNumbers = [];

//   for (let i = 0; i < lines.length; i++) {
//     if (lines[i].includes(inputText)) {
//       // If the line contains the input text, add its line number to the result
//       matchedLineNumbers.push(i + 1); // Adding 1 because line numbers start from 1
//     }
//   }

//   return matchedLineNumbers;
// }

// // Example usage:
// const inputText = 'search me';
// const filePath = 'song_lyrics.txt'; // Replace with the path to your text file

// const matchedLineNumbers = searchMatchesInFile(inputText, filePath);

// if (matchedLineNumbers.length > 0) {
//   console.log(`Matches found in lines: ${matchedLineNumbers.join(', ')}`);
// } else {
//   console.log('No matches found.');
// }

const filePath = '../song_texts/songs.txt';

function searchText() {
    // const userInput = document.getElementById("searchInput").value;
    userInput = "Так близок горе и нужде"
    fetch(filePath)
                .then(response => response.text())
                .then(data => {
                    const lines = data.split('\n');
                    const matchingLines = [];
                    for (let i = 0; i < lines.length; i++) {
                        if (lines[i].includes(userInput)) {
                            matchingLines.push(i + 1); // Adding 1 because line numbers start from 1
                        }
                    }
                    const resultElement = document.getElementById("searchResult");
                    if (matchingLines.length > 0) {
                        resultElement.textContent = "Matches found in lines: " + matchingLines.join(", ");
                    } else {
                        resultElement.textContent = "No matches found.";
                    }
                })
                .catch(error => {
                    console.error("Error fetching the file:", error);
                });
        }






