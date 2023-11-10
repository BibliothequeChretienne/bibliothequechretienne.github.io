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






