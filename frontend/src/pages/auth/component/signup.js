import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';

import { Elements, Button, API, getLinks } from '../../../common';

export default function SignUp() {
    const links = getLinks();
    const [loading, setLoading] = useState(false);

    const [val, setVal] = useState({
        username: "Yash",
        password: "test123",
        phonenumber: "669204",
        email: "yash@sjsu.edu"
    })

    const [errorMessage, setErrorMessage] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)

    function onchange(newval, id) {
        let temp = { ...val }
        temp[id] = newval
        setVal(temp)
    }

    function register(e) {
        e.preventDefault();
        setLoading(true);

        let data = {
            ...val
        }

        API({
            callURL: links.sign_up,
            callMethod: "POST",
            bodyData: data,
            callBack: (res) => {
                if (res.status) {
                    setErrorMessage(null);
                    setSuccessMessage(res.data);
                }
                else {
                    setErrorMessage(res.message);
                    setSuccessMessage(null);
                }
            }
        })

        setLoading(false);
    }

    return (
        <div className='container d-flex flex-row justify-content-center align-items-center' style={{ height: '100vh' }}>
            <div className='card col-5 shadow p-3'>
                <form id='register_form' onSubmit={(e) => register(e)}>
                    <h1 className='d-flex flex-row justify-content-center mb-4 fw-normal'>Sign up</h1>

                    <div className='row justify-content-center'>
                        <Elements
                            formField={[
                                {
                                    id: 'email',
                                    type: 'email',
                                    placeholder: 'Email ID',
                                    label: 'Email *',
                                    requiredFlag: true,
                                    value: val.email,
                                    className: 'col-7',
                                    onchange: onchange
                                },
                                {
                                    id: 'username',
                                    type: 'text',
                                    label: 'Username *',
                                    placeholder: 'Choose a username',
                                    requiredFlag: true,
                                    value: val.username,
                                    className: 'col-7',
                                    onchange: onchange
                                },
                                {
                                    id: 'phonenumber',
                                    type: 'number',
                                    placeholder: 'Mobile Number *',
                                    label: 'Phone Number *',
                                    requiredFlag: true,
                                    value: val.phonenumber,
                                    className: 'col-7',
                                    onchange: onchange
                                },
                                {
                                    id: 'password',
                                    type: 'password',
                                    placeholder: 'Password',
                                    label: 'Password *',
                                    requiredFlag: true,
                                    value: val.password,
                                    className: 'col-7',
                                    onchange: onchange
                                },
                            ]}
                        />
                    </div>
                    {successMessage !== null && <div className="alert alert-success" role="alert">
                    {successMessage}
                    <NavLink to="/login" className="alert-link">
                        {' '}Click here to login
                    </NavLink>
                </div>}

                {errorMessage !== null && <div className="alert alert-danger" role="alert">
                    {errorMessage}
                </div>}
                    <div className='d-flex justify-content-center'>
                        <Button
                            text={<span className='font-14 m-0'>Sign Up</span>}
                            type='submit'
                            loading={loading}
                            className='px-3 py-1'
                            form='register_form'
                        />
                    </div>
                </form>

                <div className='d-flex justify-content-center pt-4 pb-3' style={{ color: '#666666' }}>
                    <p className='mb-0 mt-1'>
                        Already have an account?
                    </p>
                    <NavLink to='/login' className='text-primary ms-2'>
                    Login
                </NavLink>
                </div>
            </div>
        </div>

    );
}