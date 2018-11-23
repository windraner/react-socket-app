import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import {setPlayerName} from '../../action/playerAction';

import Layout from '../common/Layout';

import CreateNewGameButton from './CreateNewGameButton';
import GameListList from './GameListList';
import CreateNewGameInput from './CreateNewGameInput';

class StartGameContainer extends React.Component {
    render() {
        return (
            <Layout>
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
            </Layout>
            
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