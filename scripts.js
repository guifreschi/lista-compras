const itemsContainer = document.querySelector('#itemsContainer');
const input = document.querySelector('input');
const footer = document.querySelector('footer');
const closeButton = document.querySelector('#close-symbol');
const addButton = document.querySelector('button');

let isChecked = false;

addButton.onclick = (event) => {
    event.preventDefault()
    if (!input.value.trim()) return

    const listItem = document.createElement('li')
    listItem.classList.add('checkbox-wrapper')

    const newCheckboxImage = document.createElement('div')
    newCheckboxImage.classList.add('checkbox-image')

    const itemText = document.createElement('p')
    itemText.textContent = input.value

    const newTrash = document.createElement('div')
    newTrash.classList.add('trash-img')

    listItem.append(newCheckboxImage, itemText, newTrash)
    itemsContainer.append(listItem)
    input.value = ''

    newCheckboxImage.onclick = () => {
        newCheckboxImage.style.transition = '0.2s'
        if (isChecked) {
            newCheckboxImage.style.backgroundImage = 'url(/assets/checkbox.svg)'
        } else {
            newCheckboxImage.style.backgroundImage = 'url(/assets/checkbox-active.svg)'
        }
        isChecked = !isChecked
    }

    newTrash.onclick = (event) => {
        footer.style.display = 'flex'
        event.target.parentNode.remove()
    }
}

closeButton.onclick = () => {
    footer.style.display = 'none'
};
