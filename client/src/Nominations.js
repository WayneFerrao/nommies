import  {Component} from 'react';
import styled from 'styled-components';
import { Card, Icon, Image, Button } from 'semantic-ui-react'

const Container = styled.div`
    margin-bottom: 2%;
    height: 10%;
    border-radius: 5px;
`;
const NomContainer = styled.div`
    border: 2px solid #999;
    border-radius: 5px;
    width: 70%;
    margin: 0 auto;
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
    box-shadow:  3px 5px 6px #ccc;
    border-radius: 7px;
    text-align: center;
`;

const RemoveButton =styled.div`
    border: 1px solid #cf000f;
    border-radius: 15px;
    color: #cf000f;
    width: fit-content;
    margin:auto;
    font-family: "Open Sans", serif;    

    font-size: 1.1em;
    padding:3% 7%;
    cursor: pointer;
    margin-bottom: 5%;
    &:hover{
        font-size: 1.2em;
        background-color:#da4f49;
        color: white;
      }
`;

const NominationTitle = styled.h3`
    font-family: "Fraunces", serif;    
    margin-bottom: 1%;
`;
const Subtitle = styled.h4`
    text-align:center;
    font-family: "Fraunces", serif;    

    color: #555;
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
                                <img src={nom.Poster}  width='35%' object-fit='cover'/>
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