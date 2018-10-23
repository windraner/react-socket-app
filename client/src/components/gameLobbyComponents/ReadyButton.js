import React, { Component } from 'react'
import styled from 'styled-components';

class ReadyButton extends Component {

	changeStatus = () => {
		const {socket} = this.props;
        socket.emit('readyForPlay');
	}

	render() {
		return (
			<ButtonStyled onClick={this.changeStatus}>
				Ready
			</ButtonStyled>
		)
	}
}

const ButtonStyled = styled.div`
    padding: 8px 0 11px;
    box-sizing: border-box;
    width: 30%;
    color: #fff;
    font-size: 22px;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    background: #8287FF;
    box-shadow: 0 -5px #6A6DCB inset;
    transition: 0.2s;
    &:hover {
        background: #7C80E6;
    }
    &:active {
        background: #6A6DCB;
        box-shadow: 0 -4px #6A6DCB inset;
    }
    cursor: pointer;
`;

export default ReadyButton;