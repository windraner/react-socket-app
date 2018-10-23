import React, { Component } from 'react';
import styled from 'styled-components';

import PlayerCard from './PlayerCard';
import EmptyCard from './EmptyCard';

class PlayerList extends Component {
    
    renderPlayers = () => {
        const { gameLobbyData, currentPlayerId } = this.props;

        if(!gameLobbyData.playersInRoom) return null;

        const emptySlots = new Array(gameLobbyData.playersPerRoom - gameLobbyData.playersInRoom.length);
        gameLobbyData.playersInRoom = gameLobbyData.playersInRoom.concat(emptySlots.fill(null));

        const result = gameLobbyData.playersInRoom.map(item => {
            if(!item) return <EmptyCard key={Math.random()} />;
            const isActive = item.id === currentPlayerId

            return (
                <PlayerCard
                    key={item.id}
                    item={item}
                    isActive={isActive}
                />
            );
        });

        return result;
    }

    render() {
        
        return (
            <ContainerStyled>
                {this.renderPlayers()}
            </ContainerStyled>
        );
    }
}

const ContainerStyled = styled.div`
    padding: 5px 15px;
    width: 100%;
    min-height: 250px;
    border: solid 2px #8287FF;
    border-radius: 5px;
    box-sizing: border-box;
`;

export default PlayerList;
