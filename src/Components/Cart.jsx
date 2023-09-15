import Singlecart from "./singlecart";



const Cart = ({allcards}) => {
    
    console.log(allcards)
    
   
    return (
        
            <div>
                <h1>all card: {allcards.length}</h1>
                {
                    allcards.map(card=><Singlecart cartname={card}></Singlecart>)
                }
            </div>
            
            
             
        
    );
};

export default Cart;