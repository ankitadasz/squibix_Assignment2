document.addEventListener('DOMContentLoaded', (event) => {
    // Function to handle the edit functionality
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

    // Get all edit buttons in the form
    const editButtons = document.querySelectorAll('.form button');

    // Add event listeners to all edit buttons
    editButtons.forEach(button => {
        button.addEventListener('click', handleEditButtonClick);
    });

    // Handle the edit button for the image
    const imgEditButton = document.querySelector('.imgedit');
    const imgElement = document.querySelector('.img img');

    imgEditButton.addEventListener('click', () => {
        const newImgUrl = prompt('Enter new image URL:');
        if (newImgUrl) {
            imgElement.src = newImgUrl;
        }
    });
});
