import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import SearchBar from './SearchBar';

describe('SearchBar', () => {
  test('renders the props correctly', () => {
    render(<SearchBar placeholder="Hello world!" />);
    expect(screen.getByPlaceholderText('Hello world!')).toBeDefined();
  });

  test('onChange function on the input element', () => {
    let testValue;
    render(<SearchBar onChange={(e) => (testValue = e.target.value)} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Good Day' } });
    expect(testValue).toBe('Good Day');
  });

  test('calls the onClick function when action button clicked', () => {
    const mockActionClick = jest.fn();
    render(<SearchBar buttonOnClick={mockActionClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(mockActionClick).toHaveBeenCalled();
  });

  test('Cancel button function is called', () => {
    const mockActionClick = jest.fn();
    render(<SearchBar showCancelButton onCancel={mockActionClick} />);
    fireEvent.click(screen.getAllByRole('button')[0]);
    expect(mockActionClick).toHaveBeenCalled();
  });

  test('Calls the onClick function when Enter is pressed', () => {
    const mockActionClick = jest.fn();
    render(<SearchBar buttonOnClick={mockActionClick} />);
    const input = screen.getByRole('textbox');
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    expect(mockActionClick).toHaveBeenCalled();
  });

  test('Calls the onCancel function when Escape is pressed', () => {
    const mockActionClick = jest.fn();
    render(<SearchBar showCancelButton onCancel={mockActionClick} />);
    const input = screen.getByRole('textbox');
    fireEvent.keyDown(input, { key: 'Escape', code: 'Escape' });
    expect(mockActionClick).toHaveBeenCalled();
  });
});
