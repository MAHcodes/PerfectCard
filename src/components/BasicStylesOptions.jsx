import { useContext } from "react";
import { CardCssContext } from "../hooks/CardCSS";
import RangeInput from "./RangeInput";
import NumberInput from "./NumberInput";
import Property from "./Property";
import SelectUnit from "./SelectUnit";
import SelectColor from "./SelectColor";

const BasicStyles = () => {
  const { cardCss, setCardCss } = useContext(CardCssContext);

  const onUnitChange = (e) => {
    setCardCss({ ...cardCss, bgUnit: e.target.value });
  };

  const handleColorChange = ({ hex, rgb, hsl }) => {
    const bg =
      cardCss.bgUnit === "rgb"
        ? `rgba(${rgb.r} ${rgb.b} ${rgb.b} / ${rgb.a})`
        : cardCss.bgUnit === "hsl"
        ? `hsla(${Math.round(hsl.h)} ${Math.round(hsl.s * 100)}% ${Math.round(
            hsl.l * 100
          )}% / ${hsl.a} )`
        : hex;
    setCardCss({ ...cardCss, bgColor: bg });
  };

  return (
    <>
      <Property title="Width">
        <RangeInput
          min={
            cardCss.widthUnit === "px"
              ? "12"
              : cardCss.widthUnit === "rem"
              ? "1"
              : "1"
          }
          max={
            cardCss.widthUnit === "px"
              ? "1000"
              : cardCss.widthUnit === "rem"
              ? "75"
              : "100"
          }
          value={cardCss.width}
          onChange={(e) => setCardCss({ ...cardCss, width: e.target.value })}
        />
        <NumberInput
          min={
            cardCss.widthUnit === "px"
              ? "12"
              : cardCss.widthUnit === "rem"
              ? "1"
              : "1"
          }
          value={cardCss.width}
          onChange={(e) => setCardCss({ ...cardCss, width: e.target.value })}
        />
        <SelectUnit
          options={["px", "rem", "%"]}
          def={cardCss.widthUnit}
          onChange={(e) =>
            setCardCss({ ...cardCss, widthUnit: e.target.value })
          }
        />
      </Property>
      <br />
      <Property title="Height">
        <RangeInput
          min={
            cardCss.heightUnit === "px"
              ? "12"
              : cardCss.heightUnit === "rem"
              ? "1"
              : "1"
          }
          max={
            cardCss.heightUnit === "px"
              ? "500"
              : cardCss.heightUnit === "rem"
              ? "50"
              : "100"
          }
          value={cardCss.height}
          onChange={(e) => setCardCss({ ...cardCss, height: e.target.value })}
        />
        <NumberInput
          min={
            cardCss.heightUnit === "px"
              ? "12"
              : cardCss.heightUnit === "rem"
              ? "1"
              : "1"
          }
          value={cardCss.height}
          onChange={(e) => setCardCss({ ...cardCss, height: e.target.value })}
        />
        <SelectUnit
          options={["px", "rem", "%"]}
          def={cardCss.heightUnit}
          onChange={(e) =>
            setCardCss({ ...cardCss, heightUnit: e.target.value })
          }
        />
      </Property>
      <SelectColor
        cardCss={cardCss}
        setCardCss={setCardCss}
        handleColorChange={handleColorChange}
        clr={cardCss.bgColor}
        unit={cardCss.bgUnit}
        onUnitChange={onUnitChange}
      />
    </>
  );
};

export default BasicStyles;
