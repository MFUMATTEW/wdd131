// Select HTML Elements and store them in variables
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Code runs when the user clicks on the button
button.addEventListener('click', function () { 

    // Check if the user entered something or not 
    // 'Trim' removes the spaces if the user only enters them
    if (input.value.trim() !== '') {
    
        // Creates a new list item
        const li = document.createElement('li');
        // Add the use input to the list item
        li.textContent = input.value;

        // Create a delete Button 
        const deleteButton = document.createElement('button');
        // Display a delete icon on the button
        deleteButton.textContent = '❌';
        // Code runs when the user clicks on the delete button
        deleteButton.addEventListener("click", function () {

            // Delete the chapter
            list.removeChild(li);
            // Cursor returns back in the input field
            input.focus();
        });

        // Add the delete button to the list item
        li.append(deleteButton);
        // Add the list item to the unordered list
        list.append(li);
        // Clears the field
        input.value = "";
    }
    input.focus();
});
