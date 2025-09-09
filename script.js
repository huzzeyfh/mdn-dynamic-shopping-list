const input = document.querySelector('input');
const button = document.querySelector('button');
const ul = document.querySelector('ul');

button.addEventListener('click', () => {
    let currentValue = input.value;
    input.value = "";

    const li = document.createElement('li');
    const span = document.createElement('span');
    const buttonDelete = document.createElement('button');

    li.appendChild(span);
    li.appendChild(buttonDelete);
    span.textContent = currentValue;
    buttonDelete.textContent = 'Delete';

    ul.appendChild(li);

    buttonDelete.addEventListener('click', () => {
        ul.removeChild(li)
    });

    input.focus()
});



