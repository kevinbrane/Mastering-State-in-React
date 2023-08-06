import { render, fireEvent } from '@testing-library/react';
import Header from './Header';

test('should toggle community section when button is clicked', () => {
  const toggleCommunitySection = jest.fn();
  const showCommunitySection = false;

  const { getByText } = render(<Header toggleCommunitySection={toggleCommunitySection} showCommunitySection={showCommunitySection} />);

  const button = getByText('Show section');
  fireEvent.click(button);

  expect(toggleCommunitySection).toHaveBeenCalled();
});