import { RiArrowUpDownFill } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const HeadField = styled.div`
  font-size: 1.328rem;
  color: var(--color-gray-1000);
  font-weight: 400;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 1.6rem;
    color: var(--color-gray-1400);
  }

  &:has(svg) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
  }
`;

const HeaderStyles = styled.div`
  background-color: var(--color-gray-1500);
  display: grid;
  grid-column: 1/9;
  width: 100%;
  grid-template-columns: 1fr 3.33fr 2.6fr 2.6fr 8.4fr 2.6fr 3.4fr 6.67fr;

  gap: 1rem;
  align-items: center;
  justify-items: center;
  padding: 1.4rem 0rem;
  border-radius: var(--border-radius-md);

  @media (max-width: 57em) {
    & {
      grid-template-columns: 0.8fr 3.33fr 2.6fr 2.8fr 6fr 2.67fr 3.3fr 6.67fr;
    }
  }
`;

const HeaderRow = () => {
  const { t } = useTranslation();

  return (
    <HeaderStyles>
      <HeadField>#</HeadField>
      <HeadField>{t("user")}</HeadField>
      <HeadField>{t("ticketNumber")} </HeadField>
      <HeadField>
        {t("ticketRate")}
        <RiArrowUpDownFill />
      </HeadField>
      <HeadField>{t("cinemas")}</HeadField>
      <HeadField>{t("peopleNumber")}</HeadField>
      <HeadField>{t("purchasesNumber")} </HeadField>
      <HeadField>{t("theTicket")}</HeadField>
    </HeaderStyles>
  );
};

export default HeaderRow;
