// Handle FAQ tile clicks
const tiles = document.querySelectorAll(".faq-tile");
const modalBackdrop = document.getElementById("faqModalBackdrop");
const modal = document.getElementById("faqModal");
const modalContent = document.getElementById("modalContent");
const closeBtn = modal.querySelector(".modal-close");

tiles.forEach(tile => {
  tile.addEventListener('click', () => {
    // Find the answer content
    const answer = tile.querySelector('.faq-answer-content').innerHTML;
    modalContent.innerHTML = answer;

    // Get master title from tile
    const masterTitle = tile.querySelector('.faq-title').innerText;
    // Find .modal-title in modal content and set its text
    const modalTitleElem = modalContent.querySelector('.modal-title');
    if (modalTitleElem) {
      modalTitleElem.innerText = masterTitle;
    }

    // Get faq-thumb image src and alt from tile
    const thumb = tile.querySelector('.faq-thumb');
    const thumbSrc = thumb.getAttribute('src');
    const thumbAlt = thumb.getAttribute('alt');
    // Find modal-thumb in modal content and set src/alt
    const modalThumb = modalContent.querySelector('.modal-thumb');
    if (modalThumb) {
      modalThumb.setAttribute('src', thumbSrc);
      modalThumb.setAttribute('alt', thumbAlt);
    }

    modalBackdrop.classList.add('active');
    document.body.style.overflow = "hidden"; // Prevent background scroll
  });
});



// Close modal on click of X button
closeBtn.addEventListener("click", (e) => {
    modalBackdrop.classList.remove("active");
    document.body.style.overflow = "";
});

// Close modal on click outside modal
modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) {
        modalBackdrop.classList.remove("active");
        document.body.style.overflow = "";
    }
});

// Optional: Close modal on Esc key
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalBackdrop.classList.contains("active")) {
        modalBackdrop.classList.remove("active");
        document.body.style.overflow = "";
    }
});
