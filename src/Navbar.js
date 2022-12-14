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
    <div className='row' style={{backgroundColor: '#eaf9ee'}}>
      <div className='col-md-1'></div>
      <div className='col-md-10'>
      <div className="top-nav" style={{backgroundColor: '#eaf9ee'}}>
      <div class="aligned" style={{ paddingTop: '10px' }}>

        <div className='col-md-3'>
          <p style= {{fontFamily: 'Marcellus, serif'}}>
          <img src={phone} alt='' width={25} /> <span style={{paddingRight: '30px'}}>+254797616894</span>
          </p> 
       </div>
       <div className='col-md-6'>
          <p style= {{fontFamily: 'Marcellus, serif'}}> 
          <img src={email} alt='' width={25}/> <span style={{paddingRight: '30px'}}> worthwinkinvestmentlimited@gmail.com</span>         
          </p>
        </div>
      <div className='col-md-3'>
        <p style= {{fontFamily: 'Marcellus, serif'}}>
        <img src={'https://cdn-icons-png.flaticon.com/512/3177/3177262.png'} alt='' width={25}/> <span> Nairobi, Kenya</span>
         </p>
        </div>
      
      </div>
         
    </div>
      </div>
      <div className='col-md-1'></div>
    </div>
    
      <nav className='navbar navbar-expand-lg navbar-light sticky-top'>
      <a className="navbar-brand" href="#home" style={{color: '#3BAEEA', fontFamily: 'Passions Conflict, cursive'}}>Worthwink<br></br>
      {/* Where Consistency and quality matters. */}
      
      </a>
         
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span style={{borderColor: 'black !important'}} className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className='navbar-nav mx-auto >'> 
                    
                      <li className='nav-item' style={{ fontSize: '25px', padding: '0 20px ', paddingTop: '10px !important' }}><a className="nav-link" href="#home">Home</a></li>
                      <li className='nav-item' style={{fontSize: '25px', padding: '0 20px', paddingTop: '10px !important'}}><a className="nav-link" href="#about">About</a></li>
                      <li className='nav-item' style={{fontSize: '25px', padding: '0 20px', paddingTop: '10px !important'}}><a className="nav-link" href="#services"> Products </a></li>
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