'use strict'
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import AddBook from './BookFormModal';

export class Bestbooks extends Component {

    constructor(props) {
        super(props)
        this.state = {
            booksData: [],
            showAddModal: false,
        }
    }

    handelAddModal = (e) => {
        e.preventDefault();
        const responseBody = {
            title: e.target.bookName.value,
            description: e.target.bookdescription.value,
            status: e.target.bookstatus.value,
            email: e.target.useremail.value
        }
        axios.post(`${process.env.REACT_APP_API_URL}/books`, responseBody).then(createdbookobject => {
            this.state.booksData.push(createdbookobject.data);
            this.setState({ booksData: this.state.booksData });
            this.handelDisplayAddModal();
        }).catch(() => alert('Somthing went wrong'));
    };

    handelDeleteBook = (bookId) => {
        console.log(bookId);
        axios.delete(`${process.env.REACT_APP_API_URL}/books/${bookId}`).then(deleteResponse => {
            if (deleteResponse.data.deletedCount === 1) {
                const newBookArray = this.state.booksData.filter(book => book._id !== bookId);
                this.setState({ booksData: newBookArray });
            }
        }).catch(() => alert("something went wrong"));
       
    };

    handelDisplayAddModal = () => {
        this.setState({ showAddModal: !this.state.showAddModal });
    };

    componentDidMount = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/books`).then((booksResponse) => {

            this.setState({ booksData: booksResponse.data });
        }).catch(error => alert(error.message));

    };

    render() {
        return (
            <div>
                <Button onClick={this.handelDisplayAddModal}>
                    Add Book
                </Button>

                {
                    this.state.showAddModal &&
                    <>
                        <AddBook
                            show={this.state.showAddModal}
                            handelAddModal={this.handelAddModal}
                            handelDisplayAddModal={this.handelDisplayAddModal}
                        />
                    </>
                }
                {
                    this.state.booksData.length > 0 &&
                    <>
                        {
                            this.state.booksData.map(book => {
                                return (
                                    <>
                                        < Card style={{ width: '18rem' }}>
                                            <Card.Body>
                                                <Card.Title>{book.title}</Card.Title>
                                                <Card.Text>
                                                    <p>{book.description}</p>
                                                    <p>{book.status}</p>
                                                    <p>{book.email}</p>
                                                </Card.Text>
                                                 <Button variant="danger" onClick={() => this.handelDeleteBook(book._id)}>Delete Book</Button>
                                            </Card.Body>
                                        </Card>
                                    </>
                                )
                            })
                        }
                    </>
                }
            </div >
        )
    }
}
export default Bestbooks;


