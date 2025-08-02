import { useState } from 'react';

export function Tabs({ defaultValue, children }) {
  const [activeTab, setActiveTab] = useState(defaultValue);
  return (
    <div>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { activeTab, setActiveTab })
      )}
    </div>
  );
}

export function TabsList({ children, className = "" }) {
  return <div className={`flex gap-2 ${className}`}>{children}</div>;
}

export function TabsTrigger({ value, children, activeTab, setActiveTab }) {
  const isActive = activeTab === value;
  return (
    <button
      onClick={() => setActiveTab(value)}
      className={`px-4 py-2 rounded ${isActive ? 'bg-green-700 text-white' : 'bg-gray-200'}`}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, activeTab, children }) {
  return activeTab === value ? <div>{children}</div> : null;
}