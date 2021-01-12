import  {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';
axios.defaults.baseURL = 'http://localhost:5000';

export default class MovieForm extends Component {
    constructor(){
        super();
        this.state=({
            searchQuery: ""
        });
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }
    async handleSubmit(event) {
        event.preventDefault();
        // let data = new FormData(event.target);
        // console.log(this.state.searchQuery);
        await axios.get('/getMovies',
        { params: { movie: this.state.searchQuery }})
        .then(res =>{
            console.log(res);
        });
    }

    async handleChange(value) {
        this.setState({
            searchQuery:value
        });
    }

    render(){
        return (
            <div>
                <form  onSubmit={this.handleSubmit}>
                    <label>Search your fave movies here:</label>
                    <input 
                        type="search" 
                        id="movies" 
                        name="movies" 
                        onChange={e=> this.handleChange(e.target.value)}
                        value={this.state.searchQuery}
                    />
                    <button>Submit</button> 
                    <h2>{this.state.searchQuery}</h2>
                </form>
            </div>
        )
    }
}