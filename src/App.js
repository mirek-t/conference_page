import React from "react";
import Home from "./Home";

export const ConfigContext = React.createContext();

const pageToShow = (pageName) => {
  if (pageName === "Home") return <Home />;
  if (pageName === "Speakers") return <h1>Speakers</h1>;
  return <div>Not found</div>;
};

const configValue = {
  showSprakerSpeakingDays: true,
};

const App = ({ pageName }) => {
  return (
    <ConfigContext.Provider value={configValue}>
      <div>{pageToShow(pageName)}</div>
    </ConfigContext.Provider>
  );
};

export default App;
