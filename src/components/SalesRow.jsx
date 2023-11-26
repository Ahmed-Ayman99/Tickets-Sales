import { MdOutlineDownloadForOffline } from "react-icons/md";
import { HiTicket } from "react-icons/hi2";
import styled from "styled-components";

import ButttonIcon from "./ButttonIcon";

const HeadField = styled.p`
  font-size: 1.328rem;
  line-height: 2.3rem;
  color: var(--color-gray-1000);
  font-weight: 400;
`;

const UserField = styled.div`
  display: grid;
  grid-template-columns: 3rem 1fr;
  gap: 6.56px;
  align-items: center;
  justify-self: start;
`;

const Avatar = styled.img`
  width: 3rem;
  aspect-ratio: 1;
  border-radius: 50%;
`;

const UserData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-weight: 400;
`;

const Name = styled.p`
  color: var(--color-gray-700);
  font-size: 1.162rem;
`;

const Number = styled.p`
  color: var(--color-gray-200);
  font-size: 1rem;
  margin-left: 3.66px;
`;

const TicketNum = styled.p`
  font-size: 1.3rem;
  color: var(--color-gray-700);
`;

const TicketPrice = styled.p`
  font-size: 1.3rem;
  color: var(--color-gray-700);
`;

const CinemaName = styled.p`
  font-size: 1.3rem;
  color: var(--color-gray-700);
  max-width: 100%;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
`;

const PeopleNumber = styled.p`
  font-size: 1.3rem;
  color: var(--color-gray-700);
`;

const PurchasesNumber = styled.p`
  font-size: 1.3rem;
  color: var(--color-gray-700);
`;

const DataContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.2rem;
`;

const TicketData = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

const Icon = styled.span`
  display: block;
  svg {
    display: inline-block;
    color: var(--color-brand);
    font-size: 2rem;
  }
`;

const TicketTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  p:nth-child(1) {
    color: var(--color-black);
    font-size: 1.2rem;
    line-height: 1.75rem;
    font-weight: 500;
  }

  p:nth-child(2) {
    color: var(--color-black);
    opacity: 0.4;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 5.3px;
  }
`;

const SalesRow = ({ user }) => {
  const {
    avatar,
    name,
    number,
    ticketName,
    price,
    peopleNumber,
    purchasesNumber,
    cinemaName,
    id,
  } = user;
  return (
    <>
      <HeadField>{id}</HeadField>
      <UserField>
        <Avatar alt="user" src={avatar} />
        <UserData>
          <Name>{name}</Name>
          <Number>{number}</Number>
        </UserData>
      </UserField>

      <TicketNum>{ticketName}</TicketNum>
      <TicketPrice>${price}</TicketPrice>

      <CinemaName>{cinemaName}</CinemaName>

      <PeopleNumber>{peopleNumber}</PeopleNumber>
      <PurchasesNumber>{purchasesNumber}</PurchasesNumber>

      <DataContainer>
        <TicketData>
          <Icon>
            <HiTicket />
          </Icon>

          <TicketTitle>
            <p>Ticket No. 45.pdf</p>
            <p>9MB . PDF</p>
          </TicketTitle>
        </TicketData>

        <ButttonIcon>
          <MdOutlineDownloadForOffline />
        </ButttonIcon>
      </DataContainer>
    </>
  );
};

export default SalesRow;
