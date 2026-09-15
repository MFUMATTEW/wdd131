const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

// const li = document.createElement('li');

// const deleteButton = document.createElement('button');

// li.textContent = input.value;

// deleteButton.textContent = '❌';

// li.appendChild(deleteButton);

// list.appendChild(li);

button.addEventListener('click', function () {
    const chapterName = input.value.trim();


    if (chapterName !== '') {
        const newChapter = document.createElement('li');
        newChapter.textContent = chapterName;

        const deleteButton = document.createElement('button')
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete');

        newChapter.appendChild(deleteButton);
        list.appendChild(newChapter);

        input.value = '';   
    }
    else {
        alert('Please enter a Chapter');
    }

    input.focus();

});

list.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete')) {
        const li = e.target.parentElement;
        list.removeChild(li);
        input.focus();
    }
    
});