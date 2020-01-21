import { DEFAULT_THEME, WHITETHEME, DARKTHEME } from '../actions/actionTypes';

export const selectWhiteTheme = () => ({ type: WHITETHEME });
export const selectDarkTheme = () => ({ type: DARKTHEME });
export const defaulthiteTheme = () => ({ type: DEFAULT_THEME });
