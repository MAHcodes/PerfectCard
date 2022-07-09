import Select from "./Select";
import BasicStyles from "./BasicStyles";
import { useState } from "react";

const Options = () => {
  const [open, setOpen] = useState("");

  return (
    <div>
      <Select setOpen={setOpen} open={open} title="Basic Styles"><BasicStyles active={open} /></Select>
    </div>
  )
}

export default Options
