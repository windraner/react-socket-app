import React, { Component } from 'react';
import styled from 'styled-components';

class EmptyCard extends Component {
    render() {
        return (
            <WrapperStyled>
                waiting for player ...
            </WrapperStyled>
        );
    }
}

const WrapperStyled = styled.div`
    height: 47px;
    margin: 10px 0;
    padding: 8px 0 11px;
    box-sizing: border-box;
    color: #8287FF;
    font-size: 22px;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    border: solid 2px #8287FF;
`;

export default EmptyCard;
