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
    }
    render(){
        return(
            <Container>
                <NomContainer>
                    Nominations:
                </NomContainer>
            </Container>
        );
    }
}