
import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards'
import Cart from './Components/Cart'
import Header from './Components/Header'

function App() {

 const [allcards,setallcards] = useState([]);
 const [count,setcount] = useState(0);

 const [remainingtime,setremainingtime] = useState(20);
 
 


  const handleaddcard = (cardname,id,credit) => {
    console.log(credit)
    const newcount = (count + credit);
    const newremainingtime = ( remainingtime - credit );
 

if (newcount > 20) {
  return alert('cant add more than 20')

}else if (allcards.find(item=> item.id === id)){
 return alert('u already added that item')
  
}
else {
  
  const newallcards = [...allcards,cardname];
  
  setallcards(newallcards);
  setremainingtime(newremainingtime);
  setcount(newcount) ;
  
}

}

  return (
    <>
    <Header></Header>
    <div className='max-w-7xl mx-auto mt-12 flex gap-5 justify-around'>
      <Cards handleaddcard={handleaddcard}></Cards>
      <Cart allcards={allcards} count={count} remainingtime={remainingtime} ></Cart>
    </div>
     
    
      
    </>
  )
}

export default App
