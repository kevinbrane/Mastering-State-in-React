import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './PageNotFound';

describe('<PageNotFound /> route behavior', () => {
  it('renders PageNotFound for non-existing route', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/non-existing-route']}>
        <Routes>
          <Route path="/error" element={<PageNotFound />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </MemoryRouter>
    );

    expect(getByText('Page Not found')).toBeInTheDocument();
  });
});