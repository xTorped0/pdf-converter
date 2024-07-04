import { Loader as LoaderIcon } from 'lucide-react';

interface ILoaderProps {
	size?: number
}

function Loader(props: ILoaderProps) {
	const { size } = props;
	return (
		<div className="flex justify-center items-center">
			<LoaderIcon className="animate-spin h-5 w-5 text-white" size={size} />
		</div>
	)
}

export default Loader;
