import './About.css';
import about from './img/hero.jpg';
function About(){
  return(
    <>
    <div className='row'>
      <div className='col-md-5'>
        <h1 className='text-center' style={{paddingTop: '80px'}}>About Us</h1>
        <p className='text-center'>We are a world class business entity. Where quality and consistency matters.</p>
      </div>
      <div className='col-md-2'></div>
      <div className='col-md=5'>
        <img src={about} alt='' width={100}/>
        
      </div>
      </div>
    </>
  )
}

export default About;