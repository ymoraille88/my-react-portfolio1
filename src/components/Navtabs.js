import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navtabs = ({currentPage,handlePageChange}) =>{
return(
<Navbar bg="light" variant="light">
  <Container>
    <Navbar.Brand onClick={()=>handlePageChange("")} href="/">Yves-Henry Moraille</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link onClick={()=>handlePageChange("home")} href="#home">Home</Nav.Link>
      <Nav.Link onClick={()=>handlePageChange("about")} href="#about">About</Nav.Link>
      <Nav.Link onClick={()=>handlePageChange("portfolio")} href="#portfolio">Portfolio</Nav.Link>
      <Nav.Link onClick={()=>handlePageChange("resume")} href="#resume">Resume</Nav.Link>
      <Nav.Link onClick={()=>handlePageChange("contact")} href="#contact">Contact</Nav.Link>
    </Nav>
  </Container>
</Navbar>

);
}

export default Navtabs;