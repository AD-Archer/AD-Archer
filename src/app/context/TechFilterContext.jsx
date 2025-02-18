import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const TechFilterContext = createContext();

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

export const useTechFilter = () => useContext(TechFilterContext); 