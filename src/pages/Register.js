import React, { Component } from 'react';
import Navbar from '../../src/components/Navbar';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import Footer from '../../src/components/Footer';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            users: {
                name: "",
                phone: "",
                email: "",
                password: ""
            }
        }
    }

    handleClick = () => {
        const {
            name,
            phone,
            email,
            password
        } = this.state.users
        axios.post('https://theater-movie-api.herokuapp.com/api/v1/customer/register', {
            name: name,
            phone_number: phone,
            email: email,
            password: password
        })
            .then(res => {
                const data = res.data;
                localStorage.setItem("name", data.customers.name);
                localStorage.setItem("id", data.customers.id);
                localStorage.setItem("token", data.token);
                localStorage.setItem("isLogin", true);
                // window.location.reload();
                // this.history.push('/home')
                this.props.history.push("/");
                // console.log(this.props.history.push('/'))
            })
            .catch(err => {
                console.log(err)
            })


    }

    handleChange = user => {
        let newUser = { ...this.state.users }
        newUser[user.target.name] = user.target.value

        this.setState({
            users: newUser
        })
        // console.log(this.state.users.phone)
    }
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Container style={{ marginTop: '100px', marginBottom: '100px' }}>

                    <Col xs={8} style={{ margin: '0 auto' }}>
                        <Form>
                            <h4> Form Register</h4>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text" placeholder="Your Name"
                                    name="name"
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control
                                    type="text" placeholder="Your Phone Number"
                                    name="phone"
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email" placeholder="Enter email"
                                    name="email"
                                    onChange={this.handleChange}
                                />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                            </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" onChange={this.handleChange} name="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" onClick={this.handleClick}>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Container>

                <Footer></Footer>
            </div>
        )
    }
}
export default Login;