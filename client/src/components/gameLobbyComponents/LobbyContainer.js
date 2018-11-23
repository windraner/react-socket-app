import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import PlayerList from './PlayerList';
import BackButton from './BackButton';
import StartGameButtom from './StartGameButtom';
import ReadyButon from './ReadyButton';

import ChatContainer from '../chatComponents/ChatContainer';

class LobbyContainer extends Component {
    render() {
        const { gameLobbyData, socket } = this.props;
        
        const isOwner = gameLobbyData.gameOwner === socket.id;
        const isGameCanStart = gameLobbyData.canStart;

        return (
            <ContainerStyled>
                <ListWrapperStyled>
                    <PlayerList
                        gameLobbyData={gameLobbyData}
                        currentPlayerId={socket.id}
                    />
                    <ButtonWrapperStyled>
                        <BackButton socket={socket} />
                        
                        <ReadyButon socket={socket} />

                        { isOwner ? <StartGameButtom socket={socket} isGameCanStart={isGameCanStart} /> : null}
                    </ButtonWrapperStyled>
                </ListWrapperStyled>

                <ChatContainer />
            </ContainerStyled>
        );
    }
}

const ContainerStyled = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 600px;
    min-height: 250px;
`;

const ListWrapperStyled = styled.div`
    width: 380px;
`;

const ButtonWrapperStyled = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0 0 0;
`;

const mapStateToProps = state => {
    const { gameLobbyData } = state.gameLobbyReducer;
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