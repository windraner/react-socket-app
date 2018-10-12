import React from 'react';
import styled from 'styled-components';

class CreateNewGameInput extends React.Component {
    onChangeHandler = (e) => {
        const value = e.target.value.trim();
        if(!value) return;
        this.props.setPlayerName(value);
    }

    render() {
        return (
            <InputStyled
                placeholder="Your Name"
                onChange={this.onChangeHandler}
            />
        );
    }
}

const InputStyled = styled.input`
    display: block;
    height: 40px;
    margin: 10px auto;
    width: 270px;
    box-sizing: border-box;
    outline: none;
    border: none;
    color: #fff;
    font-size: 22px;
    font-weight: 700;
    text-align: center;
    background: #8287FF;
    &::placeholder {
        font-family: assistant;
        font-size: 18px;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.7);    
    }
`;

export default CreateNewGameInput;