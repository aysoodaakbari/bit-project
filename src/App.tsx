import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";
import { routes } from "./routes/routes.config";
import { ReactQueryProvider } from "./lib/ReactQueryProvider";
const App: React.FC = () => {
  return (
    <ReactQueryProvider>
      <Router>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
      </Router>
    </ReactQueryProvider>
    
  );
};

export default App;
