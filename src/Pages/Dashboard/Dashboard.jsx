import React from "react";
import Header from "../../component/Header/Header";
import Sidenav from "../../component/SideNav/SideNav";
import Note from "../../component/Note/Note";
import NoteTwo from "../../component/NoteTwo/NoteTwo";
import {delNote, getNote} from "../../Services/dataServices"
import "../Dashboard/Dashboard.css"
import { Card } from 'antd';
import { useState } from 'react';
import { Modal, Button } from 'antd';

import { BulbOutlined,UserAddOutlined,DownSquareOutlined,HighlightOutlined,MoreOutlined ,DeleteOutlined} from '@ant-design/icons';


function Dashboard()
{
    const [open, setOpen] = React.useState(false);
    const [openNav,setOpenNav]=React.useState(true)
    const [notes,setNotes] = React.useState([])
   
   
  
    
    const listenToHeader=(data)=>{
    //   
    setOpenNav(false)
    console.log(data)
    }
    const getAllNotes=()=>
    {
        getNote()
        .then((data)=>{
            console.log("data",data.data.data);
            setNotes(data.data.data.rows)
        })
        .catch((error)=>{
            console.log("error",error);
        })
    }
    React.useEffect(()=>{
       getAllNotes()
    },[])
    
    
   const deleteNote=(event)=>
   {
         console.log("123",event.target)
         
         delNote(event.target.id).then((data)=>
         {
             getAllNotes()
             console.log(data)
         })
         .catch((error)=>
         {
             console.log("error",error);
         })
       }
       
       
    return(
    <div className="mainNote">
    <Header listenToHeader = {listenToHeader}/>
    <Sidenav openNav={openNav}/>
   <div className="notesFolder" >
         {
             openNav?<Note listenToHeader={listenToHeader} />:<NoteTwo/>
         }
         </div>
         <div className="notes-container">
                 <div className="notes-box">
                            {
                         notes.map((note)=>(
                        
                         <Card title={note.title}  bordered={false}  style={{ width: 300 }}>
                         <p>{note.description}</p>
                         <button><BulbOutlined /> </button>
                         <button> <UserAddOutlined /></button>
                         <button><DownSquareOutlined /></button>
                         <button><HighlightOutlined /></button>
                         <button><MoreOutlined /></button> 
                         <button onClick={deleteNote} id = {note.note_id} ><DeleteOutlined  /></button>
                  
                  
                      </Card>
                      
                      ))
                      }
                      </div>
                    
            
                
            </div>
</div>
    )
}
export default Dashboard
//method as prop