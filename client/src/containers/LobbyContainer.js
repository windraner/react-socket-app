import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import PlayerList from '../components/gameLobbyComponents/PlayerList';
import BackButton from '../components/gameLobbyComponents/BackButton';

class LobbyContainer extends Component {
    render() {
        const { gameLobbyData, socket } = this.props;

        return (
            <ContainerStyled>
                <PlayerList gameLobbyData={gameLobbyData} />
                <ButtonWrapperStyled>
                    <BackButton socket={socket} />
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