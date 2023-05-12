import {fireEvent, render, screen} from '@testing-library/react';
import { GifGridItem} from '../../src/components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {     
    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';
    test('Deve de hacer match con el snapshot', () => { 
        const {container} = render(<GifGridItem title={title} url={url} />)
        expect(container).toMatchSnapshot();
     })

     test('Debe de mostrar la imagen con el rul y el alt indicado', () => {
        render(<GifGridItem title={title} url={url} />)
        //screen.debug()
        expect(screen.getByRole('img').src).toBe(url)
        expect(screen.getByRole('img').alt).toBe(title)
    });
    
    test('Debe de mostrar el titulo en el componente', () => {
         render(<GifGridItem title={title} url={url} />)
         expect(screen.getByText(title)).toBeTruthy()
     });
 })