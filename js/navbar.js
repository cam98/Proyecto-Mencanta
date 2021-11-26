class Header extends HTMLElement {
    constructor() {
      super();
    }
    
    connectedCallback() {
        this.innerHTML = `
        <head>
        <link rel="shortcut icon" type="image/x-icon" href="/images/main/logo.png">
         <link rel="stylesheet" href="/css/mencanta-styles.css">
         
        </head>
        <header>
        <nav>
            <div class="navbar">
                <input type="checkbox" id="check">
                 <label for="check" class="navbar__btn"><i><span class="iconify" data-icon="icon-park-outline:hamburger-button" style="color: white;"></span></i>
                </label>

              <div class="navbar__logo">
                <a href="/index.html">
                    <img src="/images/main/logo-letras.png" alt="">
                </a>
              </div>

              <div class="navbar__services">
                <ul>
                    <li><a href="/html/Consultoria de Arte/consultoria.html">Consultoría de Arte</a>
                      <!-- <ul>
                        <li><a href="">Asesoría en compraventa</a></li>
                        <li><a href="">Inventariado y catalogación</a></li>
                        <li><a href="">Tasación y peritaje de obras de arte</a></li>
                        <li><a href="">Asesoramiento legal y fiscal</a></li>
                        <li><a href="">Gestión de colecciones</a></li>
                        <li><a href="">Montaje, iluminación, embalaje</a></li>
                      </ul> -->
                    </li>
                    <li><a href="">Representación de Artistas</a></li>
                    <li><a href="/html/Galeria/galeria.html">Galería</a></li>
                    <li><a href="/html/Agencia Cultural/agencia.html">Agencia cultural</a></li>
                    <li><a href="/html/Publicaciones/publicaciones.html">Publicaciones</a></li>
                    <li><a href="/html/Regala arte/regala.html">Regala Arte</a></li>
                    <li><a href="/html/Colaboradores/colaboradores.html">Nuestro equipo</a></li>
                </ul>
              </div>
            </div>
        </nav>
        </header>
        `;
      }
    }

customElements.define('my-navbar', Header);