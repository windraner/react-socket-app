import React, { Component } from 'react'
import styled from 'styled-components';

class StartGameButtom extends Component {

    startGame = () => {
        const {socket, isGameCanStart} = this.props;
        
        // if(!isGameCanStart) return;

        socket.emit('startNewGame');
	}

    render() {
        const {isGameCanStart} = this.props;
        const isActive = isGameCanStart;

        return (
            <ButtonStyled
                isActive={isActive}
                onClick={this.startGame}
            >
                Start
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
    background: ${props => props.isActive ? '#8287FF' : '#B3B3B3'};
    box-shadow: 0 -5px ${props => props.isActive ? '#6A6DCB' : '#888'} inset;
    transition: 0.2s;
    &:hover {
        background: ${props => props.isActive ? '#7C80E6' : '#A5A5A5'};
    }
    &:active {
        background: ${props => props.isActive ? '#6A6DCB' : '#888'};
        box-shadow: 0 -4px ${props => props.isActive ? '#6A6DCB' : '#888'} inset;
    }
    cursor: pointer;
`;

export default StartGameButtom;