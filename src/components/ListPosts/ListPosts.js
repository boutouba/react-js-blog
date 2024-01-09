import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./ListPosts.css";
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const ListPosts = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);

    const removeUser = (id) => {
        axios.delete('http://localhost:8090/api/v1/user/delete/' + id)
            .then(res => {
                getPosts();
            })
    }

    const getPosts = () => {
        var options = {
        }
        fetch('http://localhost:8090/api/v1/posts', options)
              .then(results => results.json())
              .then(data => {
                setPosts(data);
              });
    }

    useEffect(() => {
        getPosts();
    },[]);

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Button onClick={() => navigate("/post/add") } variant="primary"
                        className="mt-lg-5 float-end">Add
                        post</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>List of users</h2>
                        <Table striped bordered hover className="mt-lg-4">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Type</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {posts.map((col, j) =>
                              <tr>
                                  <td>{col.id}</td>
                                  <td>{col.title}</td>
                                  <td>{col.content}</td>
                                  <td>{col.type.title}</td>
                                  <td>
                                      <Link to={"/post/edit/" + col.id}><Button>Edit</Button></Link>
                                      <Button onClick={() => removeUser(col.id)}>Delete</Button>
                                  </td>
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

export default ListPosts;
