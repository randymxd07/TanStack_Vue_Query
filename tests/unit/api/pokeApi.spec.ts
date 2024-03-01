import { describe, expect, test } from 'vitest';
import pokeApi from '../../../src/api/pokeApi';

describe('pokeApi', () => {

    /**--------------------------------
     ** SHOULD HAVE CORRECT BASE URL
    -----------------------------------*/
    test('should have correct baseURL', () => {
        expect(pokeApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/');
    });

    /**--------------------------------------
     ** SHOULD FETCH DATA FROM THE POKEAPI
    -----------------------------------------*/
    test('should fetch data from the PokeAPI', async () => {
        const response = await pokeApi.get('/pokemon/1');
        expect(response.status).toBe(200); // Assuming status 200 indicates success
        expect(response.data).toBeDefined(); // Assuming data is expected to be defined
    });

    /**--------------------------------------
     ** SHOULD FETCH DATA FROM THE POKEAPI
    -----------------------------------------*/
    test('should fetch data from the PokeAPI', async () => {
        const response = await pokeApi.get('/pokemon/151');
        expect(response.status).toBe(200);
        expect(response.data.name).toBe('mew');
    });

});