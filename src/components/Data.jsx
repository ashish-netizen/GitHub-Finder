import React  from 'react';
import "./data.css"

const Data = (props)=>{

const {info}= props;

    return(




      
      <div className="container">
      <div class="card" >
  
  <div class="card-body">
  <img src={info.avatar_url}  />
  
  <br/>
  <br/>
    <h5 class="card-title">{info.name}</h5>
    <br/>
    <ul class="list-group list-group-flush">
    <span><b>Bio</b> </span><li class="list-group-item">{info.bio}</li>
    <br/>
    <span><b>Repos </b></span><li class="list-group-item">{info.public_repos}</li>
    <br/>
    <span><b>Followers</b></span><li class="list-group-item">{info.followers}</li>
  </ul>
    <a href={info.html_url} class="btn btn-danger">View Profile</a>
  </div>
</div>
    </div>
   


        


        
    )


}

export default Data;