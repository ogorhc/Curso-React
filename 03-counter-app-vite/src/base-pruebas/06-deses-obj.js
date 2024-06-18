
// const { edad, clave, nombre, } = persona;

export const usContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {


    // console.log( nombre, edad, rango );
    
    return {
        nombreClave: clave,
        anios: edad,
        nombre, 
        rango,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }

}
