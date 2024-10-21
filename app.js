// seleziono gli elementi dal DOM
const about = document.querySelector('.about');
const btns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');

// aggancio un ascoltatore di eventi al contenitore genitore

about.addEventListener('click', e => {
    // dichiaro una variabile per salvare il dataset id dei bottoni
    const id = e.target.dataset.id;
})