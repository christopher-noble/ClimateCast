import React from 'react';
import { render } from '@testing-library/react';
import RootLayout from '@/app/layout';


// Testing layout
describe('Layout', () => {
  it('renders without crashing', () => {
    render(<RootLayout children={undefined} />);
  });
});