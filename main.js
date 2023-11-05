function getRandomVerse() {
    fetch('https://labs.bible.org/api/?passage=random')
        .then(response => response.text())
        .then(data => {
            const verseElement = document.getElementById("verse");
            verseElement.innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching the verse:', error);
        });
}

function searchVerse(event) {
    event.preventDefault();
    let searchInput = document.getElementById("searchInput").value;
    
    // Replace possible variations to standardize the passage format
    searchInput = searchInput.replace(/:/g, ' '); // Replace colons with spaces
    searchInput = searchInput.replace(/,/g, ' '); // Replace commas with spaces
    searchInput = searchInput.replace(/\./g, ' '); // Replace full stops with spaces
    searchInput = searchInput.replace(/\s+/g, ':'); // Replace spaces with colons

    fetch(`https://labs.bible.org/api/?passage=${searchInput}`)
        .then(response => response.text())
        .then(data => {
            const verseElement = document.getElementById("verse");
            verseElement.innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching the verse:', error);
        });
}
