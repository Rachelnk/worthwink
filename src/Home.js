import './Home.css';
function Home(){
  return(
    <>
    <section className="home">
  <div
    id="carouselExampleCaptions"
    className="carousel slide"
    data-bs-ride="carousel"
  >
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="4000">
        <img
          src={'https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80'}
          className="d-block w-100"
          alt="..."
        />
        <div className="carousel-caption d-none d-md-block">
          <h5 style={{color: '#3baeea', fontFamily: 'Sawarabi Mincho, serif', paddingBottom: '250px' }} className='text-center'>Get comfortable, aesthetically pleasing and affordable furniture made from the finest wood. </h5>
          
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="4000">
        <img
          src={'https://images.pexels.com/photos/1153756/pexels-photo-1153756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
          className="d-block w-100"
          alt="..."
        />
        <div className="carousel-caption d-none d-md-block">
          <h5 style={{color: '#3baeea', fontFamily: 'Sawarabi Mincho, serif', paddingBottom: '250px' }} className='text-center'> Get affordable and nutrious animal feeds.</h5>
          
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="4000">
        <img
          src={'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'}
          className="d-block w-100"
          alt="..."
        />
        <div className="carousel-caption d-none d-md-block">
          <h5 style={{color: '#3baeea', fontFamily: 'Sawarabi Mincho, serif', paddingBottom: '250px' }} className='text-center'>Are you looking for the latest models of laptops or computer accessories that are compatible with all Operating Systems? <br></br> Well, look no further. We got you.</h5>
          
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="4000">
        <img
          src={'https://images.unsplash.com/photo-1515787366009-7cbdd2dc587b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'}
          className="d-block w-100"
          alt="..."
        />
        <div className="carousel-caption d-none d-md-block">
          <h5 style={{color: '#3baeea', fontFamily: 'Sawarabi Mincho, serif', paddingBottom: '250px' }} className='text-center'>Your one-stop shop for stationery.</h5>
          
        </div>
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev" style={{paddingBottom: '50px'}}    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next" style={{paddingBottom: '50px'}} 
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  
</section>
    </>
  )
}

export default Home;