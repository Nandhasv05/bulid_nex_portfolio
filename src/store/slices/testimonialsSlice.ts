import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export interface Testimonial {
    id: number;
    text: string;
    author: string;
    company: string;
    rating: number;
}

interface TestimonialsState {
    items: Testimonial[];
}

const initialState: TestimonialsState = {
    items: [
        {
            id: 1,
            text: "The improved UI/UX has significantly increased our conversion rates. Highly recommended!",
            author: "John Doe",
            company: "CEO, TechStart",
            rating: 5
        }
    ]
};

const testimonialsSlice = createSlice({
    name: 'testimonials',
    initialState,
    reducers: {
        addTestimonial: (state, action: PayloadAction<Testimonial>) => {
            state.items.push(action.payload);
        }
    }
});

export const { addTestimonial } = testimonialsSlice.actions;

export const selectTestimonials = (state: RootState) => state.testimonials.items;

export default testimonialsSlice.reducer;
