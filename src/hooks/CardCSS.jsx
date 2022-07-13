import { createContext, useState } from "react";

export const CardCssContext = createContext(null);

const CardCssContextProvider = (props) => {
  const [asideOpen, setAsideOpen] = useState(true);
  const [optionOpen, setOptionOpen] = useState("");

  const defaultCss = {
    width: 200,
    height: 200,
    widthUnit: "px",
    heightUnit: "px",
    bgColor: "#FFFFFF",
    bgUnit: "hex",
    borderRadius: {
      topLeft: { x: 0, y: 0 },
      topRight: { x: 0, y: 0 },
      bottomRight: { x: 0, y: 0 },
      bottomLeft: { x: 0, y: 0 },
    },
    allBorderRadius: 0,
    allBorderRadiusUnit: "px",
  };

  const [cardCss, setCardCss] = useState(defaultCss);

  const setDefaults = () => setCardCss(defaultCss);

  return (
    <CardCssContext.Provider value={{ cardCss, setCardCss, setDefaults, asideOpen, setAsideOpen, optionOpen, setOptionOpen }}>
      {props.children}
    </CardCssContext.Provider>
  );
};

export default CardCssContextProvider;
