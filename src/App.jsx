
import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards'
import Cart from './Components/Cart'
import Header from './Components/Header'

function App() {

  const [allcards,setallcards] = useState([])

  const handleaddcard = cardname => {
    console.log(cardname)
    const newallcards = [...allcards,cardname];
    setallcards(newallcards)
  

  }
 

  return (
    <>
    <Header></Header>
    <div className='max-w-7xl mx-auto mt-12 flex gap-5 justify-around'>
      <Cards handleaddcard={handleaddcard}></Cards>
      <Cart allcards={allcards}></Cart>
    </div>
     
    
      
    </>
  )
}

export default App
