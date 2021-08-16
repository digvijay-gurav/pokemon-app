import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import "./detailedView.css";
import { abilities } from "../../types/interfaces";

const DetailedViewModal: React.FC<{handleClose: Function, open: boolean, data: any}> = ({handleClose , open, data}) => {

    function  getAbilities() {
        if(data && data.abilities && data.abilities.length > 0) {
            const abilities = (data.abilities as any[]).map((ability: abilities, index: number) => {
                return (
                    <div className="abilitiesDetails" key={index}>
                        {ability.ability.name}
                    </div>
                );
            });
            return abilities;
        } else {
            return 'No Abilities';
        }
        
    }
    function displayEventDetailsMainInfo() {
        const pokeMonDetails = <div className="detailedViewMain">
            <div className="modalHeader">
                <h2>{data.name}</h2>
                <span onClick={handleClose()}>X</span>
            </div>
            <div className="physicalDetails">
                <div className="heightDetails">
                    <span>Height:</span>
                    <span>{data.height}</span>
                </div>
                <div className="weightDetails">
                    <span>Weight:</span>
                    <span>{data.weight}</span>
                </div>
            </div>
            <div className="pokemonAbilities">
                <span>Abilities</span>
                <div className="abilitiesRow">
                    {getAbilities()}
                </div>
            </div>
        </div>

        return pokeMonDetails;
    }
    return (
        <Dialog onClose={handleClose()} aria-labelledby="open detailed view" open={open}>
            <div className="eventDetailsMainWrapper">
                <div>
                    {displayEventDetailsMainInfo()}
                </div>
            </div>
        </Dialog>
    )
}
export default DetailedViewModal;