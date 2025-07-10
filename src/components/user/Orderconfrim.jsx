import React from 'react'
import { data } from 'react-router-dom'

const orderData =[
    {
        id: 1,
        item: 'Shoe',
        quantity: 1,
        price: '100'
    },
     {
        id: 2,
        item: 'Cloth',
        quantity: 2,
        price: '200'
    },
]

function Orderconfrim() {
  return (
    <div>
        <div className="container py-5">
            <h4>Order Confirmed!</h4>
            <p className='mb-3' style={{ color: '#8C5C5C' }}>
                Thank you, Sarah, your order has been placed successfully. You will receive an email confirmation shortly.
            </p>
            <div className='mt-4'>
                <h5 className='mb-3'>Order Number</h5>
                <p>123456789</p>
            </div>
        <div className='mt-4'>
        <h5 className='mb-3'>Order Summary</h5>
        <div className="table-responsive border overflow-hidden" style={{ borderRadius: '12px' }}>
            <table className="table table-hover table-bordered mb-0">
                <thead>
                <tr>
                    <th style={{ border: '0' }}>Items</th>
                    <th style={{ border: '0' }}>Quantity</th>
                    <th style={{ border: '0' }}>Price</th>
                </tr>
                </thead>
                <tbody>
                {orderData.map((data, index) =>{
                    return(
                        <tr key={index}>
                        <th className='py-3' style={{ border: '0' }} scope="row">{data.item}</th>
                        <td className='py-3' style={{ border: '0' }}>{data.quantity}</td>
                        <td className='py-3' style={{ border: '0' }}>{data.price}</td>
                        </tr>
                    )
                })}
               
                </tbody>
            </table>
            </div>


            </div>

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
            </div>
            <div className='mt-5'>
                <h5>Estimated Delivery</h5>
                <p>In about 3 days after order</p>
                <div className="col-lg-12 d-flex mt-5">
                    <a href='/' className='btn text-white px-5 rounded-4' style={{ backgroundColor: '#E82630' }}>OK</a>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Orderconfrim
