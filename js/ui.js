class Interfaz {

    constructor (){
        this.init(); // Ejecutar metodo durante la instancia del objeto
    }

    init () {

        this.crearSelect();

    }

    crearSelect () {

        api.obtenerDatos()
            .then( monedas => {
                
                const data = Object.entries( monedas.json.Data ); // Convertimos objeto en un iterable 
                const select = qs('#criptomoneda');


                for ( const [ key , value ] of data ){
                    
                    const option = document.createElement( 'option' );
                    option.value = value.Symbol;
                    option.appendChild( document.createTextNode( value.CoinName ) );
                    select.appendChild( option );
                    
                }
                
            })

    }

    mostrarMensaje ( mensaje , clases ) {

        // Crear elemento
        const div = document.createElement('div');
        div.className = clases;
        div.setAttribute('id','alert');
        div.appendChild( document.createTextNode( mensaje ) );

        if ( !document.querySelector('#alert') ){

            // Instancia a div padre
            const divMensaje = qs('.mensajes');
            divMensaje.appendChild( div );

            // Temporizador de mensaje
            setTimeout( () => {

                divMensaje.innerHTML = '';
    
            } , 3000 );
            

        }
        

    }

    mostrarResultado ( obj , moneda , crypto ) {

        qs('#resultado').innerHTML = '';

        const data = obj[crypto][moneda];
        const precio = data.PRICE.toFixed(2),
              porcentaje = data.CHANGEPCTDAY.toFixed(2),
              actualizado = new Date(data.LASTUPDATE * 1000).toLocaleDateString('es-PE');
        
        const template = `
            <div class="card bg-warning">
                <div class="card-body text-light">
                    <h2 class="card-title">Resultado:</h2>
                    <p>El precio de ${data.FROMSYMBOL} a moneda ${data.TOSYMBOL} es de : $ ${precio} </p>
                    <p>Variación de último día : % ${porcentaje}</p>
                    <p>Última actualización : ${actualizado}</p>
                <div>
            <div>
        `;

        this.mostrarSpinner('block');

        setTimeout( () => {

            this.mostrarSpinner('none');
            qs('#resultado').innerHTML = template;

        } , 3000 )
        

    }

    mostrarSpinner (display) {

        const spinner = qs('.contenido-spinner');
        spinner.style.display = display ;

    }


}