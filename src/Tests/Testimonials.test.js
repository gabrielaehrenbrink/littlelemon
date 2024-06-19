import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Testimonials from '../Components/Testimonials';


const countVisibleTestimonialCards = () => screen.getAllByRole('group').filter(element => element.getAttribute('aria-hidden') !== 'true').length;

describe('Testimonials Component', () => {
    test('renders the Testimonials section', () => {
        render(<Testimonials />);
        const sectionElement = screen.getByLabelText(/Customer testimonials/i);
        expect(sectionElement).toBeInTheDocument();
    });

    test('renders the correct number of testimonial cards', () => {
        render(<Testimonials />);
        const visibleTestimonialCards = countVisibleTestimonialCards();
        expect(visibleTestimonialCards).toBe(2);
    });

    test('displays correct content in each testimonial card', () => {
        render(<Testimonials />);

        const testimonials = [
            { name: 'Taylor', text: 'Amazing food and service!', rating: '★★★★★' },
            { name: 'Ryan', text: 'Great experience overall.', rating: '★★★★' },
            { name: 'Blake', text: 'Absolutely loved it!', rating: '★★★★★' },
            { name: 'Selena', text: 'Fantastic, highly recommend!', rating: '★★★★★' },
            { name: 'Joe', text: 'It was okay, nothing special.', rating: '★★★' },
        ];

        testimonials.forEach(testimonial => {
            const nameElement = screen.getAllByText(testimonial.name).filter(el => el.closest('[role="group"]'))[0];
            const textElement = screen.getAllByText(testimonial.text).filter(el => el.closest('[role="group"]'))[0];
            const ratingElement = screen.getAllByLabelText(`Rating: ${testimonial.rating}`).filter(el => el.closest('[role="group"]'))[0];

            expect(nameElement).toBeInTheDocument();
            expect(textElement).toBeInTheDocument();
            expect(ratingElement).toBeInTheDocument();
        });
    });
});