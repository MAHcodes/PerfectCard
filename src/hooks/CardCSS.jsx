import { createContext, useState } from "react";
import STYLES from "../utils/styles";

export const CardCssContext = createContext(null);

const CardCssContextProvider = (props) => {
  const [asideOpen, setAsideOpen] = useState(true);
  const [optionOpen, setOptionOpen] = useState("");

  const [cardCss, setCardCss] = useState(STYLES.Default);

  return (
    <CardCssContext.Provider
      value={{
        cardCss,
        setCardCss,
        asideOpen,
        setAsideOpen,
        optionOpen,
        setOptionOpen,
      }}
    >
      {props.children}
    </CardCssContext.Provider>
  );
};

export default CardCssContextProvider;
