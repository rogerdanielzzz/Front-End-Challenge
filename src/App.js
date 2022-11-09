import './App.scss';
import NavBar from "./components/NavBar/NavBar.jsx"
import CardContainer from "./components/CardContainer/CardContainer.jsx"
import Detail from './components/Detail/Detail';
import { Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Route  path="/">
        <NavBar />
      </Route>
      <Route exact path="/">
        <CardContainer />
      </Route>
      <Route exact path="/character/:id">
        <Detail/>
      </Route>

    </div>
  );
}

export default App;
