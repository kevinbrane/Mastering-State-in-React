import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // para tener acceso a las extensiones como "toBeInTheDocument"
import Footer from './Footer';

describe('<Footer />', () => {
    it('renders without crashing', () => {
        const { container } = render(<Footer />);
        expect(container).toBeInTheDocument();
    });
});