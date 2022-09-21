import React, {useState, useEffect} from "react"
import Navbar from './Navbar';
import Home from './Home';
import { View } from "./Components/View.js";

//getting values of local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('musics');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}


export const App = () => {

  const [musics, setMusics]= useState([getDatafromLS()]);

  //input field states
  const [title, setTitle]= useState('');
  const [singer, setSinger]= useState('');
  const [genre, setGenre]= useState('');
  const [year_released, setYearReleased]= useState('');

  //form submit event
  const handleAddMusicSubmit=(e)=>{
    e.preventDefault();

    //creating an object
    let music={
      title,
      singer,
      genre,
      year_released
    }
    setMusics([...musics, music]);
    setTitle('');
    setSinger('');
    setGenre('');
    setYearReleased('');
  }

  //delete from LS
  const deleteMusic=(title)=>{
    const filteredMusics=musics.filter((element,index)=>{
      return element.title !== title
    })
    setMusics(filteredMusics);
  }

  //saving data to local storage
  useEffect(()=>{
    localStorage.setItem('musics', JSON.stringify(musics));
  },[musics])
  return (
    <div className="wrapper">
      <Navbar/>
      <div className="main">
        <Home/>
        <div className="form-container">
          <form autoComplete="off" className="form-group"
          onSubmit={handleAddMusicSubmit}>
            
              <h2>Music Entry</h2>
             
            <label>Title</label>
            <input type="text" className="form-control" required
            onChange={(e)=>setTitle(e.target.value)} value={title}></input>
            <label>Singer</label>
            <input type="text" className="form-control" required
            onChange={(e)=>setSinger(e.target.value)} value={singer}></input>
            <label>Genre</label>
            <input type="text" className="form-control" required
            onChange={(e)=>setGenre(e.target.value)} value={genre}></input>
            <label>Year Released</label>
            <input type="text" className="form-control" required
            onChange={(e)=>setYearReleased(e.target.value)} value={year_released}></input>
            <br></br>
            <button type="submit" className="btn btn-primary btn-md">
              Add Music
            </button>
          </form>
        </div>
        
        <div className="view-container">
          {musics.length>0&&<>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <h2>List of Musics</h2>
                <tr>
                  <th>Title</th>
                  <th>Singer</th>
                  <th>Genre</th>
                  <th>Year Released</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <View musics={musics} deleteMusic={deleteMusic}/>
              </tbody>
            </table>
          </div>
          <button className="btn btn-danger btn-md" 
          onClick={()=>setMusics([])}>Remove All</button>
          </>}
          {musics.length <1 && <div>No musics added.</div>}
        </div>
      </div>
    </div>
  );
}

export default App;
