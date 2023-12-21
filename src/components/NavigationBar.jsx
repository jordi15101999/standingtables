import { Container, Navbar, Nav } from "react-bootstrap";
import { IoStatsChartSharp } from "react-icons/io5";
const NavigationBar = () => {
  return (
    <div>
      <Navbar className="justify-content-between" bg="white gradient">
        <Container>
          <Navbar.Brand href="#">
            <IoStatsChartSharp />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>Top Leagues Standings</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
