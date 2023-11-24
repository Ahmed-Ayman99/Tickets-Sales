import GlobalStyles from "./styles/GlobalStyles";
import Container from "./components/Container";
import Header from "./components/Header";
import ChartStats from "./components/ChartStats";
import SalesSection from "./components/SalesSection";
// import TiCketCard from "./components/TiCketCard";
// import TiCketCard from "./components/TiCketCard";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Container className="container">
        <Header />
        <ChartStats />
        <SalesSection />
      </Container>
    </>
  );
};

export default App;
