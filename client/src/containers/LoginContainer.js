import React, { Component } from 'react'
import { connect } from 'react-redux';

import Layout from '../components/common/Layout';

import { sendLoginAttempt } from '../action/authorization';

class LoginContainer extends Component {

  state = {
    email: '',
    password: '',
    validate: false,
  }

  changeHandler = (e, filed) => {
    this.setState({
      [filed]: e.target.value
    })
  }

  loginHandle = () => {
    const { email, password } = this.state;

    this.props.sendLoginAttempt({
      email,
      password,
    });
  }

  render() {
    return (
      <Layout>
        <h1>Login</h1>
        
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={(e) => this.changeHandler(e, 'email')}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="text"
            value={this.state.name}
            onChange={(e) => this.changeHandler(e, 'password')}
          />
        </div>

        <div onClick={this.loginHandle}>Confirm</div>
      </Layout>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
      sendLoginAttempt: (data) => {
        dispatch(sendLoginAttempt(data));
      }
  }
}

export default connect(null, mapDispatchToProps)(LoginContainer);