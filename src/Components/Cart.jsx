import Singlecart from "./singlecart";



const Cart = ({allcards,count,remainingtime}) => {
    
    console.log(allcards)
    
   
    return (
        <>
        
     
            <div className="bg-slate-300 w-72 h-80 rounded-lg" >
               
                <h3 className="text-center text-blue-600 mt-5 mb-5">Credit Hour Remaining {remainingtime} hr</h3>
                <hr />
                <h1 className="text-sm font-extrabold text-center mt-2 mb-2">Course Name</h1>
                {
        allcards.map(card=><Singlecart cartname={card} ></Singlecart>)
                 }
                <hr />
                <h1 className="text-center">Total Credit Hour: {count}</h1>

            </div>
            
            </>
             
        
    );
};

export default Cart;