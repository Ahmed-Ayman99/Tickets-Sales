import { FaRegEdit } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { HiOutlineMoon, HiArrowSmLeft } from "react-icons/hi";

import ButttonIcon from "./ButttonIcon";
import styled from "styled-components";

const HeaderStyles = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.3rem;
`;

const HeaderInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;

  span {
    line-height: 2.8rem;
    font-size: 1.6rem;
    color: var(--color-gray-700);
  }
`;

const InfoButton = styled.button`
  background-color: #e7eaed;
  border-radius: var(--border-radius-md);
  padding: 1rem;

  svg {
    font-size: 1.3rem;
    color: var(--color-gray-500);
  }
`;

const ActionList = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const HeaderEdit = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    line-height: 2.8rem;
    font-size: 1.4rem;
    color: var(--color-gray);
  }
`;

const Header = () => {
  return (
    <HeaderStyles>
      <HeaderInfo>
        <InfoButton>
          <HiArrowSmLeft />
        </InfoButton>
        <span>Ticket #2342</span>
      </HeaderInfo>

      <ActionList>
        <HeaderEdit>
          <span>Edit</span>
          <ButttonIcon>
            <FaRegEdit />
          </ButttonIcon>
        </HeaderEdit>

        <ButttonIcon>
          <HiOutlineMoon />
        </ButttonIcon>

        <div>
          <ButttonIcon>
            <AiOutlineGlobal />
          </ButttonIcon>
        </div>
      </ActionList>
    </HeaderStyles>
  );
};

export default Header;
