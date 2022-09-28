import './Navbar.css';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact'
import logo from './img/logo.jpeg'


function Navbar() {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark sticky-top'>
        <div className="container-fluid">
          <a className="navbar-brand" href="#home" style={{color: '#3BAEEA'}}>Worthlink</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className='navbar-nav mx-auto >'> 
                    
                      <li className='nav-item' style={{fontSize: '30px', padding: '0 20px', paddingTop: '10px !important'}}><a className="nav-link" href="#home">Home</a></li>
                      <li className='nav-item' style={{fontSize: '30px', padding: '0 20px', paddingTop: '10px !important'}}><a className="nav-link" href="#services">Services</a></li>
                      <li className='nav-item' style={{fontSize: '30px', padding: '0 20px', paddingTop: '10px !important'}}><a className="nav-link" href="#about">About</a></li>
                      <li className='nav-item' style={{fontSize: '30px', padding: '0 20px', paddingTop: '10px !important'}}><a className="nav-link" href="#contact">Contact</a></li>
                      
                                            
                    </ul>                                    
            </div>    
          </div>       
           
     </nav>
     <div className='container'>
      <div id='home'><Home /></div>
      <div id='services'><Service /></div>
      <div id='about'><About /></div>
      <div id='contact'><Contact /></div>

     </div>
    </>
  )
}

export default Navbar;