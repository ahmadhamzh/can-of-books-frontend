'use strict'
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import axios from 'axios';


export class Bestbooks extends Component {

    constructor(props) {
        super(props)
        this.state = {
            booksData: []
        }
    }


        componentDidMount = () => {
            axios.get(`${process.env.REACT_APP_API_URL}/books`).then((booksResponse) => {

                this.setState({ booksData: booksResponse.data });
            }).catch(error => alert(error.message));
        }





    render() {
        return (
            <div>
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


