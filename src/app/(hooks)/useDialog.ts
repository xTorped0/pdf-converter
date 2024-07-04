import { useState } from 'react';
import { toast } from 'sonner';

import { blobToBase64 } from '@/utils/blob';
import { combineLocal } from '@/utils/localStorage';

const key = 'saved-pdfs';

export function useDialog(pdf?: Blob) {
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const handleSave = async (text: string) => {
		if (pdf) {
			const base64String = await blobToBase64(pdf);

			combineLocal(key, { [text]: base64String });
		} else {
			toast.error('PDF не знайдено');
		}
	};

	return { isDialogOpen, setIsDialogOpen, handleSave } as const;
}
