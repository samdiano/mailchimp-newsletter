import React from 'react';
import { Link } from 'react-router-dom';

const Failed = () => {
	return (
		<div className='container'>
			<section className='row mt-5 text-center'>
				<div className='col-md-6 m-auto'>
					<h1>
						<i className='fas fa-times-octagon fa-2x'></i>
					</h1>
					<h1 className='display-4'>Sorry!</h1>
					<p className='lead'>
						Something went wrong, please go back and try again
					</p>
					<Link className='btn btn-secondary' to={'/'} >
						Back
					</Link>
				</div>
			</section>
		</div>
	);
};

export default Failed;
