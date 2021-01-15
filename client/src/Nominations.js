import  {Component} from 'react';
import styled from 'styled-components';
import { Card, Icon, Image, Button } from 'semantic-ui-react'

const Container = styled.div`
    margin-bottom: 2%;
    height: 10%;
    border-radius: 5px;
`;
const NomContainer = styled.div`
    border: 2px solid #d8b690;
    border-radius: 7px;
    width: 70%;
    margin: 0 auto;
    background-color: #f8d1a6;
    display: flex;
    flex-flow: row;
    padding: 1%;
`;
const Nomination = styled.div`
    height:100%
    flex-grow: 1;
    margin-left: 1%;
    margin-right: 1%;
    width: 20%;
    background-color: white;
    box-shadow:  3px 5px 6px #aaa;
    border-radius: 7px;
    text-align: center;
`;

const RemoveButton =styled.div`
    border: 1px solid #d8b690;
    border-radius: 15px;
    color: #ed695f;
    width: fit-content;
    margin:auto;
    font-family: "Quicksand", serif;
    font-weight: 600;   

    font-size: 1.1em;
    padding:3% 7%;
    cursor: pointer;
    margin-bottom: 5%;
    transition: background-color 0.25s;
    &:hover{
        background-color:#fa9a63;
        color: white;
      }
`;

const NominationTitle = styled.h3`
    font-family: "Quicksand", serif;    
    margin-bottom: 1%;
`;
const Subtitle = styled.h4`
    text-align:center;
    font-family: "Quicksand", serif;    
    font-size: 1.3em;
    color: #000;
`;
const NomPic = styled.img`
    width: 35%;
    margin-top: 5%;
    border-radius: 5px;
    object-fit; cover;
`;

export default class Nominations extends Component {
    constructor(props){
        super(props);
    }
    render(){
        let nominations = this.props.nominations;
        console.log(nominations);
        return(
            <Container>
                <Subtitle>Your Nominations</Subtitle>
                <NomContainer>
                    {nominations.map((nom, index) =>{
                        return(
                            <Nomination>
                                <NomPic src={nom.Poster}   padding-top="10px" />
                                <NominationTitle key={index}>
                                    {nom.Title}
                                </NominationTitle>
                                <RemoveButton onClick={()=>{this.props.removeNomination(nom)}}> Remove </RemoveButton>
                            </Nomination>
                        )    
                    })}
                </NomContainer>
            </Container>
        );
    }
}