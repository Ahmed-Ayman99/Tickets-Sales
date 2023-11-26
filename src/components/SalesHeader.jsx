import styled from "styled-components";
import { useState } from "react";

import { CiSearch } from "react-icons/ci";
import { LuSettings2 } from "react-icons/lu";
import { useTranslation } from "react-i18next";
import { RiArrowUpDownFill } from "react-icons/ri";

import CheckBox from "./CheckBox";
import Button from "./Button";

const HeaderStyles = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.6rem;
  flex-wrap: wrap;

  @media (max-width: 50em) {
    & {
      gap: 2.4rem;
      flex-direction: column-reverse;
    }
  }
`;

const SalesAction = styled.div`
  display: flex;
  align-items: center;
  gap: 1.7rem;

  @media (max-width: 25em) {
    & {
      gap: 0.4rem;
      padding: 0rem 0.8rem;
    }
  }
`;

const BookingTicket = styled.div`
  display: flex;
  align-items: center;
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
  align-items: center;
  border: 1px solid var(--color-gray-200);
  background-color: var(--color-gray-0);
  border-radius: var(--border-radius-sm);
  overflow: hidden;
  max-width: 27.7rem;
  width: 27.7rem;
  max-height: 3.6rem;
  height: 3.6rem;
  padding: 1rem;

  svg {
    font-size: 1.6rem;
    color: var(--color-gray-500);
  }

  @media (max-width: 25em) {
    & {
      width: 18rem;
    }
  }
`;

const Input = styled.input`
  border: none;
  padding: 5px 6px;
  height: 100%;
  background-color: var(--color-gray-0);
  color: var(--color-gray-200);

  &:focus {
    outline: none;
    border: none;
  }

  &:placeholder-shown {
    color: var(--color-gray-200);
    font-weight: 400;
    font-size: 10px;
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

  svg {
    color: var(--color-gray-700);
  }
`;

const Status = styled.span`
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: var(--color-gray-900);
`;

const SalesHeader = () => {
  const [isChecked, setIsChecked] = useState(true);
  const { t } = useTranslation();

  return (
    <HeaderStyles>
      <SalesAction>
        <SalesTitle>{t("ticketSales")} </SalesTitle>

        <FormContainer>
          <Form>
            <CiSearch />
            <Input type="text" placeholder={t("placeholderSearch")} />
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
        <Status>{isChecked ? t("active") : t("inActive")}</Status>

        <CheckBox
          variation="primary"
          onChange={() => setIsChecked((prev) => !prev)}
          checked={isChecked}
        />

        <Button variation="primary">{t("bookTicket")}</Button>
      </BookingTicket>
    </HeaderStyles>
  );
};

export default SalesHeader;
