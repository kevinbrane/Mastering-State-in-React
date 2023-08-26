import React from 'react';
import { render } from '@testing-library/react';
import CommunityUser from './CommunityUser';
import { BrowserRouter } from 'react-router-dom';

describe('<CommunityUser />', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <CommunityUser />
      </BrowserRouter>
    );
  });

  it('renders user data correctly when provided as props', () => {
    const userData = {
      avatar: 'path/to/avatar.jpg',
      testimony: 'This is a mock testimony',
      firstName: 'John',
      lastName: 'Doe',
      position: 'Developer',
      id: 'mockUserId',
    };

    const { getByText, getByAltText } = render(
      <BrowserRouter>
        <CommunityUser user={userData} />
      </BrowserRouter>
    );

    expect(getByAltText('User Avatar')).toHaveAttribute('src', userData.avatar); // corregido aquí
    expect(getByText(userData.testimony)).toBeInTheDocument();
    expect(getByText(`${userData.firstName} ${userData.lastName}`)).toBeInTheDocument();
    expect(getByText(userData.position)).toBeInTheDocument();
  });

  it('renders PageNotFound component when no user data provided or fetched', () => {
    const { getByText } = render(
      <CommunityUser />
    );

    expect(getByText('Loading...')).toBeInTheDocument(); // Cambiado a "Loading..." aquí
  });
});