import React from 'react';
import '../SignUp/SignUp.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import account from '../img/account.svg'
const firstNameRegex = /^[A-Z]{1}[a-z]{2,}/; 
const lastNameRegex = /^[A-Z]{1}[a-z]{2,}/; 
const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
const SignUp = () =>
{
  const [firstname,setFirstName]=React.useState("")
  const [lastname,setLastName]=React.useState("")
  const [password,setPasword]=React.useState("")
  
const[regexObj,setRegexObj]=React.useState({firstnameBorder:false,firstnameHelperText:"" ,lastnameBorder:false,lastnameHelperText:"",passwordBorder:false,passwordHelperText:""})

const takeFirstName = (e) => {
console.log(e.target.value);
setFirstName(e.target.value)
}

const takeLastName = (e) =>
{
  console.log(e.target.value);
  setLastName(e.target.value)
}
const takePassword = (e) =>
{
  console.log(e.target.value);
  setLastName(e.target.value)
}
const submit = () =>
{
if(firstname==="" && lastname==="" && password==="")
{
 setRegexObj({...regexObj,firstnameBorder:true,firstnameHelperText:"enter the firstname",lastnameBorder:true,lastnameHelperText:"enter the  lastname",passwordBorder:true,passwordHelperText:"enter correct password"})
}
if(firstNameRegex.test(firstname))
 {
   setRegexObj({...regexObj,firstnameBorder:false,fisrtnameHelperText:""})
 }
if(lastNameRegex.test(lastname))
{
  setRegexObj({...regexObj,lastnameBorder:false,lastnameHelperText:""})
}
if(passwordRegex.test(password))
{
  setRegexObj({...regexObj,passwordBorder:false,passwordHelperText:""})
}
else
{
  setRegexObj({...regexObj,firstnameBorder:true,firstnameHelperText:"enter correct firstname",lastnameBorder:true,lastnameHelperText:"enter correct password",passwordBorder:true,passwordHelperText:"enter correct password"})
}
}
  return(
  <div className='signbox'>
<div className='info'>
 <div className='Title'>
       <span className='first'>G</span>
    <span className='second'>o</span>
    <span className='third'>o</span>
    <span className='four'>g</span>
    <span className='five'>l</span>
    <span className='Six'>e</span>
  </div>
  <div className='headingnew'>
      <h2 className='heading'>Create Your Google account</h2>
  </div>
  <div className='name'>
      <div className='firstname'>
      <TextField id="Name" label="firstname" size='small' variant="outlined"  error={regexObj.firstnameBorder}  helperText={regexObj.firstnameHelperText} onChange={takeFirstName}/>
      </div>
      <div className='lastname'>
      <TextField id="Lastname" label="LastName" size='small' variant="outlined"  error={regexObj.lastnameBorder}  helperText={regexObj.lastnameHelperText} onChange={takeLastName}/>
      </div>
  </div>
  <div className='email'>
  <TextField id="email" label="username" size='small' variant="outlined" />
  </div>
  <div className='textarea'>
 <h4><a href='gmail.com'>Use my current email Instead</a></h4>
  </div>
  <div className='passwordbox'>
      <div className='password'>
      <TextField id="password" label="password" size='small' variant="outlined" error={regexObj.passwordBorder}  helperText={regexObj.passwordHelperText} onChange={takePassword}/>
      </div>
      <div className='confirm'>
      <TextField id="confirm" label="confirm" size='small' variant="outlined" />
      </div>
  </div>
  <div className='passwordinfo'>
  Use 8 or more characters with a mix of letters,numbers,
   symbols 
  </div>
  <div className='checkbox'>
  <FormControlLabel disabled control={<Checkbox />} label="Show Password" />
  </div>
  <div className='button'>
  
    <h4 className='signin'><a href='sign'>SignIn Instead</a></h4>
 
  <div className='btn'>
  <Button variant="contained" onClick={submit}>Next</Button>
  </div>
  </div>
  </div> 
  <div className='image'>
  <img src={account}  alt="Icon"></img>
  </div>
  </div>
  )
}
export default SignUp