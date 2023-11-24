import styled from "styled-components";
import TicketInfo from "./TicketInfo";
import TicketCode from "./TicketCode";

const Card = styled.div`
  background-color: var(--color-brand);
  border-radius: var(--border-radius-lg);
`;

const TiCketCard = () => {
  return (
    <Card>
      <TicketInfo />
      <TicketCode />
    </Card>
  );
};

export default TiCketCard;
