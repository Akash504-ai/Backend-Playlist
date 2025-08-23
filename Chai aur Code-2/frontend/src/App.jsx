import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [joke, setJoke] = useState([]);

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((res)=>{
      setJoke(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])

  return (
    <>
      <h1>Chai and Full Stack!</h1>
      <p>JOKES: {joke.length}</p>
      {
        joke.map((joke,index)=>(
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
