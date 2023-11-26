import styled from "styled-components";

import TicketInfo from "./TicketInfo";
import TicketCode from "./TicketCode";

const Card = styled.div`
  background-color: var(--color-brand);
  border-radius: var(--border-radius-lg);
`;

const CardContainer = styled.div`
  /* @media (max-width: 25em) { */

  @media (max-width: 72em) {
    & {
      padding: 0 22rem;
      margin-bottom: 3.2rem;
    }
  }

  @media (max-width: 50em) {
    & {
      padding: 0 12rem;
      margin-bottom: 3.2rem;
    }
  }

  @media (max-width: 25em) {
    & {
      padding: 0 1.2rem;
      margin-bottom: 3.2rem;
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
