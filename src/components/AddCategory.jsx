import { useState } from "react"
// comunicacion de componentes recibimos el setCategories como un prom. recordar ver como hacer manejos de proms
export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onChange = ({ target }) => { // este target lo sacamos del onchange que esta en el input se puede usar event target y value
        setInputValue(target.value)
    }

    //envio y recepcion de los datos
    const onSubmit = (event) => {

        event.preventDefault(); // para hacer que la pagina no vuelva a 0
        // console.log(inputValue)
        
        const inputValueNew = inputValue.trim();

        if (inputValueNew.length <= 1) return;

        // comunicacion de componentes recibimos el setCategories como un prom en este caso agregar a la lista
        // setCategories((categories) => [inputValue, ...categories]);
        
        onNewCategory(inputValueNew)
        setInputValue('');
    }

    return (
        // (event) => onSubmit (event)
        <form onSubmit={onSubmit}>

            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onChange}
            /> {/* esto era asi antes onChange={ (event) => onChange(event) } */}

        </form>
    )
}
