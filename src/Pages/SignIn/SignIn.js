import React from 'react';
import '../SignIn/SignIn.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { login } from '../../Services/userservice';
import { useHistory } from 'react-router-dom';
const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
const passRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

const SignIn = () =>
{
let history = useHistory()
const [email,setEmail]=React.useState("")
const [password,setPassword]=React.useState("")
// const [emailBorder,setEmailBorder]=React.useState(false)
// const[emailHelperText,setEmailHelperText]=React.useState("")
const[regexObj,setRegexObj]=React.useState({emailBorder:false,emailHelperText:"" ,passBorder:false,passHelperText:""})

const takeEmail = (e) => {
console.log(e.target.value);
setEmail(e.target.value)
}

const takePassword = (e) =>
{
  console.log(e.target.value);
  setPassword(e.target.value)
}
const submit = () =>
{
if(email==="" && password==="")
{
 setRegexObj({...regexObj,emailBorder:true,emailHelperText:"enter the email",passBorder:true,passHelperText:"enter the  password"})
}
else
{


let emailTest=emailRegex.test(email)
let passTest=passRegex.test(password)

if(emailTest)
 {
   setRegexObj({...regexObj,emailBorder:false,emailHelperText:""})
 }
 else
 {
  setRegexObj({...regexObj,emailBorder:true,emailHelperText:"enter correct email"})
 }

 if(passTest)
 {
   setRegexObj({...regexObj,passBorder:false,passHelperText:""})
 }
 else
 {
  setRegexObj({...regexObj,passBorder:true,passHelperText:"enter correct password"})
 }

if(emailTest===true && passTest===true)
{
  let obj={
    "email":email,
     "password":password
 }

  login(obj).then((res)=>{
    console.log(res)
    localStorage.setItem("userid",res.data.user_id)
    localStorage.setItem("token",res.data.token)
    history.push("/Dashboard")

  })
.catch((err)=>
{
  console.log(err)
})

  console.log(obj);
}
}

}
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
   <TextField id="Email" label="Email or Phone" size='small' variant="outlined" error={regexObj.emailBorder}  helperText={regexObj.emailHelperText}   onChange={takeEmail} />
  </div>
  <div className='Password'>
   <TextField id="Password" label="password" size='small' variant="outlined"  error={regexObj.passBorder} helperText={regexObj.passHelperText}  onChange={takePassword}/>
  </div>
  <div className='textletter'>
  Not your computer? Use Guest mode to sign in privately.</div>
  <div className='account'>
  <h2 className='accountcolor'><a href='SignIn.css'>Create account</a></h2>
  
  <div className='btm'>
  <Button variant="contained" onClick={submit}>Next</Button>
  </div>
  </div>
  </div>
  )
}
export default SignIn