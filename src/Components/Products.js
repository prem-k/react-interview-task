import React from 'react';
import Config from './Config/config';
import { Link } from 'react-router';

const axios = require('axios');

class Product extends React.Component {
    
    baseUrl = Config.apiBaseUrl;

    constructor(props){
        super(props);
        this.state = {
            apiData : {}
        };
        console.log('--prem->', this.props);
        this.baseUrl = this.baseUrl + '?i=' +this.props.params.id  + '&apikey=' + Config.apikey;
        this.searchProducts();
    }

    searchProducts = () => {
        this.setState({apiData : {}});
        // we development project we will write all apis on common place
        axios.get(this.baseUrl).then( (res) => {
            this.setState({apiData : res.data});
        });
    }

    render() {
      const {apiData} = this.state;
      return (
        <div className="App">
            <section className="page-section portfolio">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-5 mt-4">Movie Details  &nbsp; &nbsp; 
                        <Link to="/home">
                            <button style={{width:'200px'}} type="button" className="form-control btn btn-primary">Back</button>
                        </Link>
                    </h2>
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <div className="row">
                    {apiData.Poster ? 
                        <div className="row">
                            <div className="col-md-6 col-lg-4 mb-5">
                                <img className="img-fluid" src={apiData.Poster} alt="" />
                            </div>
                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto" style={{'textAlign':'left'}}>
                                    <p><b>Name</b> : {apiData.Title}</p>
                                    <p><b>Actors</b> : {apiData.Actors}</p>
                                    <p><b>Language</b> : {apiData.Language}</p>
                                    <p><b>Country</b> : {apiData.Country}</p>
                                    <p><b>Genre</b> : {apiData.Genre}</p>
                                    <p><b>Writer</b> : {apiData.Writer}</p>
                                    <p><b>Runtime</b> : {apiData.Runtime}</p>
                                    <p><b>Year</b> : {apiData.Year}</p>
                                    <p><b>Director</b> : {apiData.Director}</p>
                                    <p><b>BoxOffice</b> : {apiData.BoxOffice}</p>
                                    <p><b>Awards</b> : {apiData.Awards}</p>
                                </div>
                            </div>
                        </div>
                    :''}
                    </div>
                </div>
            </section>
        </div>
      );
    }
}

export default Product;
