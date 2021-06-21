import React from 'react';
import { render } from './test-utils';
import App from './App';

test('renders title', () => {
  const { getByText } = render(<App />, { initialState: {} });
  const element = getByText(/Reduxsauce Typescript Example/i);
  expect(element).toBeInTheDocument();
});
