import './App.css';
import React,{ Component } from 'react';
import Header from './component/Header/Header';
import Note  from './component/Note/Note';
import TextField from '@mui/material/TextField';
class App extends Component{
  render(){
    return(
      <div className='App'>
      <Header/>       
      <Note/>
      <TextField id="outlined-basic" label="Name" size='small' variant="outlined" />
      </div>
    );
    }
  }
export default App;
