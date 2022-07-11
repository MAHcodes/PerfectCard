import styled from "styled-components"  ;

const RangeInput = (props) => {
  return <Range type="range" value={props.value} min={props.min} max={props.max} onChange={props.onChange} />
};

const Range = styled.input`
  flex: 1;
  min-width: 10rem;

  /* credit for https://github.com/Cool-Runningz/range-input.css */

  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
  width: 100%;

  &:focus {
    outline: none;
  }

  /******** Chrome, Safari, Opera and Edge Chromium styles ********/
  &::-webkit-slider-runnable-track {
    background-color: rgba(var(--accent), 60%);
    border-radius: 8rem;
    height: 0.25rem;
  }
  &:hover::-webkit-slider-runnable-track {
    background-color: rgb(var(--accent));
  }

  /* slider thumb */
  &::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    margin-top: -4px; /* Centers thumb on the track */
    background-color: rgb(var(--fg-main));
    border-radius: 16rem;
    height: 1rem;
    width: 1rem;
  }

  &:active::-webkit-slider-thumb,
  &:hover::-webkit-slider-thumb,
  &:focus::-webkit-slider-thumb {
    outline: 1px solid rgb(var(--fg-main));
    outline-offset: 0.125rem;
  }

  /*********** Firefox styles ***********/
  /* slider track */
  &::-moz-range-track {
    background-color: rgba(var(--accent), 60%);
    border-radius: 8rem;
    height: 0.25rem;
  }
  &::-moz-range-track:hover {
    background-color: rgb(var(--accent));
  }

  /* slider thumb */
  &::-moz-range-thumb {
    background-color: rgb(var(--fg-main));
    border: none; /*Removes extra border that FF applies*/
    border-radius: 16rem;
    height: 1rem;
    width: 1rem;
  }

  &:active::-moz-range-thumb,
  &:hover::-moz-range-thumb,
  &:focus::-moz-range-thumb {
    outline: 1px solid rgb(var(--fg-main));
    outline-offset: 0.125rem;
  }
`;

export default RangeInput;
