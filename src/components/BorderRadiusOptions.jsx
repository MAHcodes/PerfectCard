import RangeInput from "./RangeInput";
import NumberInput from "./NumberInput";
import Property from "./Property";
import { CardCssContext } from "../hooks/CardCSS";
import { useContext } from "react";
import SelectUnit from "./SelectUnit";
import { Fragment } from "react";

const BorderRadiusOptions = () => {
  const { cardCss, setCardCss } = useContext(CardCssContext);
  const properties = [
    {
      title: "Top Left X",
      position: "topLeft",
      axis: "x",
    },
    {
      title: "Top Left Y",
      position: "topLeft",
      axis: "y",
    },
    {
      title: "Top Right X",
      position: "topRight",
      axis: "x",
      invert: true,
    },
    {
      title: "Top Right Y",
      position: "topRight",
      axis: "y",
    },
    {
      title: "Bottom Left X",
      position: "bottomLeft",
      axis: "x",
    },
    {
      title: "Bottom Left Y",
      position: "bottomLeft",
      axis: "y",
      invert: true,
    },
    {
      title: "Bottom Right X",
      position: "bottomRight",
      axis: "x",
      invert: true,
    },
    {
      title: "Bottom Right Y",
      position: "bottomRight",
      axis: "y",
      invert: true,
    },
  ];
  return (
    <>
      <Property title="All corners">
        <RangeInput
          min="0"
          max={
            cardCss.allBorderRadiusUnit === "px"
              ? "300"
              : cardCss.allBorderRadiusUnit === "rem"
              ? "50"
              : "100"
          }
          value={cardCss.allBorderRadius}
          onChange={(e) =>
            setCardCss({
              ...cardCss,
              borderRadius: {
                topLeft: {
                  x: { ...cardCss.borderRadius.topLeft.x, value: +e.target.value  },
                  y: { ...cardCss.borderRadius.topLeft.y, value: +e.target.value },
                },
                topRight: {
                  x: { ...cardCss.borderRadius.topRight.x, value: -e.target.value  },
                  y: { ...cardCss.borderRadius.topRight.y, value:  +e.target.value },
                },
                bottomRight: {
                  x: { ...cardCss.borderRadius.bottomRight.x, value:  -e.target.value },
                  y: { ...cardCss.borderRadius.bottomRight.y, value:  -e.target.value },
                },
                bottomLeft: {
                  x: { ...cardCss.borderRadius.bottomLeft.x, value:  +e.target.value },
                  y: { ...cardCss.borderRadius.bottomLeft.y, value:  -e.target.value },
                },
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
          options={["%", "px", "rem"]}
          def={cardCss.allBorderRadiusUnit}
          onChange={(e) =>
            setCardCss({
              ...cardCss,
              allBorderRadiusUnit: e.target.value,
              borderRadius: {
                topLeft: {
                  x: { ...cardCss.borderRadius.topLeft.x, unit: e.target.value  },
                  y: { ...cardCss.borderRadius.topLeft.y, unit: e.target.value },
                },
                topRight: {
                  x: { ...cardCss.borderRadius.topRight.x, unit: e.target.value  },
                  y: { ...cardCss.borderRadius.topRight.y, unit:  e.target.value },
                },
                bottomRight: {
                  x: { ...cardCss.borderRadius.bottomRight.x, unit:  e.target.value },
                  y: { ...cardCss.borderRadius.bottomRight.y, unit:  e.target.value },
                },
                bottomLeft: {
                  x: { ...cardCss.borderRadius.bottomLeft.x, unit:  e.target.value },
                  y: { ...cardCss.borderRadius.bottomLeft.y, unit:  e.target.value },
                },
              },
            })
          }
        />
      </Property>

      {properties.map(({ title, position, axis, invert }, idx) => (
        <Fragment key={idx}>
          <br />
          <Property title={title}>
            <RangeInput
              min={
                invert
                  ? cardCss.borderRadius[position][axis].unit === "px"
                    ? "-300"
                    : cardCss.borderRadius[position][axis].unit === "rem"
                    ? "-50"
                    : "-100"
                  : "0"
              }
              max={
                invert
                  ? "0"
                  : cardCss.borderRadius[position][axis].unit === "px"
                  ? "300"
                  : cardCss.borderRadius[position][axis].unit === "rem"
                  ? "50"
                  : "100"
              }
              value={cardCss.borderRadius[position][axis].value}
              onChange={(e) =>
                setCardCss({
                  ...cardCss,
                  borderRadius: {
                    ...cardCss.borderRadius,
                    [position]: {
                      ...cardCss.borderRadius[position],
                      [axis]: {
                        ...cardCss.borderRadius[position][axis],
                        value: +e.target.value,
                      },
                    },
                  },
                  allBorderRadius: 0,
                })
              }
            />
            <NumberInput
              min={invert ? "" : "0"}
              max=
              {
                invert ? "0" : ""
              }
              value={cardCss.borderRadius[position][axis].value}
              onChange={(e) =>
                setCardCss({
                  ...cardCss,
                  borderRadius: {
                    ...cardCss.borderRadius,
                    [position]: {
                      ...cardCss.borderRadius[position],
                      [axis]: {
                        ...cardCss.borderRadius[position][axis],
                        value: e.target.value,
                      },
                    },
                  },
                  allBorderRadius: 0,
                })
              }
            />
            <SelectUnit
              options={["%", "px", "rem"]}
              def={cardCss.borderRadius[position][axis].unit}
              onChange={(e) =>
                setCardCss({
                  ...cardCss,
                  borderRadius: {
                    ...cardCss.borderRadius,
                    [position]: {
                      ...cardCss.borderRadius[position],
                      [axis]: {
                        ...cardCss.borderRadius[position][axis],
                        unit: e.target.value,
                      },
                    },
                  },
                })
              }
            />
          </Property>
        </Fragment>
      ))}
    </>
  );
};

export default BorderRadiusOptions;
