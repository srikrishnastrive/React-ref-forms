
import './Form.css'

import Input from '../input/Input';
import { useContext, useRef, useState } from 'react';
import { FormContext } from '../../providers/FormContext';
import validateEmail from '../../helper/emailValidator';
import validatePassword from '../../helper/passwordValidator';


function Form(){
    const {formInput} = useContext(FormContext);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const usernameRef = useRef(null);
    const addressRef = useRef(null);

    const [step,setStep] = useState(1);

    const handleForSubmit = (event) =>{
       

        event.preventDefault();
        hadleInvalidEmail();
        handleInvalidPassword();
        console.log(formInput);
    }

    const hadleInvalidEmail = () => {
        if (!validateEmail(formInput.email)){
            emailRef.current.setInvalid();
            emailRef.current.setShake();
        }
    }

    const handleInvalidPassword = () => {
         
        if (!validatePassword(formInput.password)){
            passwordRef.current.setInvalid();
            passwordRef.current.setShake();
        }
    }
    if (step == 1){
        return (
            <div>
                New Form
                <form onSubmit = {handleForSubmit}>
                <div className="wrapper email-input-wrapper">
                   <Input 
                   type={"text"}
                   id={"email-input"}
                   label="email"
                   ref={emailRef}
                   checkOnBlur = {hadleInvalidEmail }
                   placeholder={"Email"}
                   key={1}
                   />
    
                </div>
                <div className="wrapper email-input-wrapper"> 
                    <Input type={"password"}
                     id={"password-input"} 
                     label="password"
                     ref={passwordRef}
                     checkOnBlur = {handleInvalidPassword }
                     placeholder={"password"}
                     key={2}
                     />
                </div>
                <input type="submit"
                    id='submit-input'
                 />
                 
                 </form>
                 <button  className='margin-top:3rem' onClick={()=>setStep(step+1)}>Next</button>
                 
            </div>
        )
    }
    if (step == 2){
        return (
            <div>
                <form onSubmit = {handleForSubmit}>
                <div className="wrapper username-input-wrapper">
                   <Input 
                   type={"text"}
                   id={"username-input"}
                   label="username"
                   ref={usernameRef}
                   placeholder={"userName"}
                    key={3}
                   />
                </div>
                <input type="submit"
                    id='submit-input'
                 />
                
                 </form>
                 <button className='margin-top:3rem' onClick={()=>setStep(step-1)}>Prev</button>
                 <button onClick={()=>setStep(step+1)}>Next</button>
               
            </div>

        )
    }
    if (step == 3){
        return (
            <div>
                <form onSubmit = {handleForSubmit}>
                <div className="wrapper username-input-wrapper">
                   <Input 
                   type={"text"}
                   id={"address-input"}
                   label="address"
                   ref={addressRef}
                   placeholder={"address"}
                    key={4}
                   />
                     <input type="submit"
                    id='submit-input'
                 />
                </div>
                </form>
                
                 <button onClick={()=>setStep(step-1)}>Prev</button>
            </div>
        )
    }
  
}

export default Form;
