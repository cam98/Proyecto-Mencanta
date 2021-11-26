//Footer template 
class Footer extends HTMLElement {
    constructor() {
      super();
    }
    
    connectedCallback() {
        this.innerHTML = `
        <head>
        <link rel="stylesheet" href="/css/mencanta-styles.css">
        </head>
        <footer>
            <div class="footer">
                <div class="footer__logo">
                    <img src="/images/main/logo-letras.png" alt="">
                    <p class="rights">© 2021 Mencanta All rights reserved.</p>
                </div>
                <div class="footer__services">
                    <h4><a href="">SERVICIOS</a></h4>
                    <a href="/html/Consultoria de Arte/consultoria.html">Consultoria de arte</a>
                    <a href="">Representación de Artistas</a>
                    <a href="/html/Galeria/galeria.html">Galería</a>
                    <a href="/html/Agencia Cultural/agencia.html">Agencia Cultural</a>
                    <a href="/html/Publicaciones/publicaciones.html">Publicaciones</a>
                    <a href="/html/Regala arte/regala.html">Regala Arte</a>
                </div>
                <div class="footer__contact">
                    <h4><a href="">CONTÁCTANOS</a></h4>
                    <p>Mencanta Consultora de Arte</p>
                    <p>Bogotá, Colombia</p>
                    <p>318 225 1477</p>
                    <p>mencanta@mencanta.org</p>
                    <div class="footer__contact-icons">
                        <a href="mailto:mencanta@mencanta.org"><span class="iconify" data-icon="grommet-icons:mail-option" style="color: #bc9428;"></span></a>
                        <a href="https://www.facebook.com/MencantaCosultoradearte" target="_blank" rel="noopener noreferrer"><span class="iconify" data-icon="bx:bxl-facebook" style="color: #bc9428;"></span></a>
                        <a href="https://www.instagram.com/mencanta_consultora_de_arte/" target="_blank" rel="noopener noreferrer"><span class="iconify" data-icon="akar-icons:instagram-fill" style="color: #bc9428;"></span></a>
                        <a href="https://www.linkedin.com/in/mar%C3%ADa-teresa-guerrero-bucheli-09b7491a1/" target="_blank" rel="noopener noreferrer"><span class="iconify" data-icon="akar-icons:linkedin-fill" style="color: #bc9428;"></span></a>
                    </div>
                </div>
            </div>
        </footer>
        `;
      }
    }

customElements.define('my-footer', Footer);