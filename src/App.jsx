
import './App.css'
import Cards from './Components/Cards'
import Cart from './Components/Cart'
import Header from './Components/Header'

function App() {
 

  return (
    <>
    <Header></Header>
    <div className='mt-12 flex justify-around'>
      <Cards></Cards>
      <Cart></Cart>
    </div>
     
    
      
    </>
  )
}

export default App
