import { react } from "react";
import Header from "./components/Header"
import SeriesSearch from "./components/SeriesSearch";
import "../src/index.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <SeriesSearch />
      <Footer />
    </>
  );
}

export default App;
