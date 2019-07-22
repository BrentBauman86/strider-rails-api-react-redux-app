import React from 'react'
import { Field, reduxForm } from 'redux-form';

class Login extends React.Component {
    renderInput({ input, label, meta }) {
        console.log(meta);
        return (
          <div className="field">
            <label>{label}</label>
            <input {...input}/>
            <div>{meta.error}</div>
          </div>
      );
    }

    onSubmit(formValues) {
        console.log(formValues);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}className="ui form">
                <Field name="name" label="Enter Name" component={this.renderInput}/>
                <Field name="password" label="Enter Password" component={this.renderInput}/>
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}
  
const validate = formValues => {
    console.log(formValues)
    const errors = {};

    if (!formValues.name) {
        errors.name = "Please enter your name";
    }

    if (!formValues.password) {
        errors.password = "Invalid password";    
    }

    return errors; 
}

export default reduxForm({form: 'login', validate})(Login); 

