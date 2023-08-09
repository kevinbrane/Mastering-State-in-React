import React from 'react';
import { render, waitFor } from '@testing-library/react';
import mockAxios from 'jest-mock-axios';
import CommunityUser from './CommunityUser';

describe('<CommunityUser />', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    it('displays user data correctly based on server response', async () => {
        const mockData = {
            id: '123',
            avatar: 'https://example.com/avatar.jpg',
            username: 'testuser',
            description: 'This is a test user.'
        };

        mockAxios.get.mockResolvedValueOnce({ data: mockData });

        // Renderiza tu componente sin envolverlo en MemoryRouter y Route
        const { getByAltText, getByText } = render(<CommunityUser />);

        await waitFor(() => expect(mockAxios.get).toHaveBeenCalledTimes(1));

        expect(getByAltText('User Avatar')).toHaveAttribute('src', mockData.avatar);
        expect(getByText(mockData.username)).toBeInTheDocument();
        expect(getByText(mockData.description)).toBeInTheDocument();
    });
});