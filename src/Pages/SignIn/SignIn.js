import React from 'react';
import '../SignIn/SignIn.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const SignIn = () =>
{
  return(
    <div className='signinbox'>
      <div className='heading'>
   <div className='Title'>
       <span className='first'>G</span>
    <span className='second'>o</span>
    <span className='third'>o</span>
    <span className='four'>g</span>
    <span className='five'>l</span>
    <span className='Six'>e</span>
  </div>
  <div className='sign'>
    <h2>Sign In</h2>
  </div>
  <div className='pqr'>
  <h4>Use Your Account Here</h4>
  </div>
   </div>
   <div className='Email'>
   <TextField id="Email" label="Email or Phone" size='small' variant="outlined" />
  </div>
  <div className='textletter'>
  Not your computer? Use Guest mode to sign in privately.</div>
  <div className='account'>
  <h2 className='accountcolor'><a href='SignIn.css'>Create account</a></h2>
  
  <div className='btm'>
  <Button variant="contained">Next</Button>
  </div>
  </div>
  </div>
  )
}
export default SignIn