import React from 'react';
import { render } from './test-utils';
import App from './App';

jest.mock('uuid', () => ({
  v4: jest.fn(() => '00000000-0000-0000-0000-000000000000')
}));

test('renders title', () => {
  const { getByText } = render(<App />, {});
  const element = getByText(/Reduxsauce Typescript Example/i);
  expect(element).toBeInTheDocument();
});
