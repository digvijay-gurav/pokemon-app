export interface basicParams {
    limit: number,
    offset: number
}

export interface pokemResult {
    name: string,
    url: string
}

export interface pokemonList {
    count: number,
    next: null | string,
    previous: null | string,
    results: Array<pokemResult>
}
export interface RootState {
    events: any,
    pokemon: any,
    IsFavourite: any
}
export interface pokemonObj {
    name: string,
    url: string
    isFavourite: boolean
}
export interface ability {
    name: string,
    url: string
}
export interface abilities {
    ability: ability,
    is_hidden: boolean,
    slot: number
}