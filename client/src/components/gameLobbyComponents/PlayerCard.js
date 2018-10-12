import React, { Component } from 'react';
import styled from 'styled-components';

class PlayerCard extends Component {
    render() {
        const {item} = this.props;

        return (
            <WrapperStyled>
                {item.name ? item.name : 'noName'}
            </WrapperStyled>
        );
    }
}

const WrapperStyled = styled.div`
    margin: 10px 0;
    padding: 8px 0 11px;
    box-sizing: border-box;
    color: #fff;
    font-size: 22px;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    background: #8287FF;
`;

export default PlayerCard;
