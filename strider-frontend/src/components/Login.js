import React from 'react'
import { Field, reduxForm } from 'redux-form';

class Login extends React.Component {
    renderInput() {
        return <input />;
    }
    render() {
        return (
            <form>
                <Field name="name" component={this.renderInput}/>
                <Field name="password" component={this.renderInput}/>
            </form>
        );
    }
}
  
export default reduxForm({form: 'login'})(Login); 

