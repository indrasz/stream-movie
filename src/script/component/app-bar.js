class AppBar extends HTMLElement {
    
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML =
        `
        <div class="d-flex gap-3 align-items-center">
            <img
              src="https://www.w3schools.com/w3images/avatar2.png"
              alt="Photo Profile"
              class="photo-profile"
            />
            <div>
              <p class="title-content mb-2">Good Morning, Yeager</p>
              
            </div>
          </div>
        `;
    }
}

customElements.define("app-bar", AppBar);