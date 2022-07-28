import {RecoilRoot} from "recoil";
import Header from "./Components/Header/Header";
import List from "./Components/List/List";
import "./App.css";

function App() {
  return (
   <RecoilRoot>
    <section>
      <Header />
      <List />
    </section>
   </RecoilRoot>
  );
}

export default App;
