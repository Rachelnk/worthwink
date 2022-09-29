import './Service.css';
import feeds from './img/feed.png';
import furniture from './img/furnitures.png';
import computer from './img/computer.png';
import stationery from './img/stationery.png'

function Service(){
  return(

    <>
    <div style={{ backgroundColor: '#eaf9ee', marginLeft: 'auto', marginRight: 'auto'}}> 
    <h1 style={{textAlign: 'center'}}>Services & Products</h1>
    <p className='text-center'>Worthwink Investment Limited company aims to be a long-life partner to business entities interested in providing high quality, consistent and fast services to their customer base. We supply:</p>

    <div className='row' style={{paddingTop:'30px'}} >
      <div className='col-md-6'>
        <div className='card'>
          <div className='card-body'>
            <h5 style={{textAlign:'center'}}>General Stationery</h5>
            <img src={stationery} alt=''  className="center"/>
          </div>
          
        </div>
      </div>

      <div className='col-md-6'>
        <div className='card'>
          <div className='card-body'>
            <h5 style={{textAlign:'center'}}>Furniture</h5>
            <img src={furniture} alt=''npm  className="center"/>
          </div>
          
        </div>
      </div>
    </div>
    <div className='row' style={{paddingTop:'30px'}} >
      <div className='col-md-6'>
        <div className='card'>
          <div className='card-body'>
            <h5 style={{textAlign:'center'}}>Animal Feeds</h5>
            <img src={feeds} alt=''  className="center"/>
          </div>
          
        </div>
      </div>

      <div className='col-md-6'>
        <div className='card'>
          <div className='card-body'>
            <h5 style={{textAlign:'center'}}>Laptops and computer accessories</h5>
            <img src={computer} alt=''  className="center"/>
          </div>
          
        </div>
      </div>
    </div>
    </div>
    

    </>
  )
}

export default Service;