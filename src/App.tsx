import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ReactQueryProvider } from './lib/ReactQueryProvider';
import { routes } from './routes/routes.config';
import './style.css';
const App: React.FC = () => {
  const [isChecked, setIsChecked] = useState(true);
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
    <>
      <div className="flex flex-row w-full justify-center self-center justify-self-center bg-background py-4">
        <label className="inline-flex items-center me-5 cursor-pointer gap-x-4">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            checked={isChecked}
            onChange={handleToggle}
          />
          <span className='text-text'>تغییر تم </span>
          <div className="relative w-11 h-6 bg-disableBg rounded-full  dark:peer-focus:ring-purple peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray peer-checked:bg-purple"></div>
        </label>
      </div>
      <ReactQueryProvider>
        <Router>
          <Routes>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </Router>
      </ReactQueryProvider>
    </>
  );
};

export default App;
