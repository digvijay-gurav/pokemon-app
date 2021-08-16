import EventReducer from "./eventReducer";
import PokemonReducer from "./pokemonReducer";
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    events: EventReducer,
    pokemon: PokemonReducer
});

export default allReducers;