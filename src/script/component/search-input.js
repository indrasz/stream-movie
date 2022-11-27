class SearchInput extends HTMLElement {
    
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML =
        `
        <div class="search-bar flex-fill">
        <input
          class="form-control"
          type="text"
          placeholder="Search shoes"
          name="searchBar" 
          id="searchBar"
        />
      </div>
        `;
    }
}

customElements.define("search-input", SearchInput);