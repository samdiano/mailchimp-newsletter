import React, { useState } from 'react';
import axios from 'axios';

const useSignUpForm = () => {
	const [inputs, setInputs] = useState({});
	const handleSubmit = async (event, props) => {
		const headers = {
			'Content-Type': 'application/json',
			"Access-Control-Allow-Origin": "*",
		};
		if (event) {
			event.preventDefault();
			try {
				const response = await axios.post(
					'https://cors-anywhere.herokuapp.com/https://nl1ny70lfl.execute-api.us-east-2.amazonaws.com/development/audience',
					{
						email_address: inputs.email,
						merge_fields: {
							FNAME: inputs.firstName,
							LNAME: inputs.lastName,
							PHONE: inputs.phone,
							GENDER: parseInt(inputs.gender)
						},
						status: 'subscribed'
					},
					{
						headers: headers
					}
				);
				console.log(response);
				if (response.status === 200) {
					props.push('/success');
				}
			} catch (error) {
				console.error(error);
				props.push('/failed');
			}
		}
	};

	const handleInputChange = event => {
		event.persist();
		setInputs(inputs => ({
			...inputs,
			[event.target.name]: event.target.value
		}));
	};

	return { handleInputChange, handleSubmit, inputs };
};
export default useSignUpForm;
