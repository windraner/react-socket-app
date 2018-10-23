import React from 'react';
import styled from 'styled-components';

class GameListList extends React.Component {
    sendAttemptToEnter = (gameId) => {
        const {socket} = this.props;
        socket.emit('attemptEnterRoom', {gameId: gameId});
    }

    renderGameList = () => {
        const gameList = this.props.gameList.map((item, i) => {
            return (
                <ItemStyled 
                    key={item.gameOwner}
                    onClick={() => this.sendAttemptToEnter(item.gameOwner)}
                >
                    {item.name} ({item.playersInRoom.length}/{item.playersPerRoom})
                </ItemStyled>
            );
        });

        return gameList;
    }

    render() {
        return (
            <ContainerStyled>
                {this.renderGameList()}
            </ContainerStyled>
        );
    }
}

const ContainerStyled = styled.div`
    padding: 5px 15px;
    width: 100%;
    min-height: 200px;
    border: solid 2px #8287FF;
    border-radius: 5px;
    box-sizing: border-box;
`;

const ItemStyled = styled.div`
    margin: 0 0 8px 0;
    padding: 5px 0 8px;
    color: #fff;
    text-align: center;
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

export default GameListList;