import { Container, Col, Row } from "reactstrap";
import Header from "./components/Header";
import Product from "./components/Product";
import ProductProvider from "./components/context/PruductsProvider";
function App() {
  return (
    <ProductProvider>
      <Container>
        <Row>
          <Header></Header>
        </Row>
        <Row>
          <Col xs="12" sm="12">
            <Product></Product>
          </Col>
        </Row>
      </Container>
    </ProductProvider>
  );
}

export default App;
