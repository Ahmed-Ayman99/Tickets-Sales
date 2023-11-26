import styled, { css } from "styled-components";

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 3.4rem;
  height: 1.8rem;

  ${({ variation }) =>
    variation === "primary" &&
    css`
      body[dir="ltr"] & {
        margin-left: 7.7px;
      }

      body[dir="rtl"] & {
        margin-right: 7.7px;
      }
    `}

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

const SliderRound = styled.span`
  position: absolute;
  cursor: pointer;
  inset: 0;
  background-color: var(--color-brand);
  transition: 0.3s;
  border-radius: 3.8rem;

  ${({ checked }) =>
    !checked &&
    css`
      background-color: var(--color-gray-200);
    `}

  &:before {
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 1.5rem;
    aspect-ratio: 1/1;
    background-color: var(--color-gray-0);
    left: 0.2rem;
    bottom: 0.2rem;
    transition: 0.4s;

    ${({ checked }) =>
      !checked &&
      css`
        transform: translateX(1.5rem);
      `}
  }
`;

const CheckBox = ({ onChange, checked, variation }) => {
  return (
    <Label variation={variation}>
      <input onChange={onChange} type="checkbox" checked={checked} />
      <SliderRound checked={checked} />
    </Label>
  );
};

export default CheckBox;
