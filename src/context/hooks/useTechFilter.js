import { useContext } from 'react';
import { TechFilterContext } from '../TechFilterContext';

/**
 * Custom hook to access tech filter context
 * @returns {Object} Tech filter context values
 */
export const useTechFilter = () => useContext(TechFilterContext); 