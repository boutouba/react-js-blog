import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./AddTypes.css";
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const AddTypes = () => {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");

    const save = (event) => {
        event.preventDefault();
        var type = {
            "title": title,
        }
        console.log(type)
        var options = {
            "method": "post",
           headers: {'Content-Type':'application/json'},
            "body": type
        }
        axios.post('http://localhost:8090/api/v1/type/add', type)
              .then(res => {
                console.log(res);
                console.log(res.data);
                  navigate("/types")
              })
    }

    useEffect(() => {
    });

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h2>Add types</h2>
                           <Form>
                           <Row>
                           <Col>
                              <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="email"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Username" />
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

export default AddTypes;
