import React, { Component } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';

import ChatInput from '../components/chatComponents/ChatInput';
import ChatMessages from '../components/chatComponents/ChatMessages';

import { removeMessages } from '../action/chatAction';

class ChatContainer extends Component {

    componentWillUnmount() {
        this.props.removeMessages();
    }

    render() {
        const { socket, messages } = this.props;

        return (
            <ContainerStyled>
                <TitleStyled>Chat</TitleStyled>

                <ChatMessages messages={messages} />

                <ChatInput socket={socket} />
            </ContainerStyled>
        )
    }
}

const ContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    border: solid 2px #8287FF;
    border-radius: 5px;
    box-sizing: border-box;
`;

const TitleStyled = styled.div`
    font-size: 22px;
    text-align: center;
    color: #8287FF;
    font-weight: 700;
    text-transform: uppercase;
`;

const mapStateToProps = state => {
    const { messages } = state.chatReducer;
    const { socket } = state.socketReducer;

    return (
        { socket, messages }
    );
}

function mapDispatchToProps(dispatch) {
    return {
        removeMessages: () => {
          dispatch(removeMessages());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);