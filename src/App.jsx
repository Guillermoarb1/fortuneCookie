import { useState } from 'react'

import './App.css'
import Phrase from './components/Phrase'
import phrases from './data/phrases'
import CookieBtn from './components/CookieBtn'

const getRandom = (arrayElements) => {
  const quantity = arrayElements.length;
  
  const randomIndex = Math.floor(Math.random()* quantity);

  return arrayElements[randomIndex]
}

const backgrounds = ['url("/public/fondo1.jpg")','url("/public/fondo2.jpg")','url("/public/fondo3.jpg")','url("/public/fondo4.jpg")']



function App() {


  const [background, setBackground] = useState(getRandom(backgrounds))
  const [fortune, setFortune] = useState(getRandom(phrases))
  const handleFortune = () => {
    setFortune(getRandom(phrases))
    setBackground(getRandom(backgrounds))
  }
  
  


  return (
    
    <div className='App' style={{backgroundImage: background}}>
      
      <section className='App-container'>
        
        <Phrase 
        fortune = {fortune}
        />
        <CookieBtn 
        handleFortune={handleFortune}/>
      </section>
        
    </div>

  )
}

export default App
