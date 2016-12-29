const francais = document.querySelector('#francais');
const english = document.querySelector('#anglais');

francais.addEventListener('click', function(e) {
    e.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'textesVideos/textes-fr.json', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let videoTexte = JSON.parse(xhr.responseText);

            const corpsTexte = document.querySelector('#corpsTextVideo');

            const el = francais.dataset.el;
            const saison = francais.dataset.saison;
            const titre = francais.dataset.titre;

            corpsTexte.innerHTML = videoTexte[el][saison][titre].join('\n');

        }
    }

    xhr.send();
});

english.addEventListener('click', function(e) {
    e.preventDefault();
});
