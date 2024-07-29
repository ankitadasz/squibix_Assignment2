document.addEventListener('DOMContentLoaded', (event) => {
    function handleEditButtonClick(event) {
        const button = event.target;
        const inputField = button.previousElementSibling;

        if (button.textContent === 'Edit') {
            inputField.removeAttribute('disabled');
            inputField.classList.remove('hidden');
            button.textContent = 'Save';
        } else {
            inputField.setAttribute('disabled', 'true');
            inputField.classList.add('hidden');
            button.textContent = 'Edit';
        }
    }

    
    const editButtons = document.querySelectorAll('.form button');

    
    editButtons.forEach(button => {
        button.addEventListener('click', handleEditButtonClick);
    });

    
    const imgEditButton = document.querySelector('.imgedit');
    const imgElement = document.querySelector('.img img');

    imgEditButton.addEventListener('click', () => {
        const newImgUrl = prompt('Enter new image URL:');
        if (newImgUrl) {
            imgElement.src = newImgUrl;
        }
    });
});
