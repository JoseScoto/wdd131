const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displaylist(chapter);
});

button.addEventListener('click', () => {
    if (input.value !== '') {// make sure input is not empty
        displaylist(input.value); // call the function to display the chapter
        chaptersArray.push(input.value); // add the chapter to the array
        setChapterList(); // update the local storage
        input.value = ''; // clear the input field
        input.focus(); // set focus back to the input field
    }
});

function displaylist(item) {
    // Li element to hold the chapter
    let li = document.createElement('li');

    // Creating a delete button
    let deleteButton = document.createElement('button');

    // Li element variable's textContent or innerHTML - CORREGIDO: usar 'item' en lugar de 'input.value'
    li.textContent = item;

    // Populate the delete button
    deleteButton.textContent = '❌';

    // Append the delete button to the li element - AGREGADO: faltaba agregar el botón al li
    li.appendChild(deleteButton);

    // Append the li element to the list - AGREGADO: faltaba agregar el li a la lista
    list.appendChild(li);

    // Add an event listener to the delete button
    deleteButton.addEventListener('click', function () {
        // Remove the li element when the delete button is clicked
        list.removeChild(li);
        // AGREGADO: llamar a deleteChapter para actualizar el array y localStorage
        deleteChapter(item);
        input.focus();
    });

    console.log(item);
}

function setChapterList() {
    // Store the chaptersArray in local storage
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    // Retrieve the chaptersArray from local storage
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    // Remove the chapter from the array - CORREGIDO: no necesitas slice aquí
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList(); // update the local storage
}