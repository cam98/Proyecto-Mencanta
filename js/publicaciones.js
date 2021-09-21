class Publicaciones extends HTMLElement {
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
                margin: 40px 0;
                display: flex;
                flex-direction: column;
                gap: 10px;
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
                height: 200px;
                width: 80%;
                max-width: 380px;
                -o-object-fit: cover;
                object-fit: cover;
                -o-object-position: top;
                object-position: top;
            }
            .other-services__container .other__text {
                width: 100%;
                margin: 0 auto;
                position: absolute;
                bottom: 10%;
            } 
            .other-services__container .other__text p {
                width: 40%;
                max-width: 180px;
                padding: 10px;
                margin: 0 auto;
                background-color: #BC9428;
                line-height: 1.7rem;
            }
        </style>

        <section class="other-services">
            <div class="other-services__container">
                <div class="other">
                    <a href="proyecto1.html"> 
                        <img src="../../images/publicaciones/podcast.jpg" alt="">
                        <div class="other__text">
                            <p>Podcast </p>
                        </div>
                    </a>   
                </div>
                <div class="other">
                    <a href="proyecto2.html">
                        <img src="../../images/publicaciones/blog.jpg" alt="">
                        <div class="other__text">
                            <p>Blog</p>
                        </div>
                    </a>  
                </div>
            </div>
        </section>
        `;
      }
    }

customElements.define('publicaciones', Publicaciones);