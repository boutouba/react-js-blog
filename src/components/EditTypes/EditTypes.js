import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./EditTypes.css";
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";

const EditTypes = () => {

    const navigate = useNavigate();

    const params = useParams();
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");

    const edit = (event) => {
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
        axios.put('http://localhost:8090/api/v1/type/edit/' + id, type)
              .then(res => {
                console.log(res);
                console.log(res.data);
                navigate("/types")
              })
    }

    const getType = () => {
        axios.get(`http://localhost:8090/api/v1/type/${params.id}`)
            .then(res => {
                console.log(res);
                setId(res.data.id)
                setTitle(res.data.title);
            })
    }

    useEffect(() => {
        getType();
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
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" value={title}
                                              onChange={(e) => setTitle(e.target.value)}
                                placeholder="Title" />
                              </Form.Group>
                              </Col>

                             </Row>
                              <Button onClick={edit} variant="primary" type="submit">
                                Save type
                              </Button>
                            </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default EditTypes;
