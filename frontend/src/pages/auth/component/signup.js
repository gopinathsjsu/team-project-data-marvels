import React, { useState } from 'react';
import Elements from '../../../common/component/Element';
import Button from '../../../common/component/Button';
import { NavLink } from 'react-router-dom';

export default function SignUp() {

    const [val, setVal] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    function onchange(newval, id) {
        let temp = { ...val }
        temp[id] = newval
        setVal(temp)
    }

    function register(e) {
        e.preventDefault();
        let data = {
            ...val
        }
        console.log(data);
    }

    return (
        <div className=' container d-flex flex-row justify-content-center align-items-center' style={{ height: '100vh' }}>
            <div className='card col-5 shadow p-3' id='register_container'>
                <form id='register_form' onSubmit={(e) => register(e)}>
                    <h1 className='d-flex flex-row justify-content-center mb-4 fw-normal'>Sign up</h1>

                    <div className='row justify-content-center'>
                        <Elements
                            formField={[
                                {
                                    id: 'firstName',
                                    type: 'text',
                                    label: 'First Name *',
                                    placeholder: 'First Name',
                                    autoFocus: true,
                                    className: 'col-7',
                                    requiredFlag: true,
                                    value: val.firstName,
                                    onchange: onchange
                                },
                                {
                                    id: 'lastName',
                                    type: 'text',
                                    label: 'Last Name *',
                                    placeholder: 'Last Name',
                                    className: 'col-7',
                                    requiredFlag: true,
                                    value: val.lastName,
                                    onchange: onchange
                                },
                                {
                                    id: 'email',
                                    type: 'email',
                                    placeholder: 'Email ID',
                                    label: 'Email *',
                                    className: 'col-7',
                                    requiredFlag: true,
                                    value: val.email,
                                    onchange: onchange
                                },
                                {
                                    id: 'password',
                                    type: 'password',
                                    placeholder: 'Password',
                                    label: 'Password *',
                                    className: 'col-7',
                                    requiredFlag: true,
                                    value: val.password,
                                    onchange: onchange
                                },
                            ]}
                        />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <Button
                            text={<span className='font-14 m-0'>Sign Up</span>}
                            type='submit'
                            // loading={loading}
                            className='px-3 py-1'
                            form='register_form'
                        />
                    </div>
                </form>

                <div className='d-flex justify-content-center pt-4 pb-3' style={{ color: '#666666' }}>
                    <p className='mb-0'>
                        Already have an account?
                        <NavLink to='/login' className='text-primary ms-2'>
                            Log In
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>

    );
}