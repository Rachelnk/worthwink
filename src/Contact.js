import instagram from './img/instagram.png';
import facebook from './img/fb.png';
import linkedin from './img/linkedin.png';
import phone from './img/telephone.png';
import email from './img/email.png';

import './Contact.css'
function Contact(){
  return(
    <>
    <footer style={{backgroundColor: '#3baeea' }}>
      <div className='row' style={{paddingLeft: '30px', paddingBottom: '20px' }}>
        <div className='col-md-6'>
          <h5>Worthwink</h5>
          <p>Where quality and consistency matters.</p>
          <h5 >Connect</h5>
          <p>
           <a href=''><img src={instagram} alt='' width={50} style={{paddingRight: '10px'}} /></a> 
           <a href=''><img src={facebook} alt='' width={50} style={{paddingRight: '10px'}}/></a> 
           <a href=''><img src={linkedin} alt='' width={50} /></a> 
          </p>
       

        </div>
        <div className='col-md-6'>
            <h5>Contact Us:</h5>
            <span><img src={phone} alt='' width={30}/> </span> <p>+254797616894</p><br></br>
            <span><img src={email} alt='' width={30}/></span> <p>worthwinkinvestmentlimited@gmail.com</p>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Contact;