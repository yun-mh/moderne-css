var body = document.getElementsByTagName("body")[0];
var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var purchaseButton = document.querySelector('.purchase');
var modalCloseBtn = document.querySelector('.modal--close__btn');

purchaseButton.addEventListener('click', function() {
    body.classList.add('modal_nonscrollable');
    modal.classList.add('open');
    backdrop.style.display = 'block';
    setTimeout(function() {
        backdrop.classList.add('open');
    }, 10);
});

modalCloseBtn.addEventListener('click', function() {
    closeModal();
});

backdrop.addEventListener('click', function() {
    closeModal();
});

function closeModal() {
    if (modal) {
        modal.classList.remove('open');
    }
    body.classList.add('modal_nonscrollable');
    backdrop.style.display = 'none';
    setTimeout(function() {
        backdrop.classList.remove('open');
        body.classList.remove('modal_nonscrollable');
    }, 10); 
}