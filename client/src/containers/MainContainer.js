import React from 'react';
import { connect } from 'react-redux';

import StartGameContainer from '../components/startGameComponents/StartGameContainer';
import LobbyContainer from '../components/gameLobbyComponents/LobbyContainer';

class MainContainer extends React.Component {
    render() {
        const { position } = this.props;

        let containerTorender;

        switch(position) {
            case 'lobby':
                containerTorender = <StartGameContainer />;
                break;

            case 'gameLobby':
                containerTorender = <LobbyContainer />;
                break;

            case 'inGame':
                containerTorender = <div>GAME!!!!!!!!!!!!!</div>;
                break;

            default:
                containerTorender = <StartGameContainer />;
                break;
        }

        return containerTorender;
    }
}

const mapStateToProps = state => {
    const { position } = state.playerReducer

    return (
        { position }
    );
}

export default connect(mapStateToProps, null)(MainContainer);