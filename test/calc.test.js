import { describe, it, expect } from 'vitest';
import { suma, resta, multiplicacion, division } from '../src/calc.js';

describe('Calculadora', () => {

    it('debe sumar dos números', () => {
        expect(suma(2, 3)).toBe(5);
    });

    it('debe restar dos números', () => {
        expect(resta(5, 3)).toBe(2);
    });

    it('debe multiplicar dos números', () => {
        expect(multiplicacion(2, 3)).toBe(6);
    });

    it('debe dividir dos números', () => {
        expect(division(6, 2)).toBe(3);
    });

});