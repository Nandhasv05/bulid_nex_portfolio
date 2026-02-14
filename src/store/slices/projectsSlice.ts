import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import waasPhotography from '../../assets/waasPhotography.png';
import saibuliderd from '../../assets/saibuliderd.png';

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

const loadProjectsFromStorage = (): Project[] => {
    const stored = localStorage.getItem('projects');
    if (stored) {
        return JSON.parse(stored);
    }
    // Default initial projects
    return [
        {
            id: 'waas-photography',
            title: "Waas Photography & Events",
            description: "Capturing life's most precious moments with professional photography and seamless event management services.",
            tags: ["Website", "Photography", "Events"],
            image: waasPhotography,
            link: "https://waasphotographyandevents.netlify.app/"
        },
        {
            id: 'sai-builders',
            title: "Sai Builders",
            description: "7 Years of Excellence in Every Square Foot. Specializing in transforming visions into architectural realities.",
            tags: ["Website", "Construction", "Architecture"],
            image: saibuliderd,
            link: "https://saibuilders.netlify.app/"
        }
    ];
};

const initialState: ProjectsState = {
    projects: loadProjectsFromStorage()
};

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        addProject: (state, action: { payload: Project }) => {
            state.projects.push(action.payload);
            localStorage.setItem('projects', JSON.stringify(state.projects));
        },
        deleteProject: (state, action: { payload: string }) => {
            state.projects = state.projects.filter(p => p.id !== action.payload);
            localStorage.setItem('projects', JSON.stringify(state.projects));
        }
    }
});

export const { addProject, deleteProject } = projectsSlice.actions;
export const selectProjects = (state: RootState) => state.projects.projects;

export default projectsSlice.reducer;
