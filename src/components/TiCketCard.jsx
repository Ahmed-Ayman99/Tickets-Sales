import styled from "styled-components";

import TicketInfo from "./TicketInfo";
import TicketCode from "./TicketCode";

const Card = styled.div`
  background-color: var(--color-brand);
  border-radius: var(--border-radius-lg);

  @media (max-width: 72em) {
    & {
      flex-grow: 1;
      max-width: 50rem;
      margin-bottom: 0 auto 3.2rem;
    }
  }
`;

const CardContainer = styled.div`
  @media (max-width: 72em) {
    & {
      margin-bottom: 3.2rem;
      display: flex;
      justify-content: center;
    }
  }
`;

const TiCketCard = () => {
  return (
    <CardContainer>
      <Card>
        <TicketInfo />
        <TicketCode />
      </Card>
    </CardContainer>
  );
};

export default TiCketCard;
