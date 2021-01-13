import  {Component} from 'react';
import styled from 'styled-components';
import Placeholder from './assets/movie_placeholder.png';

const Result =styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 2%;
    margin-top: 2%;
`;
const Title = styled.h1`
    margin:0;
    padding:0;
`;


export default class SearchResults extends Component {

    constructor(props){
        super(props);
    }
    render(){
        let results = this.props.results;
        console.log(results);
        if(results.length!==0){
            return(
                <div>
                    {results.map(result =>{
                        let source = result.Poster;
                        if(result.Poster==="N/A"){
                            source = Placeholder;
                        }
                        return(
                            <Result>
                                <img src={source} height={200}/>
                                <div>
                                    <Title>{result.Title}</Title>
                                    <h2>{result.Year}</h2>
                                </div>
                            </Result>
                        )
                    })}
                </div>
            )
        }
    }
};