import {
	ChevronLeft,
	ChevronRight,
	RotateCcwSquare,
	RotateCwSquare,
	ZoomIn,
	ZoomOut
} from 'lucide-react';

import { useControllers } from './useControllers';

export function Controllers(props: {
	actions: ReturnType<typeof useControllers>[1];
	values: ReturnType<typeof useControllers>[0];
}) {
	const { actions, values } = props;

	const { onZoom, onRotation, onPage } = actions;
	const { pageNumber, zoom } = values;

	return (
		<div className='border rounded-sm border-white px-2 py-1 flex gap-2 text-white'>
			<ZoomIn
				className='cursor-pointer hover:text-yellow-500'
				onClick={() => onZoom(0.15)}
			/>
			{zoom.toFixed(2)}
			<ZoomOut
				className='cursor-pointer hover:text-yellow-500'
				onClick={() => onZoom(-0.15)}
			/>

			<ChevronLeft
				className='cursor-pointer hover:text-yellow-500'
				onClick={() => onPage(-1)}
			/>
			{pageNumber}
			<ChevronRight
				className='cursor-pointer hover:text-yellow-500'
				onClick={() => onPage(1)}
			/>

			<RotateCcwSquare
				className='cursor-pointer hover:text-yellow-500'
				onClick={() => onRotation(90)}
			/>
			<RotateCwSquare
				className='cursor-pointer hover:text-yellow-500'
				onClick={() => onRotation(-90)}
			/>
		</div>
	);
}
