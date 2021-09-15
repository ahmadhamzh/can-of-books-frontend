import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export class AddBook extends Component {
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handelDisplayAddModal}>
            <Modal.Header closeButton>
              <Modal.Title>Add a Book</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={this.props.handelAddModal}>
                <Form.Group className="mb-3">
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="text" name="bookName" placeholder="Enter Book Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="text" name="bookdescription" placeholder="Enter Book Discription" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Status</Form.Label>
                  <Form.Control type="text" name="bookstatus" placeholder="Enter Book Status" />
                </Form.Group>
                {/* <Form.Group className="mb-3"> */}
                  {/* <Form.Label>Email</Form.Label>
                  <Form.Control type="text" name="useremail" placeholder="Enter Book Email" />
                </Form.Group> */}
                <Button variant="primary" type="submit">
                  Create New Book
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        )
    }
}

export default AddBook;
