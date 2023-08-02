const wordForm = document.getElementById('wordForm');
const wordList = document.getElementById('wordList');

wordForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const wordInput = document.getElementById('word');
    const definitionInput = document.getElementById('definition');

    const word = wordInput.value;
    const definition = definitionInput.value;

    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${word}:</strong> ${definition}`;
    wordList.appendChild(listItem);

    wordInput.value = '';
    definitionInput.value = '';
});
