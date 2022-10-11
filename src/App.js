
import './App.css';
import React, {useState, useEffect} from "react";
import bg from './images/background2.webp'
import bg2 from './images/battle.jpg'
function App() {
  const [start,setStart] = useState(false);
  useEffect(()=>{
    console.log(document.body)
    document.body.style.backgroundImage= `url('${bg}')`;
    const changeBackground = (e)=>{
      console.log(document.body)
      document.body.style.backgroundImage = `url('${bg2}')`
      const title = document.querySelector('.title')
      setStart(true)
      title.remove()
      e.target.remove()
    }
    const button = document.querySelector('#start')
    button.addEventListener("click",changeBackground)
    
    
  },[])
  
  

  return (
    <div className="App">
      <h1 className="title">Memory Card with Mario RPG</h1>
      <button id="start">Play Game</button>
      <div className='game'>
        
      </div>
    </div>
  );
}

export default App;
