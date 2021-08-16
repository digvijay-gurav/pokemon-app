import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { getAllPokemonsList, getSelectedPokemonData } from '../../services/pokemonServices';
import { basicParams, pokemonObj } from '../../types/interfaces';
import { setEventsData, setPokemonData } from '../../actions';
import ListAllPokemonView from './listAllPokemonView';
import Pagination from '../pagination';

function ListMainComponent() {

    const limit = 50;
    const offSet = 0;
    const [currentPage, setCurrentPage] = useState(1);
    const [pagination, setPagination] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        const paramObj = {
            "limit": limit,
            "offset": offSet
        }
        fetchAllData(paramObj);
    },)

    function fetchAllData(paramsObj: basicParams){
        getAllPokemonsList(paramsObj).then(resp => {
            resp.data.results.map((obj: pokemonObj)=> {
                return obj.isFavourite = false;
            })
            dispatch(setEventsData(resp.data));
            setPagination(resp.data.count);
        }).catch(err => console.log("all pokemon list error: ", err));
    }

    function fetchPokemonData(pokemonName: string){
        getSelectedPokemonData(pokemonName).then(resp => {
            dispatch(setPokemonData(resp.data));
        }).catch(err => console.log("my pokemon error: ", err));
    }

    return (
        <div>
            <ListAllPokemonView fetchPokemonData={fetchPokemonData}></ListAllPokemonView>
            <Pagination pagination={pagination} currentPage={currentPage} setCurrentPage={setCurrentPage} fetchAllData={fetchAllData}></Pagination>
        </div>
    )
}

export default ListMainComponent;
