import Property from "./Property";
import RangeInput from "./RangeInput";
import { useContext, useState } from "react";
import { CardCssContext } from "../hooks/CardCSS";
import Select from "./Select";
import NumberInput from "./NumberInput";
import SelectColor from "./SelectColor";
import Switch from "./Switch";

const BoxShadowOptions = () => {
  const { cardCss, setCardCss } = useContext(CardCssContext);
  const [open, setOpen] = useState("");
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
    })
  }

  return (
    <div>
      {entries.map((entry) => {
        return (
          <Select
            key={entry[0]}
            setOpen={setOpen}
            open={open}
            title={`${[entry[0]]}`}
          >
            <Switch title="Inset" on={entry[1].inset} onClick={handleInsetChange} />
            <br />
            <Property title="X">
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
            <Property title="Y">
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
              clr={cardCss.boxShadow[cardCss.activeBoxShadow].color}
              unit={cardCss.boxShadow[cardCss.activeBoxShadow].unit}
              handleColorChange={handleColorChange}
            />
          </Select>
        );
      })}
    </div>
  );
};

export default BoxShadowOptions;
