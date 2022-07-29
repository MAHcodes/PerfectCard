import { useContext, useState } from "react";
import styled from "styled-components";
import { CardCssContext } from "../hooks/CardCSS";
import Button from "./Button";
import NumberInput from "./NumberInput";
import Property from "./Property";
import RangeInput from "./RangeInput";
import Select from "./Select";
import SelectColor from "./SelectColor";
import Switch from "./Switch";

const BoxShadowOptions = () => {
  const { cardCss, setCardCss } = useContext(CardCssContext);
  const [open, setOpen] = useState(cardCss.activeBoxShadow);
  const entries = Object.entries(cardCss.boxShadow);

  const onUnitChange = (e) => {
    setCardCss({
      ...cardCss,
      boxShadow: {
        ...cardCss.boxShadow,
        [cardCss.activeBoxShadow]: {
          ...cardCss.boxShadow[cardCss.activeBoxShadow],
          clrUnit: e.target.value,
        },
      },
    });
  };

  const handleColorChange = ({ hex, rgb, hsl }) => {
    const bg =
      cardCss.boxShadow[cardCss.activeBoxShadow].clrUnit === "rgb"
        ? `rgba(${rgb.r} ${rgb.b} ${rgb.b} / ${rgb.a})`
        : cardCss.boxShadow[cardCss.activeBoxShadow].clrUnit === "hsl"
        ? `hsla(${Math.round(hsl.h)} ${Math.round(hsl.s * 100)}% ${Math.round(
            hsl.l * 100
          )}% / ${hsl.a} )`
        : hex;
    setCardCss({
      ...cardCss,
      boxShadow: {
        ...cardCss.boxShadow,
        [cardCss.activeBoxShadow]: {
          ...cardCss.boxShadow[cardCss.activeBoxShadow],
          color: bg,
        },
      },
    });
  };

  const handleChange = (e, key, entry) => {
    setCardCss({
      ...cardCss,
      boxShadow: {
        ...cardCss.boxShadow,
        [entry[0]]: {
          ...cardCss.boxShadow[entry[0]],
          [key]: +e.target.value,
        },
      },
      lightSource: {
        x:
          key === "x"
            ? Math.round(-e.target.value * 2.5)
            : cardCss.lightSource.x,
        y:
          key === "y" ? Math.round(-e.target.value * 2) : cardCss.lightSource.y,
      },
    });
  };

  const handleInsetChange = () => {
    setCardCss({
      ...cardCss,
      boxShadow: {
        ...cardCss.boxShadow,
        [cardCss.activeBoxShadow]: {
          ...cardCss.boxShadow[cardCss.activeBoxShadow],
          inset: !cardCss.boxShadow[cardCss.activeBoxShadow].inset,
        },
      },
    });
  };

  const removeBoxShadow = (key) => {
    delete cardCss.boxShadow[key];
    setCardCss({
      ...cardCss,
      activeBoxShadow: "",
    });
  };

  const AddBoxShadow = () => {
    setOpen(Object.keys(cardCss.boxShadow).length);
    setCardCss({
      ...cardCss,
      activeBoxShadow: Object.keys(cardCss.boxShadow).length,
      boxShadow: {
        ...cardCss.boxShadow,
        [Object.keys(cardCss.boxShadow).length]: {
          x: 0,
          y: 0,
          inset: false,
          color: "#000000",
          clrUnit: "hex",
          blur: 0,
          spread: 0,
        },
      },
    });
  };

  return (
    <div>
      {entries.map((entry, i) => {
        return (
          <Select
            key={entry[0]}
            setOpen={setOpen}
            pad={i === 0 && "1rem 1rem 0"}
            close={
              i !== 0 && { action: () => removeBoxShadow(entry[0]), val: "X" }
            }
            onClick={(e) => {
              if (e.target.tagName === "BUTTON") {
                setCardCss({ ...cardCss, activeBoxShadow: "" });
                return;
              }
              setCardCss({
                ...cardCss,
                activeBoxShadow:
                  // eslint-disable-next-line
                  cardCss.activeBoxShadow == entry[0] ? "" : entry[0],
              });
            }}
            open={open.toString()}
            title={`${[entry[0]]}`}
          >
            <Switch
              title="Inset"
              on={entry[1].inset}
              onClick={handleInsetChange}
            />
            <br />
            <Property title="Offset-X">
              <RangeInput
                min="-200"
                max="200"
                value={entry[1].x}
                onChange={(e) => handleChange(e, "x", entry)}
              />
              <NumberInput
                value={entry[1].x}
                onChange={(e) => handleChange(e, "x", entry)}
              />
            </Property>
            <br />
            <Property title="Offset-Y">
              <RangeInput
                min="-100"
                max="100"
                value={entry[1].y}
                onChange={(e) => handleChange(e, "y", entry)}
              />
              <NumberInput
                value={entry[1].y}
                onChange={(e) => handleChange(e, "y", entry)}
              />
            </Property>

            <br />
            <Property title="Blur">
              <RangeInput
                min="0"
                max="200"
                value={entry[1].blur}
                onChange={(e) => handleChange(e, "blur", entry)}
              />
              <NumberInput
                value={entry[1].blur}
                onChange={(e) => handleChange(e, "blur", entry)}
              />
            </Property>
            <br />

            <Property title="Spread">
              <RangeInput
                min="-150"
                max="150"
                value={entry[1].spread}
                onChange={(e) => handleChange(e, "spread", entry)}
              />
              <NumberInput
                value={entry[1].spread}
                onChange={(e) => handleChange(e, "spread", entry)}
              />
            </Property>
            <SelectColor
              onUnitChange={onUnitChange}
              clr={cardCss.boxShadow[cardCss.activeBoxShadow]?.color}
              unit={cardCss.boxShadow[cardCss.activeBoxShadow]?.unit}
              handleColorChange={handleColorChange}
            />
          </Select>
        );
      })}
      <BtnContainer>
        <Button val="+ Add Box Shadow" pad=".6em" action={AddBoxShadow} />
      </BtnContainer>
    </div>
  );
};

const BtnContainer = styled.div`
  padding-inline: 1rem;
  & > button {
    width: 100%;
    margin-block-start: 1.5rem;
  }
`;

export default BoxShadowOptions;
