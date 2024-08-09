import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

//componente para mostrar los gifs 
export const GifGrid = ({ category }) => {
  
    //cusatomHook
    //para resumir todod el codigo que teniamos aqui en un hook
    //y poder llamar donde queramos Faciles de leer y faciles de mantener 
    //DRY dont repeat yourself
    const {images,isLoading} = useFetchGifs(category);
    console.log(isLoading);

    return (
        <>
            <h3>{category}</h3>
            {
                // el () significa qun retorn implicito\
                //null no se renderiza en react
                // isLoading ? ( <h4>Cargando...</h4> ) :  ( null )
                //tambien puedo utiolizar && que es un fi corto de una condicion
                //and logico
                isLoading && ( <h4>Cargando...</h4> ) 
            }
            <div className="card-grid">
               {
                images.map((gif)=>(
                    <GifItem
                       key={gif.id}
                       {...gif }
                        // otra manera de marnar las props 
                        // es utilizando el operador spread
                        // que nos permite en caso de etener 
                        // 100 props mandarlo todo y recibir en nuestro componente todo
                    />
                ))
               }
            </div>
        </>
    )
}
