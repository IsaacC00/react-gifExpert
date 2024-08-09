import { useEffect } from "react";
import { useState } from "react";
import { getGifs } from "../helpers/getGifs";

// si el hook regresa un comopoentne debe ser jsx qur tambien es permitido
//como funcionana los hooks o que son 
//los hooks son funcione que retornar algo 

export const useFetchGifs = (category) => {

    //state para actualizar las imagenes cada que llamo una nueva cateogria
    const [images, setImages] = useState([]);
    //agregamos un state para indicar si esta cargando y cuando para de cargar las imagenes
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const gifs = await getGifs(category);
        //llamos esta funcion para actualizar los gis en mi GifGrid
        setImages(gifs);
        //
        setIsLoading(false);
    }

    //useEffect que es: es un hook de react que sirve para disparar efectos secundarios
    //efectos secundarios: cuando pase algo: cuando el contenido cambie, cuando se redenrize el comoponete 

    //recibe un callback y una dependecia = [] como sintaxis
    useEffect(
        () => { getImages(); },
        [/**se ejecutara solo una vez por que esta vacio*/]
    );

    return {
        //tambien se puede llamar solo las imagenes
        images,
        isLoading,
    }
}