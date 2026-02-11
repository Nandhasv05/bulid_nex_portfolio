import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export interface Step {
    id: number;
    iconName: string;
    title: string;
    description: string;
}

interface HowItWorksState {
    steps: Step[];
}

const initialState: HowItWorksState = {
    steps: [
        {
            id: 1,
            iconName: "FaSearch",
            title: "1. Find Talent",
            description: "Browse our marketplace of vetted freelancers or post a job to get proposals."
        },
        {
            id: 2,
            iconName: "FaHandshake",
            title: "2. Hire & Collaborate",
            description: "Choose your expert, discuss details, and manage the project with our built-in tools."
        },
        {
            id: 3,
            iconName: "FaCheckCircle",
            title: "3. Pay Safely",
            description: "Release payment only when you are 100% satisfied with the work."
        }
    ]
};

const howItWorksSlice = createSlice({
    name: 'howItWorks',
    initialState,
    reducers: {}
});

export const selectSteps = (state: RootState) => state.howItWorks.steps;

export default howItWorksSlice.reducer;
