
import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards'
import Cart from './Components/Cart'
import Header from './Components/Header'

function App() {

  const [addcard, setaddcard] = useState([]);

  const handleaddcard = (cardname) => {
    console.log(cardname)
    const newaddcard = [...addcard, cardname]
    setaddcard(newaddcard)
   

  }
 

  return (
    <>
    <Header></Header>
    <div className='max-w-7xl mx-auto mt-12 flex gap-5 justify-around'>
      <Cards handleaddcard={handleaddcard}></Cards>
      <Cart addcard = {addcard}></Cart>
    </div>
     
    
      
    </>
  )
}

export default App
