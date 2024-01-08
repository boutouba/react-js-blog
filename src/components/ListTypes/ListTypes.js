import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./ListTypes.css";
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const ListTypes = () => {
    const navigate = useNavigate();
    const [types, setTypes] = useState([]);

    const removeType = (id) => {
        axios.delete('http://localhost:8090/api/v1/type/delete/' + id)
            .then(res => {
                getTypes();
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
                        <Button onClick={() => navigate("/type/add") } variant="primary"
                        className="mt-lg-5 float-end">Add
                        type</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>List of types</h2>
                        <Table striped bordered hover className="mt-lg-4">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {types.map((col, j) =>
                              <tr>
                                  <td>{col.id}</td>
                                  <td>{col.title}</td>
                                  <td>
                                      <Link to={"/type/edit/" + col.id}><Button>Edit</Button></Link>
                                      <Button onClick={() => removeType(col.id)}>Delete</Button>
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

export default ListTypes;
