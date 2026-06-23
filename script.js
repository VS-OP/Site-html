document.addEventListener('DOMContentLoaded', () => {
    
    // Menu Hamburger
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    if (hamburger && menu) {
        hamburger.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    }
    
    // Galeria Interativa
    const imagemPrincipal = document.getElementById('imagem-principal');
    const miniaturas = document.querySelectorAll('.miniatura');

    if (imagemPrincipal && miniaturas.length > 0) {
        miniaturas.forEach(miniatura => {
            miniatura.addEventListener('click', function() {
                imagemPrincipal.src = this.src;

                miniaturas.forEach(m => m.classList.remove('ativa'));
                this.classList.add('ativa');

                imagemPrincipal.style.opacity = 0.5;
                setTimeout(() => {
                    imagemPrincipal.style.opacity = 1;
                }, 150);
            });
        });
    }
    
});