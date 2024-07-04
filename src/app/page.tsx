import Link from 'next/link';

import { Convertor } from './Convertor';

export default function Home() {
	return (
		<div className='flex flex-col items-center text-white'>
			<main className='mt-6 px-2'>
				<h1 className='text-lg'> Ласкаво просимо до нашого PDF генератора </h1>
				<h3 className='text-md'> Легко перетворюйте ваш текст у PDF! </h3>

				<h3> Як це працює? </h3>
				<ol className='list-decimal mt-1 pl-8'>
					<li> Введіть ваш текст </li>
					<li> Натисніть кнопку "Enter" </li>
					<li> Подивіться на створений PDF </li>
				</ol>

				<Convertor />

				<Link
					href='/saved'
					className='flex gap-2.5  py-1.5 px-1 mt-2 border border-white text-white hover:bg-border rounded-sm mx-auto w-fit'
				>
					До збережених
				</Link>
			</main>
		</div>
	);
}
