import axios, { type CreateAxiosDefaults } from 'axios';

const baseURL = process.env.NEXT_PUBLIC_REACT_APP_API_URL;

const options: CreateAxiosDefaults = {
	baseURL,
	headers: {
		'Content-Type': 'application/json'
	},
};

const axiosClassic = axios.create(options);

export { axiosClassic };

