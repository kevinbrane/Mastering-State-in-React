import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom'; 
import CommunitySection from './CommunitySection';

const mockedCommunityData = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe'
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Doe'
  }
];

describe('<CommunitySection />', () => {
  test('displays data correctly', () => {
    render(
      <MemoryRouter>
        <CommunitySection data={mockedCommunityData} />
      </MemoryRouter>
    );

    for (let user of mockedCommunityData) {
      const displayName = `${user.firstName} ${user.lastName}`;
      expect(screen.getByText(displayName)).toBeInTheDocument();
    }
  });
});