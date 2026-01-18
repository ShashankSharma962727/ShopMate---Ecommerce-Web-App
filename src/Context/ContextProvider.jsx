import { createContext, useState } from "react";

export const context = createContext(null);
const ContextProvider = (prop) => {
  const [isDark, setIsDark] = useState(false);
  return (
    <context.Provider value={{ isDark, setIsDark }}>
      {prop.children}
    </context.Provider>
  );
};

export default ContextProvider;
