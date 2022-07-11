import { useContext, useState } from "react";
import styled from "styled-components";
import { CardCssContext } from "../hooks/CardCSS";
import RangeInput from "./RangeInput";
import NumberInput from "./NumberInput";
import Property from "./Property";
import SelectUnit from "./SelectUnit";
import { HuePicker, SketchPicker } from "react-color";

const BasicStyles = ({ active }) => {
  const { cardCss, setCardCss } = useContext(CardCssContext);

  const handleColorChange = ({ hex, rgb, hsl }) => {
    console.log(hex, rgb, hsl);
    setCardCss({ ...cardCss, backgroundColor: hex });
  };

  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  return (
    <Div active={active}>
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
          onChange={(e) =>
            setCardCss({ ...cardCss, heightUnit: e.target.value })
          }
        />
      </Property>
      <Property title="Background">
        <HuePicker
          height=".3rem"
          color={cardCss.backgroundColor}
          onChangeComplete={handleColorChange}
        />
        <CustomColor>
          <Swatch  onClick={handleClick} bg={cardCss.backgroundColor} />
          {displayColorPicker ? (
            <PopOver>
              <SketchPicker
                color={cardCss.backgroundColor}
                onChangeComplete={handleColorChange}
              />
            </PopOver>
          ) : undefined}
        </CustomColor>
      </Property>
    </Div>
  );
};

const Div = styled.div`
  padding: ${(props) => (props.active ? "1rem" : "0")} 1rem;
  margin-inline-start: 0.65rem;
  margin-block-start: 0.65rem;
  border-inline-start: 1px solid
    ${(props) =>
      props.active ? "rgba(var(--accent), 50%)" : "rgb(var(--fg-main))"};
  transition: padding var(--transition-d) var(--transition-tf);
  overflow: hidden;
  height: ${(props) => (props.active ? "auto" : "0")};
`;

const CustomColor = styled.div``;

const Swatch = styled.div`
  width: 6ch;
  height: 1.4rem;
  border-radius: 0.25rem;
  background-color: ${(props) => props.bg};
  padding: 5px;
  display: inline-blcok;
  cursor: pointer;

  &:hover,
  &:active {
    outline: 1px solid rgb(var(--fg-main));
    outline-offset: 0.125rem;
  }
`;

const PopOver = styled.div`
  position: absolute;
  right: 2rem;
  margin-top: 1rem;
`;

export default BasicStyles;
