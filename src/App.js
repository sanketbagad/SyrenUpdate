import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header"
import { Container } from 'react-bootstrap';
import Favourites from './Components/Favourites/Favourites';
import Links from './Components/Links/Links';
import Control from './Components/Control/Control';
import Data from './Components/Data/Data';

function App() {
  return (
    <Container>
     <Header />
     <Container style={{marginTop: "2rem", borderStyle:"solid" }}>
       <Favourites />
       <Links />
       <Control />
       <Data />
     </Container>
    </Container>
  );
}

export default App;
