import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Page from '@/app/page';

describe('Page', () => {
  it('Should render without error', () => {
    render(<Page />);
    expect(screen.getByTestId('page')).toBeInTheDocument();
  });
});


