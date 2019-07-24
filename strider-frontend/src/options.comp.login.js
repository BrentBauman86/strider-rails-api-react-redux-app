// import React from 'react'
// import { connect } from 'react-redux' 
// import { login } from "../actions/currentUser.js"
// import { updateLoginForm } from '../actions/loginForm.js'


// const Login = ({ loginFormData, updateLoginForm, login}) => {
//     const handleInputChange = event => {
//         const { name, value } = event.target 
//             const updatedFormInfo = {
//                 ...loginFormData,
//                 [name]: value
//             }
//             updateLoginForm(updatedFormInfo)
//     }

        // const handleSubmit = event => {
        //     event.preventDefault()
        //     login(loginFormData)
        // }

//     return(
//         <form onSubmit={handleSubmit}>
//         <input type='text' value={loginFormData.name} placeholder='name'onChange={handleInputChange} />
//         <input type='text' value={loginFormData.password} placeholder='password' onChange={handleInputChange} /> 
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
//         loginFormData: state.loginForm
//     }
// }

// export default connect(mapStateToProps, { updateLoginForm })(Login)