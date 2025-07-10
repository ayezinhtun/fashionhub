import React from 'react'

function Payment() {
  return (
    <div>
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6">
                     <h4 className='mb-3'>Information</h4>
                     <div className='input-gp mb-3 d-flex'>
                            <input type="email" className='form-control w-50 me-3' placeholder='Email Address' />
                            <input type="text" className='form-control w-50' placeholder='Full Name' />
                     </div>
                      <div className='input-gp mb-3 d-flex'>
                            <input type="email" className='form-control w-50 me-3' placeholder='Address' />
                            <input type="text" className='form-control w-50' placeholder='City' />
                     </div>
                    <div className='input-gp d-flex'>
                            <input type="email" className='form-control' style={{ width: '265px' }} placeholder='State' />
                     </div>

                     <div className='mt-4'>
                        <h5>Payment Method</h5>
                     </div>
                     <div className="col-lg-12 d-flex mt-5">
                        <a href='orderconfirm' className='btn text-white rounded-4' style={{ backgroundColor: '#E82630' }}>Place Order</a>
                    </div>
                </div>
                <div className="col-lg-6 d-flex justify-content-end">
                    <div className="card border-0 rounded-3 p-3 py-4" style={{ width: '300px', backgroundColor: '#F2E8E8' }}>
                        <h5>Order Summary</h5>
                        <div>
                             <div className="mb-3">
                                <div className="d-flex align-items-center justify-content-start">
                                    <div style={{ width: '60px', height: '60px' }} className='me-3'>
                                        <img src='https://i.ibb.co/R4MS9mh6/new-pair-white-sneakers-isolated-white.jpg' className='h-100 w-100 rounded-2' style={{ objectFit: 'cover' }} alt="" />
                                    </div>
                                    <div>
                                        <p className='m-0'>Shoe</p>
                                        <span style={{ color: '#964F52' }}>Quantity: 1 </span> <br />
                                        <span style={{color: '#964F52'}}>Cost: $100</span>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="d-flex align-items-center justify-content-start">
                                    <div style={{ width: '60px', height: '60px' }} className='me-3'>
                                        <img src='https://i.ibb.co/hRVy7YyX/model-advertising-fashionable-clothes.jpg' className='h-100 w-100 rounded-2' style={{ objectFit: 'cover' }} alt="" />
                                    </div>
                                    <div>
                                        <p className='m-0'>T-shirt</p>
                                        <span style={{ color: '#964F52' }}>Quantity: 1 </span> <br />
                                        <span style={{color: '#964F52'}}>Cost: $100</span>
                                    </div>
                                </div>
                            </div>
                           
                        </div>

                          <div className="row mt-5">
                            <div className="col-lg-6 mb-3">
                                <span style={{ color: '#964F52' }}>Subtotal</span>
                            </div>
                            <div className='col-lg-6 mb-3 d-flex justify-content-end'>
                                <span style={{ color: '#964F52' }}>$384.97</span>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <span style={{ color: '#964F52' }}>Estimated Tax</span>
                            </div>
                            <div className='col-lg-6 mb-4 d-flex justify-content-end'>
                                <span style={{ color: '#964F52' }}>0</span>
                            </div>
                            <div className="col-lg-6">
                                <span style={{ color: '#964F52' }}>Total</span>
                            </div>
                            <div className='col-lg-6 d-flex justify-content-end'>
                                <span style={{ color: '#964F52' }}>$384.97</span>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment
