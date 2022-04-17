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
        <div className='p-3 text-center' id='register_container'>
            <form id='register_form' onSubmit={(e) => register(e)}>
                <h3 className='mb-3'>Sign up</h3>

                <div className='row'>
                        <Elements
                            formField={[
                                {
                                    id: 'firstName',
                                    type: 'text',
                                    placeholder: 'First Name *',
                                    autoFocus: true,
                                    requiredFlag: true,
                                    value: val.firstName,
                                    onchange: onchange
                                },
                                {
                                    id: 'lastName',
                                    type: 'text',
                                    placeholder: 'Last Name *',
                                    requiredFlag: true,
                                    value: val.lastName,
                                    onchange: onchange
                                },
                                {
                                    id: 'email',
                                    type: 'email',
                                    placeholder: 'Email ID *',
                                    requiredFlag: true,
                                    value: val.email,
                                    onchange: onchange
                                },
                                {
                                    id: 'password',
                                    type: 'password',
                                    placeholder: 'Password *',
                                    requiredFlag: true,
                                    value: val.password,
                                    onchange: onchange
                                },
                                {
                                    id: 'conf_password',
                                    type: 'password',
                                    placeholder: 'Re-Enter Password *',
                                    requiredFlag: true,
                                    value: val.conf_password,
                                    onchange: onchange
                                },
                            ]}
                        />
                </div>
                <Button
                    text={<span className='font-14 m-0'>Sign Up</span>}
                    type='submit'
                    // loading={loading}
                    className='px-3 py-1 mt-3'
                    form='register_form'
                />
            </form>

            <div className='pt-4 pb-3 text-center' style={{ color: '#666666' }}>
                <p className='mb-0'>
                    Already have an account?
                    <NavLink to='/login' className='text-primary ms-2'>
                        Log In
                    </NavLink>
                </p>
            </div>
        </div>
    );
}