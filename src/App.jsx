import { useEffect } from "react";

import { useDirection } from "./context/DirectionContext";
import SalesSection from "./components/SalesSection";
import ChartStats from "./components/ChartStats";
import GlobalStyles from "./styles/GlobalStyles";
import Container from "./components/Container";
import Header from "./components/Header";

const App = () => {
  const { direction } = useDirection();

  useEffect(() => {
    document.body.dir = direction;
  }, [direction]);
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <ChartStats />
        <SalesSection />
      </Container>
    </>
  );
};

export default App;
