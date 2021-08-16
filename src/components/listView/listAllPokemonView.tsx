import React, { useState } from 'react';
import {useSelector} from "react-redux";
import { RootState, pokemonObj } from '../../types/interfaces';
import "./listView.css";
import DetailedViewModal from "../detailedView/detailedViewModal";
import { useDispatch } from "react-redux";
import { UpdateEventsData } from '../../actions';

const ListAllPokemonView:React.FC<{fetchPokemonData: Function}> = ({fetchPokemonData}) => {
    const events = useSelector((state: RootState) => state.events);
    const selectedPokemon = useSelector((state: RootState) => state.pokemon);
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
    setOpen(false);
    };

    function showEventDetails(pokemon: string) {
        fetchPokemonData(pokemon)
        handleClickOpen();
    }

    function toggleFavourite(pokemon: pokemonObj) {
        dispatch(UpdateEventsData( pokemon));
    }

    function displayPokemonList() {
        const displayAllPokemons = events?.results;
        if(displayAllPokemons && displayAllPokemons.length > 0) {
            const pokemonListHeader = <div className="pokemonListHeader">
                <div className="pokemonName">Pokemon Name</div>
                <div className="isFavourit">Mark favourite</div>
            </div>
            let allList = (displayAllPokemons as any[]).map((pokemonItem: pokemonObj, index: number) => {
                return (
                    <div className="pokemonListBody" key={index}>
                        <div className="pokemonNameWrapper" onClick={()=>{showEventDetails(pokemonItem.name)}}>
                            <div className="pokemonName">{pokemonItem.name}</div>
                        </div>
                        <div className="isFavouriteCheck">
                            <span onClick={()=>toggleFavourite(pokemonItem)} className={pokemonItem.isFavourite ? 'isFavourite' : 'notFavourite'}>{pokemonItem.isFavourite ? 'Favourite' : 'Not Favourite'}</span>
                        </div>
                    </div>
                )
            })
            const displayEventRow = <div className="eventContainer">
                <div className="listHeadSection">{pokemonListHeader}</div><div className="listBodySection">{allList}</div></div>;
            return displayEventRow;
        } else {
            return <div className="nodata">No Pokemons</div>;
        }
    }

    return(
        <div className="mainListView">
            <h1>Pokemon List</h1>

            <div className="pokemonList">
                {displayPokemonList()}
            </div>
            <DetailedViewModal handleClose={()=>handleClose} open={open} data={selectedPokemon} />
        </div>
    )
}

export default ListAllPokemonView;