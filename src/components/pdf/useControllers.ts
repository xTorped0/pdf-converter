import { useState } from 'react';

export function useControllers() {
	const [numPages, setNumPages] = useState<number>(1);
	const [pageNumber, setPageNumber] = useState<number>(1);

	const [zoom, setZoom] = useState(1);
	const [rotation, setRotation] = useState(0);

	const values = {
		zoom,
		rotation,
		numPages,
		pageNumber
	};

	const onZoom = (delta: number) => {
		setZoom(zoom + delta);
	};

	const onPage = (delta: number) => {
		const newPage = pageNumber + delta;
		const updatedPage =
			newPage >= numPages ? 1 : newPage <= 1 ? numPages : newPage;
		setPageNumber(updatedPage);
	};

	const onRotation = (delta: number) => {
		setRotation(rotation + delta);
	};

	const actions = {
		onZoom,
		onRotation,
		onPage,
		setNumPages
	};

	return [values, actions] as const;
}
