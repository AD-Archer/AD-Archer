import { useContext } from 'react';
import { AnimationContext } from '../AnimationContext';

/**
 * Custom hook to access animation context
 * @returns {Object} Animation context values
 */
export const useAnimation = () => useContext(AnimationContext); 