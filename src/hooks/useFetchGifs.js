import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (categoria) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async() => {
        const newImg = await getGifs(categoria);
        setImages(newImg)
        setIsLoading(false)
    }

    useEffect(() => {
        getImages();
    }, [])

    return {
        images: images,
        isLoading: isLoading
    }
}
