'use client';

import clsx from 'clsx';
import { FormEvent } from 'react';
import { toast } from 'sonner';

import Loader from '@/components/Loader';
import { PdfViewer } from '@/components/pdf/PfdViewer';

import { useConvertor } from './(hooks)/useConvertor';
import { useDialog } from './(hooks)/useDialog';
import { SaveDialog } from './SaveDialog';

export function Convertor() {
	const { pdf, convertText, loading } = useConvertor();
	const { isDialogOpen, setIsDialogOpen, handleSave } = useDialog(pdf);

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const elems = new FormData(e.currentTarget);
		const text = elems.get('text') as string;

		if (text && text.trim()) return convertText(text);

		toast.error('Введiть текст!');
	};

	const url = pdf && URL.createObjectURL(pdf);

	return (
		<div className='flex flex-col justify-center gap-2 overflow-auto w-full'>
			<form
				onSubmit={onSubmit}
				className='flex flex-col gap-2 py-2' //md:mx-[30%]
			>
				<textarea
					name='text'
					className='w-full text-black'
				/>

				<div className='flex gap-1 justify-center'>
					<button
						type='button'
						className={clsx(
							'border border-yellow-500 rounded px-4 py-2 text-yellow-500 hover:bg-yellow-500 hover:text-white hover:border-white transition',
							{
								'pointer-events-none border-gray-400 text-gray-400': !url
							}
						)}
						onClick={() => setIsDialogOpen(true)}
					>
						Зберегти
					</button>
					<button
						type='submit'
						className='border border-yellow-500 rounded px-4 py-2 text-yellow-500 hover:bg-yellow-500 hover:text-white hover:border-white transition'
					>
						{loading ? <Loader /> : 'Конвертувати'}
					</button>
				</div>
			</form>

			{url && <PdfViewer url={url} />}

			<SaveDialog
				isOpen={isDialogOpen}
				onClose={() => setIsDialogOpen(false)}
				onSave={handleSave}
			/>
		</div>
	);
}
