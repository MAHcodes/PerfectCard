import styled from "styled-components";
import { HuePicker, SketchPicker } from "react-color";
import Property from "./Property";
import SelectUnit from "./SelectUnit";
import { useState } from "react";

const SelectColor = ({handleColorChange, clr, unit, onUnitChange}) => {

  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  return (
    <>
      <br />
      <Property title="Color">
        <HuePicker
          height=".3rem"
          color={clr}
          onChangeComplete={handleColorChange}
        />
        <div>
          <Swatch
            active={displayColorPicker}
            onClick={handleClick}
            bg={clr}
          />
          {displayColorPicker ? (
            <PopOver>
              <SketchPicker
                color={clr}
                onChangeComplete={handleColorChange}
              />
            </PopOver>
          ) : undefined}
        </div>
        <SelectUnit
          options={["hex", "rgb", "hsl"]}
          def={unit}
          onChange={onUnitChange}
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

export default SelectColor;
