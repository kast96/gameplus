import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	isOpenedFilters: false,
	isOpenedMenu: false,
}

export const toggleSlice = createSlice({
	name: 'toggle',
	initialState,
	reducers: {
		toggleFilters: (state, action) => {
			state.isOpenedFilters = action.payload
		},
		toggleMenu: (state, action) => {
			state.isOpenedMenu = action.payload
		}
	}
})

export const {
	toggleFilters,
	toggleMenu
} = toggleSlice.actions;

export const toggleReducer = toggleSlice.reducer;