import styled, { css } from "styled-components";

const BtnStyles = styled.button`
  border-radius: var(--border-radius-sm);
  padding: 1rem 1rem;
  font-size: 1.2rem;
  line-height: 1.8rem;

  ${({ variation }) =>
    variation === "primary" &&
    css`
      background-color: var(--color-brand);
      color: var(--color-gray-800);
      body[dir="ltr"] & {
        margin-left: 2rem;
      }
    `}
`;

const Button = ({ onClick, children, variation }) => {
  return (
    <BtnStyles variation={variation} onClick={onClick}>
      {children}
    </BtnStyles>
  );
};

export default Button;
