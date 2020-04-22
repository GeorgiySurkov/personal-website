window.addEventListener('scroll', function() {
    let nav = document.getElementsByTagName('nav')[0];
    if (this.pageYOffset == 0) {
        nav.classList.remove('scrolled-nav');
    }
    else {
        nav.classList.add('scrolled-nav');
    }
})