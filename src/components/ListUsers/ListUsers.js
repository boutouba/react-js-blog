import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./ListUsers.css";
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";

const ListUsers = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    const getUsers = () => {
        var options = {
        }
        fetch('http://localhost:8087/api/v1/users', options)
              .then(results => results.json())
              .then(data => {
                setUsers(data);
              });
    }

    useEffect(() => {
        getUsers();
    },[]);

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Button onClick={() => navigate("/user/add") } variant="primary"
                        className="mt-lg-5 float-end">Add
                        user</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>List of users</h2>
                        <Table striped bordered hover className="mt-lg-4">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Full name</th>
                                <th>Username</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {users.map((col, j) =>
                              <tr>
                                  <td>{col.id}</td>
                                  <td>{col.fullname}</td>
                                  <td>{col.username}</td>
                                  <td>@mdo</td>
                              </tr>
                            )}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ListUsers;
