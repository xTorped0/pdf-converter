export const errorCatch = (error: any): string => {
	const message = error.response?.data?.message || error.message;

	return message ? typeof message === 'string' ? message : message[0] : 'Something went wrong';
}
