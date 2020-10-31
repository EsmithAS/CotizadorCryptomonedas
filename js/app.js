'use strict'; // Programación estricta

// Variables e Instancias Globales
const api = new API('be41d0700c223022d7b31d6b452c395d8411043d0f35180142b2e3cb4c7be34b');
const ui = new Interfaz();
const qs = document.querySelector.bind(document);


(()=>{
    
    // Events
    
    qs('#formulario').addEventListener( 'submit' , cotizarCripto );



    // Function

    function cotizarCripto ( e ) {

        e.preventDefault();

        const monedaSelect = qs('#moneda').options[qs('#moneda').selectedIndex].value;
        const criptmonedaSelect = qs('#criptomoneda').options[qs('#criptomoneda').selectedIndex].value;

        if ( monedaSelect === '' || criptmonedaSelect === '' ){

            ui.mostrarMensaje( 'Todos los campos son obligatorios' , 'alert bg-danger' )

        }else{
            
            api.obtenerValores( monedaSelect , criptmonedaSelect )
                .then( data =>{
                    
                    ui.mostrarResultado( data.json.RAW , monedaSelect , criptmonedaSelect );
                    

                } )

        }

    }


})();