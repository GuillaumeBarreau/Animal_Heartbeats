import React from 'react';
import { render } from '@testing-library/react';
import Heartbeats from './Heartbeats';

test('renders learn react link', () => {
  const { getByText } = render(<Heartbeats />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
