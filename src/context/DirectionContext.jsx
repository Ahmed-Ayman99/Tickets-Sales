import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import Cookies from "js-cookie";

const DirectionContext = createContext();

export const DirectionProvider = ({ children }) => {
  const currentLangCode = Cookies.get("i18next");
  const langDir = { en: "ltr", ar: "rtl" };
  const [direction, setDirection] = useState(
    langDir[[currentLangCode]] || "ltr"
  );

  const changeDirection = (newDir) => {
    setDirection(langDir[newDir]);
  };

  const contextVals = { direction, changeDirection };

  return (
    <DirectionContext.Provider value={contextVals}>
      {children}
    </DirectionContext.Provider>
  );
};

export const useDirection = () => {
  const context = useContext(DirectionContext);

  if (context === undefined)
    throw new Error("QuizContext was used outside of the QuizProvider");

  return context;
};
