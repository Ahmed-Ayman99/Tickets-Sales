import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import { LuSettings2 } from "react-icons/lu";
import { RiArrowUpDownFill } from "react-icons/ri";
import Button from "./Button";
import CheckBox from "./CheckBox";
import { useState } from "react";

const HeaderStyles = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SalesAction = styled.div`
  display: flex;
  align-items: center;
  gap: 1.7rem;
`;

const SalesTitle = styled.h3`
  font-weight: 400;
  color: var(--color-gray-700);
  font-size: 1.6rem;
  line-height: 2rem;
`;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

const Form = styled.form`
  display: flex;
  align-items: stretch;
  border: 1px solid var(--color-gray-200);
  background-color: var(--color-gray-0);

  button {
    border-radius: var(--border-radius-tiny);
    background-color: var(--color-gray-0);
    align-self: stretch;
    padding: 5px 6px;
    border: none;

    svg {
      font-size: 1.6rem;
      color: var(--color-gray-500);
    }
  }
`;

const Input = styled.input`
  border: none;
  padding: 0 6px;

  &:focus {
    outline: none;
    border: none;
  }
`;

const SalesIcon = styled.button`
  width: 3.2rem;
  height: 3.2rem;
  border: 0.75px solid;
  border-color: rgb(146, 161, 173, 0.4);
  background-color: var(--color-gray-0);
  border-radius: var(--border-radius-sm);
  outline: none;
`;

const BookingTicket = styled.div`
  display: flex;
  align-items: center;
`;

const Status = styled.span`
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: var(--color-gray-900);
`;

const SalesHeader = () => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <HeaderStyles>
      <SalesAction>
        <SalesTitle>Ticket sales</SalesTitle>

        <FormContainer>
          <Form>
            <button>
              <CiSearch />
            </button>
            <Input type="text" />
          </Form>

          <SalesIcon>
            <LuSettings2 />
          </SalesIcon>

          <SalesIcon>
            <RiArrowUpDownFill />
          </SalesIcon>
        </FormContainer>
      </SalesAction>

      <BookingTicket>
        <Status>{isChecked ? "Active" : "inActive"}</Status>
        <CheckBox
          variation="primary"
          onChange={() => setIsChecked((prev) => !prev)}
          checked={isChecked}
        />

        <Button variation="primary">Book a ticket</Button>
      </BookingTicket>
    </HeaderStyles>
  );
};

export default SalesHeader;
