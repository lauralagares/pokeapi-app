import './style.css';
import PokeNav from "../../components/nav/nav";
import Footer from "../../components/footer/footer";
import { Container } from 'react-bootstrap';
import Pikachu from '../../images/pikachu.png';

function PokeApi() {
    return (
        <>
        <PokeNav></PokeNav>
            <Container style={{ height: '75vh' }}>
                <div className='animation-container'>
                    <img src={Pikachu} className="img-fluid pikachu-image" />
                </div>
            </Container> 
        <Footer></Footer>
        </>
    )
  }
  
  export default PokeApi