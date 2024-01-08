import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./AddPosts.css";
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const AddPosts = () => {
    const navigate = useNavigate();

    const [types, setTypes] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [type, setType] = useState("");

    const save = (event) => {
        event.preventDefault();
        var post = {
            "title": title,
            "content": content,
            "type": type
        }
        console.log(post)
        var options = {
            "method": "post",
           headers: {'Content-Type':'application/json'},
            "body": post
        }
        axios.post('http://localhost:8080/api/v1/post/add', post)
              .then(res => {
                console.log(res);
                console.log(res.data);
                  navigate("/posts")
              })
    }

    const getTypes = () => {
        var options = {
        }
        fetch('http://localhost:8090/api/v1/types', options)
            .then(results => results.json())
            .then(data => {
                setTypes(data);
            });
    }

    useEffect(() => {
        getTypes();
    },[]);


    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h2>Add posts</h2>
                           <Form>
                           <Row>
                           <Col>
                              <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Title" />
                              </Form.Group>
                              </Col>
                              <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                  <Form.Label>Content</Form.Label>
                                  <Form.Control
                                  value={content}
                                  onChange={(e) => setContent(e.target.value)}
                                  type="text" placeholder="Content" />
                                </Form.Group>
                             </Col>
                             </Row>
                               <Row>
                               <Col>
                                  <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Type</Form.Label>
                                    <Form.Control type="text"
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                    placeholder="password" />
                                  </Form.Group>
                                  </Col>
                                  <Col>
                                 </Col>
                                 </Row>
                              <Button onClick={save} variant="primary" type="submit">
                                Save post
                              </Button>
                            </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddPosts;
