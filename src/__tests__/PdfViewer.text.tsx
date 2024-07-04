import { render, screen } from '@testing-library/react';

import { PdfViewer } from '@/components/pdf/PfdViewer';

describe('PdfViewer', () => {
	it('renders without crashing', () => {
		const url = 'https://example.com/sample.pdf';
		render(<PdfViewer url={url} />);
		expect(screen.getByText(/loading pdf/i)).toBeInTheDocument();
	});
});
