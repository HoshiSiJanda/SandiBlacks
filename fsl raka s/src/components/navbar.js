class NavbarComponent extends HTMLElement{

    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML =
       ` <nav class="fixed bg-green-700 text-white p-6 w-full flex justify-between">
       <h1 class="font-bold text-xl">Banduhng</h1>
       <div class="flex gap-5">
           <a href="#"> Home </a>
           <a href="#"> About </a>  
           <a href="#"> Gallery </a>
       </div>
   </nav> 
   `;

    }
}

customElements.define("navbar-component", NavbarComponent);