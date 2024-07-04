import { useConvertor } from '@/app/(hooks)/useConvertor';
import { useDialog } from '@/app/(hooks)/useDialog';
import { Converter } from '@/app/Converter';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { toast } from 'sonner';

jest.mock('@/app/(hooks)/useConvertor');
jest.mock('@/app/(hooks)/useDialog');
jest.mock('sonner', () => ({
	toast: {
		error: jest.fn()
	}
}));

describe('Converter', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('shows an error if text is empty', () => {
		(useConvertor as jest.Mock).mockReturnValue({
			pdf: null,
			convertText: jest.fn(),
			loading: false
		});

		(useDialog as jest.Mock).mockReturnValue({
			isDialogOpen: false,
			setIsDialogOpen: jest.fn(),
			handleSave: jest.fn()
		});

		render(<Converter />);

		const submitButton = screen.getByText('Конвертувати');
		fireEvent.click(submitButton);

		expect(toast.error).toHaveBeenCalledWith('Введiть текст!');
	});

	it('calls convertText with the correct text', async () => {
		const mockConvertText = jest.fn();
		(useConvertor as jest.Mock).mockReturnValue({
			pdf: null,
			convertText: mockConvertText,
			loading: false
		});

		(useDialog as jest.Mock).mockReturnValue({
			isDialogOpen: false,
			setIsDialogOpen: jest.fn(),
			handleSave: jest.fn()
		});

		render(<Converter />);

		const textarea = screen.getByPlaceholderText(
			'Введіть текст для конвертації'
		);
		fireEvent.change(textarea, { target: { value: 'Test text' } });

		const submitButton = screen.getByText('Конвертувати');
		fireEvent.click(submitButton);

		await waitFor(() => {
			expect(mockConvertText).toHaveBeenCalledWith('Test text');
		});
	});

	it('opens the save dialog when save button is clicked', () => {
		const mockSetIsDialogOpen = jest.fn();
		(useConvertor as jest.Mock).mockReturnValue({
			pdf: new Blob(),
			convertText: jest.fn(),
			loading: false
		});

		(useDialog as jest.Mock).mockReturnValue({
			isDialogOpen: false,
			setIsDialogOpen: mockSetIsDialogOpen,
			handleSave: jest.fn()
		});

		render(<Converter />);

		const saveButton = screen.getByText('Зберегти');
		fireEvent.click(saveButton);

		expect(mockSetIsDialogOpen).toHaveBeenCalledWith(true);
	});
});
