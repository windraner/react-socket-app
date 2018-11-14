import React, { Component } from 'react'
import styled from 'styled-components';

export default class ChatInput extends Component {

  state = {
    inputValue: ''
  }

  inputHandler = (e) => {
    if(e.charCode === 13) {
      const newString = this.state.inputValue.trim();
      
      if(newString) {
        const {socket} = this.props;
        socket.emit('sendMessage', newString);
      }
      
      return this.setState({inputValue: ''});
    }

    this.setState({inputValue: e.target.value});
  }

  render() {
    return (
      <WrapperStyled>
        <InputStyled
          value={this.state.inputValue}
          onChange={this.inputHandler}
          onKeyPress={this.inputHandler}
        />
      </WrapperStyled>
    )
  }
}

const WrapperStyled = styled.div`
  margin: 10px auto;
`;

const InputStyled = styled.input`
  font-size: 16px;
  width: 185px;
  padding: 2px;
  margin: 0 auto;
  box-sizing: border-box;
  border: solid 1px #8287FF;
`;