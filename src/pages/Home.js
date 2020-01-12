import React, { Component } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Navbar from '../../src/components/Navbar';
import Search from '../../src/components/Search';
import Footer from '../../src/components/Footer';
import { Link } from 'react-router-dom'
import axios from 'axios';

class Home extends Component {
    constructor() {
        super()
        this.state = {
            movies: []
        }

    }

    componentDidMount() {
        axios.get(`https://theater-movie-api.herokuapp.com/api/v1/movies`)
            .then(res => {
                this.setState({
                    movies: res.data
                })
                console.log(this.state.movies)
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Search></Search>
                <div>
                    <Container>
                        <CardDeck>
                            {
                                this.state.movies.map((item, i) =>
                                    <Col sm={4} className="mb-4">
                                        <Card>
                                            <Link to={`/detailmovie/${item.id}`}><Card.Img variant="top" src={item.poster} /></Link>
                                            <Card.Body>
                                                <Card.Title>{item.title}</Card.Title>
                                            </Card.Body>
                                            <Card.Footer>
                                                <Link to={`/detailmovie/${item.id}`}><h5>See Detail</h5></Link>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                )
                            }
                        </CardDeck>
                    </Container>
                </div>
                <Footer></Footer>
            </div >
        )
    }
}
export default Home;