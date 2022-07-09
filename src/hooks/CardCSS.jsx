import { createContext, useState } from "react";

export const CardCssContext = createContext(null);

const CardCssContextProvider = (props) => {
  const defaultCss = {
    width: 200,
    height: 200,
    widthUnit: "px",
    heightUnit: "px",
  }
  
  const [cardCss, setCardCss] = useState(defaultCss);

  return (<CardCssContext.Provider value={{cardCss, setCardCss}}>
    {props.children}
  </CardCssContext.Provider>)
}

export default CardCssContextProvider;
