import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useEffect } from 'react'
import Chat from './components/Chat'
import Login from './components/Login'
import styled from 'styled-components'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import db from './firebase'

function App() {

  const getChannels = () => {
    db.collection('rooms').onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        console.log(doc.data());
      })
    })
  }

  useEffect(() => {
    getChannels();
  }, [])


  return (
    <div className="App">
    <Router>
      <Container>
        <Header />
        <Main>
        <Sidebar />
        <Switch>
          <Route path="/room">
            <Chat />
          </Route>
          <Route page="/">
            <Login />
          </Route>
        </Switch>
        </Main>
      </Container>
    </Router>
    </div>
  );
}

export default App;


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px auto;
`
const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`