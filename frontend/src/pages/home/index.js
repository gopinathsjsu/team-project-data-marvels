import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Elements from '../../common/component/Element';
import Button from '../../common/component/Button';


function Home() {
    const [val, setVal] = useState({
        destination: "",
        checkin: "",
        checkout: "",
        roomType: ""
    })

    function onchange(newval, id) {
        let temp = { ...val }
        temp[id] = newval
        setVal(temp)
    }

    function search(e) {
        e.preventDefault();
        let data = {
            ...val
        }
        console.log(data);
    }
    return (
        <div className='container d-flex flex-column justify-content-center p-4'>
            <div className='card d-flex shadow-sm flex-row justify-content-around p-3 pb-0' style={{ borderRadius: '20px' }}>
                <form className='col-12 d-flex flex-row justify-content-around'>
                    <Elements
                        formField={[
                            {
                                id: 'destination',
                                type: 'text',
                                label: 'Destination',
                                placeholder: 'Destination',
                                autoFocus: true,
                                className: 'col-4',
                                requiredFlag: true,
                                value: val.destination,
                                onchange: onchange
                            },
                            {
                                id: 'dateRange',
                                type: 'datepicker',
                            }
                        ]}
                    />
                    <div className='d-flex align-items-center mb-3'>
                        <Button id="search" type="submit" text="Search Hotels" style={{ height: '40px' }} />
                    </div>
                </form>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Home