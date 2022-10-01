import './Footer.css';
import instagram from './img/instagram.png';
import facebook from './img/fb.png';
import linkedin from './img/linkedin.png';
 function Footer() {
  return(
    
    <footer className='contact-footer' style={{ backgroundColor: '#eaf9ee', height: '15vh' }}>
    
       <p className='text-center' style={{paddingTop: '10px'}}>
         <span >
         <a href='https://instagram.com/worthwinkinvestment?igshid=YmMyMTA2M2Y='><img src={instagram} alt='' width={40} style={{paddingRight: '20px'}} /></a> 
         <a href='https://www.facebook.com/116416677735623/posts/pfbid0NRBP52uncrtwPFBiGFeTAPT8eGJKmmzSpX2TW8kyBd1768ynaW6Pe6J1ELUueUvUl/?sfnsn=mo&extid=a&mibextid=hOoF3G'><img src={facebook} alt='' width={40} style={{paddingRight: '20px'}}/>
         <img src={linkedin} alt='' width={30} /></a> </span>
         </p>
        <p className='text-center' style={{ paddingTop: '7px',fontFamily: 'Marcellus, serif', paddingLeft: '60px'}}> &#169; Copyright 2022, Worthwink Investment Limited.
       </p>
  </footer>
  )
 }
 export default Footer;