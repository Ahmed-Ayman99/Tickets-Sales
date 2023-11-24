import { LuSend } from "react-icons/lu";
import styled from "styled-components";

const TicketCodeStyles = styled.div`
  padding: 1.5rem 3.2rem;
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

const Figure = styled.figure`
  width: 8.2rem;
  aspect-ratio: 1/1;
  background-color: #333;
  overflow: hidden;
`;

const DiscountAction = styled.div`
  gap: 1.7rem;
  display: flex;
  align-items: end;
`;

const Discount = styled.p`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  color: #fff;
  font-weight: 600;

  span:nth-child(1) {
    font-size: 1.4rem;
    line-height: 1.67rem;
    text-transform: capitalize;
  }

  span:nth-child(2) {
    font-size: 1.8rem;
    line-height: 2.194remd;
  }
`;

const ShareButton = styled.button`
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 4px;

  border: 1px solid var(--color-gray-0);
  color: var(--color-gray-0);
  background-color: transparent;
  transition: all 0.3s ease-in;

  padding: 0.6rem;
  line-height: 1.44rem;
  font-size: 1.4rem;
  letter-spacing: 0.5px;

  &:hover {
    background-color: var(--color-gray-0);
    color: var(--color-gray-700);
  }

  & svg {
    font-size: 1.6rem;
  }
`;

const TicketCode = () => {
  return (
    <TicketCodeStyles>
      <Figure>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos maxime
        impedit nisi, cumque quibusdam iure, quos quasi, non hic vel saepe qui
        consectetur veniam ullam!
      </Figure>
      <DiscountAction>
        <ShareButton>
          Share
          <LuSend />
        </ShareButton>
        <Discount>
          <span>discount</span> <span>25%</span>{" "}
        </Discount>
      </DiscountAction>
    </TicketCodeStyles>
  );
};

export default TicketCode;
