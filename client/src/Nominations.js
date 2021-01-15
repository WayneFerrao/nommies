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
    // height: 300px;
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

const RemoveButton =styled.button`
    margin-bottom: 3%;
`;

const NominationTitle = styled.h3`
    font-family: "Fraunces", serif;    
`;
const Subtitle = styled.h4`
    text-align:center;
    font-family: "Fraunces", serif;    
    font-weight: 200;
`;

export default class Nominations extends Component {
    constructor(props){
        super(props);
        console.log("WWOOWOWO");
        console.log(this.props.nominations[0]);
    }
    render(){
        let nominations = this.props.nominations;
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