
import phone from './img/telephone.png';
import email from './img/email.png';
import './Contact.css'

function Contact(){
  return(
    <>
    <footer style={{backgroundColor: '#3baeea' }}>
      <div className='row' style={{paddingLeft: '30px', paddingBottom: '20px' }}>
        <div className='col-md-6'>
          <h5 style={{ fontFamily: 'Passions Conflict, cursive', fontSize: '50px' }}>Worthwink</h5>
          <p style= {{fontFamily: 'Marcellus, serif'}}>Where quality and consistency matters.</p>
          

        </div>
        <div className='col-md-6'>
            <h5>Contact Us:</h5>
            <div class="aligned"><img src={phone} alt='' width={30}/> <span><p style= {{fontFamily: 'Marcellus, serif'}}>+254797616894</p></span> <br></br></div> 
            <div class="aligned"><img src={email} alt='' width={30}/> <span> <p style= {{fontFamily: 'Marcellus, serif'}}>worthwinkinvestmentlimited@gmail.com</p></span></div> 
        </div>
      </div>
    </footer>
    
    </>
  )
}

export default Contact;