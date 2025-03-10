import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const TechFilterContext = createContext();

// This is a fallback for any imports that haven't been updated yet
export const useTechFilter = () => useContext(TechFilterContext);

export const TechFilterProvider = ({ children }) => {
  const [selectedTech, setSelectedTech] = useState(null);
  const [availableTech, setAvailableTech] = useState([]);

  return (
    <TechFilterContext.Provider value={{ 
      selectedTech, 
      setSelectedTech,
      availableTech,
      setAvailableTech
    }}>
      {children}
    </TechFilterContext.Provider>
  );
};

TechFilterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Export the context for use in the hook file
export { TechFilterContext }; 