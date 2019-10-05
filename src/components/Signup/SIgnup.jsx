import React from 'react';
import useSignUpForm from '../../CustomHooks';

const Signup = props => {
	const { inputs, handleInputChange, handleSubmit } = useSignUpForm(Signup);
	return (
		<div className='container'>
			<section className='row mt-5 text-center'>
				<div
					className='col-md-6 m-auto'
				>
					<h1 className='display-4'>Newsletter Signup</h1>
					<p className='lead'>
						Enter your info to get our awesome monthly newsletter
					</p>
					<form onSubmit={e => handleSubmit(e, props.history)}>
						<div className='form-group'>
							<input
								type='text'
								name='firstName'
								onChange={handleInputChange}
								value={inputs.firstName}
								required
								className='form-control'
								placeholder='First Name'
							/>
						</div>
						<div className='form-group'>
							<input
								type='text'
								name='lastName'
								onChange={handleInputChange}
								value={inputs.lastName}
								required
								className='form-control'
								placeholder='Last Name'
							/>
						</div>
						<div className='form-group'>
							<input
								type='email'
								name='email'
								onChange={handleInputChange}
								value={inputs.email}
								required
								className='form-control'
								placeholder='Email'
							/>
						</div>
						<div className='form-group'>
							<input
								type='phone'
								name='phone'
								onChange={handleInputChange}
								value={inputs.phone}
								required
								className='form-control'
								placeholder='Phone'
							/>
						</div>
						<div className='form-group'>
							<select
								className='form-control'
								name='gender'
								onChange={handleInputChange}
								value={inputs.gender}
							>
								<option>Gender</option>
								<option value={0}>Male</option>
								<option value={1}>Female</option>
							</select>
						</div>
						<button type='submit' className='btn btn-primary btn-block'>
							Sign Up
						</button>
					</form>
				</div>
			</section>
		</div>
	);
};

export default Signup;
