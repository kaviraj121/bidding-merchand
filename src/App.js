import "./App.css";
import Bid from "./Components/Bid";
import HeaderComp from "./Components/HeaderComp";
import MainProduct from "./Components/MainProduct";
import NavComp from "./Components/NavComp";

function App() {
  return (
    <div className="App">
      <NavComp />
      <HeaderComp />
      <MainProduct />
      <Bid />
    </div>
  );
}

export default App;
