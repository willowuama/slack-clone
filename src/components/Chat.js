import styled from 'styled-components'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

const Chat = () => {
    return (
        <Container>
            <Header>
                <HeaderTop>
                    <ChannelName>
                        <NameText>
                            # Channel 1
                        </NameText>
                        <ChannelStar>
                            <StarBorderIcon />
                        </ChannelStar>
                    </ChannelName>
                    <ChannelDetails>
                        Details
                        <InfoIcon>
                            <InfoOutlinedIcon />
                        </InfoIcon>
                    </ChannelDetails>
                </HeaderTop>
                <HeaderBottom>
                    <Headline>
                        Company-wide announcements and work-based matters
                    </Headline>
                </HeaderBottom>
            </Header>
        </Container>
    )
}

export default Chat


const Container = styled.div``

const Header = styled.div`
    display: grid;
    border-bottom: 1px solid #BEBEBE;
`

const HeaderTop = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
`

const HeaderBottom = styled.div`
    padding-bottom: 5px;
`

const ChannelName = styled.div`
    display: flex;
    padding-left: 15px;
`

const ChannelDetails = styled.div`
    display: flex;
    justify-content: center;
    padding-right: 10px;
`

const NameText = styled.div`
    font-weight: 700;
`

const ChannelStar = styled.div`
    cursor: pointer;
`

const Headline = styled.div`
    padding-left: 15px;
    font-weight: 300;
`

const InfoIcon = styled.div`
    padding-left: 5px;
    cursor: pointer;    
`