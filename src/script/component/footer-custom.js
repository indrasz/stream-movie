class FooterCustom extends HTMLElement {
    
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML =
        `
        <div class="d-flex justify-content-center">
          <p>©2022 Stream Movie. All rights reserved.</p>
        </div>
        `;
    }
}

customElements.define("footer-custom", FooterCustom);