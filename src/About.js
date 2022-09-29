import './About.css';
import about from './img/hero.jpg';
import quality from './img/quality.png';
import consistency from './img/consistency.png';
import time from './img/clock.png';
 
function About(){
  return(
    <>
    <div className='row'>
      <div className='col-md-6' style={{backgroundColor: '#eaf9ee', height: '75vh'}}>
        <h1 className='text-center' style={{paddingTop: '150px'}} >About Us</h1>
        <p className='text-center'>We are a world class business entity based in Nairobi, Kenya. We deal in supplies: Stationery, Furniture, Laptop and Computer Accessories, and Animal Feeds. <br></br> Our goal is ensure 100% customer satisfaction through the delivery of quality products and services. </p>
      </div>
      {/* <div className='col-md-1'></div> */}
      <div className='col-md-6' style={{paddingTop: '50px'}}>
        <img src={about} alt='' width={500} height={400}/>
        
      </div>
    </div>
    <div className='row' style={{paddingTop: '30px' }}>
      <div className='col-md-4'>
        <img src={time} alt='' className='center' />
        <hr></hr>
        <h5 className='text-center'>Timely delivery</h5>
      </div>
      <div className='col-md-4'>
      <img src={consistency} alt='' className='center' />
      <hr></hr>
      <h5 className='text-center'>We pride ourselves on our consistency.</h5>
      </div>
      <div className='col-md-4'>
      <img src={quality} alt='' className='center' />
      <hr></hr>
      <h5 className='text-center'>Quality Products and Services.</h5>
      </div>
    </div>
    </>
  )
}

export default About;