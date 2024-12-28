import React, { useContext, useEffect, useImperativeHandle, useRef, useState } from "react";
import { FormContext } from "../../providers/FormContext";
import './input.css';

function  Input ({type,id,label,checkOnBlur,placeholder },ref) {
    const [text,setText] = useState("");
    const {formInput,setFormInput} = useContext(FormContext);
    const [isValid,setIsValid] = useState(true);
    const [shake,isShake] = useState(false);

    const localRef = useRef(null);
    useEffect(() => {
        setIsValid(true);
        isShake(false);

    },[text]);
    useImperativeHandle(ref,()=>{
        return {
            focus : () => {localRef.current.focus()},
            setInvalid : () => setIsValid(false),
            setShake : ()=> isShake(true),
            
        }
       
    },[])

    return (
        <>
        
        <input  className={`${(!isValid) ?"error-input" : ""} ${shake ? 'shake' : " "} `}
            type= {type} 
            id = {id}
            value={text}
            onChange={(e)=> {
                setText(e.target.value);
                setFormInput({...formInput,[label]:e.target.value})

            }}
            ref={localRef}
            onBlur={checkOnBlur}
            placeholder={placeholder}
        />
        <br/>   
        <span> {(!isValid) ? `${label} is invalid` : ''}</span>
        </>

    )
};

export default React.forwardRef(Input);
