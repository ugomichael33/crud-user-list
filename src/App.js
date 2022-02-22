import React, { useState, useEffect } from 'react'
import './App.css';
import User from './components/User'
import AddUsers from './components/AddUsers'
import { fetchData, addData, removeData, editData } from './api'

function App() {
  const [ users, setUsers ] = useState( [] )

  
  useEffect(() => {
    ( async function() {
        const allUsers = await fetchData()
        setUsers(allUsers)
    })();
  },[])


  const handleAdd = async ( form ) => {
    const newUser = await addData( form )
    setUsers([ ...users, newUser ])
  }

  const handleDelete = async ( id ) => {
    const data = await removeData( id )
    if ( data ) {
      const remainingUsers = users.filter( ( user ) => {
        return user.id !== id
      })
      setUsers( remainingUsers )
    }
  }

  const handleEdit = async ( id, form ) => {
   
    const data = await editData( id, form )
    
     if ( data ) {
     const editedUser = users.map( ( user ) => {
        return user.id === id ? { id, form } : user
      
     })
       setUsers( editedUser )
   }
  }


  return (
    <div className="App">
      <h3>Crud User List</h3>
      <br/>
      <AddUsers onAdd={ handleAdd } />
      <div>
        {
          users?.map( user => (
            <User id={ user.id } key={ user.id } name={ user.name } email={ user.email } onEdit={ handleEdit } onDelete={ handleDelete } />
          ))
        }
      </div>
    </div>
  );
}

export default App;
