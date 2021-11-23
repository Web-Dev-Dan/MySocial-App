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

const linkTwitter = document.querySelector('#linkTwitter');
const linkFacebook = document.querySelector('#linkFacebook');
const linkYoutube = document.querySelector('#linkYoutube');
const linkGithub = document.querySelector('#linkGithub');

const addTwitterBtn = document.querySelector('#addTwitterBtn');
const addFacebookBtn = document.querySelector('#addFacebookBtn');
const addYoutubeBtn = document.querySelector('#addYoutubeBtn');
const addGithubBtn = document.querySelector('#addGithubBtn');

const twitterURLInput = document.querySelector('#twitterURLInput');
const facebookURLInput = document.querySelector('#facebookURLInput');
const youtubeURLInput = document.querySelector('#youtubeURLInput');
const githubURLInput = document.querySelector('#githubURLInput');



// Event Listeners:
editBtn.addEventListener('click', openModal);
updateBtn.addEventListener('click', updateCard);

for (i = 0; i < closeModalBtn.length; i++) {
    closeModalBtn[i].addEventListener('click', closeModal);
}

addTwitterBtn.addEventListener('click', addTwitter);
addFacebookBtn.addEventListener('click', addFacebook);
addYoutubeBtn.addEventListener('click', addYoutube);
addGithubBtn.addEventListener('click', addGithub);



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

    // Add links:
    if (twitterURLInput.value !== '') {
        linkTwitter.href = `${twitterURLInput.value}`;
        linkTwitter.target = '_blank';
    } else {
        linkTwitter.removeAttribute('href');
        linkTwitter.removeAttribute('target');
    }

    if (facebookURLInput.value !== '') {
        linkFacebook.href = `${facebookURLInput.value}`;
        linkFacebook.target = '_blank';
    } else {
        linkFacebook.removeAttribute('href');
        linkFacebook.removeAttribute('target');
    }

    if (youtubeURLInput.value !== '') {
        linkYoutube.href = `${youtubeURLInput.value}`;
        linkYoutube.target = '_blank';
    } else {
        linkYoutube.removeAttribute('href');
        linkYoutube.removeAttribute('target');
    }

    if (githubURLInput.value !== '') {
        linkGithub.href = `${githubURLInput.value}`;
        linkGithub.target = '_blank';
    } else {
        linkGithub.removeAttribute('href');
        linkGithub.removeAttribute('target');
    }

    /* ---------------TEMPORARY------------------ */
    // Change Image:
    const uploadedImageBtn = document.querySelector('#file');
    const uploadedImage = uploadedImageBtn.value;

    const str = uploadedImage.split("\\").pop();
    const imgContainer = document.querySelector('.img-container');
    imgContainer.style.backgroundImage = `url('imgs/${str}')`;

    if (uploadedImage !== '') {
        const userIcon = document.querySelector('.fa-user');
        userIcon.style.display = 'none';
    } else {
        userIcon.style.display = 'flex';
    }
    /* --------------------------------------- */

    closeModal();
}


function addTwitter() {
    addTwitterBtn.classList.toggle('grayscale');
    twitterURLInput.classList.toggle('hidden');
    linkTwitter.classList.toggle('hidden');
}

function addFacebook() {
    addFacebookBtn.classList.toggle('grayscale');
    facebookURLInput.classList.toggle('hidden');
    linkFacebook.classList.toggle('hidden');
}

function addYoutube() {
    addYoutubeBtn.classList.toggle('grayscale');
    youtubeURLInput.classList.toggle('hidden');
    linkYoutube.classList.toggle('hidden');
}

function addGithub() {
    addGithubBtn.classList.toggle('grayscale');
    githubURLInput.classList.toggle('hidden');
    linkGithub.classList.toggle('hidden');
}
