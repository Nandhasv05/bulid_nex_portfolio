import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export interface Service {
    id: string;
    iconPath: string; // Storing the SVG path data
    title: string;
    description: string;
}

interface FeaturesState {
    services: Service[];
}

const initialState: FeaturesState = {
    services: [
        {
            id: 'web-dev',
            iconPath: "m4 6 2.5 4m0-4-2.5 4M4 6v4m2.5 0V6M4 14l6-6L4 2M16 2l-6 6 6 6-6-6-6 6",
            title: "Web Development",
            description: "Custom websites built with modern frameworks like React and Next.js, optimized for performance and SEO."
        },
        {
            id: 'responsive-design',
            iconPath: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
            title: "Responsive Design",
            description: "Interfaces that look perfect on any device. Mobile-first approach ensuring great user experience everywhere."
        },
        {
            id: 'perf-opt',
            iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
            title: "Performance Optimization",
            description: "Speed matters. I optimize every line of code to ensure your site loads instantly and runs smoothly."
        }
    ]
};

const featuresSlice = createSlice({
    name: 'features',
    initialState,
    reducers: {}
});

export const selectServices = (state: RootState) => state.features.services;

export default featuresSlice.reducer;
