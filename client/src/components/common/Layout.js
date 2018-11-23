import React, { Component } from 'react'
import styled from 'styled-components';

import NavBar from './NavBar';

export default class Layout extends Component {
  render() {
    return (
      <ContainerStyled>
        <NavBar />
        {this.props.children}
      </ContainerStyled>
    )
  }
}

const ContainerStyled = styled.div`
  width: 1000px;
  margin: 0 auto;
`;