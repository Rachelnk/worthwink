import './Navbar.css';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact'
import Footer from './Footer';
import logo from './img/logo.jpeg'


function Navbar() {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark sticky-top'>
      <a className="navbar-brand" href="#home" style={{color: '#3BAEEA', fontFamily: 'Passions Conflict, cursive'}}>Worthwink</a>
         
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className='navbar-nav mx-auto >'> 
                    
                      <li className='nav-item' style={{ fontSize: '30px', padding: '0 40px !important', paddingTop: '10px !important' }}><a className="nav-link" href="#home">Home</a></li>
                      <li className='nav-item' style={{fontSize: '30px', padding: '0 20px', paddingTop: '10px !important'}}><a className="nav-link" href="#services">About</a></li>
                      <li className='nav-item' style={{fontSize: '30px', padding: '0 20px', paddingTop: '10px !important'}}><a className="nav-link" href="#about">Services & Products</a></li>
                      <li className='nav-item' style={{fontSize: '30px', padding: '0 20px', paddingTop: '10px !important'}}><a className="nav-link" href="#contact">Contact</a></li>
                      
                                            
                    </ul>                                    
            </div>    
          </div>       
           
     </nav>
     <div id='home' ><Home /></div>
     <div className='container'>
           <div id='about'><About /></div>
           <div id='services' style={{ paddingTop: '80px' }}><Service /></div>
      </div>
       <div id='contact' style={{ paddingTop: '80px' }}><Contact /></div>
       <div><Footer /></div>
    </>
  )
}

export default Navbar;