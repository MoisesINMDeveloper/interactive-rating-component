/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const SurveyContext = createContext();

function SurveyProvider({ children }) {
  const [calification, setCalification] = useState(null);
  const [showThanks, setShowThanks] = useState(false);
  const [selectedCalification, setSelectedCalification] = useState(null);

  //Funcion para manejar el evento onClick del boton SUBMIT
  const handleSendCalification = () => {
    setSelectedCalification(calification);
    setCalification(calification); //
    setShowThanks(true);
  };
  return (
    <SurveyContext.Provider
      value={{
        calification,
        setCalification,
        showThanks,
        setShowThanks,
        selectedCalification,
        setSelectedCalification,
        handleSendCalification,
      }}
    >
      {children}
    </SurveyContext.Provider>
  );
}

export { SurveyProvider, SurveyContext };
