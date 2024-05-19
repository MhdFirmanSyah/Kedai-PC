// modal box
const itemDetailModal = document.querySelector('#item-detail-modal')
const itemDetailButton = document.querySelector('.item-detail-button')
const modalContainer = document.querySelector('.modal-container')

// open button
itemDetailButton.onclick = (e) => {
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
}

// outside click
itemDetailModal.onclick = (e) => {
    if (e.target == itemDetailModal) {
        itemDetailModal.style.display = 'none';
        e.preventDefault();
    }
}

// close botton
const closeButton = document.querySelector('.close-button')
closeButton.onclick = (e) => {
    modalContainer.style.top = '400px'
    itemDetailModal.style.display = 'none';
    e.preventDefault();
}
