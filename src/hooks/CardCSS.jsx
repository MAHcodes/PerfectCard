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
      topLeft: { x: { unit: "%", value: 0 }, y: { unit: "%", value: 0 } },
      topRight: { x: { unit: "%", value: 0 }, y: { unit: "%", value: 0 } },
      bottomRight: { x: { unit: "%", value: 0 }, y: { unit: "%", value: 0 } },
      bottomLeft: { x: { unit: "%", value: 0 }, y: { unit: "%", value: 0 } },
    },
    allBorderRadius: 0,
    allBorderRadiusUnit: "%",
    boxShadow: {
      0: {
        x: 0,
        y: 0,
        inset: false,
        color: "#000000",
        blur: 0,
        spread: 0,
      },
    },
    activeBoxShadow: 0,
    lightSource: {x: 0, y: 0},
  };

  const [cardCss, setCardCss] = useState(defaultCss);

  const setDefaults = () => {
    setCardCss(defaultCss);
    setOptionOpen("");
  }

  return (
    <CardCssContext.Provider
      value={{
        cardCss,
        setCardCss,
        setDefaults,
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
