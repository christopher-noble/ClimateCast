import '@testing-library/jest-dom'
import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchBar from '@/components/search-bar';

/**
 * Verifies that the SearchBar component renders successfully upon initialization, ensuring that
 * the initial UI is correctly displayed to the user without any interaction.
 *
 * Mocks:
 * - Next.js Router: Mocked to disable actual navigation and prefetching capabilities,
 *   ensuring tests run in isolation without side effects from router state changes.
 *
 * Test Suite:
 *
 * 1. Initial Render
 *    - Checks that the SearchBar component renders successfully and the search input field
 *      is present in the document immediately upon rendering.
 */

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null
    };
  }
}));

describe('SearchBar', () => {
  it('renders without crashing', () => {
    render(<SearchBar />);
    const searchBar = screen.getByTestId('search-input') as HTMLInputElement
    expect(searchBar).toBeInTheDocument();
  });
});