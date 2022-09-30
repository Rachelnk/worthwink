import './Navbar.css';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact'
import Footer from './Footer';
import phone from './img/telephone.png';
import email from './img/email.png';


function Navbar() {
  return (
    <>
    <div style={{backgroundColor: '#eaf9ee'}}>
      <div class="aligned" style={{ paddingTop: '10px', paddingLeft: '500px' }}>
      <p style= {{fontFamily: 'Marcellus, serif'}}>
         <img src={phone} alt='' width={25}/> <span>+254797616894</span>
          <img src={email} alt='' width={25}/> <span> worthwinkinvestmentlimited@gmail.com</span>         
          <img src={'https://cdn-icons-png.flaticon.com/512/3177/3177262.png'} alt='' width={25}/> <span> Nairobi, Kenya</span>
      </p> 


      </div>
         
      </div>
      <nav className='navbar navbar-expand-lg navbar-dark sticky-top'>
      <a className="navbar-brand" href="#home" style={{color: 'white', fontFamily: 'Passions Conflict, cursive'}}>Worthwink<br></br>
      {/* Where Consistency and quality matters. */}
      
      </a>
         
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className='navbar-nav mx-auto >'> 
                    
                      <li className='nav-item' style={{ fontSize: '25px', padding: '0 40px !important', paddingTop: '10px !important' }}><a className="nav-link" href="#home">Home</a></li>
                      <li className='nav-item' style={{fontSize: '25px', padding: '0 20px', paddingTop: '10px !important'}}><a className="nav-link" href="#services">About</a></li>
                      <li className='nav-item' style={{fontSize: '25px', padding: '0 20px', paddingTop: '10px !important'}}><a className="nav-link" href="#about"> Products </a></li>
                      <li className='nav-item' style={{fontSize: '25px', padding: '0 20px', paddingTop: '10px !important'}}><a className="nav-link" href="#contact">Contact</a></li>
                      
                                            
                    </ul>                                    
            </div>    
          </div>       
           
     </nav>
     <div id='home' ><Home /></div>
     <div className='container'>
           <div id='about'><About /></div>
           <div id='services' style={{ paddingTop: '80px', marginBottom: '50px' }}><Service /></div>
      </div>
       <div id='contact' style={{ paddingTop: '80px' }}><Contact /></div>
       <div><Footer /></div>
    </>
  )
}

export default Navbar;