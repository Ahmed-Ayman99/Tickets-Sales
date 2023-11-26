import styled from "styled-components";

const Container = styled.main`
  max-width: 127rem;
  margin: 0 auto;

  @media (max-width: 84em) {
    & {
      padding: 0rem 1.2rem;
      max-width: 120rem;
    }
  }
`;

export default Container;
