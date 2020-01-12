import React, { Component } from 'react';
import { Modal, Row, Col, Button, Form } from 'react-bootstrap';

export class SelectTickets extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: 0,
        }

    }
    handleSelect = (event) => {
        this.setState({
            value: event.target.value

        })
    }
    handleSave = () => {
        alert(this.state.value)
    }
    buildOptions() {
        var arr = [];

        for (let i = 1; i <= 10; i++) {
            arr.push(<option key={i} value={JSON.stringify(i)}>{i}</option>)
        }

        return arr;
    }

    render() {

        return (

            <div>
                <Modal
                    {...this.props}
                    bsSize="large"
                    aria-labelledby="contained-modal-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-lg">Select Tickets</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Select Tickets </Form.Label>
                            <Form.Control as="select" onChange={this.handleSelect}>
                                {this.buildOptions()}
                            </Form.Control>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.handleSave}>Save</Button>
                        <Button onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
