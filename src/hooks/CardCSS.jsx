import { createContext, useState } from "react";

export const CardCssContext = createContext(null);


const CardCssContextProvider = (props) => {
  const defaultCss = {
    width: 200,
    height: 200,
    widthUnit: "px",
    heightUnit: "px",
    backgroundColor: "#FFFFF",
  }

  const [cardCss, setCardCss] = useState(defaultCss);

  const setDefaults = () => setCardCss(defaultCss);

  return (<CardCssContext.Provider value={{cardCss, setCardCss, setDefaults}}>
    {props.children}
  </CardCssContext.Provider>)
}

export default CardCssContextProvider;
