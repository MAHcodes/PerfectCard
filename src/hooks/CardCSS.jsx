import { createContext, useState } from "react";

export const CardCssContext = createContext(null);

const CardCssContextProvider = (props) => {
  const [cardCss, setCardCss] = useState({});

  return (<CardCssContext.Provider value={{cardCss, setCardCss}}>
    {props.children}
  </CardCssContext.Provider>)
}

export default CardCssContextProvider;
