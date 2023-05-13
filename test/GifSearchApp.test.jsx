import { render, screen, fireEvent } from "@testing-library/react";
import { GifSearchApp } from "../src/GifSearchApp";


describe('Pruebas en GifSearchApp', () => {

    const inputValue = 'One Punch';
    const inputValue2 = 'One Punch 2';

    test('Deberia agregar mas de una categoria', () => {
        //Renderizamos el sujeto de pruebas y obtenemos el contenedor
        render(<GifSearchApp />)
        
        //obtener el input y el form
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        //disparar los eventos para añadir las categorias
        fireEvent.input( input, {target: { value: inputValue}});
        fireEvent.submit( form );

        fireEvent.input( input, {target: { value: inputValue2}});
        fireEvent.submit( form );

        expect(screen.getAllByRole('heading', {level: 3})).toHaveLength(2);
    });

    test('No Deberia dejar agregar una cat si esta repetida', () => {
        //Renderizamos el sujeto de pruebas y obtenemos el contenedor
        render(<GifSearchApp />)
        
        //obtener el input y el form
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        //disparar los eventos para añadir las categorias
        fireEvent.input( input, {target: { value: inputValue}});
        fireEvent.submit( form );

        fireEvent.input( input, {target: { value: inputValue}});
        fireEvent.submit( form );

        expect(screen.getAllByRole('heading', {level: 3})).toHaveLength(1);
    });
});