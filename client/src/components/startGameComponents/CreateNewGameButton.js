import React from 'react';
import styled from 'styled-components';

class CreateNewGameButton extends React.Component {
    createNewGame = () => {
        const {socket, name} = this.props;
        socket.emit('createNewGame', {name: name});
    }

    render() {
        return (
            <ButtonStyled onClick={this.createNewGame}>Create NEW game</ButtonStyled>
        );
    }
}

const ButtonStyled = styled.div`
    margin: 0 auto;
    padding: 8px 0 11px;
    box-sizing: border-box;
    width: 270px;
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

export default CreateNewGameButton;