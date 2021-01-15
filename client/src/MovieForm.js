import  {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Input from '@material-ui/core/Input';
import './Button.css';
axios.defaults.baseURL = 'http://localhost:5000';

const FormContainer = styled.div`
    text-align: center;
`;
const Instruction = styled.label`
    font-family: "Fraunces", serif;
    font-weight: 200;
`;
const SearchBox = styled.input`
    line-height: 2em;
    border-radius: 10px;
`;
const Row = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: center;
`;
export default class MovieForm extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <FormContainer>
                <form  onSubmit={this.props.handleSubmit}>
                    <Instruction>Search your fave movies here:</Instruction>
                    <Row>
                    <div class="form__group field">
                        <input type="search" class="form__field" placeholder="Movie" name="movies" id='movies' required 
                        onChange={e=> this.props.handleChange(e.target.value)}
                        // value={this.props.searchQuery}
                        />
                        <label for="name" class="form__label">Movie</label>
                    </div>
                    {/* <SearchBox 
                        type="search" 
                        id="movies" 
                        name="movies" 
                        required
                        
                    /> */}
                    <a  class="cta" onClick={this.props.handleSubmit}>
                        <span>Search</span>
                        <svg width="13px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </a>
                    </Row>
                </form>
            </FormContainer>
        )
    }
}