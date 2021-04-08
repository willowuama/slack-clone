import styled from 'styled-components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { sidebarItems } from '../data/SidebarData'
import { channelItems } from '../data/ChannelItems'
import AddIcon from '@material-ui/icons/Add';

const Sidebar = () => {
    return (
        <Container>
            <WorkspaceContainer>
                <Name>
                    OwuamaChat
                </Name>
                <NewMessageIcon>
                    <AddCircleOutlineIcon />
                </NewMessageIcon>
            </WorkspaceContainer>
            <MainChannels>
                {
                    sidebarItems.map(item => (
                        <MainChannelItem>
                            {item.icon}
                            {item.text}
                        </MainChannelItem>
                    ))
                }
            </MainChannels>
            <ChannelsContainer>
                <NewChannelContainer>
                    <div>
                        Channels
                    </div>
                    <NewChannelIcon>
                        <AddIcon />
                    </NewChannelIcon>
                </NewChannelContainer>
                <ChannelList>
                    {
                        channelItems.map(item => (
                            <Channel>
                                {item.text}{item.id}
                            </Channel>
                        ))
                    }
                </ChannelList>
            </ChannelsContainer>
        </Container>
    )
}

export default Sidebar


const Container = styled.div`
    background: #3F0E40;
`

const WorkspaceContainer = styled.div`
    color: white;
    height: 64px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    justify-content: space-between;
    border-bottom: 1px solid #532752;
`

const Name = styled.div`
`

const NewMessageIcon = styled.div`
    width: 36px;
    height: 36px;
    background: white;
    color: #3F0E40;
    fill: #3F0E40;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;

    :hover {
        color: white;
        background: #350D36;
    }

`

const MainChannels = styled.div`
    padding-top: 20px;
`

const MainChannelItem = styled.div`
    color: rgb(188, 171, 188);
    display: grid;
    grid-template-columns: 15% auto;
    height: 28px;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;

    :hover {
        color: white;
        background: #350D36;
    }

`

const ChannelsContainer = styled.div`
    padding-top: 20px;
`

const NewChannelContainer = styled.div`
    display: flex;
    color: rgb(188, 171, 188);
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
`

const ChannelList = styled.div`
    color: rgb(188, 171, 188);
`

const Channel = styled.div`
    height 28px;
    display: flex;
    align-items: center;
    padding-left: 27px;
    cursor: pointer;

    :hover {
        color: white;
        background: #350D36;
    }

`

const NewChannelIcon = styled.div`
    cursor: pointer;

    :hover {
        color: white;
        background: #350D36;
    }

`