import RangeInput from "./RangeInput";
import NumberInput from "./NumberInput";
import Property from "./Property";
import { CardCssContext } from "../hooks/CardCSS";
import { useContext } from "react";
import SelectUnit from "./SelectUnit";

const BorderRadiusOptions = () => {
  const { cardCss, setCardCss } = useContext(CardCssContext);
  return (
    <Property title="All corners">
      <RangeInput
        min="0"
        max={
          cardCss.allBorderRadiusUnit === "px"
            ? "200"
            : cardCss.allBorderRadiusUnit === "rem"
            ? "30"
            : "100"
        }
        value={cardCss.allBorderRadius}
        onChange={(e) =>
          setCardCss({
            ...cardCss,
            borderRadius: {
              topLeft: { x: 0, y: 0 },
              topRight: { x: 0, y: 0 },
              bottomRight: { x: 0, y: 0 },
              bottomLeft: { x: 0, y: 0 },
            },
            allBorderRadius: e.target.value,
          })
        }
      />
      <NumberInput
        min="0"
        value={cardCss.allBorderRadius}
        onChange={(e) =>
          setCardCss({
            ...cardCss,
            borderRadius: {
              topLeft: { x: 0, y: 0 },
              topRight: { x: 0, y: 0 },
              bottomRight: { x: 0, y: 0 },
              bottomLeft: { x: 0, y: 0 },
            },
            allBorderRadius: e.target.value,
          })
        }
      />
      <SelectUnit
        options={["px", "rem", "%"]}
        onChange={(e) =>
          setCardCss({
            ...cardCss,
            allBorderRadiusUnit: e.target.value,
          })
        }
      />
    </Property>
  );
};

export default BorderRadiusOptions;
