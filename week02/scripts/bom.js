const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function () {
    if (input.value.trim() !== '') 
        {
        // Li element to hold the chapter
        const li = document.createElement('li');

        // Creating a delete button
        const deleteButton = document.createElement('button');

        // Li element variable's textContent or innerHTML
        li.textContent = input.value;

        // Populate the delete button
        deleteButton.textContent = '❌';

        // Add an event listener to the delete button
        deleteButton.addEventListener('click', function () {
            // Remove the li element when the delete button is clicked
            list.removeChild(li);
            input.focus();
        }
        );

        // Append the delete button to the li element
        li.append(deleteButton);

        // Append the li element to the list
        list.append(li);

        input.value = '';

        input.focus();
        }
        return;
});
