//synchronous action creators 
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user 
    }
}

//async action creators 
export const login = credentials => {
    console.log(credentials)
    return dispatch => {
       return fetch('http://localhost:3001/api/users', {
           method: "POST",
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify(credentials)
           
       })
       .then(response => response.json())
       .then(response => dispatch(setCurrentUser))
    }
}