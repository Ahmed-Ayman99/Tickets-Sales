import styled from "styled-components";

import HeaderRow from "./HeaderRow";
import SalesRow from "./SalesRow";

const SalesTable = styled.div`
  display: grid;
  grid-template-columns: 1fr 3.33fr 2.6fr 1.93fr 8.4fr 2.67fr 3.3fr 6.67fr;

  @media (max-width: 57em) {
    & {
      grid-template-columns: 0.8fr 3.33fr 2.6fr 2.8fr 6fr 2.67fr 3.3fr 6.67fr;
      /* grid-template-columns: 0.8fr 3.33fr 2.6fr 2.8fr 6fr 2.67fr 3.3fr 6.67fr; */
    }
  }

  gap: 2rem;
  align-items: center;
  justify-items: center;
  margin-bottom: 11px;
  background-color: var(--color-gray-0);
  border-radius: var(--border-radius-md);
  padding: 7px 6px;

  @media (max-width: 50em) {
    & {
      width: 850px;
    }
  }
`;

const SalesTableContainer = styled.div`
  overflow-x: auto;
  &::-webkit-scrollbar {
    height: 1rem;
  }

  &::-webkit-scrollbar-track {
    background: var(--color-gray-100);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: var(--color-gray-200);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-gray-500);
  }
`;

const SalesContent = ({ data }) => {
  return (
    <SalesTableContainer>
      <SalesTable role="table">
        <HeaderRow />
        {data.map((user, ind) => (
          <SalesRow key={ind} user={user} order={ind + 1} />
        ))}
      </SalesTable>
    </SalesTableContainer>
  );
};

export default SalesContent;
