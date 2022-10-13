import './About.css';
import quality from './img/quality.png';
import consistency from './img/consistency.png';
import time from './img/clock.png';
import { AnimationOnScroll }  from 'react-animation-on-scroll';
 
function About(){
  return(
    <>
    <div className='row'>
      <div className='col-md-6 about' style={{backgroundColor: '#eaf9ee', height: '75vh'}}>
        <h1 className='text-center' style={{paddingTop: '150px', fontFamily: 'Nanum Gothic, sans-serif'}} >About Us</h1>
        <AnimationOnScroll 
        animateIn="bounceInLeft"
        duration={0.8}
        delay={0}>
            <p className='text-center' style={{ fontFamily: 'Marcellus, serif'}}>We are a world class business entity based in Nairobi, Kenya. We deal in supplies: Stationery, Furniture, Laptop and Computer Accessories, and Animal Feeds. <br></br> Our goal is ensure 100% customer satisfaction through the delivery of quality products and services. </p>
        </AnimationOnScroll>
      </div>
    
      <div className='col-md-6' style={{paddingTop: '50px'}}>
        <AnimationOnScroll 
        animateIn="bounceInRight"
        duration={0}
        delay={0.8}>
        <img src={'https://images.pexels.com/photos/434337/pexels-photo-434337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt='' width={500} height={400}/>

        </AnimationOnScroll>
        
        
      </div>
    </div>
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
    </>
  )
}

export default About;