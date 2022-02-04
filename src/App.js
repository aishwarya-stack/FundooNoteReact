import './App.css';
import React,{ Component } from 'react';
import Header from './component/Header/Header';
import Note  from './component/Note/Note';
import TextField from '@mui/material/TextField';
import NoteTwo from './component/NoteTwo/NoteTwo';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp'
import Sidenav from './component/SideNav/SideNav';
import Dashboard from './Pages/Dashboard/Dashboard';
import RouterDom from './Router/Router';
class App extends Component{
  render(){
    return(
      <div className='App'>
        <RouterDom />
       {/* <Header/>       
      <Note/>
      <NoteTwo/> */}
      {/* <SignIn/> */}
      {/* <SignUp/> */}
      {/* <Sidenav/> */}
      {/* <Dashboard/> */}
     
      </div>
    );
    }
  }
export default App;
