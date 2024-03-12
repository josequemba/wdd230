
const inputElement = document.getElementById('favchap');
const buttonElement = document.querySelector('button[type="submit"]');
const listElement = document.getElementById('list');
let chaptersArray =  getChapterList() || [];

buttonElement.addEventListener('click', () => {
    if (inputElement.value.trim() != '') {
        //call displayList with the input.value argument
        displayList(inputElement.value);
        //push the input.value into the chaptersArray
        chaptersArray.push(inputElement.value);
        //update the localStorage with the new array by calling a function named setChapterList
        setChapterList();
        //set the input.value to nothing
        inputElement.value = '';
        //set the focus back to the input
        inputElement.focus();
    } else {
        inputElement.focus();
    }
});

function displayList (item) {
    //create a li element
    const listItem = document.createElement('li');
    //create a delete button
    const deleteButton = document.createElement('button');
    //populate the li elements textContent or innerHTML with the input value
    listItem.textContent = item;
    //populate the button textContent with a ❌
    deleteButton.textContent = '❌';
    //deletebutton
    deleteButton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
    //append the li element with the delete button
    listItem.append(deleteButton);
    //append the li element to the unordered list in your HTML
    listElement.append(listItem);
    //add an event listener to the delete button that removes the li element when clicked
    deleteButton.addEventListener('click', () => {
        listElement.removeChild(listItem);
        deleteChapter(listItem.textContent);
        inputElement.focus();
    });
}

function setChapterList () {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList () {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter () {
    // this slices off the last character
    chapter = chapter.slice(0, chapter.length - 1);
    //redefine the chaptersArray array using the array.filter method to return everything except the chapter to be removed
    chaptersArray = chaptersArray.filter((item) => item != chapter);
    //Call the setChapterList function to update the localStorage item
    setChapterList();
}

chaptersArray.forEach(chapter => {
    displayList(chapter);
});