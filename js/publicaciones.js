class ServicesPubli extends HTMLElement {
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
                    <a href="podcast.html"> 
                        <img  src="/images/publicaciones/podcast.jpg" alt="">
                        <div class="other__text">
                            <p>Podcast </p>
                        </div>
                    </a>   
                </div>
                <div class="other">
                    <a href="blog.html">
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

customElements.define('servicios-publi', ServicesPubli);