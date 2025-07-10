import React from 'react'
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

const Electronic= () => {
  return (
    <div className='container mb-4'>
            <div className="row">
                <h4 className='mb-5'>Electronic</h4>
                {arrivalData.map((data, index) => {
                    return(
                        <div className="col-lg-3 " key={index}>
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
  )
}

export default Electronic
