import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// We need to store the icon name as a string if we want to serialize it,
// but for now, since we are using react-icons components directly in the array,
// we'll keep it as is. However, Redux non-serializable check might warn.
// ideally we should store strings and map them in the component.
// For this refactor, let's keep it simple and ignore serializability for icons for now
// or better, let's map them in the component and store strings in Redux.
// Decision: Store icon identifiers and map in component to follow Redux best practices.

export interface Category {
    id: string;
    iconName: string;
    name: string;
}

const initialState: { categories: Category[] } = {
    categories: [
        { id: '1', iconName: 'FaCode', name: "Development" },
        { id: '2', iconName: 'FaPaintBrush', name: "Design" },
        { id: '3', iconName: 'FaBullhorn', name: "Marketing" },
        { id: '4', iconName: 'FaCamera', name: "Video & Audio" },
        { id: '5', iconName: 'FaMobileAlt', name: "Mobile Apps" }
    ]
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {}
});

export const selectCategories = (state: RootState) => state.categories.categories;

export default categoriesSlice.reducer;
