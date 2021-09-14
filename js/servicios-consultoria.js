class ServicesCon extends HTMLElement {
    constructor() {
      super();
    }
    
    connectedCallback() {
        this.innerHTML = `
        <style>          
            .other-services {
                width: 93%;
                margin: 0 auto;
            }
            .other-services h2 {
                font-size: 2.4rem;
                margin: 20px auto;
            }
            .other-services__container {
                width: 100%;
                display: -ms-grid;
                display: grid;
                margin-bottom: 50px;
                -ms-grid-rows: auto 5px auto 5px auto;
                -ms-grid-columns: 170px 5px 170px;
                    grid-template: repeat(3, auto)/repeat(2, 170px);
                gap: 5px;
                justify-items: center;
                -webkit-box-pack: center;
                    -ms-flex-pack: center;
                        justify-content: center;
                font-family: "Prata", serif;
            }
            .other-services__container .other {
                position: relative;
                text-align: center;
            }
            .other-services__container .other a {
                text-decoration: none;
                color: #29292E;
            }
            .other-services__container .other img {
                height: 130px;
                min-height: 110px;
                width: 165px;
                min-width: 150px;
                -o-object-fit: cover;
                object-fit: cover;
                -o-object-position: top;
                object-position: top;
            }
            .other-services__container .other__text {
                width: 80%;
                padding: 5px;
                z-index: 999;
                position: absolute;
                bottom: 10%;
                right: 10%;
                background-color: #BC9428;
                line-height: 1.7rem;
            } 
        </style>

        <section class="other-services">
            <h2>Nuestros Servicios</h2>
            <div class="other-services__container">
                <div class="other">
                    <a href="asesoria.html"> 
                        <img src="../../images/consultoria de arte/asesoria.jpg" alt="">
                        <div class="other__text">
                            Asesoría en compraventa 
                        </div>
                    </a>   
                </div>
                <div class="other">
                    <a href="inventariado.html">
                        <img src="../../images/consultoria de arte/inventariado.jpg" alt="">
                        <div class="other__text">
                            Inventariado y catalogación 
                        </div>
                    </a>  
                </div>
                <div class="other">
                    <a href="tasacion.html">
                        <img src="../../images/consultoria de arte/tasacion.jpg" alt="">
                        <div class="other__text">
                            Tasación y peritaje de obras de arte
                        </div>
                    </a>    
                </div>
                <div class="other">
                    <a href="asesoramiento.html">
                        <img src="../../images/consultoria de arte/asesoramiento.jpg" alt="">
                        <div class="other__text">
                            Asesoramiento legal y fiscal
                        </div>
                    </a> 
                </div>
                <div class="other">
                    <a href="gestion.html">
                        <img src="../../images/consultoria de arte/gestion.jpg" alt="">
                        <div class="other__text">
                            Gestión de colecciones
                        </div>
                    </a> 
                </div> 
                <div class="other">
                    <a href="">
                        <img src="../../images/consultoria de arte/montaje.jpg" alt="">
                        <div class="other__text">
                            Montaje, iluminación, embalaje
                        </div>
                    </a>  
                </div>
            </div>
        </section>
        `;
      }
    }

customElements.define('servicios-consultoria', ServicesCon);