import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import PlayerList from '../components/gameLobbyComponents/PlayerList';
import BackButton from '../components/gameLobbyComponents/BackButton';
import ReadyButon from '../components/gameLobbyComponents/ReadyButton';
import StartGameButtom from '../components/gameLobbyComponents/StartGameButtom';

class LobbyContainer extends Component {
    render() {
        const { gameLobbyData, socket } = this.props;
        
        const isOwner = gameLobbyData.gameOwner === socket.id;
        const isGameCanStart = gameLobbyData.canStart;

        return (
            <ContainerStyled>
                <PlayerList
                    gameLobbyData={gameLobbyData}
                    currentPlayerId={socket.id}
                />
                <ButtonWrapperStyled>
                    <BackButton socket={socket} />
                    
                    <ReadyButon socket={socket} />

                    { isOwner ? <StartGameButtom socket={socket} isGameCanStart={isGameCanStart} /> : null}
                </ButtonWrapperStyled>
            </ContainerStyled>
        );
    }
}

const ContainerStyled = styled.div`
    margin: 0 auto;
    width: 380px;
    height: 250px;
`;

const ButtonWrapperStyled = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0 0 0;
`;

const mapStateToProps = state => {
    const { gameLobbyData } = state.gameLobbyReducer
    const { socket } = state.socketReducer;

    return (
        { gameLobbyData, socket }
    );
}

// function mapDispatchToProps(dispatch) {
//     return {
//         setPlayerName: (data) => {
//           dispatch(setPlayerName(data));
//         }
//     }
// }

export default connect(mapStateToProps, null)(LobbyContainer);