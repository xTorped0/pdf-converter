import { axiosClassic } from '@/core/network';

class Convertor {
	private BASE_URL = '/';
	private API_KEY = process.env.NEXT_PUBLIC_API_KEY;

	async convertToPdf(text: string) {
		const response = await axiosClassic.post<Blob>(
			`/create-pdf`,
			{ text },
			{ params: { apiKey: this.API_KEY }, responseType: 'blob' }
		);

		return response.data;
	}
}

export const convertorService = new Convertor();
