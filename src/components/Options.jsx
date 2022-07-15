import Select from "./Select";
import BasicStylesOptions from "./BasicStylesOptions";
import { useContext } from "react";
import styled from "styled-components";
import BorderRadiusOptions from "./BorderRadiusOptions";
import { CardCssContext } from "../hooks/CardCSS";
import BoxShadowOptions from "./BoxShadowOptions";

const Options = () => {
  const { optionOpen, setOptionOpen } = useContext(CardCssContext);

  return (
    <Div>
      <Select setOpen={setOptionOpen} open={optionOpen} title="Basic Styles">
        <BasicStylesOptions active={optionOpen === "Basic Styles"} />
      </Select>
      <Select setOpen={setOptionOpen} open={optionOpen} title="Border Radius">
        <BorderRadiusOptions active={optionOpen === "Border Radius"} />
      </Select>
      <Select setOpen={setOptionOpen} open={optionOpen} title="Box Shadow">
        <BoxShadowOptions active={optionOpen === "Box Shadow"} />
      </Select>
    </Div>
  );
};

const Div = styled.div`
  flex: 1;
`;

export default Options;
