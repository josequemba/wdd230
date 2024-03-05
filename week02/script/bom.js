
const inputElement = document.getElementById('favchap');
const buttonElement = document.querySelector('button[type="submit"]');
const listElement = document.getElementById('list');

buttonElement.addEventListener('click', () => {
    if (inputElement.value.trim() !== '') {
        //create a li element
        const listItem = document.createElement('li');
        //create a delete button
        const deleteButton = document.createElement('button');
        //populate the li elements textContent or innerHTML with the input value
        listItem.textContent = inputElement.value;
        //populate the button textContent with a ❌
        deleteButton.textContent = '❌';
        //append the li element with the delete button
        listElement.append(deleteButton);
        //append the li element to the unordered list in your HTML
        listElement.append(listItem);
        //add an event listener to the delete button that removes the li element when clicked
        deleteButton.addEventListener('click', () => {
            listElement.removeChild(listItem);
            deleteButton.remove();
            inputElement.focus();
        });
        //send the focus to the input element
        inputElement.focus();
        //change the input value to nothing or the empty string to clean up the interface for the user
        inputElement.value = '';
    } else {
        inputElement.focus();
    }
});