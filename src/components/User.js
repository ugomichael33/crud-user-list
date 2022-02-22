import React, {useState} from 'react'
import './User.css'

function User({ id, name: initName, email: initEmail, onEdit, onDelete }) {
    const [ isEditing, setIsEditing ] = useState( false )
    const [ name, setName ] = useState({ value: initName })
    const [ email, setEmail ] = useState({ value: initEmail })
    const [ nameErr, setNameErr ] = useState( {} )
    const [ emailErr, setEmailErr ] = useState( {} )

    

    const handleNameChange = ( e ) => {
        setName({ ...name, value: e.target.value })
    }

    const handleEmailChange = ( e ) => {
        setEmail({ ...email, value: e.target.value })
        
    }

    const formValidation = () => {

        const nameErr = {}
        const emailErr = {}
        let isValid = true
   
        console.log(name.value)
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

    const handleSave =  () => {
        const isValid = formValidation()
        if ( isValid ) {
        onEdit( id, { name: name.value, email: email.value } );
        setIsEditing( !isEditing )
        }
    
    }

    const handleDelete = () => {
        onDelete( id );
    }

    const handleToggle = () => {
        setIsEditing( !isEditing );
    }
   
  return (
    <div className='list'>
        { isEditing ? (
            <span>
                <input onChange={ handleNameChange } value={ name.value } name='name' />
                <input onChange={ handleEmailChange } value={ email.value } name='email' />
            </span>
        ) : (
            <div>
                <span>{ name.value }</span>
                <span>{ email.value }</span>
            </div>
        )}
       
       <span>
           { isEditing 
            ? <button onClick={ handleSave }>Save</button>
            : <button onClick={ handleToggle } >Edit</button>}
           {isEditing 
            ? <button onClick={ handleToggle }>Cancel</button>
            : <button onClick={ handleDelete } >Delete</button>}
       </span>
    </div>
  )
}

export default User