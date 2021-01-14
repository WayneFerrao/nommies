import  {Component} from 'react';
import styled from 'styled-components';

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
                <NomContainer>
                    Nominations:
                    {nominations.map((nom, index) =>{
                        return(
                            <div>
                                <h2 key={index}>
                                    {nom.Title}
                                </h2>
                                <button onClick={()=>{this.props.removeNomination(nom)}}> Remove </button>
                            </div>
                        )    
                    })}
                </NomContainer>
            </Container>
        );
    }
}