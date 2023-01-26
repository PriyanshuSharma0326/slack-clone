import React, { useState } from 'react';
import styled from 'styled-components';

import db, { auth } from '../lib/config/firebase';
import firebase from 'firebase/compat/app';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth } from './lib/config/firebase';

export default function ChatInput({ channelName, channelId, chatRef }) {
    const [user] = useAuthState(auth);

    const [inputValue, setInputValue] = useState('');

    function handleChange (event) {
        setInputValue(event.target.value);
    }

    function sendMessage (event) {
        event.preventDefault();

        if (!channelId) {
            return false;
        }

        db.collection('rooms').doc(channelId)
        .collection('messages').add({
            message: inputValue,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user?.displayName,
            userImage: user?.photoURL
        });

        chatRef.current.scrollIntoView({
            behavior: 'smooth',
        });

        setInputValue('');
    }

    return (
        <ChatInputContainer>
            <form>
                <input 
                    value={inputValue} 
                    onChange={handleChange}
                    placeholder={`Message #${channelName}`} 
                />
                <button hidden type='submit' onClick={sendMessage}>
                    SEND
                </button>
            </form>
        </ChatInputContainer>
    );
}

const ChatInputContainer = styled.div`
    border-radius: 20px;

    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }

    > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }
`;