const styles = {
  Default: {
    width: 200,
    height: 200,
    widthUnit: "px",
    heightUnit: "px",
    bgColor: "#FFFFFF",
    bgUnit: "hex",
    borderRadius: {
      topLeft: { x: { unit: "%", value: 0 }, y: { unit: "%", value: 0 } },
      topRight: { x: { unit: "%", value: 0 }, y: { unit: "%", value: 0 } },
      bottomRight: { x: { unit: "%", value: 0 }, y: { unit: "%", value: 0 } },
      bottomLeft: { x: { unit: "%", value: 0 }, y: { unit: "%", value: 0 } },
    },
    allBorderRadius: 0,
    allBorderRadiusUnit: "%",
    boxShadow: {
      0: {
        x: 0,
        y: 0,
        inset: false,
        color: "#000000",
        clrUnit: "hex",
        blur: 0,
        spread: 0,
      },
    },
    activeBoxShadow: 0,
    lightSource: { x: 0, y: 0 },
  },
  Neumorphism: {
    width: 200,
    height: 200,
    widthUnit: "px",
    heightUnit: "px",
    bgColor: "rgb(224, 229, 236)",
    bgUnit: "rgb",
    borderRadius: {
      topLeft: { x: { unit: "px", value: 0 }, y: { unit: "px", value: 0 } },
      topRight: { x: { unit: "px", value: 0 }, y: { unit: "px", value: 0 } },
      bottomRight: { x: { unit: "px", value: 0 }, y: { unit: "px", value: 0 } },
      bottomLeft: { x: { unit: "px", value: 0 }, y: { unit: "px", value: 0 } },
    },
    allBorderRadius: 60,
    allBorderRadiusUnit: "px",
    boxShadow: {
      0: {
        x: 30,
        y: 30,
        inset: false,
        color: "rgb(163, 177, 198, 0.5)",
        clrUnit: "rgb",
        blur: 60,
        spread: 0,
      },
      1: {
        x: -30,
        y: -30,
        inset: false,
        color: "#FFFFFF",
        clrUnit: "hex",
        blur: 60,
        spread: 0,
      },
    },
    activeBoxShadow: 0,
    lightSource: { x: 0, y: 0 },
  },
  Claymorphism: {
    width: 200,
    height: 200,
    widthUnit: "px",
    heightUnit: "px",
    bgColor: "#FFFFFF",
    bgUnit: "hex",
    borderRadius: {
      topLeft: { x: { unit: "px", value: 0 }, y: { unit: "px", value: 0 } },
      topRight: { x: { unit: "px", value: 0 }, y: { unit: "px", value: 0 } },
      bottomRight: { x: { unit: "px", value: 0 }, y: { unit: "px", value: 0 } },
      bottomLeft: { x: { unit: "px", value: 0 }, y: { unit: "px", value: 0 } },
    },
    allBorderRadius: 25,
    allBorderRadiusUnit: "px",
    boxShadow: {
      0: {
        x: 35,
        y: 35,
        inset: false,
        color: "rgb(163, 177, 198, 0.5)",
        clrUnit: "rgb",
        blur: 68,
        spread: 0,
      },
      1: {
        x: -8,
        y: -8,
        inset: true,
        color: "rgb(163, 177, 198, 0.5)",
        clrUnit: "rgb",
        blur: 16,
        spread: 0,
      },
      2: {
        x: 0,
        y: 11,
        inset: true,
        color: "rgb(255, 255, 255)",
        clrUnit: "rgb",
        blur: 28,
        spread: 0,
      },
    },
    activeBoxShadow: 0,
    lightSource: { x: 0, y: 0 },
  },
  Neubrutalism: {
    width: 200,
    height: 200,
    widthUnit: "px",
    heightUnit: "px",
    bgColor: "#FFC603",
    bgUnit: "hex",
    borderRadius: {
      topLeft: { x: { unit: "%", value: 0 }, y: { unit: "%", value: 0 } },
      topRight: { x: { unit: "%", value: 0 }, y: { unit: "%", value: 0 } },
      bottomRight: { x: { unit: "%", value: 0 }, y: { unit: "%", value: 0 } },
      bottomLeft: { x: { unit: "%", value: 0 }, y: { unit: "%", value: 0 } },
    },
    allBorderRadius: 0,
    allBorderRadiusUnit: "px",
    boxShadow: {
      0: {
        x: 0,
        y: 0,
        inset: false,
        color: "#000",
        clrUnit: "hex",
        blur: 0,
        spread: 6,
      },
      1: {
        x: 10,
        y: 10,
        inset: false,
        color: "#000",
        clrUnit: "hex",
        blur: 0,
        spread: 2,
      },
    },
    activeBoxShadow: 0,
    lightSource: { x: 0, y: 0 },
  },
// Glassmorphism
  "Windows 95": {
    width: 200,
    height: 200,
    widthUnit: "px",
    heightUnit: "px",
    bgColor: "#c0c0c0",
    bgUnit: "rgb",
    borderRadius: {
      topLeft: { x: { unit: "%", value: 0 }, y: { unit: "%", value: 0 } },
      topRight: { x: { unit: "%", value: 0 }, y: { unit: "%", value: 0 } },
      bottomRight: { x: { unit: "%", value: 0 }, y: { unit: "%", value: 0 } },
      bottomLeft: { x: { unit: "%", value: 0 }, y: { unit: "%", value: 0 } },
    },
    allBorderRadius: 0,
    allBorderRadiusUnit: "px",
    boxShadow: {
      0: {
        x: -3,
        y: -3,
        inset: true,
        color: "#a0a0a0",
        clrUnit: "hex",
        blur: 0,
        spread: 0,
      },
      1: {
        x: 3,
        y: 3,
        inset: true,
        color: "#FFFFFF",
        clrUnit: "hex",
        blur: 0,
        spread: 0,
      },
      2: {
        x: 0,
        y: 0,
        inset: false,
        color: "#606060",
        clrUnit: "hex",
        blur: 0,
        spread: 3,
      }
    },
    activeBoxShadow: 0,
    lightSource: { x: 0, y: 0 },
  },
};

export default styles;
