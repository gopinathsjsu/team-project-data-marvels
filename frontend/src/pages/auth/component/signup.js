import React, { useState } from 'react';
import Elements from '../../../common/component/Element';
import Button from '../../../common/component/Button';
import { NavLink } from 'react-router-dom';
import API from '../../../common/helper/api';
import getLinks from '../../../common/helper/links';

export default function SignUp() {
    const links = getLinks();
    const [loading, setLoading] = useState(false);

    const [val, setVal] = useState({
        username: "Yash",
        password: "test123",
        phonenumber: "669204",
        email: "yash@sjsu.edu"
    })

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
			// headers: {},
            // urlParams: {},
			callBack: (res) => {
				console.log(res);
			}
		})

        setLoading(false);
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
                                    id: 'email',
                                    type: 'email',
                                    placeholder: 'Email ID',
                                    label: 'Email *',
                                    requiredFlag: true,
                                    value: val.email,
                                    onchange: onchange
                                },
                                {
                                    id: 'username',
                                    type: 'text',
                                    label: 'Username *',
                                    placeholder: 'Choose a username',
                                    requiredFlag: true,
                                    value: val.username,
                                    onchange: onchange
                                },
                                {
                                    id: 'phonenumber',
                                    type: 'number',
                                    placeholder: 'Mobile Number *',
                                    label: 'Phone Number *',
                                    requiredFlag: true,
                                    value: val.phonenumber,
                                    onchange: onchange
                                },
                                {
                                    id: 'password',
                                    type: 'password',
                                    placeholder: 'Password',
                                    label: 'Password *',
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
                            loading={loading}
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