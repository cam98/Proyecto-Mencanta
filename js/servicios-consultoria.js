class ServicesCon extends HTMLElement {
    constructor() {
      super();
    }
    
    connectedCallback() {
        this.innerHTML = `
        <head>
         <link rel="stylesheet" href="/css/mencanta-styles.css">
        </head>
        <section class="other-services">
            <h2>Nuestros Servicios</h2>
            <div class="other-services__container">
                <div class="other">
                    <a href="asesoria.html"> 
                        <img src="../../images/consultoria de arte/asesoria.jpg" alt="">
                        <div class="other__text">
                            <p>Asesoría en compraventa</p> 
                        </div>
                    </a>   
                </div>
                <div class="other">
                    <a href="inventariado.html">
                        <img src="../../images/consultoria de arte/inventariado.jpg" alt="">
                        <div class="other__text">
                            <p>Inventariado y catalogación</p>
                        </div>
                    </a>  
                </div>
                <div class="other">
                    <a href="tasacion.html">
                        <img src="../../images/consultoria de arte/tasacion.jpg" alt="">
                        <div class="other__text">
                            <p>Tasación y peritaje de obras de arte</p>
                        </div>
                    </a>    
                </div>
                <div class="other">
                    <a href="asesoramiento.html">
                        <img src="../../images/consultoria de arte/asesoramiento.jpg" alt="">
                        <div class="other__text">
                            <p>Asesoramiento legal y fiscal</p>
                        </div>
                    </a> 
                </div>
                <div class="other">
                    <a href="gestion.html">
                        <img src="../../images/consultoria de arte/gestion.jpg" alt="">
                        <div class="other__text">
                            <p>Gestión de colecciones</p>
                        </div>
                    </a> 
                </div> 
                <div class="other">
                    <a href="montaje.html">
                        <img src="../../images/consultoria de arte/montaje.jpg" alt="">
                        <div class="other__text">
                            <p>Montaje, iluminación, embalaje</p>
                        </div>
                    </a>  
                </div>
            </div>
        </section>
        `;
      }
    }

customElements.define('servicios-consultoria', ServicesCon);