import { fireEvent, screen } from '@testing-library/react';
import { componentRouter } from 'shared/lib/test/componentRouter/componentRouter';
import Sidebar from './Sidebar';

describe('Button', () => {
    test('Test render', () => {
        componentRouter(<Sidebar />);
        expect(screen.getByText('<')).toBeInTheDocument();
    });

    test('Sidebar collapse', () => {
        componentRouter(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByText('<')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
