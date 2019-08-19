//synchronous action creators 
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user 
    }
}

//async action creators 
export const login = credentials => {
    return dispatch => {
       return fetch('http://0.0.0.0:3000/api/login', {
           credentials: "include",
           method: "POST",
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify(credentials)
           
       })
       .then(response => response.json())
       .then(userData => dispatch(setCurrentUser(userData)))
    }
}

export const getCurrentUser = () => {
    return dispatch => {
<<<<<<< HEAD
       return fetch('http://0.0.0.0:3000/api/get_current_user', {
=======
       return fetch('http://localhost:3000/api/get_current_user', {
>>>>>>> 0e0b7fbd6f20129a671a54650b3538214f29796e
           credentials: "include",
           method: "GET",
           headers: {
               "Content-Type": "application/json"
           },           
       })
       .then(response => response.json())
       .then(response => dispatch(setCurrentUser(response)))
       .catch(console.log)
    }
}