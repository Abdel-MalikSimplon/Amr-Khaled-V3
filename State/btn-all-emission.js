(function() {
    var btnAll = document.querySelector('#btn-plus');
    var emissions = document.querySelector('.bae');

    btnAll.addEventListener('click', function(e) {
        e.preventDefault()
        emissions.classList.toggle('displayBlock')
    });
})();
