class Header extends HTMLElement {
    constructor() {
      super();
    }
    
    connectedCallback() {
        this.innerHTML = `
        <head>
        <link rel="shortcut icon" type="image/x-icon" href="/images/main/logo.png">
         <link rel="stylesheet" href="/css/mencanta-styles.css">
         <link href="dist/hamburgers.css" rel="stylesheet">
         
        </head>
        <header>
        <nav>
            <div class="navbar">
              <button class="hamburger hamburger--collapse" type="button">
                <span class="hamburger-box">
                  <span class="hamburger-inner"></span>
                </span>
              </button>

              <div class="navbar__logo">
                <a href="/index.html">
                    <img src="/images/main/logo-letras.png" alt="">
                </a>
              </div>

              <div class="navbar__services">
                <ul class="services__menu">
                    <li class="menu-item"><a class="sub-btn" href="#">Consultoría de Arte <span class="iconify" data-icon="akar-icons:chevron-down"></span></a>
                      <ul class="sub-menu">
                        <li class="sub-item"><a class="item-link" href="/html/Consultoria de Arte/asesoria.html">Asesoría en compraventa</a></li>
                        <li class="sub-item"><a class="item-link" href="/html/Consultoria de Arte/inventariado.html">Inventariado y catalogación</a></li>
                        <li class="sub-item"><a class="item-link" href="/html/Consultoria de Arte/tasacion.html">Tasación y peritaje de obras de arte</a></li>
                        <li class="sub-item"><a class="item-link" href="/html/Consultoria de Arte/asesoramiento.html">Asesoramiento legal y fiscal</a></li>
                        <li class="sub-item"><a class="item-link" href="/html/Consultoria de Arte/gestion.html">Gestión de colecciones</a></li>
                        <li class="sub-item"><a class="item-link" href="/html/Consultoria de Arte/montaje.html">Montaje, iluminación, embalaje</a></li>
                      </ul>
                    </li>

                    <!-- <li><a href="">Representación de Artistas</a></li> -->
                    <li class="menu-item"><a href="/html/Galeria/galeria.html">Galería</a></li>

                    <li class="menu-item"><a class="sub-btn" href="#">Agencia cultural <span class="iconify" data-icon="akar-icons:chevron-down"></span></a>
                      <ul class="sub-menu">
                          <li class="sub-item"><a class="item-link" href="/html/Agencia Cultural/proyecto1.html">Proyectos Artísticos</a></li>
                          <li class="sub-item"><a class="item-link" href="/html/Agencia Cultural/proyecto2.html">Proyecto ¡Que el Arte esté en todas partes!</a></li>
                        </ul>
                    </li>

                    <li class="menu-item"><a class="sub-btn" href="#">Publicaciones <span class="iconify" data-icon="akar-icons:chevron-down"></span></a>
                    <ul class="sub-menu">
                          <li class="sub-item"><a class="item-link" href="/html/Publicaciones/podcast.html">Podcast</a></li>
                          <li class="sub-item"><a class="item-link" href="/html/Publicaciones/blog.html">Blog</a></li>
                        </ul>
                  </li>

                    <li class="menu-item"><a href="/html/Regala arte/regala.html">Regala Arte</a></li>

                    <li class="menu-item"><a href="/html/Colaboradores/colaboradores.html">Nuestro equipo</a></li>
                </ul>
              </div>
            </div>
        </nav>
        </header>
        `;
      }
    }

customElements.define('my-navbar', Header);