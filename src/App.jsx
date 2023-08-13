import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Header />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
