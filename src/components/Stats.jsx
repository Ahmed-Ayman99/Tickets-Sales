import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { useState } from "react";

import SalesChart from "./SalesChart";
import Select from "./Select";

const StatsContainer = styled.div`
  background-color: var(--color-gray-0);
  border-radius: var(--border-radius-md);
  padding: 1.9rem 2.2rem;

  @media (max-width: 25em) {
    & {
      padding: 1rem !important;
    }
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 3.16rem;
`;

const StatsTitle = styled.p`
  line-height: 12.9px;
  color: var(--color-gray-700);
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 1rem;
`;

const StatsDate = styled.p`
  line-height: 12.9px;
  font-size: 1.4rem;
  color: var(--color-gray-1200);
  font-weight: 500;
`;

const Stats = () => {
  const { t } = useTranslation();

  const [statsPeriod, setStatsPeriod] = useState("Year");
  const options = [
    {
      value: "year",
      label: "Year",
    },
    {
      value: "month",
      label: "Month",
    },
    {
      value: "day",
      label: "Day",
    },
  ];

  return (
    <StatsContainer>
      <Row>
        <div>
          <StatsTitle>{t("couponstatistics")}</StatsTitle>
          <StatsDate>{t("couponDate")}</StatsDate>
        </div>

        <Select
          value={statsPeriod}
          options={options}
          onChange={(e) => setStatsPeriod(e.target.value)}
        />
      </Row>

      <SalesChart />
    </StatsContainer>
  );
};

export default Stats;
