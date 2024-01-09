import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./EditPosts.css";
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";

const EditPosts = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [types, setTypes] = useState([]);
    const [id, setId] = useState("");
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
            "headers": {'Content-Type':'application/json'},
            "body": post
        }
        axios.put('http://localhost:8090/api/v1/post/edit/' + id, post)
              .then(res => {
                console.log(res);
                console.log(res.data);
                  navigate("/posts")
              })
    }

    const getPost = () => {
        axios.get(`http://localhost:8090/api/v1/post/${params.id}`)
            .then(res => {
                console.log(res);
                setId(res.data.id)
                setTitle(res.data.title);
                setContent(res.data.content);
                setType(res.data.type.id);
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
        getPost();
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
                                    <Form.Control
                                      as="select"
                                      onChange={(e) => setType(e.target.value)}
                                    >
                                        <option key="0" value="0">---</option>
                                        {types.map((e, key) => {
                                            return <option key={key} value={e.id}>{e.title}</option>;
                                        })}
                                    </Form.Control>

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

export default EditPosts;
