import {FaBookOpen,FaDollarSign} from 'react-icons/fa';

const Card = ({carddata,handleaddcard}) => {
   
    const{image,title,title_description,price,credit} = carddata;
    return (
        <div >
          <div className="card w-80 h-full bg-base-100 shadow-xl">
  
    <img src={image} alt="" className="rounded-xl" />
  
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p>{title_description}</p>
    <div className='flex gap-5 items-center '>
    <FaDollarSign></FaDollarSign><p> Price:{price}</p>
        <FaBookOpen></FaBookOpen> <p> Credit: {credit}</p>
    </div>
    <div className="card-actions">
      <button onClick={()=>handleaddcard(carddata)} className="btn btn-primary">Select</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;