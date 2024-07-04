import { useState } from 'react';

import { getLocal, setLocal } from '@/utils/localStorage';

const key = 'saved-pdfs';

export function useSaved() {
	const [pdfs, setPdfs] = useState(getLocal(key));
	const [viewedPdf, setViewedPdf] = useState<string | null>(null);

	const setPdfInView = (name: string) => {
		setViewedPdf(name);
	};

	const removePdf = (name: string) => {
		const updatedPdfs = { ...pdfs };
		delete updatedPdfs[name];

		setLocal(key, updatedPdfs);
		setPdfs(updatedPdfs);
	};

	return { pdfs, viewedPdf, setPdfInView, removePdf };
}
