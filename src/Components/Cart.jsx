

const Cart = ({singlecard}) => {
    console.log(singlecard)
   
    return (
        <div className="bg-slate-400 w-72">
            <h1 className="text-blue-600 mb-2">Credit Hour Remaining 7 hr</h1>
            <hr />
            <h1 className="text-sm font-bold text-center mt-2">Course Name</h1>
            <div>
               {/* <h1>{title}</h1> */}
            </div>
        </div>
    );
};

export default Cart;