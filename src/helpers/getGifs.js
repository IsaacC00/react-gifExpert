//peticion http para traer los gifs
    export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=nmvFdEJE8rOinAMtIhaiQAbLHYKNfX88&q=${category}&limit=20`
    const resp = await fetch(url);
    const { data } = await resp.json();
    // GraphQl me permite ai escojer los campo que yo quiero y
    //  no recibir toda la data que arroja mi peticion 
    const gifs = data.map(gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url,
    }));
    return gifs;
}
    //es una mala practica ejecutar funcione en los componentes
    //puesto que react deja un espacio en memoria cada vez que renderiza 
    //nuevamente mi componente por ello debemos separa la logica de nuestros componetes 

