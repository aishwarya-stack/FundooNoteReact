import React from 'react';
import '../SignUp/SignUp.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import account from '../img/account.svg'
import { Register } from '../../Services/userservice';
const firstNameRegex = /^[A-Z]{1}[a-z]{2,}/;
const lastNameRegex = /^[A-Z]{1}[a-z]{2,}/;
const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;

const SignUp = () => {
  const [firstName, setFirstName] = React.useState("")
  const [lastName, setLastName] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [email, setEmail] = React.useState("")

  const [regexObj, setRegexObj] = React.useState({ firstnameBorder: false, firstnameHelperText: "", lastnameBorder: false, lastnameHelperText: "", passwordBorder: false, passwordHelperText: "", emailBorder: false, emailHelperText: "" })

  const takeFirstName = (e) => {
    console.log(e.target.value);
    setFirstName(e.target.value)
  }

  const takeLastName = (e) => {
    console.log(e.target.value);
    setLastName(e.target.value)
  }
  const takePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value)
  }
  const takeEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value)
  }
  const submit = () => {
    if (firstName === "" && lastName === "" && password === "" && email === "") {
      setRegexObj({ ...regexObj, firstnameBorder: true, firstnameHelperText: "enter the firstname", lastnameBorder: true, lastnameHelperText: "enter the  lastname", passwordBorder: true, passwordHelperText: "enter the password", emailBorder: true, emailHelperText: "enter the email" })
    }
    else {

      let emailTest = emailRegex.test(email)
      let firstnameTest = firstNameRegex.test(firstName)
      let lastnameTest = lastNameRegex.test(lastName)
      let passTest = passwordRegex.test(password)



      
      if (firstnameTest) {
        setRegexObj({ ...regexObj, firstnameBorder: false, firstnameHelperText:"" })
      }
      else {
        setRegexObj({ ...regexObj, firstnameBorder: true, firstnameHelperText: "enter correct firstname" })
      }
      if (lastnameTest) {
        setRegexObj({ ...regexObj, lastnameBorder: false, lastnameHelperText:"" })
      }
      else {
        setRegexObj({ ...regexObj, lastnameBorder: true, lastnameHelperText: "enter correct lastname" })
      }
      if (emailTest) {
        setRegexObj({ ...regexObj, emailBorder: false, emailHelperText:"" })
      }
      else {
        setRegexObj({ ...regexObj, emailBorder: true, emailHelperText: "enter correct email" })
      }

      if (passTest) {
        setRegexObj({ ...regexObj, passBorder: false, passHelperText:"" })
      }
      else {
        setRegexObj({ ...regexObj, passBorder: true, passHelperText: "enter correct password" })
      }


      if (emailTest === true && passTest === true && firstnameTest === true && lastnameTest === true) {
        let obj = {
          "firstName": firstName,
          "lastName": lastName,
          "email": email,
          "password": password
        }

        Register(obj).then((res) => {
          console.log(res)
        })
          .catch((err) => {
            console.log(err)
          })

        console.log(obj);
      }
    }
  }
  return (
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
            <TextField id="Name" label="firstname" size='small' variant="outlined" error={regexObj.firstnameBorder} helperText={regexObj.firstnameHelperText} onChange={takeFirstName} />
          </div>
          <div className='lastname'>
            <TextField id="Lastname" label="LastName" size='small' variant="outlined" error={regexObj.lastnameBorder} helperText={regexObj.lastnameHelperText} onChange={takeLastName} />
          </div>
        </div>
        <div className='email'>
          <TextField id="email" label="username" size='small' variant="outlined" error={regexObj.emailBorder} helperText={regexObj.emailHelperText} onChange={takeEmail} />
        </div>
        <div className='textarea'>
          <h4><a href='gmail.com'>Use my current email Instead</a></h4>
        </div>
        <div className='passwordbox'>
          <div className='password'>
            <TextField id="password" label="password" size='small' variant="outlined" error={regexObj.passwordBorder} helperText={regexObj.passwordHelperText} onChange={takePassword} />
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
        <img src={account} alt="Icon"></img>
      </div>
    </div>
  )
}

export default SignUp