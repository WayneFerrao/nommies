import logo from './logo.svg';
import { useState } from 'react';
import MovieForm from './MovieForm';
import Nominations from './Nominations';
import styled from 'styled-components';
import axios from 'axios';
import SearchResults from './SearchResults';


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
  const [searchQuery, setsearchQuery] = useState("");
  const [searchResults, setsearchResults] = useState([]);
  const [searched, setSearched] = useState(false);
  const [nominations, setNominations] = useState([]);


  async function handleSubmit(event){
    event.preventDefault();
    await axios.get('/getMovies',
    { params: { movie: searchQuery }})
    .then(res =>{
            setsearchResults(res.data);
            setSearched(true);
        })
  };

  async function handleChange(value) {
        setsearchQuery(value);
  };

  function addNomination(nominee){
    const updateArray = [...nominations, nominee];
    setNominations(updateArray);
  };

  function removeNomination(nominee){
    const updateArray = [...nominations];
    let nom = nominations.indexOf(nominee);
    updateArray.splice(nom, 1);
    console.log(nominations);
    setNominations(updateArray);
  };

  const RenderResults = () =>{
    if(searched){
        return <SearchResults 
                addNomination={addNomination} 
                nominations={nominations} 
                results={searchResults}
                />
    } else{
    return <h1>No Results</h1>
    }
  }
  return (
    <div>
     <Title>Nommies</Title>
     <Nominations nominations={nominations} removeNomination={removeNomination}/>
     <MovieForm 
      handleSubmit = {handleSubmit} 
      handleChange = {handleChange}
      searchQuery = {searchQuery}/>
     <RenderResults/>
    </div>
  );
}

export default App;
