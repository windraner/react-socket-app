import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { logOut } from '../../action/authorization';

class NavBar extends Component {
  render() {
    const { token } = this.props;

    return (
      <NavContainerStyled>
        <HomeStyled to="/">
          Home
        </HomeStyled>
        {
          token ?
            <LogivStyled to="/info">
              Info
            </LogivStyled>
            :
            null
        }
        {
          token ?
            <LogOutStyled onClick={logOut}>
              Log out
            </LogOutStyled>
            :
            null
        }
        {
          !token ?
            <LogivStyled to="/login">
              Login
            </LogivStyled>
            :
            null
        }
        {
          !token ?
            <RegisterStyled to="/register">
              Register
            </RegisterStyled>
            :
            null
        }
      </NavContainerStyled>
    )
  }
}

const NavContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const HomeStyled = styled(Link)`
  text-align: center;
  width: 100%;
`;

const LogivStyled = styled(Link)`
  text-align: center;
  width: 100%;
`;

const RegisterStyled = styled(Link)`
  text-align: center;
  width: 100%;
`;

const LogOutStyled = styled.div`
  text-align: center;
  width: 100%;
  cursor: pointer;
  text-decoration: underline;
`;

const mapStateToProps = state => {
  const { token } = state.authReducer

  return (
      { token }
  );
}

export default connect(mapStateToProps)(NavBar);