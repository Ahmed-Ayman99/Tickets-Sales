import styled from "styled-components";

import { HiOutlineDuplicate } from "react-icons/hi";
import { RiDeleteBin5Line } from "react-icons/ri";

import ButttonIcon from "./ButttonIcon";
import { useTranslation } from "react-i18next";

const TicketInfoStyles = styled.div`
  padding: 2.4rem 1.2rem 1.7rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 2.5px dashed;
  border-color: rgba(255, 255, 255, 0.4);

  &::after,
  &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    border-radius: 50%;
    border: 1.6rem solid;
    border-color: var(--color-gray-1100) var(--color-gray-1100) transparent
      transparent;
  }

  &::after {
    transform: translate(50%, 50%) rotate(225deg);
    right: 0rem;
  }

  &::before {
    transform: translate(-50%, 50%) rotate(45deg);
    left: 0rem;
  }
`;

const TicketTitle = styled.p`
  line-height: 16.8px;
  font-size: 1.4rem;
  color: var(--color-gray-0);
  margin-bottom: 2.1rem;
`;

const TicketLink = styled.div`
  background-color: var(--color-gray-0);
  border-radius: var(--border-radius-md);
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1.1rem;
`;

const LinkTxt = styled.p`
  font-size: 1.3rem;
  line-height: 2.32rem;
  color: var(--color-gray-700);

  body[dir="ltr"] & {
    padding-right: 1rem;
  }

  body[dir="rtl"] & {
    padding-left: 1rem;
  }
`;

const TicketDate = styled.div`
  font-size: 1.2rem;
  line-height: 1.46rem;
  color: var(--color-gray-0);
  letter-spacing: 0.6px;
`;

const Delete = styled.div`
  position: absolute;
  top: 2.4rem;
  left: 3.2rem;

  svg:hover + div {
    opacity: 1;
  }

  svg {
    font-size: 2.2rem;
    width: 2.2rem;
    color: var(--color-gray-0);
    cursor: pointer;
  }
`;

const Tooltip = styled.div`
  transition: all 0.2s ease-in;
  opacity: 0;
  border-radius: 6.45px;
  padding: 0.8rem 2.2rem;
  background-color: var(--color-black);
  color: var(--color-gray-1300);
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.29rem;
  position: absolute;
  top: calc(100% + 1.3rem);
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;

  &::after {
    content: "";
    display: block;
    padding: 1.2rem;
    position: absolute;
    border-radius: var(--border-radius-tiny);
    transform: translate(-50%, -30%) rotate(45deg);
    top: 0;
    left: 50%;
    z-index: -1;
    background-color: var(--color-black);
  }
`;

const TicketInfo = () => {
  const { t } = useTranslation();

  return (
    <TicketInfoStyles>
      <Delete>
        <RiDeleteBin5Line />
        <Tooltip>{t("delete")}</Tooltip>
      </Delete>

      <TicketTitle>{t("observation")}</TicketTitle>

      <TicketLink>
        <ButttonIcon>
          <HiOutlineDuplicate />
        </ButttonIcon>

        <LinkTxt>{t("ticketUrl")}</LinkTxt>
      </TicketLink>

      <TicketDate>{t("ticketTemporary")}</TicketDate>
    </TicketInfoStyles>
  );
};

export default TicketInfo;
