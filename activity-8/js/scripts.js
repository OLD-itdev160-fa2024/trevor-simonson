// Application functions

function openModal(){
    var modal = get('modal-dialog');
    var backdrop = get('modal-backdrop');

    modal.classList.add('visible');
    backdrop.classList.add('visible');
}

function closeModal(){
    var modal = get('modal-dialog');
    var backdrop = get('modal-backdrop');
    var title = get('edit-title-text');
    var content = get('edit-content-text');

    modal.classList.remove('visible');
    backdrop.classList.remove('visible');
    title.value = '';
    content.value = '';
}

function saveContent(){
    var title = get('edit-title-text');
    var text = get('edit-content-text');
    var content = get('display-content');

    var newTitle = document.createElement('h2')
    var newContent = document.createElement('p')

    newTitle.appendChild(document.createTextNode(title.value));
    newContent.appendChild(document.createTextNode(text.value));

    content.appendChild(newTitle);
    content.appendChild(newContent);

    closeModal();
}

// Event Listeners

window.addEventListener('load', function(){
    var newButton = get('new-button');
    var saveButton = get('save-button');
    var cancelButton = get('cancel-button')

    newButton.addEventListener('click', openModal);
    saveButton.addEventListener('click', saveContent);
    cancelButton.addEventListener('click', closeModal)
});

// Utility function

function get(element){
    return document.getElementById(element);
}