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
            id: 'websites',
            iconPath: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9-9c1.657 0 3 4.03 3 9s-1.343 9-3 9m0-18c-1.657 0-3 4.03-3 9s1.343 9-3 9",
            title: "Performance Websites",
            description: "Developing blazing-fast, SEO-optimized web experiences designed to convert visitors into loyal customers."
        },
        {
            id: 'web-apps',
            iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
            title: "Enterprise Web Apps",
            description: "Building scalable, high-security cloud applications that streamline complex business workflows."
        },
        {
            id: 'mobile-apps',
            iconPath: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
            title: "Native Mobile Solutions",
            description: "Crafting fluid, high-performance iOS and Android applications using industry-leading native-feel technologies."
        },
        {
            id: 'payment-integration',
            iconPath: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
            title: "Fintech & Payments",
            description: "Implementing secure, PCI-compliant payment architectures including Razorpay, Stripe, and global gateways."
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
