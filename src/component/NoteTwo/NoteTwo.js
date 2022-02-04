import React from 'react';
import pin from '../img/images.png'
import '../NoteTwo/NoteTwo.css'
import { addNote } from '../../Services/dataServices';
import { Button, Result } from 'antd';

const NoteTwo = () =>
{
 
  const [title,setTitle]=React.useState("")
  const[description,setDescription]=React.useState("")
  

  const takeTitle=(e)=>{
    setTitle(e.target.value)
  }
  const takeDescription=(e)=>
  {
    setDescription(e.target.value)
  }
  const add=()=>
  {
    let obj={
      "title":title,
      "description":description,
      "user_id":localStorage.getItem("userid")
    }
    addNote(obj).then((Result)=>
    {
       console.log(Result.data.data)
      
    })
    .catch(
      (error)=>
      {
        console.log(error)
      }
    )
  }
    return(

<div className='noteboxtwo'>
<div className='rowdiv'>
  <div className='Title'>
     <input type="text" className='titlebox'  placeholder='Title' onChange={takeTitle}></input>
     </div>
     <div className='image'>
      <img src={pin}  alt="Icon"></img>
    </div> 
    </div>
    <div className='description'>
      <input type="text" className='descript' placeholder='Take a note..' onChange={takeDescription}></input>
    </div>
    <div className='closebutton'>
      <button className='closeButtonOne' onClick={add} > close </button>
    </div>
    
    </div>
  )
}
export default NoteTwo