import React from 'react';
import Config from './Config/config';
import { Link } from 'react-router';

const axios = require('axios');
const baseUrl = Config.apiBaseUrl + '?apikey=' + Config.apikey;

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            t : '',
            type : '',
            error : '',
            apiData : {}
        };
        this.setSearchVAl = this.setSearchVAl.bind(this);
        this.setFilterBy = this.setFilterBy.bind(this);
    }

    searchProducts = () => {
        this.setState({apiData : {}, error : ''});
        // we development project we will write all apis on common place
        if(this.state.t){
            let paramsObj = {
                t : this.state.t,
                type : this.state.type
            };
            axios.get(baseUrl, {params: paramsObj}).then( (res) => {
                this.setState({apiData : res.data});
                console.log('--->>>', this.state);
            });
        } else {
            this.setState({error : true});
        }
        
    }

    setSearchVAl(event) {
        let value = event.target.value;
        this.setState({t : value});
    }

    setFilterBy(event) {
        let value = event.target.value;
        this.setState({type : value});
    }

    render() {
      const {t  , apiData, error} = this.state;
      return (
        <div className="App">
            <section className="page-section portfolio" id="portfolio">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-5 mt-4">Movie Screen Mock-up</h2>
                    <form className="px-4 py-3">
                        <div className="form-group search-box">
                            <div className="row">
                                <div className="col-md-6 col-lg-8 mb-5">
                                    <input type="text" name="s" value={t} className="form-control" placeholder="Search" onChange={this.setSearchVAl} ></input>
                                    { (error) ? 
                                    <span style={{color:'red',float:'left'}}>Please type the keyword to search</span>
                                    :''
                                    }
                                </div>
                                <div className="col-md-4 col-lg-2 mb-5">
                                    <select name="filterBy" className="browser-default custom-select" onChange={this.setFilterBy}>
                                        <option value="">All</option>
                                        <option value="movie">Movies</option>
                                        <option value="series">Series</option>
                                        <option value="episode">Episodes</option>
                                    </select>
                                </div>
                                <div className="col-md-6 col-lg-2 mb-5">
                                 <button type="button" onClick={this.searchProducts} className="form-control btn btn-primary">Search</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <div className="row">
                    {apiData.Poster ? 
                        <div className="row">
                            <div className="col-md-6 col-lg-4 mb-5">
                            <Link Title="View Details" to={`/products/${apiData.imdbID}`}>
                                <img className="img-fluid" src={apiData.Poster} alt="" />
                            </Link>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto" style={{'textAlign':'left'}}>
                                    <h3><Link Title="View Details" to={`/products/${apiData.imdbID}`}>View Details</Link></h3>
                                    <p><b>Name</b> : {apiData.Title}</p>
                                    <p><b>Actors</b> : {apiData.Actors}</p>
                                    <p><b>Language</b> : {apiData.Language}</p>
                                    <p><b>Country</b> : {apiData.Country}</p>
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

export default Home;
