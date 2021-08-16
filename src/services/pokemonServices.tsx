import axios from "axios";
import { basicParams } from '../types/interfaces';

export const getAllPokemonsList = async(params: basicParams ) => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon', {params});
    return response;
}

export const getSelectedPokemonData = async(pokemonName: string ) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    return response;
}