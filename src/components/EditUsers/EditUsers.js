import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./AddUsers.css";
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";

const EditUsers = () => {

    const navigate = useNavigate();

    const params = useParams();
    const [id, setId] = useState("");
    const [fullname, setFullname] = useState("");
    const [username, setUsername] = useState("");

    const edit = (event) => {
        event.preventDefault();
        var user = {
            "fullname": fullname,
            "username": username
        }
        console.log(user)
        var options = {
            "method": "post",
           headers: {'Content-Type':'application/json'},
            "body": user
        }
        axios.put('http://localhost:8087/api/v1/user/edit/' + id, user)
              .then(res => {
                console.log(res);
                console.log(res.data);
                navigate("/users")
              })
    }

    const getUser = () => {
        axios.get(`http://localhost:8087/api/v1/user/${params.id}`)
            .then(res => {
                console.log(res);
                setId(res.data.id)
                setUsername(res.data.username);
                setFullname(res.data.fullname);
            })
    }

    useEffect(() => {
        getUser();
    },[]);

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h2>Update user</h2>
                           <Form>
                           <Row>
                           <Col>
                              <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" value={username}
                                              onChange={(e) => setUsername(e.target.value)}
                                placeholder="Username" />
                              </Form.Group>
                              </Col>
                              <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                  <Form.Label>Full name</Form.Label>
                                  <Form.Control value={fullname}
                                  onChange={(e) => setFullname(e.target.value)}
                                  type="text" placeholder="Full name" />
                                </Form.Group>
                             </Col>
                             </Row>
                              <Button onClick={edit} variant="primary" type="submit">
                                Save user
                              </Button>
                            </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default EditUsers;
