import './App.css';
import React,{ Component } from 'react';
import Header from './component/Header/Header';
import Note  from './component/Note/Note';
import TextField from '@mui/material/TextField';
import NoteTwo from './component/NoteTwo/NoteTwo';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
class App extends Component{
  render(){
    return(
      <div className='App'>
       {/* <Header/>       
      <Note/>
      <NoteTwo/> */}
      <SignIn/>
      {/* <SignUp/> */}
     
      </div>
    );
    }
  }
export default App;
