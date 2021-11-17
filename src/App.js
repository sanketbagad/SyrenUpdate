import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header"
import { Container } from 'react-bootstrap';
import Favourites from './Components/Favourites/Favourites';

function App() {
  return (
    <Container>
     <Header />
     <Container style={{marginTop: "2rem", borderStyle:"solid" }}>
       <Favourites />
     </Container>
    </Container>
  );
}

export default App;
