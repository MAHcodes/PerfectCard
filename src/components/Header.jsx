import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import SelectUnit from "./SelectUnit";
const BACKGROUNDS = {
  "No Background": {
    img: "",
  },
  Dots: {
    img: "radial-gradient(rgb(var(--gray)) 1px,rgb(var(--bg-sec)) 1px)",
    size: "20px 20px",
  },
  "Cross Dots": {
    img: "radial-gradient(rgb(var(--gray)) 1px, transparent 1px), radial-gradient(rgb(var(--gray)) 1px, transparent 1px)",
    position: "0 0, 10px 10px",
    size: "20px 20px",
  },
  Grid: {
    img: "linear-gradient(rgba(var(--gray), 50%) 1px, transparent 1px), linear-gradient(to right, rgba(var(--gray), 50%) 1px, transparent 1px)",
    size: "20px 20px",
  },
  Paper: {
    img: "linear-gradient(rgba(var(--gray), 20%) 2px, transparent 2px), linear-gradient(90deg, rgba(var(--gray), 20%) 2px, transparent 2px), linear-gradient(rgba(var(--gray), 20%) 1px, transparent 1px), linear-gradient(90deg, rgba(var(--gray), 20%) 1px, rgb(var(--bg-sec)) 1px)",
    size: "60px 60px, 60px 60px, 20px 20px, 20px 20px",
    position: "-2px -2px, -2px -2px, -1px -1px, -1px -1px",
  },
  Crosses: {
    bg: "radial-gradient(circle, transparent 20%, rgb(var(--bg-sec)) 20%, rgb(var(--bg-sec)) 80%, transparent 80%, transparent) 0% 0% / 40px 40px, radial-gradient(circle, transparent 20%, rgb(var(--bg-sec)) 20%, rgb(var(--bg-sec)) 80%, transparent 80%, transparent) 20px 20px / 40px 40px, linear-gradient(rgba(var(--gray), 60%) 1px, transparent 1px) 0px -0.5px / 20px 20px, linear-gradient(90deg, rgba(var(--gray), 60%) 1px, rgb(var(--bg-sec)) 1px) -0.5px 0px / 20px 20px rgb(var(--bg-sec))",
    position: "0 0, 15px 15px",
    size: "30px 30px",
  },
  Diagonal: {
    img: "repeating-linear-gradient(45deg, rgba(var(--gray), 50%) 0, rgba(var(--gray), 50%) 1px, rgb(var(--bg-sec)) 0, rgb(var(--bg-sec)) 50%)",
    size: "20px 20px",
  },
  Cubes: {
    img: "linear-gradient(30deg, rgba(var(--gray), 15%) 12%, transparent 12.5%, transparent 87%, rgba(var(--gray), 15%) 87.5%, rgba(var(--gray), 15%)), linear-gradient(150deg, rgba(var(--gray), 15%) 12%, transparent 12.5%, transparent 87%, rgba(var(--gray), 15%) 87.5%, rgba(var(--gray), 15%)), linear-gradient(30deg, rgba(var(--gray), 15%) 12%, transparent 12.5%, transparent 87%, rgba(var(--gray), 15%) 87.5%, rgba(var(--gray), 15%)), linear-gradient(150deg, rgba(var(--gray), 15%) 12%, transparent 12.5%, transparent 87%, rgba(var(--gray), 15%) 87.5%, rgba(var(--gray), 15%)), linear-gradient(60deg, rgba(var(--accent), 8%) 15%, transparent 25.5%, transparent 75%, rgba(var(--accent), 8%) 75%, rgba(var(--accent), 8%)), linear-gradient(60deg, rgba(var(--accent), 8%) 15%, transparent 25.5%, transparent 75%, rgba(var(--accent), 8%) 75%, rgba(var(--accent), 8%))",
    size: "20px 35px",
    position: "0 0, 0 0, 10px 18px, 10px 18px, 0 0, 10px 18px",
  },
};

const Header = () => {
  const [dark, setDark] = useState(false);
  const [bg, setBg] = useState("Dots");

  useEffect(() => {
    document.body.className = dark ? "dark" : "light";
    document.body.style.background = BACKGROUNDS[bg].bg;
    document.body.style.backgroundImage = BACKGROUNDS[bg].img;
    document.body.style.backgroundSize = BACKGROUNDS[bg].size;
    document.body.style.backgroundPosition = BACKGROUNDS[bg].position;
  }, [dark, bg]);

  const handleBackground = (e) => {
    localStorage.setItem("bg", JSON.stringify(e.target.value));
    setBg(e.target.value);
  };

  useEffect(() => {
    const theme = JSON.parse(localStorage.getItem("dark")) || false;
    setDark(theme);
    const bg = JSON.parse(localStorage.getItem("bg")) || "Dots";
    setBg(bg);
  }, []);

  const toggleTheme = () => {
    localStorage.setItem("dark", JSON.stringify(!dark));
    setDark(!dark);
  };

  return (
    <Hdr>
      <H1>PerfectCart</H1>
      <Controls>
        <SelectUnit
          options={[...Object.keys(BACKGROUNDS)]}
          onChange={handleBackground}
          def={bg}
          title="Change Background"
        />
        <Button
          border
          val={dark ? <SunIcon /> : <MoonIcon />}
          action={toggleTheme}
          title = {dark ? "Switch to Light Theme" : "Switch to Dark Theme"}
        />
      </Controls>
    </Hdr>
  );
};

const SunIcon = () => (
  <svg
    width="24px"
    height="24px"
    fill="rgb(var(--fg-main))"
    viewBox="0 0 1024 1024"
  >
    <path d="M240.64 725.333333l-30.293333 30.293334a42.666667 42.666667 0 0 0 0 60.16 42.666667 42.666667 0 0 0 60.16 0l30.293333-30.293334A42.666667 42.666667 0 0 0 240.64 725.333333zM213.333333 512a42.666667 42.666667 0 0 0-42.666666-42.666667H128a42.666667 42.666667 0 0 0 0 85.333334h42.666667a42.666667 42.666667 0 0 0 42.666666-42.666667z m298.666667-298.666667a42.666667 42.666667 0 0 0 42.666667-42.666666V128a42.666667 42.666667 0 0 0-85.333334 0v42.666667a42.666667 42.666667 0 0 0 42.666667 42.666666zM240.64 300.8a42.666667 42.666667 0 0 0 29.866667 12.373333 42.666667 42.666667 0 0 0 30.293333-12.373333 42.666667 42.666667 0 0 0 0-60.16l-30.293333-30.293333a42.666667 42.666667 0 0 0-60.16 60.16z m512 12.373333a42.666667 42.666667 0 0 0 29.866667-12.373333l30.293333-30.293333a42.666667 42.666667 0 1 0-60.16-60.16l-27.306667 30.293333a42.666667 42.666667 0 0 0 0 60.16 42.666667 42.666667 0 0 0 28.16 12.373333zM896 469.333333h-42.666667a42.666667 42.666667 0 0 0 0 85.333334h42.666667a42.666667 42.666667 0 0 0 0-85.333334z m-384 341.333334a42.666667 42.666667 0 0 0-42.666667 42.666666v42.666667a42.666667 42.666667 0 0 0 85.333334 0v-42.666667a42.666667 42.666667 0 0 0-42.666667-42.666666z m271.36-85.333334A42.666667 42.666667 0 0 0 725.333333 783.36l30.293334 30.293333a42.666667 42.666667 0 0 0 60.16 0 42.666667 42.666667 0 0 0 0-60.16zM512 277.333333a234.666667 234.666667 0 1 0 234.666667 234.666667A235.093333 235.093333 0 0 0 512 277.333333z m0 384a149.333333 149.333333 0 1 1 149.333333-149.333333 149.333333 149.333333 0 0 1-149.333333 149.333333z" />
  </svg>
);

const MoonIcon = () => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 1024 1024"
    fill="rgb(var(--fg-main))"
  >
    <path
      d="M558.27 1024c157.512 0 301.964-71.608 397.688-189.55 56.54-69.662-5.116-171.444-92.498-154.802-164.696 31.366-316.544-94.536-316.544-261.584 0-96.848 52.12-184.584 134.868-231.672 77.49-44.1 57.998-161.576-30.044-177.838A515.872 515.872 0 0 0 558.27 0c-282.72 0-512 229.15-512 512 0 282.72 229.152 512 512 512z m0-928c25.97 0 51.378 2.402 76.032 6.956-109.52 62.326-183.386 180.084-183.386 315.108 0 227.696 207.282 398.4 430.504 355.888C805.148 867.928 688.732 928 558.27 928c-229.75 0-416-186.25-416-416s186.25-416 416-416z"
      fill=""
    />
  </svg>
);

const Hdr = styled.header`
  padding-block: 1rem 2rem;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1rem;
  position: relative;
  z-index: 20;

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

const H1 = styled.h1`
  font-size: var(--fz-md);
  margin-inline-end: auto;
  font-weight: bold;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto; 

  & > span > select {
    width: auto;
    padding-block: 0.35rem;
    padding-inline-end: 1.35rem;
    background-color: transparent;
    &:focus,
    &:active {
      background-color: transparent;
    }
  }
`;

export default Header;
