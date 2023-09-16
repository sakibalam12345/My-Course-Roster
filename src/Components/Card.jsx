import {FaBookOpen,FaDollarSign} from 'react-icons/fa';

const Card = ({carddata,handleaddcard}) => {
   
    const{image,title,title_description,price,credit,id} = carddata;
    return (
        <div >
          <div className="card w-80 h-full bg-base-100 shadow-xl">
  
    <img src={image} alt="" className="rounded-xl" />
  
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p>{title_description}</p>
    <div className='flex gap-2 items-center '>
    <FaDollarSign></FaDollarSign><p>Price:{price}</p>
        <FaBookOpen></FaBookOpen><p>Credit:{credit}hr</p>
    </div>
    <div className="card-actions">
      <button  onClick={()=>handleaddcard(carddata,id,credit)} className="btn btn-primary">Select</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;