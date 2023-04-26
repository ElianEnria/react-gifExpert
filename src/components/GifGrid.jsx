import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs (category);
    // console.log({isLoading})

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && ( <h2>Cargando...</h2> ) 
            }
            <div className="card-grid">

                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            title={image.title}//de esta manera solo recortamos lo props que queremos
                            url={image.url}
                        // {...image} 
                        /*
                            otra forma es con spray es para recibir todas las propiedades como propierties
                            {...image}
                        */
                        />
                    ))
                }

            </div>


        </>
    )
}


