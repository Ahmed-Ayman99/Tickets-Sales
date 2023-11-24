import { HiOutlineDuplicate } from "react-icons/hi";
import styled from "styled-components";

import ButttonIcon from "./ButttonIcon";

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
    border: 2.7rem solid;
    border-color: var(--color-gray-0) var(--color-gray-0) transparent
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
  gap: 1.6rem;
  align-items: center;
  margin-bottom: 1.1rem;
  padding: 0 1.6rem;
`;

const LinkTxt = styled.p`
  font-size: 1.3rem;
  line-height: 2.32rem;
  color: var(--color-gray-700);
`;

const TicketDate = styled.div`
  font-size: 1.2rem;
  line-height: 1.46rem;
  color: var(--color-gray-0);
  letter-spacing: 0.6px;
`;

// const Delete = styled.div``;

const TicketInfo = () => {
  return (
    <TicketInfoStyles>
      <TicketTitle>View the movie ticket</TicketTitle>
      <TicketLink>
        <ButttonIcon>
          <HiOutlineDuplicate />
        </ButttonIcon>
        <LinkTxt>www.tazkty.com/473847</LinkTxt>
      </TicketLink>
      <TicketDate>Effective until July 15, 2023</TicketDate>
    </TicketInfoStyles>
  );
};

export default TicketInfo;
