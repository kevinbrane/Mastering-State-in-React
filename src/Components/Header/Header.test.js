import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Header from './Header';

// Crear un store mock
const mockStore = configureMockStore();
const store = mockStore({});

describe('Header Component Tests', () => {
    it('should call toggleCommunitySection function when button is clicked', () => {
        const mockToggleFunction = jest.fn();

        const { getByText } = render(
            <Provider store={store}>
                <Header toggleCommunitySection={mockToggleFunction} showCommunitySection={true} />
            </Provider>
        );

        const button = getByText('Hide section');
        fireEvent.click(button);
        expect(mockToggleFunction).toHaveBeenCalled();
    });
});