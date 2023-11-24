import styled from "styled-components";
import SalesHeader from "./SalesHeader";

const SalesContainer = styled.section`
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
`;

const SalesSection = () => {
  return (
    <SalesContainer>
      <SalesHeader />
    </SalesContainer>
  );
};

export default SalesSection;
