import React, { Component } from 'react';
import Input from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      email: '',
      password: ''
    });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an acount</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <Input
            type="email"
            name="email"
            value={this.state.email}
            required={true}
            handleChange={this.handleChange}
            label="Email"
          />
          {/* <label htmlFor="email">Email</label> */}
          <Input
            type="password"
            name="password"
            value={this.state.password}
            required={true}
            handleChange={this.handleChange}
            label="Password"
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
