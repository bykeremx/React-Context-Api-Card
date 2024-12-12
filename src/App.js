import { Container,Col,Row } from "reactstrap";
import Header from "./components/Header";
import Product from "./components/Product";
function App() {
  return (
    
      <Container>
        <Row>
          <Header></Header>
        </Row>
        <Row>
          <Col xs="12" sm="6">
            <Product></Product>
          </Col>
        </Row>
      </Container>
    
  );
}

export default App;
