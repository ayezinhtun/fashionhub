import React from 'react'
const cartData = [
    {
        id: 1,
        image: 'https://i.ibb.co/R4MS9mh6/new-pair-white-sneakers-isolated-white.jpg',
        name: 'Shoe',
        Price: '100',
        Quantity: '1'
    },
    {
        id: 2,
        image: 'https://i.ibb.co/hRVy7YyX/model-advertising-fashionable-clothes.jpg',
        name: 'Cloth',
        Price: '100',
        Quantity: '2'
    },
]

function Cart() {
  return (
    <div>
        <div className='container py-5'>
            <h4>Shopping Cart</h4>
            {cartData.map((data, index) =>{
                return(
                     <div key={index} className="row mt-3">
                    <div className="col-lg-6">
                        <div className="d-flex align-items-center justify-content-start">
                            <div style={{ width: '60px', height: '60px' }} className='me-3'>
                                <img src={data.image} className='h-100 w-100 rounded-2' style={{ objectFit: 'cover' }} alt="" />
                            </div>
                            <div>
                                <p className='m-0'>{data.name}</p>
                                <span style={{ color: '#964F52' }}>Quantity: {data.Quantity} </span> <br />
                                <span style={{color: '#964F52'}}>Cost: ${data.Price}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-end">
                    <div className="d-flex align-items-center gap-2">
                        <button
                        className="btn btn-sm rounded-circle"
                        style={{ width: '32px', height: '32px', backgroundColor: '#F2E8E8', border: 'none' }}
                        >
                        -
                        </button>
                        <span className="px-3">1</span>
                        <button
                        className="btn btn-sm rounded-circle"
                        style={{ width: '32px', height: '32px', backgroundColor: '#F2E8E8', border: 'none' }}
                        >
                        +
                        </button>
                    </div>
                    </div>

                </div>
                )
            })}

            <div className="row mt-5">
                <h6 style={{ color: '#1C0D0F', fontSize: '18px' }} className='mb-3'>Order Summary</h6>
                <div className="col-lg-6 mb-3">
                    <span style={{ color: '#964F52' }}>Subtotal</span>
                </div>
                <div className='col-lg-6 mb-3 d-flex justify-content-end'>
                    <span style={{ color: '#964F52' }}>$384.97</span>
                </div>
                <div className="col-lg-6 mb-5">
                    <span style={{ color: '#964F52' }}>Estimated Tax</span>
                </div>
                <div className='col-lg-6 mb-5 d-flex justify-content-end'>
                    <span style={{ color: '#964F52' }}>0</span>
                </div>
                <div className="col-lg-6">
                    <span style={{ color: '#964F52' }}>Total</span>
                </div>
                <div className='col-lg-6 d-flex justify-content-end'>
                    <span style={{ color: '#964F52' }}>$384.97</span>
                </div>
                <div className="col-lg-12 d-flex justify-content-end mt-5">
                    <a href='payment' className='btn text-white rounded-4' style={{ backgroundColor: '#E82630' }}>Proceed To Checkout</a>
                </div>
            </div>
               
        </div>
      
    </div>
  )
}

export default Cart
