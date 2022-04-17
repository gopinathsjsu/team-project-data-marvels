import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import API from "../../../common/helper/api";
import Elements from '../../../common/component/Element';
import Button from '../../../common/component/Button';


export default function Login() {
	const [val, setVal] = useState({
		email: "",
		password: ""
	})

	function onchange(newval, id) {
		let temp = { ...val }
		temp[id] = newval
		setVal(temp)
	}

	function login(e) {
		e.preventDefault();
		let data = {
			...val
		}
		// API({
		//   callURL: "",
		//   callMethod: "GET",
		//   urlParams: {},
		//   bodyData: data,
		//   headers: {},
		//   callBack: (res) => {
		//     console.log(res);
		//   }
		// })
		console.log(data);
	}

	return (
		<div className='d-flex flex-row justify-content-center align-items-center' style={{ background: '#E7E5EA', height: '100vh' }}>
			<div className='card col-5 shadow p-3' id='login_container'>
				<form onSubmit={(e) => login(e)}>
					<h1 className='d-flex flex-row justify-content-center mb-4 fw-normal'> Log in</h1>
					<div className='row justify-content-center'>
						<Elements
							formField={[
								{
									id: 'email',
									label: 'Email ID *',
									type: 'email',
									placeholder: 'Enter Registered Email ID',
									className: 'col-7',
									autoFocus: true,
									requiredFlag: true,
									value: val.email,
									onchange: onchange,
								},
								{
									id: 'password',
									label: 'Password *',
									type: 'password',
									placeholder: 'Enter Password',
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
							text='Login'
							type='submit'
						// loading={loading}
						/>
					</div>
				</form>
				<div className='d-flex justify-content-center pt-3 pb-3' style={{ color: '#666666' }}>
					<p className='mb-0'>
						Don't have an account?
						<NavLink to='/signup' className='text-primary ms-2'>
							Register
						</NavLink>
					</p>
				</div>
			</div>
		</div>
	)
}