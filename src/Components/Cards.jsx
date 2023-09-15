import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";


const Cards = ({handleaddcard}) => {
   
const [allcards, setallcards] =useState([])

useEffect(()=>{
    fetch('card.json')
    .then(res => res.json())
    .then( data => setallcards(data))
},[])

    return (
        <div>
            <div className="grid grid-cols-3 gap-5">
            {
                allcards.map(singlecard=><Card key={singlecard.id} carddata={singlecard}
                    handleaddcard={handleaddcard}></Card>)
            }
            </div>
           
        </div>
    );
};

export default Cards;