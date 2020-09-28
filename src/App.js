import React, {useState} from 'react';

import './App.css';
import Header from './components/Header';
import Data from './components/Data';
import Axios from 'axios';

function App() {

  const [userName, setUserName]= useState("");
  const [info, setInfo]= useState("");
  

  


  const onChangeHandler= (e)=>{
    console.log(e.target.value)
      setUserName(e.target.value)
 

  }

  const api= async()=>{
   const res= await Axios.get(`https://api.github.com/users/${userName}`);
   setInfo(res.data)
  console.log(res)
}


  const onSubmitHandler= (e)=>{
      
   e.preventDefault()
     api();
  }


 




  return (
    <div className="App">
     
     <Header onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} />
   

    {!userName? (""):(
      
     <Data info={info} />
    )
    }

    </div>
  );
}

export default App;
