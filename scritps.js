!function (){
    const resultadosPorPagina = 3;
    const contenedorResultados = document.querySelector("#contenedor-resultados");
    const flechaAlante = document.querySelector("#nextPage");
    const flechaAtras = document.querySelector("#pageBefore");
    let pagina = 1;

    flechaAlante.addEventListener("click", nextPage);
    flechaAtras.addEventListener("click", pageBefore);
    printPagina();

    function printPagina() {
        let inicio = (pagina-1)*resultadosPorPagina;
        let contactos = DATA.slice(inicio,inicio+resultadosPorPagina);
        console.log(contactos);
        contenedorResultados.innerHTML='';
        contactos.forEach(contacto =>{
            contenedorResultados.appendChild(contactosFormatted(contacto));
        });
    }

    function nextPage() {
        if(pagina < DATA.length/resultadosPorPagina) {
            pagina++;
            changePageAppearence();
            printPagina();
        }
    }
    function pageBefore() {
        if(pagina > 1) {
            pagina--;
            changePageAppearence();
            printPagina();
        }
    }

    function changePageAppearence(){
        if(pagina === DATA.length/resultadosPorPagina)
            flechaAlante.classList.remove("visible");
        else
            flechaAlante.classList.add("visible");
        if(pagina === 1)
            flechaAtras.classList.remove("visible");
        else
            flechaAtras.classList.add("visible");
        document.querySelector("#numeroPagina").innerHTML = pagina;
    }

    function contactosFormatted(contacto){
        let con = document.createElement('div');
        con.classList.add("contacto");
        con.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z"/></svg>';
        con.innerHTML += '<p class="nombre">'+contacto+'</p>';
        return con;
    }
}();