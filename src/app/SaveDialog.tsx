'use client';

import { useState } from 'react';

interface Props {
	isOpen: boolean;
	onClose: () => void;
	onSave: (text: string) => void;
}

export function SaveDialog(props: Props) {
	const { isOpen, onClose, onSave } = props;
	const [inputValue, setInputValue] = useState('');

	if (!isOpen) return null;

	const handleSave = () => {
		onSave(inputValue);
		setInputValue('');
		onClose();
	};

	return (
		<div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10'>
			<div className='bg-[#232323] p-6 rounded-lg shadow-lg'>
				<h2 className='text-white text-lg mb-4'>Введiть текст</h2>
				<input
					type='text'
					className='w-full p-2 mb-4 bg-[#232323] text-white rounded border border-white'
					value={inputValue}
					onChange={e => setInputValue(e.target.value)}
				/>
				<div className='flex justify-end'>
					<button
						className='border-yellow-500 text-yellow-500 px-4 py-2 rounded mr-2 border'
						onClick={handleSave}
					>
						Зберегти
					</button>
					<button
						className='border-red-600 text-red-600 px-4 py-2 rounded border'
						onClick={onClose}
					>
						Вiдмiнити
					</button>
				</div>
			</div>
		</div>
	);
}
