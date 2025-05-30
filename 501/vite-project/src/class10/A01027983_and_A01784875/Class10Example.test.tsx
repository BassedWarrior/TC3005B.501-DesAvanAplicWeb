import { test, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Class10Example from './Class10Example';

test('renders the expense form', () => {
  const { getByText, getByPlaceholderText } = render(<Class10Example />);
  expect(getByPlaceholderText('Type a message')).toBeInTheDocument();
  expect(getByText('Send')).toBeInTheDocument();
});
