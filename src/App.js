import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AuthProvider from "./provider/authProvider";
import Routes from "./provider/Routes";

function App() {
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    );
}

export default App;
