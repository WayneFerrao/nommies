import  {Component} from 'react';
import styled from 'styled-components';
import Placeholder from './assets/movie_placeholder.png';
import { Card, Icon, Image, Button } from 'semantic-ui-react'

const ResultsBox = styled.div`
    display: flex; 
    -webkit-flex-flow: row wrap; 
    justify-content: space-evenly;
    flex-flow: row wrap;
    flex-grow: 1;
    height:100%;

`;

const Nominee = styled.div`
    height:100%
    flex-grow: 1;
    margin-left: 3.5%;
    margin-right: 1%;
    border: 2px solid #999;
    box-shadow:  3px 5px 6px #ccc;
    border-radius: 7px;
    text-align: left;
    margin-top: 2%;
`;

const Description =styled.div`
    height: 100%;    
    width: 300px;
`;
const Title = styled.h1`
    margin:0;
    font-size: 20px;
    margin-left:2%;
    padding:0;
`;
const MovieDate = styled.h4`
    color: #888;
    margin-top: 1%;
    margin-left: 2%;
`;

const CC = styled.div`
    display: block;
    justify-content: space-between;
`;
const NomButton = styled.button`
    display:inline-block;
    font-size: 15px;
    margin-bottom: 5%;
    float: center;
    margin-left: 35%;
    // margin: 0 auto;
    text-align:center;
`;

export default class SearchResults extends Component {

    constructor(props){
        super(props);
    }
    render(){
        let results = this.props.results;
        console.log(results);
        if(results === "Movie not found!"){
            return(
                <div>
                    <h1>Movie not found!!!</h1>
                </div>
            )
        }
        if(results.length!==0){
            return(
                <ResultsBox>
                    {results.map((result, index) =>{
                        let source = result.Poster;
                        if(result.Poster==="N/A"){
                            source = Placeholder;
                        }
                        return(
                            <Nominee>
                                    <img src={source} height='350px' width='100%' object-fit='cover'/>
                                    <CC>
                                        <Description>
                                            <Title>{result.Title}</Title>
                                            <MovieDate >2015</MovieDate>
                                        </Description>
                                        <NomButton> Nominate</NomButton>


                                    </CC>
                            </Nominee>
                        )
                    })}
                </ResultsBox>
            )
        }
    }
};