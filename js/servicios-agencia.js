class ServicesAgen extends HTMLElement {
    constructor() {
      super();
    }
    
    connectedCallback() {
        this.innerHTML = `
        <head>
         <link rel="stylesheet" href="/css/mencanta-styles.css">
        </head>
        <section class="other-services">
            <div class="other-services__container--small">
                <div class="other">
                    <a href="proyecto1.html"> 
                        <img src="../../images/agencia cultural/proyecto1.jpg" alt="">
                        <div class="other__text">
                            <p>Proyectos artísticos </p>
                        </div>
                    </a>   
                </div>
                <div class="other">
                    <a href="proyecto2.html">
                        <img src="../../images/agencia cultural/proyecto2.jpg" alt="">
                        <div class="other__text">
                            <p> Proyecto <br><i>¡Que el Arte esté en todas partes!</i>
                        </div>
                    </a>  
                </div>
            </div>
        </section>
        `;
      }
    }

customElements.define('servicios-agencia', ServicesAgen);