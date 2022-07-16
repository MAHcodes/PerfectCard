import { useContext, useState } from "react";
import styled from "styled-components";
import { CardCssContext } from "../hooks/CardCSS";
import RangeInput from "./RangeInput";
import NumberInput from "./NumberInput";
import Property from "./Property";
import SelectUnit from "./SelectUnit";
import { HuePicker, SketchPicker } from "react-color";

const BasicStyles = () => {
  const { cardCss, setCardCss } = useContext(CardCssContext);

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

  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
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
      <br />
      <Property title="Color">
        <HuePicker
          height=".3rem"
          color={cardCss.bgColor}
          onChangeComplete={handleColorChange}
        />
        <div>
          <Swatch
            active={displayColorPicker}
            onClick={handleClick}
            bg={cardCss.bgColor}
          />
          {displayColorPicker ? (
            <PopOver>
              <SketchPicker
                color={cardCss.bgColor}
                onChangeComplete={handleColorChange}
              />
            </PopOver>
          ) : undefined}
        </div>
        <SelectUnit
          options={["hex", "rgb", "hsl"]}
          def={cardCss.bgUnit}
          onChange={(e) => {
            setCardCss({ ...cardCss, bgUnit: e.target.value });
          }}
        />
      </Property>
    </>
  );
};

const Swatch = styled.div`
  width: 8ch;
  height: 1.55rem;
  border-radius: 0.25rem;
  background-color: ${(props) => props.bg};
  padding: 5px;
  display: inline-blcok;
  cursor: pointer;
  border: 1px solid rgba(var(--accent), 85%);
  outline-offset: 0.125rem;
  outline: ${(props) => props.active && "1px solid rgb(var(--fg-main))"};

  &:hover,
  &:active {
    outline: 1px solid rgb(var(--fg-main));
  }
`;

const PopOver = styled.div`
  position: absolute;
  right: 2rem;
  margin-top: 1rem;

  & > div {
    box-shadow: 0 0 1.25rem -0.5rem rgba(var(--fg-main), 80%) !important;
    background: rgb(var(--bg-sec)) !important;
    & label {
      color: rgb(var(--fg-main)) !important;
    }
  }
  & > div > div {
    background: rgb(var(--bg-sec)) !important;
  }
`;

export default BasicStyles;
