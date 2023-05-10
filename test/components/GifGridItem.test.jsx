import {fireEvent, render, screen} from '@testing-library/react';
import { GifGridItem} from '../../src/components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {     
    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';
    test('Deve de hacer match con el snapshot', () => { 
        const {container} = render(<GifGridItem title={title} url={url} />)
        expect(container).toMatchSnapshot();
     })

 })