import {pokemonObj} from '../types/interfaces';

export const getEventsData = () => {
    return {
        type: "GETEVENTSDATA"
    }
}
export const setEventsData = (data: any) => {
    return {
        type: "SETEVENTSDATA",
        payload: data
    }
}
export const UpdateEventsData = ( pokemon: pokemonObj) => {
    return {
        type: "UPDATEEVENTSDATA",
        payload: pokemon
    }
}
export const getPokemonData = () => {
    return {
        type: 'GETPOKEMONDATA'
    }
}
export const setPokemonData = (data: any) => {
    return {
        type: 'SETPOKEMONDATA',
        payload: data
    }
}