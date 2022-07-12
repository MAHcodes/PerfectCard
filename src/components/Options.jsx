import Select from "./Select";
import BasicStylesOptions from "./BasicStylesOptions";
import { useState } from "react";
import styled from "styled-components";
import BorderRadiusOptions from "./BorderRadiusOptions"

const Options = () => {
  const [open, setOpen] = useState("");

  return (
    <Div>
      <Select setOpen={setOpen} open={open} title="Basic Styles"><BasicStylesOptions active={open === "Basic Styles"} /></Select>
      <Select setOpen={setOpen} open={open} title="Border Radius"><BorderRadiusOptions active={open === "Border Radius"} /></Select>
    </Div>
  )
}

const Div = styled.div`
  flex: 1;
`

export default Options
