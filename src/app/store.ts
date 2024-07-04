import { errorCatch } from '@/core/error';
import { toast } from 'sonner';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { convertorService } from '@/services/convertor/convertor.service';

interface State {
	currentPdf?: Blob;
	loading?: boolean;
	// error?: Error;
}

type Actions = {
	convertText: (text: string) => void;
};

export const useConvertor = create<State & Actions>()(
	devtools(
		immer((set, get) => ({
			convertText: async text => {
				set(state => {
					state.loading = false;
				});

				try {
					const pdf = await convertorService.convertToPdf(text);

					set(state => {
						state.currentPdf = pdf;
					});
				} catch (err) {
					toast.error(errorCatch(err));
				} finally {
					set(state => {
						state.loading = false;
					});
				}
			}
		}))
	)
);
