import React, { useState } from 'react';
import './Game.css';



function importAll(r) {
  let images = {};
   r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images
 }
function capitalize(s){
  return s[0].toUpperCase() +s.slice(1,)
}
 
 const images = importAll(require.context('../images/characters', false, /\.(png|jpe?g|svg|webp)$/));

// to shuffle array 
/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array,characters) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  let count=0;
  (array.slice(0,6)).forEach(c=>{
  if (characters[c.name])
  count ++
  })
  console.log(characters)
  if (count==6){
    return true
  }
  return false
}
  
   const Game = (props)=>{
    const [score,setScore] = useState(0)
    const [highscore,setHighScore] = useState(0) 
    const [characters,setCharacters] = useState({
      'Baby Fat':false,
      'Belome':false,
      'Big Boo':false,
      'Birdo':false,
      'Bob Omb':false,
      'Boshi':false,
      'Bowser':false,
      'Dodo':false,
      'Frogfucius':false,
      'Geno':false,
      'Goomba':false,
      'Heavy Troopa':false,
      'Magikoopa':false,
      'Mallow':false,
      'Mario':false,
      'Princess Toadstool':false,
      'Sergeant Flutter':false,
      'Shy Guy':false,
      'Sky Troopa':false,
      'Yoshi':false,
    })
    // make character array from image folder
    let array = []
    Object.keys(images).forEach(key=>{
        // separate extention 
        let file = key.split('.')[0]
        let character;
        if (file.includes('_')){
        character = `${capitalize(file.split('_')[0])} ${capitalize(file.split('_')[1])}`
        }
        else {
          character = capitalize(file)
        }
        
      array.push({ link:images[key],
                   name:character,
      }) 
    })
     while(true){
     if(!shuffleArray(array,characters)|score==20)
     {break}
     }
      
     
   

    const incrementScore = (e) =>{
        if (characters[e.target.id])  {   
        console.log('Game over..')
        if (score>highscore){
          setHighScore(score)
        }
        setScore(0)
        setCharacters({
          'Baby Fat':false,
          'Belome':false,
          'Big Boo':false,
          'Birdo':false,
          'Bob Omb':false,
          'Boshi':false,
          'Bowser':false,
          'Dodo':false,
          'Frogfucius':false,
          'Geno':false,
          'Goomba':false,
          'Heavy Troopa':false,
          'Magikoopa':false,
          'Mallow':false,
          'Mario':false,
          'Princess Toadstool':false,
          'Sergeant Flutter':false,
          'Shy Guy':false,
          'Sky Troopa':false,
          'Yoshi':false,
        })
      }
        else{
          setScore(score+1)
          let newArray ={...characters}
          newArray[e.target.id]=true;
          setCharacters(newArray)
    }
  }
  function reset(){
       setScore(0)
       setHighScore(0)
       setCharacters({
        'Baby Fat':false,
        'Belome':false,
        'Big Boo':false,
        'Birdo':false,
        'Bob Omb':false,
        'Boshi':false,
        'Bowser':false,
        'Dodo':false,
        'Frogfucius':false,
        'Geno':false,
        'Goomba':false,
        'Heavy Troopa':false,
        'Magikoopa':false,
        'Mallow':false,
        'Mario':false,
        'Princess Toadstool':false,
        'Sergeant Flutter':false,
        'Shy Guy':false,
        'Sky Troopa':false,
        'Yoshi':false,
      })
    }

    const cards = ()=> {
      if (props.start){
      // check if it'cleared
      let content 
      if (score==20){
        content = <div>
          <h1>Congratulations!! You cleared the game!</h1>
          <button className='reset' onClick={reset}>Play Again</button>
        </div>
      }  
      else { 
      content = array.slice(0,6).map((c,i)=>
          <div key={i} id={c.name} className='card' onClick={(e)=>incrementScore(e)}>
            <img src= {c.link} alt= {"image of " + c.name}/>
            <h4 className='name'>{c.name}</h4>
          </div>
      )
      }
      return <div>
                <h1>Click the character you haven't clicked</h1> 
                <h2 className='scores'>{"Best Score:" +highscore}</h2>
                <h2 className='scores'>{"Current Score:" +score}</h2>
                <div className='game'>
                      
                {content}

             </div>
            </div>
    }
  }

    return <div className='board'>
      
      {cards()}</div>
   }



export default Game;