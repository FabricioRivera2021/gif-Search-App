import { render, screen, fireEvent, computeHeadingLevel } from "@testing-library/react";
import { GifSearchApp } from "../src/GifSearchApp";


describe('Pruebas en GifSearchApp', () => {

    const inputValue = 'One Punch';

    test('Deberia agregar mas de una categoria', () => {
        //Renderizamos el sujeto de pruebas y obtenemos el contenedor
        const { contenedor } = render(<GifSearchApp />)
        
        //obtener el input y el form
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        //disparar los eventos para añadir las categorias
        fireEvent.input( input, {target: { value: inputValue}});
        fireEvent.submit( form );
        
        fireEvent.input( input, {target: { value: inputValue + '2'}});
        fireEvent.submit( form );

        // expect(<GifSearchApp />).toHavebeenCalled()
        const headings = screen.getAllByRole('heading', { level: 3 })
        console.log(headings[0]);
        //Utilizamos el container para saber si se agregaron las 2 categorias
        // expect()
        screen.debug()
    });
});