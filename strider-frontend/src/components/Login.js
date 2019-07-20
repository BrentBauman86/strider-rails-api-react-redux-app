import React from 'react'
import { connect } from 'react-redux' 


const Login = (props) => {
    return(
        <form onSubmit={undefined}>
        <input type='text'  value={props.name} placeholder='name'onChange={undefined} />
        <input type='text'  value={props.password} placeholder='password' onChange={undefined} /> 
        <input type='submit' value="Log In" />
        </form>
    )
}
//this gives me an argument coming to this component that looks like this:
//{
//name: 'brent'
//password: 'xxy352244'
//}
const mapStateToProps = state => {
    return {
        name: state.loginForm.name, 
        password: state.loginForm.password 
    }
}

export default connect(mapStateToProps, dispatchStateToProps)(Login) 