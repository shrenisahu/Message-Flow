import { createContext, useContext, useState } from 'react';

/* Using the context API for sharing of states between parents and childs */
const DnDContext = createContext();

/**
 * 
 *  
 * @returns a provider component to wrap the elements into it
 */
export const DnDProvider = ({ children }) => {
  const [type, setType] = useState(null);

  return (
    <DnDContext.Provider value={[type, setType]}>
      {children}
    </DnDContext.Provider>
  );
}

export default DnDContext;


/**
 * @description useDnD is a custom hook which uses the useContext hook from the context API
 * @returns an array of two elements consisting of state variable "type" and function that updates it "setType"
 */
export const useDnD = () => {
  return useContext(DnDContext);
}