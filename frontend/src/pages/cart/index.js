import React from 'react';
import Button from '../../common/component/Button';

function Cart() {
    return (
        <div className='container d-flex flex-column justify-content-center p-4'>
            <h2>Cart</h2>
            <ul className='list-group list-group-flush mt-2'>
                <li className='list-group-item d-flex flex-row justify-content-between mt-3' style={{ backgroundColor: '#E7E5EA' }}>
                    <div className='d-flex flex-column justify-content-around'>
                        <h6>Hotel Name</h6>
                        <p>Room Type</p>
                        <p>Quantity: <span>#</span></p>
                    </div>
                    <div className='d-flex flex-column justify-content-around'>
                        <h5>$ <span>Price</span></h5>
                        <Button id='remove' variant='outline' color='danger' text='Remove' />
                    </div>
                </li>
                <li className='list-group-item d-flex flex-row justify-content-between mt-3' style={{ backgroundColor: '#E7E5EA', border: '1px solid rgba(0,0,0,.125)', borderWidth: '0 0 1px' }}>
                    <div className='d-flex flex-column justify-content-around'>
                        <h6>Hotel Name</h6>
                        <p>Room Type</p>
                        <p>Quantity: <span>#</span></p>
                    </div>
                    <div className='d-flex flex-column justify-content-around'>
                        <h5>$ <span>Price</span></h5>
                        <Button id='remove' variant='outline' color='danger' text='Remove' />
                    </div>
                </li>
            </ul>
            <div className='d-flex flex-row-reverse mt-4'>
                <Button id='book' text='Book Now' className='ms-4'/>
                <h4>Total: $<span>Price</span></h4>
            </div>
        </div>
    )
}
export default Cart