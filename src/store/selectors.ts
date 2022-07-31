import {RootState} from "./store";

export const getStateIsOpenedMenu = (state: RootState) => {
	return state.toggleReducer.isOpenedMenu;
}

export const getStateIsOpenedFilters = (state: RootState) => {
	return state.toggleReducer.isOpenedFilters;
}