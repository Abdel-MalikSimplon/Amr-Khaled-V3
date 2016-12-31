(function() {

    var blocMea = document.querySelector('.bloc-video-mea');
    var btn = document.querySelector('.btn-play');

    btn.addEventListener('click', function() {
    	blocMea.innerHTML = '<iframe width="960" height="515" src="https://www.youtube.com/embed/' + this.dataset.video + '?autoplay=1" frameborder="0" allowfullscreen></iframe>';
    });

    const allEmissions = document.querySelectorAll('.all-emissions li > a');
    console.log(allEmissions)

    for (var i = 0; i < allEmissions.length; i++) {
        allEmissions[i].addEventListener('click', function(e) {
            e.preventDefault();
        })
    }
})();
