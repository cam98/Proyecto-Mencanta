//Footer template 
class Footer extends HTMLElement {
    constructor() {
      super();
    }
    
    connectedCallback() {
        this.innerHTML = `
        <style>
            .footer {
                display: -ms-grid;
                display: grid;
                -ms-grid-rows: auto auto;
                -ms-grid-columns: 1fr 1fr;
                    grid-template: auto auto/1fr 1fr;
                justify-items: center;
                padding: 20px;
                font-size: 1.2rem;
                line-height: 1.8rem;
                background-color: #F3C2C7;
            }
            .footer__logo {
                -ms-grid-column: 1;
                -ms-grid-column-span: 2;
                grid-column: 1/span 2;
                text-align: center;
            }
            .footer__logo img {
                width: 100px;
            }
            .footer__services {
                -ms-grid-column-align: left;
                    justify-self: left;
                text-align: left;
            }
            .footer__services a {
                display: block;
                text-decoration: none;
                color: #29292E;
            }
            .footer__services h4 {
                text-decoration: underline;
            }
            .footer__contact {
                -ms-grid-column-align: right;
                    justify-self: right;
                text-align: right;
            }
            .footer__contact a {
                color: #29292E;
            }
            .footer__contact-icons {
                padding-top: 15px;
            }
            .footer__contact-icons svg {
                font-size: 2rem;
            }
        </style>
        
        <footer>
            <div class="footer">
                <div class="footer__logo">
                    <img src="/images/main/logo-letras.png" alt="">
                    <!-- <p>© 2021 Mencanta All rights reserved.</p> -->
                </div>
                <div class="footer__services">
                    <h4><a href="">SERVICIOS</a></h4>
                    <a href="/html/Consultoria de Arte/consultoria.html">Consultoria de arte</a>
                    <a href="">Representación de Artistas</a>
                    <a href="">Galería</a>
                    <a href="/html/Agencia Cultural/agencia.html">Agencia Cultural</a>
                    <a href="/html/Publicaciones/publicaciones.html">Publicaciones</a>
                    <a href="/html/Regala arte/regala.html">Regala Arte</a>
                </div>
                <div class="footer__contact">
                    <h4><a href="">CONTÁCTANOS</a></h4>
                    <p>Mencanta Consultora de Arte</p>
                    <p>Bogotá, Colombia</p>
                    <p>318 225 1477</p>
                    <div class="footer__contact-icons">
                        <a href=""><span class="iconify" data-icon="bx:bxl-facebook" style="color: #bc9428;"></span></a>
                        <a href=""><span class="iconify" data-icon="akar-icons:instagram-fill" style="color: #bc9428;"></span></a>
                        <a href=""><span class="iconify" data-icon="akar-icons:linkedin-fill" style="color: #bc9428;"></span></a>
                    </div>
                </div>
            </div>
        </footer>
        `;
      }
    }

customElements.define('my-footer', Footer);