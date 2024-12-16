import React, { useState, ReactNode, MouseEvent } from "react";

interface TabsProps {
  children: ReactNode;
  onTabChange?: (activeTab: string) => void; // اضافه کردن تابع برای تغییر تب
}

interface TabProps {
  label: string;
  children: ReactNode;
  text:string
}

const Tabs: React.FC<TabsProps> = ({ children, onTabChange }) => {
  const childArray = React.Children.toArray(children) as React.ReactElement<TabProps>[];
  const [activeTab, setActiveTab] = useState<string>(childArray[0].props.label);

  const handleClick = (e: MouseEvent<HTMLButtonElement>, newActiveTab: string) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
    if (onTabChange) onTabChange(newActiveTab); // اعلام تغییر تب به والد
  };

  return (
    <div className="mx-auto w-full text-text" dir="rtl">
      <div className="flex border-b border-gray-300">
        {childArray.map((child) => (
          <button
            key={child.props.label}
            className={`${
              activeTab === child.props.label ? "border-b-2 border-purple" : ""
            } flex-1 text-gray-700 font-medium py-2`}
            onClick={(e) => handleClick(e, child.props.label)}
          >
            {child.props.text}
          </button>
        ))}
      </div>
      <div className="">
        {childArray.map((child) => {
          if (child.props.label === activeTab) {
            return <div key={child.props.label}>{child.props.children}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

const Tab: React.FC<TabProps> = ({ label, children,text }) => {
  return (
    <div data-label={label} className="hidden">
      {children}
    </div>
  );
};

export { Tabs, Tab };