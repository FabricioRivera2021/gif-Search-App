import {fireEvent, render, screen} from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
    test('Debe de cambiar el valor de la caja de texto', () => {

        render(<AddCategory onNewCategory={()=>{}}/>)
        /* en el test primero se captura el input del textbox de 
        donde va a salir el valor de la categoria */
        const input = screen.getByRole('textbox')
        /* y luego se dispara un evento */
        fireEvent.input(input, {target:{value:'Saitama'}})
        expect(input.value).toBe('Saitama')
    })

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {
        
        const inputValue = 'Saitama';
        /* nuevas magias */
        /* Funcion especial: es una funcion de simulacion (mock function) */
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory }/>)
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form'); //se arregla añadiendo aria-label al form

        //disparar el evento
        fireEvent.input(input, {target: {value:inputValue}})
        fireEvent.submit(form)
        // screen.debug();
        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();//evalua que se llame la funcion
        expect(onNewCategory).toHaveBeenCalledTimes(1);//la funcion se llama 1 vez
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);//que halla sido llamada con el valor de la caja de texto

    });

    test('No debe de llamar al onNewCategory si el input esta vacio', () => {
        
        const onNewCategory = jest.fn()
        render(<AddCategory onNewCategory={onNewCategory}/>)

        const form = screen.getByRole('form')
        fireEvent.submit(form)

        expect(onNewCategory).toHaveBeenCalledTimes(0)//se espera que la funcion halla sido llamada 0 veces
        expect(onNewCategory).not.toHaveBeenCalled()//se espera que la funcion NO sea llamada
        
    });
 })