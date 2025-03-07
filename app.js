// seleziono gli elementi dal DOM
const about = document.querySelector('.about');
const btns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');

// aggancio un ascoltatore di eventi al contenitore genitore

about.addEventListener('click', e => {
    // dichiaro una variabile per salvare il dataset id dei bottoni
    const id = e.target.dataset.id;
    // stabilisco le condizioni per agire sui bottoni
    if (id) {
        // faccio un ciclo sui bottoni
        btns.forEach(btn => {
            // rimuovo la classe active a tutti i bottoni
            btn.classList.remove('active');
            // aggiungo la classe active al bottone cliccato
            e.target.classList.add('active');
        });
        // faccio un ciclo anche sugli articoli per eseguire la stessa procedura
        articles.forEach(article => {
            // rimuovo la classe active a tutti gli articoli
            article.classList.remove('active');
        });
        // seleziono l'articolo in base all'id 
        const element = document.getElementById(id);
        element.classList.add('active');
    }
})