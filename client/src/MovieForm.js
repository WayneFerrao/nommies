import  {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import SearchResults from './SearchResults';

axios.defaults.baseURL = 'http://localhost:5000';

const FormContainer = styled.div`
    text-align: center;
`;
export default class MovieForm extends Component {
    constructor(){
        super();
        this.state=({
            searchQuery: "",
            searchResults:[],
            searched: false
        });
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }
    async handleSubmit(event) {
        event.preventDefault();
        await axios.get('/getMovies',
        { params: { movie: this.state.searchQuery }})
        .then(res =>{
            this.setState({
                searchResults: res.data,
                searched:true
            })
        });
    }

    async handleChange(value) {
        this.setState({
            searchQuery:value
        });
    }

    render(){
        let searched = this.state.searched;
        const RenderResults = () =>{
            if(searched){
                return <SearchResults results={this.state.searchResults}/>
            } else{
            return <h1>No Results</h1>
            }
        }
        return (
            <FormContainer>
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
                    <RenderResults/>
                    
                </form>
            </FormContainer>
        )
    }
}