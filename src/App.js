import Login from "./components/Login";
import Signup from './components/Signup'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Col, Container, Row } from "react-bootstrap";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <Container>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path='/home' element={
                <ProtectedRoute>
                  <Home/>
                </ProtectedRoute>
              }
              />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
