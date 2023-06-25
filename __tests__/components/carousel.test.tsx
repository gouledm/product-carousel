import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Carousel from '@/components/carousel';

describe('Carousel', () => {
    it('Should render without error', () => {
        render(<Carousel products={[]} title={''} subtitle={''} />);
        const products = screen.getByRole('list');
        expect(screen.getByTestId('carousel')).toBeInTheDocument();
        expect(products).toBeVisible();
    });

    it('Should have next and previous buttons', () => {
        render(<Carousel products={[]} title={''} subtitle={''} />);
        const next = screen.getByTestId('next');
        const prev = screen.getByTestId('prev');
        expect(next).toBeInTheDocument();
        expect(prev).toBeInTheDocument();
    });    
});
