import React, { Component } from 'react'
import styled from 'styled-components';

class ChatMessages extends Component {

    scrollToBottom = () => {
        setTimeout(() => {
            const element = document.getElementById('chat_window');
            if(element) {
                element.scrollTop = element.scrollHeight;
            }
        }, 0);
    }

    renderMessages = () => {
        const { messages } = this.props;
        if(messages.length === 0) return null;

        const result = messages.map((item, i) => {
            return (
                <MessageWrapper key={i}>
                    <NameStyled>{item.name ? item.name : 'noName'}:</NameStyled>
                    <MessageStyled>{item.message}</MessageStyled>
                </MessageWrapper>
            );
        });

        return result;
    }

    render() {
        return (
            <WrapperStyled id="chat_window">
                {this.renderMessages()}
                {this.scrollToBottom()}
            </WrapperStyled>
        )
    }
}

const WrapperStyled = styled.div`
    width: 185px;
    height: 225px;
    margin: 5px 5px 0;
    box-sizing: border-box;
    border: solid 1px #8287FF;
    overflow-y: scroll;
`;

const MessageWrapper = styled.div`
    display: flex;
    margin: 2px;
`;

const NameStyled = styled.div`
    color: #8287FF;
    font-size: 17px;
    font-weight: 700;
    margin-right: 2px;
`;

const MessageStyled = styled.div`
    color: #8287FF;
    font-size: 16px;
`;

export default ChatMessages