import Select from "./Select";
import BoxModel from "./BoxModel";
import { useState } from "react";

const Options = () => {
  const [open, setOpen] = useState("");

  return (
    <div>
      <Select setOpen={setOpen} open={open} title="Box Model"><BoxModel active={open} /></Select>
    </div>
  )
}

export default Options
