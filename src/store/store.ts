import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './slices/categoriesSlice';
import testimonialsReducer from './slices/testimonialsSlice';
import featuresReducer from './slices/featuresSlice';
import projectsReducer from './slices/projectsSlice';
import howItWorksReducer from './slices/howItWorksSlice';

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        testimonials: testimonialsReducer,
        features: featuresReducer,
        projects: projectsReducer,
        howItWorks: howItWorksReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
