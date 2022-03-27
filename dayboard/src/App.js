import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { Form, Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="background"></div>
      <Route path="/write">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>제목</Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>본문</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="outline-success">Success</Button>
        </Form>
      </Route>

      <Route></Route>
    </div>
  );
}

export default App;
