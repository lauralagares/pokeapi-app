import Logo from '../../images/pokeapi.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function PokeNav () {

  let navigate = useNavigate();

  return (
    <Navbar bg="warning" expand="lg">
      <Container>
        <Navbar.Brand href="#pokeapi">
         <img
         onClick={() => navigate('/pokeapi')}
         style={{width: '16rem', height: '6rem'}}
         src={Logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fw-bold fs-1">
            <Nav.Link href="/"><p>PoKéMoN</p></Nav.Link>
            <Nav.Link href="/pokedex"><p>PoKéDeX</p></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PokeNav ;