import React from 'react'

function Navbar(props) {
  return (
    <div>

        <div className="container-fluid">
          <div className="row">
            
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href='/'>{props.title}</a>
                <div className='d-flex'>
                  <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">{props.search}</button>
                </div>
            </nav>
   
    
         </div>
        </div>

    </div>
  )
}

export default Navbar