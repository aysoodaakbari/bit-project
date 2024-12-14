import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./style.css";
import { routes } from "./routes/routes.config";
import { ReactQueryProvider } from "./lib/ReactQueryProvider";
const App: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isChecked) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }, [isChecked]);
  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  return (
    <><div>
      <label className="switch">
        <input
          id="toggle"
          type="checkbox"
          checked={isChecked}
          onChange={handleToggle} />
        <span className="slider"></span>
      </label>
      <div className="slide-block"></div>
    </div><ReactQueryProvider>
        <Router>
          <Routes>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </Router>
      </ReactQueryProvider></>
    
  );
};

export default App;
