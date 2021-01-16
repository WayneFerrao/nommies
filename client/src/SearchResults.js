import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';
import Placeholder from './assets/movie_placeholder.png';
import './Button.css';

const ResultsBox = styled.div`
    display: flex; 
    -webkit-flex-flow: row wrap; 
    justify-content: space-evenly;
    flex-flow: row wrap;
    flex-grow: 1;
    height:100%;
    padding-bottom: 2%;
`;

const Nominee = styled.div`
    height:100%
    flex-grow: 1;
    margin-left: 3.5%;
    margin-right: 1%;
    // border: 2px solid #d8b690;
    // padding:0.5%;
    box-shadow: none;
    transition: box-shadow 0.25s;
    &:hover{
        box-shadow: -7px 6px 8px 4px #dbd2c9;
    }
    border-radius: 7px;
    text-align: left;
    margin-top: 2%;
    background-color: #fff;
`;

const Description =styled.div`
    height: 100%;    
    width: 300px;
    color: #083a40
`;
const Title = styled.h1`
    margin:0;
    font-size: 20px;
    margin-left:2%;
    padding:0;
    color: #083a40;
`;
const MovieDate = styled.h4`
    color: #888;
    margin-top: 1%;
    margin-left: 2%;
`;

const CC = styled.div`
    // display: block;
    // justify-content: space-between;
`;
const NomButton = styled.button`
    border: 1px solid #2eb863;
    border-radius: 15px;
    color: #fff;
    width: fit-content;
    margin:auto;
    font-family: "Quicksand", serif;
    font-weight: 700;   
    background-color: #2eb863;
    font-size: 1.1em;
    padding:3% 7%;
    cursor:pointer;
    outline:none;
    margin-bottom: 5%;
    padding-bottom: auto;
    opacity: 0.5;
    transition: opacity 0.1s;
        opacity: 1;
    }
    margin-bottom: 5%;
    margin-left: 30%;
`;
const DisabledNom = styled(NomButton)`
    &:hover{
        opacity: 0.5;
    }
`;
const NomPic = styled.img`
    width:100%;
    object-fit: cover;
    border-radius: 5px;
`;
export default class SearchResults extends Component {
    constructor(props){
        super(props);
    }

    render(){
        let results = this.props.results;
        if(results === "Movie not found!"){
            return(
                <div>
                    <h1>Movie not found!</h1>
                </div>
            )
        }
        if(results.Error){
            return(<ResultsBox>
                <h3> No results!</h3>
            </ResultsBox>
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
                        let seen = false;
                        this.props.nominations.forEach(nom =>{
                            if(nom.imdbID ==result.imdbID){
                                seen = true;
                            }
                        });
                        const NominationButton = () =>{
                            if(seen){
                                return <DisabledNom style={{ cursor: "not-allowed"}}> Nominate</DisabledNom>
                            }else{
                                return <NomButton onClick={()=>{this.props.addNomination(result)}}> Nominate</NomButton>
                            }
                        }
                        return(
                            <Nominee>
                                <NomPic src={source}    />
                                <CC>
                                    <Description>
                                        <Title>{result.Title}</Title>
                                        <MovieDate >2015</MovieDate>
                                    </Description>
                                    <NominationButton/>
                                </CC>
                            </Nominee>
                        )
                    })}
                </ResultsBox>
            )
        }   
    }
};