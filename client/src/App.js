import logo from './logo.svg';
import MovieForm from './MovieForm';
import styled from 'styled-components';

let Title = styled.h1`
  margin-left: 5%;
  margin-top: 2%;
  font-family: "Fraunces", serif;
  font-size: 45px;
  @media (max-width: 400px) {
    text-align: center;
    margin: 0;
  }
`;

function App() {
  return (
    <div>
     <Title>Nommies</Title>
     <MovieForm/>
    </div>
  );
}

export default App;
