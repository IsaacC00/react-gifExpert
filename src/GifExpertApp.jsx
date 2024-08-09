import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  // const apiKey = 'nmvFdEJE8rOinAMtIhaiQAbLHYKNfX88';
  // const respuesta = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
  //vamos a menjar un estados para poder tener nuestros gif en una pagina y al momneto de llamarlos se actaulize la pagina
  const [categories, setCategories] = useState(['Jujutsu Kaisen', 'Horimiya']);
  //consejo no podemos meter un state en una condicion pare evaluar el state 
  console.log(categories);

  //tarea ; agregar una nueva categoria al state
  const onAddCategory = (newCategory) => {

    //podemos hacer la validacion aca para que no se repita 
    //utilizamos el metodo includes para ver si mi arreglo ya tiene ese valor 
    // y me salgo de la funcion
    if (categories.includes(newCategory)) return;
    setCategories([newCategory,...categories]);
    //otra manera sria utilizando un callback 
  };

  return (
    <>
      {/* TITULO */}
      <h1>GifExpertApp</h1>

      {/* INPUT  COMUNICACION ENTRE COMPONENTES Agrego un props a mi compoenete 
            y envio la funcion para manejar la categoria 
            enviamos el props no lo que contengo el prop PERO esto 
            siguiendo los lineamientos de solid o clena code 
            debebemos hacer que nuestro componente hijo nos devuelva 
            el nuevo valor con las validacione pertinenetes para que
            en GifExpert podamos agregar la nueva categoria 
            */}
      <AddCategory onNewCategory={onAddCategory} />
      {/* LISTADOS GIF */}

      {/* cuando utilizamos map react automaticcamente 
      nos pide trabajar con key para no perder el rastro 
      de los valores, en la etiqueta key 
      Ademas no podemos utilizar el indice para que react no actue de 
      una forma no deseada
       */}
      {categories.map( (category) => (
        <GifGrid
          key={category}
          category={category}
        />
      ))
      }
      {/* GIF ITEM */}
    </>
  )
}
