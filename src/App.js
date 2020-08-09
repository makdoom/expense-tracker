import React from "react";
import "./App.css";
import Tracker from "./components/Tracker";
import GlobalProvider from "./contexts/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <div className="app">
        <Tracker />
      </div>
    </GlobalProvider>
  );
}

export default App;
