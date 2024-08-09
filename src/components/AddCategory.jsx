import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {


    //cada compoenne puede tener sus porpios estados
    // vamos a menajr el estado del input
    const [inputValue, setInputValue] = useState('');

    //funcion para manejar el input 
    const onInputChange = ({ target }) => {
        //basicamente la fucnion recive un changeEvent de htnl
        // y vamos actualizando el input con el event target con dees
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        //funcion para manejar el refresh del navegador
        event.preventDefault();
        //manear el state
        //tarea agregar la nueva categoria exsrita en el input
        //validaciones para cuando no se escriba nada y no se repita un valor 
        if (inputValue.trim().length <= 1 ) return;   
        
        //voya emiotir mi nueva categoria con las validacione respectivas 
        onNewCategory(inputValue.trim());

        //resetar nuestro input
        setInputValue('');
        
    }
    
    return (
        <form onSubmit={ event=>onSubmit(event) }>
            <input
                type="text"
                placeholder="Buscar GIF"
                value={inputValue}

                //no va a dejar manejar el input por que 
                //react lo redibuja de esa manera
                //para ello utilizamos
                onChange={onInputChange}
            />
        </form>
    )
}
