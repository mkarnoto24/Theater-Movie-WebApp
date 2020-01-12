import React, { Component } from 'react';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { SelectTickets } from './SelectTickets'
// import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

class Booking extends Component {
    constructor() {
        super()
        this.state = {
            orders: [],
            movies: [],
            theaters: [],
            deps: [], addModalShow: false
        }
    }



    componentDidMount() {
        const idMovie = this.props.match.params.id

        axios.get(`https://theater-movie-api.herokuapp.com/api/v1/movie/${idMovie}`)
            .then(res => {
                this.setState({
                    movies: res.data,
                    // movies: res.data.movieId,

                    // genres: res.data.genreId
                })
                console.log(this.state.movies)
            })
            .catch(err => console.log(err))
        axios.get(`https://theater-movie-api.herokuapp.com/api/v1/order/${idMovie}`)
            .then(res => {
                this.setState({
                    orders: res.data,
                    theaters: res.data.theaterId
                })
                console.log(this.state.orders)
            })
            .catch(err => console.log(err))
    }

    handleClick = (jam) => () => {
        this.setState({ addModalShow: true })
        console.log(jam)
    }
    render() {
        let addModalClose = () => this.setState({
            addModalShow: false
        })
        const sum_order = this.state.orders.length
        console.log(this.state.orders)
        return (

            <div>
                <Navbar></Navbar>
                <Container>
                    {
                        sum_order === 0 || "" ? <h4>Pemesanan Tiket Belum Tersedia untuk Film ini</h4>
                            :
                            <div style={{ marginTop: '50px' }}>
                                <Row>
                                    <Col xs={4}>
                                        <h4>{this.state.movies.title}</h4>
                                        <div>
                                            <div style={{
                                                position: 'absolute',
                                                color: 'black',
                                                float: 'right',
                                                width: '26%',
                                                height: '30px',
                                                backgroundColor: 'white',
                                                paddingTop: '3px',
                                                textAlign: 'center',
                                                borderRadius: '3px',
                                                margin: '5px'
                                            }}>
                                                {this.state.movies.duration} Minutes
                                    </div>
                                            <img src={this.state.movies.poster} alt="poster-movie"
                                                style={{ height: '300px' }}
                                                fluid />
                                        </div>

                                        {/* <p>{this.state.order.price}</p> */}
                                    </Col>
                                </Row>
                                <br></br>
                                <Row>
                                    {
                                        this.state.orders.map((item, i) =>
                                            <div>
                                                <Col xs={12}>
                                                    <div>
                                                        <h5>{item.theaterId.name}</h5>
                                                        <Button onClick={this.handleClick(`${item.show_time01.substr(0, 5)}`)}
                                                            style={{ margin: "15px" }}
                                                            variant="outline-success">{item.show_time01.substr(0, 5)}</Button>
                                                        <Button onClick={this.handleClick} style={{ margin: "15px" }} variant="outline-success">{item.show_time02.substr(0, 5)}</Button>
                                                        <Button onClick={this.handleClick} style={{ margin: "15px" }} variant="outline-success">{item.show_time03.substr(0, 5)}</Button>
                                                        <Button onClick={this.handleClick} style={{ margin: "15px" }} variant="outline-success">{item.show_time04.substr(0, 5)}</Button>
                                                        <Button onClick={this.handleClick} style={{ margin: "15px" }} variant="outline-success">{item.show_time05.substr(0, 5)} </Button> <h6 style={{ margin: '15px' }}>Rp. {item.price}</h6>
                                                        <hr></hr>
                                                    </div>
                                                </Col>
                                            </div>
                                        )
                                    }
                                </Row>
                            </div>

                    }

                </Container>
                <SelectTickets
                    show={this.state.addModalShow}
                    onHide={addModalClose}
                />
                <Footer></Footer>
            </div >
        )
    }
}
export default Booking;