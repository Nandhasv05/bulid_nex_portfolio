import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    image: string;
    link: string;
}

interface ProjectsState {
    projects: Project[];
}

const initialState: ProjectsState = {
    projects: [
        {
            id: 'finance-dashboard',
            title: "Finance Dashboard",
            description: "Real-time analytics dashboard for a fintech startup.",
            tags: ["UI/UX", "Dashboard", "Fintech"],
            image: "finance-dashboard",
            link: "#"
        },
        {
            id: 'ecommerce-platform',
            title: "E-Commerce Platform Redesign",
            description: "A complete overhaul of a fashion retailer's online store.",
            tags: ["React", "Node.js", "E-commerce"],
            image: "ecommerce-platform",
            link: "#"
        }
    ]
};

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {}
});

export const selectProjects = (state: RootState) => state.projects.projects;

export default projectsSlice.reducer;
