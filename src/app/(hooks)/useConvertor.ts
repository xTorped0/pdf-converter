import { errorCatch } from '@/core/error';
import { useState } from 'react';
import { toast } from 'sonner';

import { convertorService } from '@/services/convertor/convertor.service';

export function useConvertor() {
	const [loading, setLoading] = useState(false);
	const [pdf, setPdf] = useState<Blob>();

	const convertText = async (text: string) => {
		setLoading(true);

		try {
			const pdf = await convertorService.convertToPdf(text);

			setPdf(pdf);
		} catch (err) {
			toast.error(errorCatch(err));
		} finally {
			setLoading(false);
		}
	};

	return {
		loading,
		pdf,
		convertText
	} as const;
}
