// Variables:
const editBtn = document.querySelector('.edit-btn');
const editModalBackground = document.querySelector('.modal-background');
const editModal = document.querySelector('.edit-modal-container');
const closeModalBtn = document.querySelectorAll('#closeModal');
const updateBtn = document.querySelector('#updateBtn');
const username = document.querySelector('#nameText');
const usernameInput = document.querySelector('#usernameInput');
const userLocation = document.querySelector('#locationText');
const userLocationInput = document.querySelector('#userLocationInput')


// Event Listeners:
editBtn.addEventListener('click', openModal);
updateBtn.addEventListener('click', updateCard);

for (i = 0; i < closeModalBtn.length; i++) {
    closeModalBtn[i].addEventListener('click', closeModal);
}


// Functions:
function openModal() {
    editModalBackground.style.display = 'flex';
    editModal.style.display = 'flex';

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function closeModal() {
    editModalBackground.style.display = 'none';
    editModal.style.display = 'none';
}

function updateCard() {
    if (usernameInput.value !== '') {
        username.textContent = usernameInput.value;
        usernameInput.value = '';
    }
    if (userLocationInput.value !== '') {
        userLocation.textContent = userLocationInput.value;
        userLocationInput.value = '';
    }
    closeModal();
}
