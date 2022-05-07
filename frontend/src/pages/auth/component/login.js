import React, { useState } from 'react';
import { connect } from 'react-redux';

import { set_userData, set_role } from '../../../redux/dispatch/dispatch';

import { Elements, Button, getLinks, API } from '../../../common';
import Signup from './signup';

function Login(props) {
	const links = getLinks();

	const [loading, setLoading] = useState(false);
	const [loginError, setLoginError] = useState(null);
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
				if (res.status) {
					setLoginError(null);
					props.set_userData(res);
					props.set_role(res.userrole);
					window.bootstrap.Modal.getInstance(
						document.getElementById(props.modalId)
					).hide()
				}
				else {
					setLoginError(res.message);
				}

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
				{loginError !== null && <p>
					<font color='red'>{loginError}</font>
				</p>}
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
								<Signup modalId={props.modalId} setModalData={props.setModalData} />
							),
						}
						props.setModalData(temp)
					}}
				/>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => { return { profile: state.greduce.profile } }

const mapDispatchToProps = (dispatch) => {
	return {
		set_userData: (options) => {
			dispatch(set_userData(options))
		},
		set_role: (option) => {
			dispatch(set_role(option))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)