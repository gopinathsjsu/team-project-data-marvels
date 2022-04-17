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
		<>
			<form className='p-3' onSubmit={(e) => login(e)}>
				<div className='row'>
					<div className='col'>
						<div className='text-center p-3'>
							<h3 className='mb-3'> Log in</h3>
						</div>
					</div>
				</div>
				<div className='row'>
					<Elements
						formField={[
							{
								id: 'email',
								label: 'Email ID*',
								type: 'email',
								placeholder: 'Enter Registered Email ID',
								autoFocus: true,
								requiredFlag: true,
								value: val.email,
								onchange: onchange,
							},
						]}
					/>
				</div>
				<div className='row'>
					<div className='col'>
						<Elements
							formField={[
								{
									id: 'password',
									label: 'Password *',
									type: 'password',
									placeholder: 'Password',
									requiredFlag: true,
									value: val.password,
									onchange: onchange
								},
							]}
						/>
					</div>
				</div>
				<div className='text-center'>
					<Button
						text='Login'
						type='submit'
						className='px-3 py-1 mt-2'
						// loading={loading}
					/>
				</div>
			</form>

			<div className='mx-3 my-1 text-center' style={{ color: '#666666' }}>
				<p className='mb-0'>
					Don't have an account?
					<NavLink to='/signup' className='text-primary ms-2'>
						Register
					</NavLink>
				</p>
			</div>
		</>
	)
}