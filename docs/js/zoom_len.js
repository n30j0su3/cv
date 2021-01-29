/**
 * Adapted by N30j0su3
 * 28-01-2021
 * Based on  * https://github.com/prabinmagar/simple-magnific-popup-vanilla-js
 */
const allimgs = document.querySelector('.img-gallery');
const previewModalOverlay = document.getElementById('preview-modal-overlay');
const modalCloseBtn = document.getElementById('modal-close-btn');

allimgs.addEventListener('click', showZoomImg);

modalCloseBtn.addEventListener('click', () => {
    previewModalOverlay.style.display = "none";
});

function showZoomImg(e){
    let galleryDiv;
    if(e.target.classList.contains('fas')){
        galleryDiv = e.target.parentElement.parentElement;
    } else {
        galleryDiv = e.target;
    }
    previewModalOverlay.querySelector('img').src = galleryDiv.querySelector('img').src;
    previewModalOverlay.style.display = "block";
}