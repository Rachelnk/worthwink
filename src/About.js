import './About.css';
import quality from './img/quality.png';
import consistency from './img/consistency.png';
import time from './img/clock.png';
import { Zoom, Bounce } from "react-awesome-reveal";
 
function About(){
  return(
    <>
     <Bounce>
    <div className='row'>
   
      <div className='col-md-6 about' style={{backgroundColor: '#eaf9ee', height: '75vh'}}>
         
          <h1 className='text-center' style={{paddingTop: '150px', fontFamily: 'Nanum Gothic, sans-serif'}} >About Us</h1>
       
            <p className='text-center' style={{ fontFamily: 'Marcellus, serif'}}>We are a world class business entity based in Nairobi, Kenya. We deal in supplies: Stationery, Furniture, Laptop and Computer Accessories, and Animal Feeds. <br></br> Our goal is ensure 100% customer satisfaction through the delivery of quality products and services. </p>
        
      </div>
     
      <div className='col-md-6' style={{paddingTop: '50px'}}>
     
        <img src={'https://images.pexels.com/photos/434337/pexels-photo-434337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt='' width={500} height={400}/>
       
      </div>          
    </div>
    </Bounce>
    <Zoom>
    <div className='row' style={{paddingTop: '50px' }}>
      <div className='col-md-4'>
        <img src={time} alt='' className='center' />
        <hr></hr>
        <h5 style={{fontFamily: 'Sawarabi Mincho, serif', fontSize: '25px'}} className='text-center'>Timely delivery.</h5>
      </div>
      <div className='col-md-4'>
      <img src={consistency} alt='' className='center' />
      <hr></hr>
      <h5 style={{fontFamily: 'Sawarabi Mincho, serif', fontSize: '25px' }} className='text-center'>We pride ourselves on our consistency.</h5>
      </div>
      <div className='col-md-4'>
      <img src={quality} alt='' className='center' />
      <hr></hr>
      <h5 style={{fontFamily: 'Sawarabi Mincho, serif', fontSize: '25px'}} className='text-center'>Quality Products and Services.</h5>
      </div>
    </div>
    </Zoom>
    </>
  )
}

export default About;