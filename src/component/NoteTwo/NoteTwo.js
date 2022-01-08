import React from 'react';
import pin from '../img/images.png'
import '../NoteTwo/NoteTwo.css'
const NoteTwo = () =>
{
  return(

<div className='noteboxtwo'>
<div className='rowdiv'>
  <div className='Title'>
     <input type="text" className='titlebox'  placeholder='Title'></input>
     </div>
     <div className='image'>
      <img src={pin}  alt="Icon"></img>
    </div> 
    </div>
    <div className='description'>
      <input type="text" className='descript' placeholder='Take a note..'></input>

    </div>
    </div>
  )
}
export default NoteTwo