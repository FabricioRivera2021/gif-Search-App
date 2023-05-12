import { useState } from "react";
import PropTypes from 'prop-types'

                            /* aqui vienen las props, esto
                            seria lo mismo que poner
                            props.setCategorias */
export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    /* En el evento vienen muchas cosas, una de ellas es el target
    que seria donde se esta dando el evento, en este caso es en el input
    usando la desestructuracion se captura el "target" del evento, osea el input
    y luego se le pasa a la funcion del hook (setInputValue) el valor que
    se esta capturando para que lo cambie */
    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length < 1){
            console.log('error: el valor a ingresar esta vacio');
        }else{
            //cat ya tendria que venir desde la funcion que esta echa en GifSearchApp
            //Ahora directamente se llama a la funcion y solo se le pasa el valor
            //on new category NO es la funcion del hook, es la funcion que se pasa
            //por las props
            onNewCategory(inputValue.trim());
            setInputValue('');//para que se borre el input luego de ingresar 
        }
    }

    return (
        // <form onSubmit={(event) => onSubmit(event)}>
        <form onSubmit={onSubmit} aria-label="form">
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={ (event) => onInputChange(event) }
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}