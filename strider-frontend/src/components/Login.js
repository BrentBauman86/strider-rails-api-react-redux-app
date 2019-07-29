// import React from "react";
// import { connect } from "react-redux"
// import { login } from "../actions/currentUser.js"
// import { updateLoginForm } from "../actions/loginForm.js"

// class Login extends React.Component {

//     state = {
//       name: "", 
//       password: "",
//     };

//     handleChange = event => {
//       this.setState({
//         [event.target.name]: event.target.value
//       })
//     }

//     handleSubmit = event => {
//       event.preventDefault()
//       if (this.state.name && this.state.password) {
//         this.setState(this.state.value)
//       }
//     }

//   render() {
//     return (
//       <form onSubmit={event => this.handleSubmit(event)}>
//         <div>
//           <label>
//             Username
//             <input id="name" name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
//           </label>
//         </div>
//         <div>
//           <label>
//             Password
//             <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
//           </label>
//         </div>
//         <div>
//           <button type="submit">Log in</button>
//         </div>
//       </form>
//     );
//   }
// }

// export default connect(mapStateToProps, { updateLoginForm, login } )(Login)

import React from 'react'
import { connect } from 'react-redux' 
import { login } from "../actions/currentUser.js"
import { updateLoginForm } from '../actions/loginForm.js'

const Login = ({ loginFormData, updateLoginForm, login}) => {
    const handleInputChange = event => {
        console.log(loginFormData)
        const { name, value } = event.target 
            const updatedFormInfo = {
                ...loginFormData,
                [name]: value
            }
            console.log(name, value)
            updateLoginForm(updatedFormInfo)
    }

        const handleSubmit = event => {
            event.preventDefault()
            login(loginFormData)
        }

    return(
        <form onSubmit={handleSubmit}>
        <input type='text' value={loginFormData.name} name="name" placeholder='name'onChange={handleInputChange} />
        <input type='text' value={loginFormData.password} name="password" placeholder='password' onChange={handleInputChange} /> 
        <input type='submit' value="Log In" />
        </form>
    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginReducer
    }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login)















































// import React from 'react'
// import { Field, reduxForm } from 'redux-form';

// class Login extends React.Component {
//     renderInput({ input, label, meta }) {
//         return (
//           <div className="field">
//             <label>{label}</label>
//             <input {...input}/>
//             <div>{meta.error}</div>
//           </div>
//       );
//     }

//     onSubmit(formValues) {
//         console.log(formValues);
//     }

//     render() {
//         return (
//             <form onSubmit={this.props.handleSubmit(this.onSubmit)}className="ui form">
//                 <Field name="name" label="Enter Name" component={this.renderInput}/>
//                 <Field name="password" label="Enter Password" component={this.renderInput}/>
//                 <button className="ui button primary">Submit</button>
//             </form>
//         );
//     }
// }
  
// const validate = formValues => {
//     console.log(formValues)
//     const errors = {};

//     if (!formValues.name) {
//         errors.name = "Please enter your name";
//     }

//     if (!formValues.password) {
//         errors.password = "Invalid password";    
//     }

//     return errors; 
// }

// export default reduxForm({form: 'login', validate})(Login); 

