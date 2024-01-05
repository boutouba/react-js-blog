import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./AddUsers.css";
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

const AddUsers = () => {
    const [fullname, setFullname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");

    const save = (event) => {
        event.preventDefault();
        var user = {
            "fullname": fullname,
            "username": username,
            "password": password
        }
        console.log(user)
        var options = {
            "method": "post",
           headers: {'Content-Type':'application/json'},
            "body": user
        }
        axios.post('http://localhost:8087/api/v1/user/add', user)
              .then(res => {
                console.log(res);
                console.log(res.data);
              })
    }

    useEffect(() => {
    });

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h2>Add users</h2>
                           <Form>
                           <Row>
                           <Col>
                              <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="email"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Username" />
                              </Form.Group>
                              </Col>
                              <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                  <Form.Label>Full name</Form.Label>
                                  <Form.Control
                                  value={fullname}
                                  onChange={(e) => setFullname(e.target.value)}
                                  type="email" placeholder="Full name" />
                                </Form.Group>
                             </Col>
                             </Row>
                               <Row>
                               <Col>
                                  <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>password</Form.Label>
                                    <Form.Control type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="password" />
                                  </Form.Group>
                                  </Col>
                                  <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                      <Form.Label>repassword</Form.Label>
                                      <Form.Control type="password"
                                      value={repassword}
                                      onChange={(e) => setRepassword(e.target.value)}
                                      placeholder="password" />
                                    </Form.Group>
                                 </Col>
                                 </Row>
                              <Button onClick={save} variant="primary" type="submit">
                                Save user
                              </Button>
                            </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddUsers;
