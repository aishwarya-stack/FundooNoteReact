import React from 'react';
import '../Note/Note.css'
// Tell webpack that Header.js uses these styles
import icon from '../img/icon2.png'
import checkbox from '../img/icon1.jpg'
import brush from '../img/brush.png'
import NoteTwo from '../NoteTwo/NoteTwo';
const Note = (props) =>
{
  const clickButton=()=>{
    props.listenToHeader("hello")
}
  return(

<div className='notebox'>
  <div className='notebox1'>
     <input type="text" class="input" placeholder='Take a Note..' onClick={clickButton}/>
     </div>
    
     <img src={checkbox}  alt="checkbox"/>
     
      <img src={icon} className='icon' alt="icon"/>
      <img src={brush} className='brush' alt="brush"/>
  </div>
  )
}
export default Note