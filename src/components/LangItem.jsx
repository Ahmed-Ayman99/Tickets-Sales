import i18next from "i18next";
import { useDirection } from "../context/DirectionContext";

const LangItem = ({ children, disabled, code, setShowLangs }) => {
  const { changeDirection } = useDirection();

  const handleChanges = () => {
    i18next.changeLanguage(code);

    changeDirection(code);
    setShowLangs(false);
  };

  return (
    <li>
      <button onClick={handleChanges} disabled={disabled}>
        {children}
      </button>
    </li>
  );
};

export default LangItem;
