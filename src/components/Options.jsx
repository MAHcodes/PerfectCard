import Select from "./Select";
import BasicStyles from "./BasicStyles";
import { useState } from "react";
import styled from "styled-components";

const Options = () => {
  const [open, setOpen] = useState("");

  return (
    <Div>
      <Select setOpen={setOpen} open={open} title="Basic Styles"><BasicStyles active={open} /></Select>
    </Div>
  )
}

const Div = styled.div`
  flex: 1;
`

export default Options
