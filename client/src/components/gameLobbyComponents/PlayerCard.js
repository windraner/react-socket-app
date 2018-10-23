import React, { Component } from 'react';
import styled from 'styled-components';

class PlayerCard extends Component {
    render() {
        const {item, isActive} = this.props;

        return (
            <WrapperStyled isActive={isActive}>
                <TextStyled>
                    {item.name ? item.name : 'noName'}
                </TextStyled>

                <ReadyContainerStyled>
                    {item.ready ? <CheckerStyled /> : null}
                </ReadyContainerStyled>
            </WrapperStyled>
        );
    }
}

const WrapperStyled = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px 0;
    padding: 8px 0 11px;
    box-sizing: border-box;
    color: #fff;
    font-size: 22px;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    background: ${props => props.isActive ? '#43d136' : '#8287FF'};
`;

const TextStyled = styled.div`

`;

const ReadyContainerStyled = styled.div`
    position: relative;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #fff;
`;

const CheckerStyled = styled.div`
    position: absolute;
    top: 1px;
    left: 6px;
    width: 7px;
    height: 14px;
    border-bottom: solid 4px #43d136;
    border-right: solid 4px #43d136;
    transform: rotate(45deg);
`;

export default PlayerCard;
