import React  from 'react';


const Header = (props)=>{
    
  const {onChangeHandler,onSubmitHandler}= props;

    
   


    return(
        <div className="jumbotron">
        <h2 className="display-4">
        <img src="https://www.flaticon.com/svg/static/icons/svg/25/25231.svg" alt=""/>
           Github Profile Seeker
           
        </h2>
        <div className="input-group w-50 mx-auto">
          <input
            type="text"
            className="form-control"
            
            onChange={onChangeHandler}
            placeholder="Search Github Profile "
            
          />

          <div className="input-group-append">
            <button className="btn btn-dark" onClick={onSubmitHandler}>
              Find
            </button>
          </div>
        </div>
      </div>
    )
}

export default Header;