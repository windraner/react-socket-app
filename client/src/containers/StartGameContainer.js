import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import {setPlayerName} from '../action/playerAction';

import CreateNewGameButton from '../components/startGameComponents/CreateNewGameButton';
import GameListList from '../components/startGameComponents/GameListList';
import CreateNewGameInput from '../components/startGameComponents/CreateNewGameInput';

class StartGameContainer extends React.Component {
    render() {
        return (
            <ContainerStyled>
                <GameListList
                    socket={this.props.socket}
                    gameList={this.props.gameList}
                />
                <CreateNewGameInput
                    setPlayerName={this.props.setPlayerName}
                    name={this.props.name}
                />
                <CreateNewGameButton
                    socket={this.props.socket}
                    name={this.props.name}
                />
            </ContainerStyled>
        );
    }
}

const ContainerStyled = styled.div`
    margin: 0 auto;
    width: 380px;
`;

const mapStateToProps = state => {
    const { name } = state.playerReducer
    const { socket, gameList } = state.socketReducer;

    return (
        { socket, gameList, name }
    );
}

function mapDispatchToProps(dispatch) {
    return {
        setPlayerName: (data) => {
          dispatch(setPlayerName(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartGameContainer);