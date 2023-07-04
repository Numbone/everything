import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/test/renderWithTranslation/renderWithTranslation';
import Sidebar from './Sidebar';

describe('Button', () => {
    test('Test render', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByText('toggle')).toBeInTheDocument();
    });

    test('Sidebar collapse', () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByText('toggle')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});