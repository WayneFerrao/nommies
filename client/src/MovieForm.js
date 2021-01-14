import  {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';

axios.defaults.baseURL = 'http://localhost:5000';

const FormContainer = styled.div`
    text-align: center;
`;
export default class MovieForm extends Component {
    constructor(props){
        super(props);
        this.state=({
            searchQuery: "",
            searchResults:[],
            searched: false
        });
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleChange = this.handleChange.bind(this);

    }
   
    // async handleSubmit(event) {
    //     event.preventDefault();
    //     await axios.get('/getMovies',
    //     { params: { movie: this.state.searchQuery }})
    //     .then(res =>{
    //         this.setState({
    //             searchResults: res.data,
    //             searched:true
    //         })
    //     });
    // }

    // async handleChange(value) {
    //     this.setState({
    //         searchQuery:value
    //     });
    // }

    render(){
        let searched = this.state.searched;
       
        return (
            <FormContainer>
                <form  onSubmit={this.props.handleSubmit}>
                    <label>Search your fave movies here:</label>
                    <input 
                        type="search" 
                        id="movies" 
                        name="movies" 
                        onChange={e=> this.props.handleChange(e.target.value)}
                        value={this.props.searchQuery}
                    />
                    <button>Submit</button> 
                    {/* <RenderResults/> */}
                    
                </form>
            </FormContainer>
        )
    }
}