import { useContext } from "react";
import styled from "styled-components";
import { CardCssContext } from "../hooks/CardCSS";
import RangeInput from "./RangeInput";
import NumberInput from "./NumberInput";
import Property from "./Property";
import SelectUnit from "./SelectUnit";
import { HuePicker } from 'react-color'

const BasicStyles = ({ active }) => {
  const { cardCss, setCardCss } = useContext(CardCssContext);

  const handleColorChange = ({ hex }) => {
    console.log(hex)
    setCardCss({...cardCss, backgroundColor: hex });
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
        <HuePicker height=".3rem" cursor="pointer" color={cardCss.backgroundColor} onChangeComplete={handleColorChange} />
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

export default BasicStyles;
