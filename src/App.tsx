import React from "react";
import "./App.css";

import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//Redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  
  return (
    <div>
      <Provider store={store}>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
      </Provider>
    </div>
    
  )
  ;
};




export default App;
