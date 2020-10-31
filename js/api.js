class API {

    constructor ( key ){
    
        this.key = key;
    
    }

    async obtenerDatos (){

        const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.key}`;
        const datos = await fetch( url );
        const json = await datos.json();

        return {
            json
        }
        
    }

    async obtenerValores ( moneda , crypto ) {

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${moneda}&api_key=${this.key}`;
        const datos = await fetch( url );
        const json = await datos.json();

        return {
            json
        }

    }

}