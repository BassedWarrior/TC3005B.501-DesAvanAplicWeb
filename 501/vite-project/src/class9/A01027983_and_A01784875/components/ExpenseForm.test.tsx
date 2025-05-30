import { test, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ExpenseForm from '../components/ExpenseForm';

test('renders the expense form', () => {
  const { getByPlaceholderText } = render(<ExpenseForm />);
  expect(getByPlaceholderText('Amount')).toBeInTheDocument();
  expect(getByPlaceholderText('Category')).toBeInTheDocument();
  expect(getByPlaceholderText('Description')).toBeInTheDocument();
});
