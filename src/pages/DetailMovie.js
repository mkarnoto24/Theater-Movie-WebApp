import React, { Component } from 'react'
import { MDBContainer } from 'mdbreact'
import Navbar from '../../src/components/Navbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import axios from 'axios';

class DetailMovie extends Component {
    constructor() {
        super()
        this.state = {
            movies: [],
            genres: []
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`https://theater-movie-api.herokuapp.com/api/v1/movie/${id}`)
            .then(res => {
                this.setState({
                    movies: res.data,
                    genres: res.data.genreId
                })
                console.log(this.state.movies)
            })
            .catch(err => console.log(err))
    }

    render() {
        const movie = this.state.movies
        const genre = this.state.genres
        return (
            <div>
                <Navbar></Navbar>
                <Container>
                    <div style={{ margin: '50px 0' }}>
                        <h2>{movie.title}</h2>
                    </div>
                    <div style={{ marginBottom: '50px' }}>
                        <Container>
                            <Row>
                                <Col xs={4}>
                                    <div style={{
                                        position: 'absolute',
                                        color: 'black',
                                        float: 'right',
                                        width: '40%',
                                        height: '30px',
                                        backgroundColor: 'white',
                                        paddingTop: '3px',
                                        textAlign: 'center',
                                        borderRadius: '3px',
                                        margin: '5px'
                                    }}>
                                        {movie.duration} Minutes
                                    </div>
                                    <img src={movie.poster} alt="poster-movie" fluid />

                                    <br></br>
                                    <ButtonToolbar style={{ width: '100%' }}>
                                        {
                                            localStorage.getItem("isLogin") ?
                                                <div>

                                                    <Button variant="outline-danger" >
                                                        <Link to={`/booking/${movie.id}`}>Buy</Link>
                                                    </Button>

                                                </div>
                                                : <Button style={{ width: '85%' }} variant="outline-danger" >
                                                    <Link to="/login/user">Please Login to buy ticket</Link>
                                                </Button>
                                        }

                                    </ButtonToolbar>

                                </Col>
                                <Col xs={8}>

                                    <Table responsive >

                                        <tbody>
                                            <tr>

                                                <td>Jenis Film </td>
                                                <td>:</td>
                                                <td>{genre.name}</td>
                                            </tr>
                                            <tr>
                                                <td>Sutradara</td>
                                                <td>:</td>
                                                <td>{movie.director}</td>
                                            </tr>
                                            <tr>
                                                <td>Casts</td>
                                                <td>:</td>
                                                <td>{movie.actor}</td>
                                            </tr>
                                            <tr style={{ textAlign: "justify" }}>
                                                <td>Sinopsis</td>
                                                <td>:</td>
                                                <td>{movie.sinopsis}</td>
                                            </tr>
                                        </tbody>
                                    </Table>

                                </Col>
                            </Row></Container>
                    </div>
                    <MDBContainer>
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item"
                                src={movie.trailer} title={movie.id}></iframe>
                        </div>
                    </MDBContainer>
                </Container>
            </div >

        )
    }
}
export default DetailMovie