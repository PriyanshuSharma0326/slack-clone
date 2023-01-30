import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import ChatInput from './ChatInput';
import Message from './Message';

import { useSelector } from 'react-redux';

import db from '../lib/config/firebase';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';

import { selectRoomId } from '../features/appSlice';

import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function Chat() {
    const chatRef = useRef(null);

    const roomId = useSelector(selectRoomId);

    const [roomDetails] = useDocument(
        roomId && db.collection('rooms').doc(roomId)
    );
    
    const [roomMessages, loading] = useCollection(
        roomId && 
        db.collection('rooms')
        .doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
    );

    useEffect(() => {
        chatRef?.current?.scrollIntoView({
            behavior: 'smooth',
        });
    }, [roomId, loading]);

    return (
        <ChatContainer>
            {roomDetails && roomMessages && (
                <>
                    <ChatHeader>
                        <ChatHeaderLeft>
                            <h4>
                                <strong>#{roomDetails?.data().name.replaceAll(' ', '-')}</strong>
                            </h4>

                            <StarBorderOutlinedIcon />
                        </ChatHeaderLeft>

                        <ChatHeaderRight>
                            <p>
                                <InfoOutlinedIcon /> Details
                            </p>
                        </ChatHeaderRight>
                    </ChatHeader>

                    <ChatMessages>
                        {roomMessages?.docs.map(doc => {
                            const { message, timestamp, user, userImage } = doc.data();

                            return (
                                <Message 
                                    key={doc.id}
                                    message={message}
                                    timestamp={timestamp}
                                    user={user}
                                    userImage={userImage}
                                />
                            );
                        })}

                        <ChatBottom ref={chatRef} />
                    </ChatMessages>

                    <ChatInput 
                        chatRef={chatRef}
                        channelName={roomDetails?.data().name}
                        channelId={roomId} 
                    />
                </>
            )}
        </ChatContainer>
    );
}

const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;
`;

const ChatHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
`;

const ChatHeaderLeft = styled.div`
    display: flex;
    align-items: center;

    > h4 {
        display: flex;
        text-transform: lowercase;
        margin-right: 10px;
    }

    > h4 > .MuiSvgIcon-root {
        margin-left: 10px;
        font-size: 18px;
    }
`;

const ChatHeaderRight = styled.div`
    > p {
        display: flex;
        align-items: center;
        font-size: 14px;
    }

    > p > .MuiSvgIcon-root {
        margin-left: 5px !important;
        font-size: 16px;
    }
`;

const ChatMessages = styled.div`

`;

const ChatBottom = styled.div`
    padding-bottom: 200px;
`;
