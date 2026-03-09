import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import waasPhotography from '../../assets/waasPhotography.png';
import saibuliderd from '../../assets/saibuliderd.png';
import bulidnexdevLogo from '../../assets/Admin Panel.png';
import srsLogo from '../../assets/Srs Project.png';
import keralaSchoolLogo from '../../assets/SchoolProject.png'; // Placeholder image

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
    const stored = localStorage.getItem('projects_v3');
    if (stored) {
        return JSON.parse(stored);
    }
    // Default initial projects
    return [
        {
            id: 'waas-photography',
            title: "Waas Photography & Events",
            description: "From weddings to corporate events, we tell your story through the lens of creativity and passion.",
            tags: ["Website", "Photography", "Events"],
            image: waasPhotography,
            link: "https://waasphotographyandevents.netlify.app/"
        },
        {
            id: 'sai-builders',
            title: "Sai Builders",
            description: "We are a team of dedicated professionals committed to delivering excellence in every project. From residential to commercial, we build with precision and passion.",
            tags: ["Website", "Construction", "Architecture"],
            image: saibuliderd,
            link: "https://saibuilder.in/"
        },
        {
            id: 'buildnex-admin',
            title: "BuildNex dev Admin Panel",
            description: "BuildNex dev Admin Panel. Enter your credentials to access your dashboard.",
            tags: ["Web Application", "Admin Panel", "Dashboard"],
            image: bulidnexdevLogo,
            link: "https://buildnexdev.in/"
        },
        {
            id: 'smart-research-solution',
            title: "Smart Research Solution",
            description: "Driving Excellence Through Evidence-Based Research. Multidisciplinary expertise in public health, infectious disease surveillance, and large-scale field implementation.",
            tags: ["Website", "Research", "Public Health"],
            image: srsLogo,
            link: "https://smartresearchsolution.netlify.app/"
        },
        {
            id: 'kerala-vidyalayam',
            title: "Madras Kerala Samaj Kerala Vidyalayam",
            description: "Where Learning Feels Like Magic. Empowering children through innovative education, sports, and creative arts. Join the Kerala Vidyalayam family today!",
            tags: ["Website", "Education", "School"],
            image: keralaSchoolLogo,
            link: "https://keralavidyalayaschool.netlify.app/"
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
            localStorage.setItem('projects_v3', JSON.stringify(state.projects));
        },
        deleteProject: (state, action: { payload: string }) => {
            state.projects = state.projects.filter(p => p.id !== action.payload);
            localStorage.setItem('projects_v3', JSON.stringify(state.projects));
        }
    }
});

export const { addProject, deleteProject } = projectsSlice.actions;
export const selectProjects = (state: RootState) => state.projects.projects;

export default projectsSlice.reducer;
