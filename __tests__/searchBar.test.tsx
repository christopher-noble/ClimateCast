import '@testing-library/jest-dom'
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import SearchBar from '@/components/search-bar'; // Adjust the path as necessary
import userEvent from '@testing-library/user-event';


describe('SearchBar', () => {
  it('renders without crashing', () => {
    render(<SearchBar />);
    const searchBar = screen.getByTestId('search-input') as HTMLInputElement

    expect(searchBar).toBeInTheDocument();

    userEvent.type(searchBar, 'Ne{enter}');

    expect(searchBar.placeholder).toBe('Start typing a city...');

    userEvent.type(searchBar, 'Vanc');
    fireEvent.keyPress(searchBar, { key: "Enter", code: 13 });

    expect(searchBar.value).toBe('Vancouver');
  });
});