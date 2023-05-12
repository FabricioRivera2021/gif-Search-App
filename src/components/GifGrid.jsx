
import { GifGridItem } from "./GifGridItem";

//import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";

import {PropTypes} from 'prop-types';

// import React from 'react'; no es necesario

/* Componente para crear los gifs que se van a estar trayendo desde la API */
export const GifGrid = ({categoria}) => {

    const { images, isLoading } = useFetchGifs( categoria );

    //sacamos la funcion de aqui y le pasamos la data como parametro
    //en este caso es one punch y dragon ball
    // getGifs(categoria);

        //codigo pasado al custom hook useFetchGrid
        // const [images, setImages] = useState([]);

        // const getImages = async() => {
        //     const newImg = await getGifs(categoria);
        //     setImages(newImg)
        // }

    /* use effect 
    se trata de como se manejan effectos secundarios que se disparan
    cuando se crea el componente... creo*/
        // useEffect(() => {
        //     getImages();
        // }, [])


    return (
        <>
            <h3>{categoria}</h3>
            {
                isLoading ? ( <h4>Cargando...</h4> ) : null 
            }
            <div className="card-grid">
                {images.map(el => 
                //<li key={el.id}>{el.title}</li>
                    <GifGridItem 
                        key={el.id}
                        title={el.title}
                        url={el.url} 
                        /*Otra forma seria con { ...el }
                        que nos devolveria todas las propiedades
                        de "el" que en este caso es la imagen */
                    />
                )}
            </div>
        </>
    )
}

GifGrid.propTypes = {
    categoria: PropTypes.string.isRequired,
}