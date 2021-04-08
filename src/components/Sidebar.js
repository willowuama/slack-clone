import styled from 'styled-components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

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

`