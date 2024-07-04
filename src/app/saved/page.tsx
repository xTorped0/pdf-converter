'use client';

import clsx from 'clsx';
import { ChevronLeft, Trash } from 'lucide-react';
import Link from 'next/link';
import { MouseEvent, useMemo } from 'react';

import { PdfViewer } from '@/components/pdf/PfdViewer';

import { handleLoadBlob } from '@/utils/blob';

import { useSaved } from './useSaved';

// const pdfs = {
// 	name: new Blob(),
// 	asr: true,
// 	sdasdq: true
// };

export default function Saved() {
	const { pdfs, viewedPdf, removePdf, setPdfInView } = useSaved();

	const list = useMemo(() => {
		return Object.keys(pdfs);
	}, [pdfs]);

	const url = useMemo(() => {
		if (!viewedPdf) return false;
		const base64 = pdfs[viewedPdf];
		const blob = handleLoadBlob(base64);

		const url = URL.createObjectURL(blob);

		return url;
	}, [viewedPdf]);

	const onRemovePdf = (name: string) => (e: MouseEvent<SVGSVGElement>) => {
		e.stopPropagation();
		removePdf(name);
	};

	const onOpenPdf = (name: string) => () => {
		setPdfInView(name);
	};

	return (
		<main className='flex gap-2 h-full'>
			<aside className='border-r border-yellow-500 md:w-1/4 h-full'>
				<Link
					href='/'
					className='flex gap-2 w-full text-white border-b border-white p-2'
				>
					<ChevronLeft />
					Назад
				</Link>
				{list.map((name, ind) => {
					return (
						<div
							className='flex gap-2 w-full text-white text-center px-2 py-1 cursor-pointer transition'
							onClick={onOpenPdf(name)}
							key={name + ind}
						>
							<span
								className={clsx('flex-1 text-start', {
									'text-yellow-500': name === viewedPdf
								})}
							>
								{' '}
								{name}{' '}
							</span>
							<Trash
								onClick={onRemovePdf(name)}
								className='hover:text-yellow-500'
							/>
						</div>
					);
				})}
			</aside>
			<section>{url && <PdfViewer url={url} />}</section>
		</main>
	);
}
