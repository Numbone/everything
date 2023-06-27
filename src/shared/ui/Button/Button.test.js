import { render, screen } from 'react-dom';
import Button from './Button';

describe('Button', () => {
    test('renderTest', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
});
