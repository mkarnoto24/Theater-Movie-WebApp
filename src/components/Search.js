import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

class Search extends Component {

    render() {
        return (
            <div>
                <Container>
                    <div className="row mt-3 justify-content-center">
                        <div className="col-md-8">
                            <h1 className="text-center">Search Movie</h1>
                            <div className="input-group mb-3">
                                <input type="text" id="search-input" className="form-control" placeholder="Movie Title..." />
                                <div className="input-group-append">
                                    <button className="btn btn-dark" id="search-button"
                                        type="button">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}
export default Search;