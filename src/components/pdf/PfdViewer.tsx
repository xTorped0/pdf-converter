'use client';

import { Document, Page, pdfjs } from 'react-pdf';

import { Controllers } from './Controllers';
import { useControllers } from './useControllers';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	'pdfjs-dist/build/pdf.worker.min.mjs',
	import.meta.url
).toString();

export function PdfViewer(props: { url: string }) {
	const { url } = props;
	const [values, actions] = useControllers();
	const { pageNumber, zoom, rotation } = values;
	const { setNumPages } = actions;

	function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
		setNumPages(numPages);
	}

	return (
		<div className='w-full p-2 overflow-auto'>
			<Controllers
				actions={actions}
				values={values}
			/>
			<Document
				file={url}
				className='w-full'
				onLoadSuccess={onDocumentLoadSuccess}
			>
				<Page
					pageNumber={pageNumber}
					className='max-w-full'
					scale={zoom}
					rotate={rotation}
				/>
			</Document>
		</div>
	);
}
