import React, { useState } from 'react';
import MovieForm from './MovieForm';
import Nominations from './Nominations';
import styled from 'styled-components';
import axios from 'axios';
import SearchResults from './SearchResults';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import MuiAlert from '@material-ui/lab/Alert';

let MainContainer = styled.div`
  background-color: #f6efe5
  // height: 100vh;
`;
let Title = styled.h1`
  padding-left: 3%;
  padding-bottom:1%;
  padding-top:1%;
  font-family: "Quicksand", serif;
  font-weight: 700;
  font-size: 45px;
  background-color: #fff;
  color: #f96123;

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
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    console.log(localStorage.get)
    const savedNominations = JSON.parse(localStorage.getItem("nominations"))
    setNominations(savedNominations)
  }, []);

  React.useEffect(() => {
    localStorage.setItem("nominations", JSON.stringify(nominations))
  }, [nominations])

  document.body.style = 'background: #f6efe5';
  async function handleSubmit(event){
    event.preventDefault();
    console.log(event)
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
    if(nominations.length===5){
      setError(true);
      return null;
    }
    const updateArray = [...nominations, nominee];
    setOpen(true);
    setNominations(updateArray);
  };

  function removeNomination(nominee){
    const updateArray = [...nominations];
    let nom = nominations.indexOf(nominee);
    updateArray.splice(nom, 1);
    console.log(nominations);
    setNominations(updateArray);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    setError(false);
  };

  const RenderResults = () =>{
    if(searched){
        return <SearchResults 
                addNomination={addNomination} 
                nominations={nominations} 
                results={searchResults}
                />
    } else {
    return null;
    }
  }
  return (
    <MainContainer>
     <Title>Nommies</Title>
     <Nominations nominations={nominations} removeNomination={removeNomination}/>
     <MovieForm 
      handleSubmit = {handleSubmit} 
      handleChange = {handleChange}
      searchQuery = {searchQuery}/>
     <RenderResults/>
     <Snackbar 
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open} 
        autoHideDuration={3000} 
        onClose={handleClose}

        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
        >
        <MuiAlert onClose={handleClose} severity="success">
          Movie Nominated!
        </MuiAlert>
        
      </Snackbar>
      <Snackbar 
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={error} 
        autoHideDuration={3000} 
        onClose={handleClose}

        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
        >
        <MuiAlert onClose={handleClose} severity="error">
          5 movie limit reached! Remove a nomination to add a new one.
        </MuiAlert>
      </Snackbar>
     
    </MainContainer>
  );
}

export default App;
