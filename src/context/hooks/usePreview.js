import { useContext } from 'react';
import { PreviewContext } from '../PreviewContext';

/**
 * Custom hook to access preview context
 * @returns {Object} Preview context values
 */
export const usePreview = () => useContext(PreviewContext); 