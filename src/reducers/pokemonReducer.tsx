const PokemonReducer = (state = {}, action: any) => {
    switch(action.type) {
        case 'SETPOKEMONDATA':
            state = action.payload;
            return state;
        case 'GETPOKEMONDATA':
            return state;
        default:
            return state;
    }
}
export default PokemonReducer;