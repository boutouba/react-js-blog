import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListUsers from './components/ListUsers/ListUsers.js';
import Layout from './components/Layout/Layout.js';
import Login from './components/Login/Login.js'
import { Route, Link, Routes, BrowserRouter, Outlet } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Login />} />
              <Route path="list-users" element={<ListUsers />} />
            </Route>
          </Routes>
        </BrowserRouter>
    );
}

export default App;
