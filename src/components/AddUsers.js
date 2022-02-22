import React, { useState } from 'react'
import './AddUser.css'

const AddUsers = ({ onAdd }) => {
    const initValue = { value: '' }
    const [ name, setName ] = useState( initValue )
    const [ email, setEmail ] = useState( initValue )
    const [ nameErr, setNameErr ] = useState( {} )
    const [ emailErr, setEmailErr ] = useState( {} )

    const handleNameChange = ( e ) => {
        setName( { ...name, value: e.target.value } )
    }

    const handleEmailChange = ( e ) => {
        setEmail( { ...email, value: e.target.value } )
    }

   const formValidation = () => {
    const nameErr = {}
    const emailErr = {}
    let isValid = true

    if ( name.value.trim().length < 5 ) {
        nameErr.nameShort = 'name is too short'
        isValid = false
    }
   
    if ( !email.value.includes('@') ) {
        emailErr.missingChar = 'missing char @'
        isValid = false
    }

    if ( email.value === '' ) {
        emailErr.inValid = 'no email'
        isValid = false
    }
    setNameErr( nameErr )
    setEmailErr( emailErr )
    return isValid
}
    const handleSubmit = ( e ) => {
        const isValid = formValidation()
        if ( isValid ) {
            onAdd( { name: name.value, email: email.value });
            setName( initValue )
            setEmail( initValue )
        } 
        
      
    }
  return (
    <div>
        <div className='add__user'>
            <h3>Add User</h3>
            <input onChange={ handleNameChange } value={ name.value } placeholder='Name' name='name' />
            <br/>
            <div>
            {Object.keys( nameErr ).map(( key ) => {
                return <span style={{ color: 'red' }} >{ nameErr[key] }</span>
            })}
            </div>
            <input onChange={ handleEmailChange } value={ email.value } placeholder='Email' name='email' />
            <br/>
            <div>
             {Object.keys( emailErr ).map( (key) => {
                return <span style={{ color:'red' }}>{ emailErr[key] }</span>
            })}
            </div>
            <button onClick={ handleSubmit }>Add</button>
        </div>
    </div>
  )
}

export default AddUsers