import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
	return (
		<div className='container'>
			<section className='row mt-5 text-center'>
				<div className='col-md-6 m-auto'>
					<h1>
						<i className='fas fa-thumbs-up fa-2x'></i>
					</h1>
					<h1 className='display-4'>Success!</h1>
					<p className='lead'>
						You are now signed up for our awesome montly newsletter!
					</p>
					<Link className='btn btn-secondary' to={'/'}>
						Back
					</Link>
				</div>
			</section>
		</div>
	);
};

export default Success;
