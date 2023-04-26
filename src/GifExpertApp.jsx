import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


// export const GifExpertApp = () => {

//     const [categories, setCategories] = useState(['Demon Slayer', 'Chainsaw Man']);
//     // sin el on porque aca no se realizada ninguna actividad
//     const onAddCategory = (newCategory) => {
//         // console.log(newCategory)
//         const ComparaCategorias = (category) => { return category.toLowerCase() === newCategory.toLowerCase() }; //me pasa a minsucula ambas cadenas y luego comparara si estas se repiten

//         if (!categories.findIndex(ComparaCategorias)) { return }; //el resultado que me devulva
//         setCategories([newCategory.charAt(0).toUpperCase() + newCategory.slice(1), ...categories])
//     }

//     return (
//         <>
//             {/* titulo */}
//             <h1>GifExpertApp</h1>

//             {/* input */}

//             <AddCategory
//                 // setCategories={setCategories} esto se puede mejorar sin tener que mandarle nada desde el padre al hijo
//                 onNewCategory={onAddCategory}
//             />

//             {/* Listado de Gif */}
//             {/* <button onClick={onAddCategory}>Agregar Categorias</button> */}
//             <ol>
//                 {/*                 funcion de js que con map recolecta todos los datos del state */}
//                 {
//                     categories.map( (category) => (
//                         <GifGrid 
//                             key={category} 
//                             category={category}
//                         />
//                         // dato: la key es unica y puede tener cualquier nombre lo que llamamos dentro de los <> {esto} </> eso si es lo que llamamos desde la funcion flecha
//                     ))
//                 }
//             </ol>
//         </>
//     )
// }

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Demon Slayer']);
    const onAddCategory = (newCategory) => {
        const ComparaCategorias = (category) => { return category.toLowerCase() === newCategory.toLowerCase() };
        if (!categories.findIndex(ComparaCategorias)) { return };
        setCategories([newCategory.charAt(0).toUpperCase() + newCategory.slice(1), ...categories])
    }

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory
                onNewCategory={onAddCategory}
            />

            {/* Listado de Gif */}
            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}
