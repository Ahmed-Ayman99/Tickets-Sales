import styled from "styled-components";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { DemoChartData } from "../utils/helpers";
import { useDarkMode } from "../context/DarkmodeContext";
import { useDirection } from "../context/DirectionContext";

const ChartBox = styled.div`
  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-gray-300);
  }

  & .recharts-cartesian-axis-tick-value tspan {
    font-size: 1.2rem;
    fill: #9291a5;
  }

  & .recharts-cartesian-axis-tick text,
  & .recharts-cartesian-axis-tick text {
    line-height: 1.613rem;
    font-size: 1.2rem;
    fill: #9291a5;
  }

  & .recharts-tooltip-wrapper.recharts-tooltip-wrapper-top {
    border-radius: var(--border-radius-sm);
    position: relative;
    margin-left: 1rem;

    &::after {
      content: "";
      position: absolute;
      border: 1.2rem solid;
      border-color: transparent var(--color-gray-200) transparent transparent;
      top: 50%;
      right: 100%;
      transform: translateY(-50%);
    }
  }
`;

const SalesChart = () => {
  const { direction } = useDirection();
  const data = DemoChartData(direction);

  const { isDarkMode } = useDarkMode();
  const colors = isDarkMode
    ? {
        totalSales: { stroke: "#4f46e5", fill: "#4f46e5" },
        extrasSales: { stroke: "#22c55e", fill: "#22c55e" },
        text: "#e5e7eb",
        background: "#18212f",
      }
    : {
        totalSales: { stroke: "#4f46e5", fill: "#c7d2fe" },
        extrasSales: { stroke: "#16a34a", fill: "#dcfce7" },
        text: "#374151",
        background: "#fff",
      };

  return (
    <ChartBox>
      <ResponsiveContainer height={137} width={"100%"}>
        <AreaChart data={data} width={700}>
          <XAxis
            dataKey="label"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />

          <YAxis
            style={{ direction: "ltr" }}
            unit="$"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />

          <CartesianGrid strokeDasharray="4" />

          <Tooltip
            contentStyle={{
              backgroundColor: colors.background,
              borderRadius: "6.15px",
            }}
          />

          <Area
            dataKey="totalSales"
            type="monotone"
            stroke={colors.totalSales.stroke}
            fill={colors.totalSales.fill}
            name="Total Sales"
            unit="$"
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartBox>
  );
};

export default SalesChart;
