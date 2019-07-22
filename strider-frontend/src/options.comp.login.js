// import React from 'react'
// import { connect } from 'react-redux' 
// import { updateLoginForm } from '../actions/loginForm.js'


// const Login = ({name, password, updateLoginForm}) => {
//     const handleInputChange = event => {
//         const { name, value } = event.target 
//             const updatedFormInfo = {
//                 name,
//                 password  
//             }
//             updateLoginForm(updatedFormInfo)

//     }

//     return(
//         <form onSubmit={undefined}>
//         <input type='text' value={name} placeholder='name'onChange={handleInputChange} />
//         <input type='text' value={password} placeholder='password' onChange={handleInputChange} /> 
//         <input type='submit' value="Log In" />
//         </form>
//     )
// }
//this gives me an argument coming to this component that looks like this:
//{
//name: 'brent'
//password: 'xxy352244'
//}
// const mapStateToProps = state => {
//     return {
//         name: state.loginForm.name, 
//         password: state.loginForm.password 
//     }
// }

// export default connect(mapStateToProps, { updateLoginForm })(Login)