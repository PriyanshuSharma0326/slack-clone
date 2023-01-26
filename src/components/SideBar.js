import React from 'react';
import styled from 'styled-components';

import SideBarOption from './SideBarOption';

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleAltIcon from  '@mui/icons-material/PeopleAlt';
import AppsIcon from  '@mui/icons-material/Apps';
import FileCopyIcon from  '@mui/icons-material/FileCopy';
import ExpandLessIcon from  '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from  '@mui/icons-material/ExpandMore';
import AddIcon from  '@mui/icons-material/Add';

import { useCollection } from 'react-firebase-hooks/firestore';
import db, { auth } from '../lib/config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function SideBar() {
    const [user] = useAuthState(auth);

    const [channels] = useCollection(db.collection('rooms'));

    return (
        <SideBarContainer>
            <SideBarHeader>
                <SideBarInfo>
                    <h2>Slack 2.0</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.displayName}
                    </h3>
                </SideBarInfo>
                
                <CreateIcon />
            </SideBarHeader>

            <SideBarOption Icon={InsertCommentIcon} title='Threads' />
            <SideBarOption Icon={InboxIcon} title='Mentions & Reactions' />
            <SideBarOption Icon={DraftsIcon} title='Saved Items' />
            <SideBarOption Icon={BookmarkBorderIcon} title='Channel Browser' />
            <SideBarOption Icon={PeopleAltIcon} title='People & user groups' />
            <SideBarOption Icon={AppsIcon} title='Apps' />
            <SideBarOption Icon={FileCopyIcon} title='File Browser' />
            <SideBarOption Icon={ExpandLessIcon} title='Show Less' />

            <hr />
            <SideBarOption Icon={ExpandMoreIcon} title='Channels' />
            <hr />

            <SideBarOption Icon={AddIcon} addChannelOption title='Add Channel' />

            {channels?.docs.map((doc) => (
                <SideBarOption 
                    key={doc.id} 
                    id={doc.id} 
                    title={doc.data().name} 
                />
            ))}
        </SideBarContainer>
    );
}

const SideBarContainer = styled.div`
    color: white;
    background-color: var(--slack-color);
    flex: 0.3;
    border-top: 1px solid #49274B;
    max-width: 260px;
    margin-top: 60px;

    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }

    > hr {
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #49274B;
    }
`;

const SideBarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274B;
    padding: 13px;

    > .MuiSvgIcon-root {
        padding: 8px;
        color: #49274B;
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
        cursor: pointer;
    }
`;

const SideBarInfo = styled.div`
    flex: 1;

    > h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    > h3 {
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }

    > h3 > .MuiSvgIcon-root {
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }
`;
