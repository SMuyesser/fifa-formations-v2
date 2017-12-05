import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';

export class LoginForm extends React.Component {
    onSubmit(values) {
        this.props.dispatch(login(values.playername, values.password));
        const loader = document.getElementById("loader");
        console.log(loader);
        return loader.className = "";
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <form id="login-form"
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <h1 className="form-title">Login</h1>
                {error}
                <Field
                    component={Input}
                    type="text"
                    placeholder="Enter player name"
                    name="playername"
                    id="playername"
                    validate={[required, nonEmpty]}
                />
                <Field
                    component={Input}
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    id="password"
                    validate={[required, nonEmpty]}
                />
                <p id="demo-info">Demo Player/Password: DemoPlayer | Demo1234</p>
                <button id="login-form-btn" disabled={this.props.pristine || this.props.submitting}>
                    Log in
                </button>
                <div id="loader" className="hidden">
                    <img src={require('../images/ajax-loader.gif')} alt="loader" />
                </div>
            </form>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'playername'))
})(LoginForm);
