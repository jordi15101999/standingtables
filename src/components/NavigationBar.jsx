import { Container, Navbar, Nav } from "react-bootstrap";
import { IoStatsChartSharp } from "react-icons/io5";
const NavigationBar = () => {
  return (
    <div>
      <Navbar className="justify-content-between shadow-lg" bg="dark">
        <Container className="d-flex items-center justify-content-center">
          <Navbar.Brand href="#">
            <IoStatsChartSharp className="text-white" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="text-white">Top Leagues Standings</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
