import styled from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const Header = () => {
    return (
        <Container>
            <Main>
                <AccessTimeIcon />
                <SearchContainer>
                    <Search>
                        <input type="text" placeholder="Search..." />
                    </Search>
                </SearchContainer>
                <HelpOutlineIcon />
            </Main>
            <UserContainer>
                <Name>
                    William
                </Name>
                <UserImage>
                    <img src="https://i.imgur.com/6VBx3io.png" />
                </UserImage>
            </UserContainer>
        </Container>
    )
}

export default Header

// Container Styles
const Container = styled.div`
    background: #350d36;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);
    z-index: 10;
`

// User Container Style
const UserContainer = styled.div`
    display: flex;
    align-items: center;
    padding-right: 16px;
    position: absolute;
    right: 0;
`

// Main Style
const Main = styled.div`
    display: flex;
    margin-left: 16px;
    margin-right: 16px;
`

// Search Container Style
const SearchContainer = styled.div`
    min-width: 400px;
    margin-left: 16px;
    margin-right: 16px;
`

// Search input Style
const Search = styled.div`
    width: 100%;
    box-shadow: inset 0 0 0 1px rgb(104 74 104);
    border-radius: 6px;
    display: flex;
    align-items: center;

    input {
        width: 100%;
        background-color: transparent;
        border: none;
        padding-left: 8px;
        padding-right 8px;
        color: white;
        padding-top: 4px;
        padding-bottom: 4px;
    }

    input:focus {
        outline: none;
    }

`

// Name Div Style
const Name = styled.div`
    padding-right: 16px;
`

// Userimg Div Style 
const UserImage = styled.div`
    width: 28px;
    height: 28px;
    border: 2px solid white;
    border-radius: 3px;

    cursor: pointer;

    img {
        width: 100%;
    }

`