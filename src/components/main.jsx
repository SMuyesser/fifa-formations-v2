import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from '../components/login-form';
import RegistrationForm from '../components/registration-form';

import '../component-css/main.css';

export class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formType: 'welcome'
    }
  }

  setFormToRegister() {
    this.setState({
        formType: 'register'
    })
  }

  setFormToLogin() {
    this.setState({
        formType: 'login'
    })
  }

  render() {

    // If we are logged in redirect straight to the user's dashboard
    if (this.props.loggedIn) {
        return <Redirect to="/formation" />;
    }

    let form;
    //display welcome screen on initial render
    if(this.state.formType === 'welcome') {
        form = (
          <div className="welcome">
            <h2>Welcome!</h2>
            <p>Fifa has been my favorite video game for over a decade.   This app provides custom tactics, player instructions, strengths, and weaknesses for each Fifa Ultimate Team formation.  Once logged in, just select a formation from the dropdown and click submit.</p>
            <Link id="start-link" to="/" onClick={() => this.setFormToLogin()}>START</Link>
          </div>
        )
    //show register form
    } else if (this.state.formType === 'register') {
        form = (
            <div className="form-container">
                <RegistrationForm />
                <Link id="login-link" to="/" onClick={() => this.setFormToLogin()}>Existing Player Login</Link>
            </div>
        )
    //show login form 
    } else if(this.state.formType === 'login') {
        form = (
            <div className="form-container">
                <LoginForm />
                <Link id="register-link" to="/" onClick={() => this.setFormToRegister()}>Register New Player</Link>
            </div>
        )
    }

    return (
        <div className="main">
            <div id="main-title"><span>FIFA </span><span id="greenF">F</span>ORMATIONS</div>
            {form}
        </div>
    );
  }
};

const mapStateToProps = state => ({
      loggedIn: state.auth.currentPlayer !== null,
      formation: state.formations.formation
});

export default connect(mapStateToProps)(Main);
