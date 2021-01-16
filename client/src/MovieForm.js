import  {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './Button.css';
axios.defaults.baseURL = 'https://nommies.herokuapp.com/';

const FormContainer = styled.div`
    text-align: center;
`;
const Instruction = styled.label`
    font-family: "Quicksand", serif;
    font-weight: 600;
    color: #083a40;

`;
const Row = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: center;
`;
export default class MovieForm extends Component {

    render(){
        return (
            <FormContainer>
                <form  onSubmit={this.props.handleSubmit}>
                    <Instruction>Nominate up to 5 of your favourite movies. Start your search below</Instruction>
                    <Row>
                    <div class="form__group field">
                        <input type="search" class="form__field" placeholder="Movie" name="movies" id='movies' required 
                        onChange={e=> this.props.handleChange(e.target.value)}
                        />
                        <label for="name" class="form__label">Movie</label>
                    </div>
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