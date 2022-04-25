import React from 'react';
import { Button } from '../../common/index';

function Hotels(){
    return(
        <div className='container d-flex flex-column justify-content-center p-4'>
            <h2>Hotels</h2>
            <ul className='list-group list-group-flush mt-2'>
                <li className='list-group-item d-flex flex-row justify-content-between mt-3' style={{ backgroundColor: '#E7E5EA', border: '1px solid rgba(0,0,0,.125)', borderWidth: '0 0 1px' }}>
                    <div className='col-4 d-flex flex-column justify-content-around'>
                        <h6>Hotel Name</h6>
                        <p className='mb-0'>Address</p>
                        <p className='mb-0'>City <span>, State</span><span>, Country</span></p>
                    </div>
                    <div className='d-flex flex-column justify-content-center'>
                        <p>Rating</p>
                    </div>
                </li>
                <li className='list-group-item d-flex flex-row justify-content-between mt-3' style={{ backgroundColor: '#E7E5EA', border: '1px solid rgba(0,0,0,.125)', borderWidth: '0 0 1px' }}>
                    <div className='col-4 d-flex flex-column justify-content-around'>
                        <h6>Hotel Name</h6>
                        <p className='mb-0'>Address</p>
                        <p className='mb-0'>City <span>, State</span><span>, Country</span></p>
                    </div>
                    <div className='d-flex flex-column justify-content-center'>
                        <p>Rating</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Hotels
