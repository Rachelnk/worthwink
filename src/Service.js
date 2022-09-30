import './Service.css';
import feeds from './img/feed.png';
import furniture from './img/furnitures.png';
import computer from './img/computer.png';
import stationery from './img/stationery.png'

function Service(){
  return(

    <>
    <div style={{ backgroundColor: 'white', marginLeft: 'auto', marginRight: 'auto'}}> 
    <h1 style={{ textAlign: 'center', fontFamily: 'Nanum Gothic, sans-serif', paddingTop: '20px'}}>Services & Products</h1>
    <p style={{ fontFamily: 'Marcellus, serif' }} className='text-center'>Worthwink Investment Limited company aims to be a long-life partner to business entities interested in providing high quality, consistent and fast services to their customer base. We supply:</p>

    <div className='row' style={{paddingTop:'30px'}} >
      <div className='col-md-6'>
        <div className='card'>
          <div className='card-body' style={{marginLeft: '40px'}}>
            <div className="left-stationery"></div>
            <div className="right-stationery">
              <div className="content">
              <h6 style={{textAlign:'center', fontFamily: 'PT Mono, monospace'}}>General Stationery</h6>
            <img src={stationery} alt=''  className="center"/>
         
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className='col-md-6'>
        <div className='card'>
          <div className='card-body'>
          <div className="left-furniture"></div>
          <div className="right-furniture">
            <div className='content'>
            <h6 style={{textAlign:'center', fontFamily: 'PT Mono, monospace'}}>Furniture</h6>
            <img src={furniture} alt=''  className="center"/>
          
            </div>
          </div>
          </div>
          
        </div>
      </div>
    </div>
    <div className='row' style={{paddingTop:'30px'}} >
      <div className='col-md-6'>
        <div className='card' >
          <div className='card-body' style={{marginLeft: '40px'}}>
          <div className="left-feeds"></div>
          <div className="right-feeds">
            <div className='content'>
            <h6 style={{ textAlign:'center', fontFamily: 'PT Mono, monospace'}}>Animal Feeds</h6>
            <img src={feeds} alt=''  className="center"/>
          
            </div>
          </div></div>
          
        </div>
      </div>

      <div className='col-md-6'>
        <div className='card'>
          <div className='card-body'>
          <div className="left-computer"></div>
          <div className="right-computer">
            <div className='content'>
            <h6 style={{textAlign:'center', fontFamily: 'PT Mono, monospace'}}>Computer Accessories</h6>
            <img src={computer} alt=''  className="center"/>
          
            </div>
          </div> </div>
          
        </div>
      </div>
    </div>
    </div>
    

    </>
  )
}

export default Service;