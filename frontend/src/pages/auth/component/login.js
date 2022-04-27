import React, { useState } from 'react';
import { Elements, Button, getLinks, API } from '../../../common';
import Signup from './signup';

export default function Login(props) {
	const links = getLinks();

	const [loading, setLoading] = useState(false)
	const [val, setVal] = useState({
		username: "tharun",
		password: "test123"
	})

	function onchange(newval, id) {
		let temp = { ...val }
		temp[id] = newval
		setVal(temp)
	}

	function login(e) {
		e.preventDefault();
		setLoading(true);

		let data = { ...val }

		API({
			callURL: links.login,
			callMethod: "POST",
			bodyData: data,
			callBack: (res) => {
				console.log(res);
			}
		})

		setLoading(false);
	}

	return (
		<div className='container col-9'>
			<form onSubmit={(e) => login(e)}>
				<h1 className='d-flex flex-row justify-content-center mb-4 fw-normal'> Log in</h1>
				<div className='row justify-content-center'>
					<Elements
						formField={[
							{
								id: 'username',
								label: 'Username *',
								type: 'text',
								placeholder: 'Enter Username',
								autoFocus: true,
								requiredFlag: true,
								value: val.username,
								onchange: onchange,
							},
							{
								id: 'password',
								label: 'Password *',
								type: 'password',
								placeholder: 'Enter Password',
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
						loading={loading}
					/>
				</div>
			</form>
			<div className='d-flex justify-content-center pt-3 pb-3' style={{ color: '#666666' }}>
				<p className='mb-0 mt-1'>
					Don't have an account?
				</p>
				<Button
					text='Register'
					variant='link'
					onClick={() => {
						let temp = {
							title: '',
							body: (
								<Signup setModalData={props.setModalData} />
							),
						}
						props.setModalData(temp)
					}}
				/>
			</div>
		</div>
	)
}