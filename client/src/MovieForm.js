import  {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';
axios.defaults.baseURL = 'http://localhost:5000';

const FormContainer = styled.div`
    text-align: center;
`;
const Instruction = styled.label`
    font-family: "Fraunces", serif;
    font-weight: 200;
`;
export default class MovieForm extends Component {
    constructor(props){
        super(props);
        this.state=({
            searchQuery: "",
            searchResults:[],
            searched: false
        });
    }
    render(){
        let searched = this.state.searched;
       
        return (
            <FormContainer>
                <form  onSubmit={this.props.handleSubmit}>
                    <Instruction>Search your fave movies here:</Instruction>
                    <input 
                        type="search" 
                        id="movies" 
                        name="movies" 
                        onChange={e=> this.props.handleChange(e.target.value)}
                        value={this.props.searchQuery}
                    />
                    <button>Submit</button> 
                </form>
            </FormContainer>
        )
    }
}