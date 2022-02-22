export const fetchData = async() => {
    return await fetch( 'https://jsonplaceholder.typicode.com/users' )
    .then( response => response.json())
    .then( data => data )
    .catch( error => {
      console.log( error )
      return { error: 'error' }
    })
  } 

export const addData = async( form ) => {
    const { name, email } = form
    return await fetch( 'https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        email: email
      }),
      headers: {
        'content-type': 'application/json; charset=UTF-8',
      }
    })
    .then( response => response.json())
    .then( data => {
        console.log( { data } )
        return data
    })
    .catch( error => {
      console.log( error )
      return { error: 'error' }
    })
} 

export const removeData = async( id ) => {
     return await fetch( `https://jsonplaceholder.typicode.com/users/${ id }`, {
      method: 'DELETE'
    })
    .then( response => response.json())
    .then( data => {
        console.log({ data })
        return data
    })
    .catch( error => {
      console.log( error )
      return { error: 'error' }
    })
}

export const editData = async( id, form ) => {
    const { name, email } = form
    return await fetch( `https://jsonplaceholder.typicode.com/users/${ id }`, {
      method: 'PUT',
      body: JSON.stringify({
        name: name,
        email: email,
      }),
      headers: {
        'content-type': 'application/json; charset=UTF-8',
      }
    })
    .then( response => response.json())
    .then( data => {
        console.log({ data })
        return data
    })
    .catch( error => {
      console.log( error )
      return { error: 'error' }
    })
} 

