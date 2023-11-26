import styled from "styled-components";

const StyledSelect = styled.select`
  font-size: 1.4rem;
  padding: 0.8rem 0.9rem;
  border: 0.81px solid var(--color-gray-1600);
  background-color: var(--color-gray-0);
  border-radius: var(--border-radius-md);

  color: var(--color-gray-700);
  font-weight: 400;

  &:focus {
    border: 0.81px solid var(--color-gray-200);
    outline: 0.81px solid var(--color-gray-200);
  }
`;

const Select = ({ options, value, onChange, ...props }) => {
  return (
    <StyledSelect value={value} onChange={onChange} {...props}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;
