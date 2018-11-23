import React, { Component } from 'react'
import { connect } from 'react-redux';

import Layout from '../components/common/Layout';

import { sendRegistrationAttempt } from '../action/authorization';

class RegisterContainer extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    validate: false,
  }

  changeHandler = (e, filed) => {
    this.setState({
      [filed]: e.target.value
    })
  }

  registerHandle = () => {
    const { name, email, password, confirm } = this.state;

    this.props.sendRegistrationAttempt({
      name,
      email,
      password,
      confirm,
    });
  }

  render() {
    return (
      <Layout>
        <h1>Registration</h1>

        <div>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={(e) => this.changeHandler(e, 'name')}
          />
        </div>
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
            type="password"
            value={this.state.password}
            onChange={(e) => this.changeHandler(e, 'password')}
          />
        </div>
        <div>
          <label htmlFor="password-confirm">Confirm Password</label>
          <input
            name="password-confirm"
            type="password"
            value={this.state.confirm}
            onChange={(e) => this.changeHandler(e, 'confirm')}
          />
        </div>

        <div onClick={this.registerHandle}>Confirm</div>
      </Layout>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
      sendRegistrationAttempt: (data) => {
        dispatch(sendRegistrationAttempt(data));
      }
  }
}

export default connect(null, mapDispatchToProps)(RegisterContainer);