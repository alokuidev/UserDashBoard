import Dashboard from "./Component/Dashboard";
import "./App.css";
import { NavBar } from "./Component/NavBar";
import store from "./Action";
import { Provider } from "react-redux";
const App = () => {
  return (
    <>
      <NavBar />
      <Provider store={store}>
        <Dashboard />
      </Provider>
    </>
  );
};

export default App;
