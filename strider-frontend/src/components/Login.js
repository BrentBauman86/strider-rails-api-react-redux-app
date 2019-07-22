import React from 'react'
import { Field, reduxForm } from 'redux-form';

class Login extends React.Component {
    render() {
        return (
            <form>
                <Field name="name"/>
                <Field name="password" />
            </form>
        );
    }
}
  
export default reduxForm({form: 'login'})(Login); 

