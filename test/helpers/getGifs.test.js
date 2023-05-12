import {fireEvent, render, screen} from '@testing-library/react';
import { getGifs } from '../../src/helpers/getGifs';

describe('Pruebas en getGifs()', () => {
    test('Debe de retornar un arreglo de gifs', async() => {
        
        const gifs = await getGifs('One Punch');
        // console.log(gifs);
        
        //sabemos con esto que esta regresando un arreglo mayor a 0
        expect(gifs.length).toBeGreaterThan(0) 
        //luego evaluamos la estructura que deben tener los gifs que se devuelven
        expect( gifs[0] ).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    });

 })