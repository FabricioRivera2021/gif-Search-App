import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from "../../src/hooks/useFetchGifs";


describe('Pruebas en el custom hook UseFetchGifs', () => {
    test('Debe de regresar el estado inicial', () => {
        //const { images, isLoading } = useFetchGifs();

        const { result } = renderHook( () => useFetchGifs('One Punch'));
        //console.log(result); -> {current: {images: [], isLoading: true} }
        const { images, isLoading } = result.current;
        //console.log(images); -> []
        //console.log(isLoading); -> true
        
        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
    });
    
    test('Debe de retornar un arreglo de imagenes y el isLoading en false', async() => {

        const { result } = renderHook( () => useFetchGifs('One Punch'));
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
            {timeout: 3000}
        )

        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();

    });
});