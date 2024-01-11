import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from '@/widjet/Sidebar';
import { componentRender } from '@/shared/lib/test/componentRender/componentRender';

describe('Button', () => {
    test('Test render', () => {
        componentRender(<Sidebar />);
        expect(screen.getByText('<')).toBeInTheDocument();
    });

    test('Sidebar collapse', () => {
        componentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByText('<')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
