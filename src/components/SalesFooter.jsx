import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 25em) {
    & {
      padding-top: 2.4rem;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
    }
  }
`;

const Progress = styled.p`
  font-size: 1.05rem;
  line-height: 1.256rem;
  font-weight: 400;
  color: #333;

  span {
    font-weight: 600;
  }
`;

const SalesFooter = ({ from, count, to, children }) => {
  const { t } = useTranslation();

  return (
    <Footer>
      <Progress>
        {t("show")} <span>{from}</span> {t("to")} <span>{to}</span> {t("of")}
        <span> {count}</span>
      </Progress>

      {children}
    </Footer>
  );
};

export default SalesFooter;
