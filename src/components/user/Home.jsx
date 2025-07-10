import React from 'react'
import HeroSlider from './Heroslider'

const Home = () => {
    const cartData = [
        {
            id: 1,
            image: 'https://i.ibb.co/7TnMBnL/portrait-happy-smiling-young-businessman-brown-suit-isolated-white-wall.jpg',
            title: 'Suit',
            description: 'Sharp and sophisticated'
        },
          {
            id: 2,
            image: 'https://i.ibb.co/hRVy7YyX/model-advertising-fashionable-clothes.jpg',
            title: 'Cardigan',
            description: 'Layer up in style'
        },
    ]
    const arrivalData = [
        {
            id: 1,
            image: 'https://i.ibb.co/7TnMBnL/portrait-happy-smiling-young-businessman-brown-suit-isolated-white-wall.jpg',
            title: 'Suit',
            description: 'Sharp and sophisticated'
        },
          {
            id: 2,
            image: 'https://i.ibb.co/hRVy7YyX/model-advertising-fashionable-clothes.jpg',
            title: 'Cardigan',
            description: 'Layer up in style'
        },
    ]
      const productData = [
        {
            id: 1,
            image: 'https://i.ibb.co/7TnMBnL/portrait-happy-smiling-young-businessman-brown-suit-isolated-white-wall.jpg',
            title: 'Suit',
            description: 'Sharp and sophisticated'
        },
          {
            id: 2,
            image: 'https://i.ibb.co/hRVy7YyX/model-advertising-fashionable-clothes.jpg',
            title: 'Cardigan',
            description: 'Layer up in style'
        },
    ]
  return (
    <div style={{ backgroundColor: '#FAFAFA' }} className='pt-4'>
      <HeroSlider/>
      <section id='featured'>
        <div className="container mt-5">
            <h3 className='mb-4' style={{ color: '1C0D0F' }}>Featured Collections</h3>
            <div className="row">
                {cartData.map((data, index) => {
                    return(
                        <div className="col-lg-3" key={index}>
                            <div className="card shadow-sm" style={{ backgroundColor: '#FAFAFA' }}>
                            <img
                                  src={data.image}
                                className="card-img-top"
                                style={{ height: '200px', objectFit: 'cover' }}
                                alt="Card"
                            />
                            <div className="card-body">
                                <h5 className="card-title" style={{ color: '#1A0F12' }}>{data.title}</h5>
                                <p className="card-text" style={{ color: '#8C5C5C' }}>
                                {data.description}
                                </p>
                                <a href="/cart" className="btn text-white form-control rounded-4" style={{ backgroundColor: '#E82630' }}>
                                    Add To Cart
                                </a>
                            </div>
                            </div>
                        </div>
                    )
                })}
               
            </div>
        </div>
      </section>
      <section id='newarrivals'>
        <div className="container mt-5">
            <h3 className='mb-4' style={{ color: '#1C0D0F' }}>New Arrivals</h3>
            <div className="row g-5">
                {arrivalData.map((data, index) => {
                    return(
                        <div className="col-lg-4 " key={index}>
                            <div className="card shadow-sm" style={{ backgroundColor: '#FAFAFA' }}>
                            <img
                                  src={data.image}
                                className="card-img-top"
                                style={{ height: '200px', objectFit: 'cover' }}
                                alt="Card"
                            />
                            <div className="card-body">
                                <h5 className="card-title" style={{ color: '#1A0F12' }}>{data.title}</h5>
                                <p className="card-text" style={{ color: '#8C5C5C' }}>
                                {data.description}
                                </p>
                                <a href="#" className="btn text-white form-control rounded-4" style={{ backgroundColor: '#E82630' }}>
                                    Add To Cart
                                </a>
                            </div>
                            </div>
                        </div>
                    )
                })}
               
            </div>
        </div>
      </section>
      <section id='products'>
        <div className="container mt-5">
            <h3 className='mb-4' style={{ color: '#1C0D0F' }}>Featured Products</h3>
            <div className="row">
                {productData.map((data, index) => {
                    return(
                        <div className="col-lg-3" key={index}>
                            <div className="card shadow-sm" style={{ backgroundColor: '#FAFAFA' }}>
                            <img
                                  src={data.image}
                                className="card-img-top"
                                style={{ height: '200px', objectFit: 'cover' }}
                                alt="Card"
                            />
                            <div className="card-body">
                                <h5 className="card-title" style={{ color: '#1A0F12' }}>{data.title}</h5>
                                <p className="card-text" style={{ color: '#8C5C5C' }}>
                                {data.description}
                                </p>
                                <a href="#" className="btn text-white form-control rounded-4" style={{ backgroundColor: '#E82630' }}>
                                    Add To Cart
                                </a>
                            </div>
                            </div>
                        </div>
                    )
                })}
               
            </div>
        </div>
      </section>
      <section id='newsletter'>
        <div className="container mt-5">
            <h4 className='mb-3' style={{ color: '#1C0D0F' }}>Newsletter Signup</h4>
            <style>
                {`
                  .custom-input::placeholder {
                    color: #8C5C5C;
                  }
                `}
              </style>

              <form action="">
                <label className='mb-2' htmlFor="">Your Email</label> <br />
                <input
                  type="email"
                  className="form-control custom-input py-2 rounded-3"
                  placeholder="Enter your email"
                  style={{ backgroundColor: '#F2E8E8', width: '400px' }}
                />
              </form>
              <button className='btn text-white rounded-4 px-3 py-2 mt-3' style={{ backgroundColor: '#E82630' }}>Subscribe</button>
        </div>
          
      </section>
      <section id='join' className='pb-5'>
        <div className="container mt-5 d-flex flex-column align-items-center justify-content-center">
              <h3 style={{ color: '#1C0D0F' }}>Join Our Community</h3>
              <p style={{ color: '#1C0D0F' }}>Stay updated with the latest trends, exclusive offers, and more.</p>
                            <button className='btn text-white rounded-4 px-3 py-2 mt-3 fs-5' style={{ backgroundColor: '#E82630' }}>Signup Now</button>
        </div>
      
      </section>
    </div>
  )
}

export default Home
