const images = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Il profumo del mare nordico e la suggestione della natura',
    'Una vacanza neutrale tra orologi, cioccolata e stelle alpine',
    'Quando Big Ben suona sul Tamigi sono passati 60 minuti',
    'Una vacanza in Germania è proprio quello che ci vuole...',
    'Il Paradiso può attendere? Tuffatevi in un sogno',
]

let picturesContent = '';
let thumbnailsContent = '';


for (let i = 0 ; i < images.length ; i++){
    picturesContent += `
    <div class="picture">
        <img src="${images[i]}" alt="${title[i]} picture">
        <div class="picture-description px-3">
            <h4>${title[i]}</h4>
            <p>${text[i]}</p>
        </div>
    </div>`

    thumbnailsContent += `
    <div class="thumbnail">
        <img src="${images[i]}" alt="Thumbnail of ${title[i]} landscape">
    </div>`
}



// recupero contentitore immagini
const picturesElement = document.querySelector('div.carousel .pictures');

// aggiungo immagini
picturesElement.innerHTML = picturesContent;

// recupero il contenitore thumbnails
const thumbnailsElement = document.querySelector('div.carousel .thumbnails');

// aggiungo thumbnails
thumbnailsElement.innerHTML += thumbnailsContent;


// inzializzazione visibilità elementi
let activeElement = 1;

//  recupero immagine e aggiungo classe active
document.getElementsByClassName('picture')[activeElement].classList.add('active');

//  recupero thumbnail e aggiungo classe active
document.getElementsByClassName('thumbnail')[activeElement].classList.add('active');

// recupero bottone "prev"
const prev = document.querySelector('div.prev');

prev.addEventListener('click', function() {
    // elimino classe active dall'immagine e dal thumbnail
    document.getElementsByClassName('picture')[activeElement].classList.remove('active');
    document.getElementsByClassName('thumbnail')[activeElement].classList.remove('active');
    document.getElementsByClassName('circle')[activeElement].classList.remove('active');

    // controllo se ho raggiunto l'ultima immagine e torno indietro
    if( activeElement === 0){
        activeElement = images.length - 1;
    } else {
        activeElement--;
    }

    // aggiungo all'immagine e al thumbnail la classe active
    document.getElementsByClassName('picture')[activeElement].classList.add('active');
    document.getElementsByClassName('thumbnail')[activeElement].classList.add('active');
    document.getElementsByClassName('circle')[activeElement].classList.add('active');

});

// recupero bottone "next"
const next = document.querySelector('div.next');
next.addEventListener('click', function() {
    // elimino classe active dall'immagine e dal thumbnail
    document.getElementsByClassName('picture')[activeElement].classList.remove('active');
    document.getElementsByClassName('thumbnail')[activeElement].classList.remove('active');
    document.getElementsByClassName('circle')[activeElement].classList.remove('active');

    // controllo se ho raggiunto l'ultima immagine e vado avanti
    if( activeElement === images.length - 1){
        activeElement = 0 ;
    } else {
        activeElement++;
    }

    // aggiungo all'immagine e al thumbnail la classe active
    document.getElementsByClassName('picture')[activeElement].classList.add('active');
    document.getElementsByClassName('thumbnail')[activeElement].classList.add('active');
    document.getElementsByClassName('circle')[activeElement].classList.add('active');
});

