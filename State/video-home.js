(function() {
    var blocMea = document.querySelector('.bloc-video-mea')
    var btn = document.querySelector('.btn-play')

    btn.addEventListener('click', function() {
        blocMea.innerHTML = '<iframe width="960" height="515" src="https://www.youtube.com/embed/Zu8c6RdRTaI?autoplay=1" frameborder="0" allowfullscreen></iframe>'
    })
})()
